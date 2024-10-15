import Post from "../models/postModel.js";
import User from "../models/userModel.js";
import { v2 as cloudinary } from "cloudinary";


const createPost = async (req, res) => {
	try {
	  const { postedBy, text } = req.body;
	  let { img } = req.body;
  
	  // Validate postedBy and text
	  if (!postedBy || !text) {
		return res.status(400).json({ error: "PostedBy and text fields are required" });
	  }
  
	  // Check if the user exists
	  const user = await User.findById(postedBy);
	  if (!user) {
		return res.status(404).json({ error: "User not found" });
	  }
  
	  // Check if the current user is authorized to create the post
	  if (user._id.toString() !== req.user._id.toString()) {
		return res.status(401).json({ error: "Unauthorized to create post" });
	  }
  
	  // Validate the length of the text
	  const maxLength = 500;
	  if (text.length > maxLength) {
		return res.status(400).json({ error: `Text must be less than ${maxLength} characters` });
	  }
  
	  // Upload image to Cloudinary if provided
	  if (img) {
		try {
		  const uploadedResponse = await cloudinary.uploader.upload(img);
		  img = uploadedResponse.secure_url;
		} catch (uploadError) {
		  return res.status(500).json({ error: "Image upload failed" });
		}
	  }
  
	  // Create a new post
	  const newPost = new Post({ postedBy, text, img });
	  await newPost.save();
  
	  res.status(201).json(newPost);
	} catch (err) {
	  res.status(500).json({ error: "Server error, unable to create post" });
	  console.error(err);
	}
  };

  
const deletePost = async (req, res) => {
	try {
		const post = await Post.findById(req.params.id);
		if (!post) {
			return res.status(404).json({ error: "Post not found" });
		}

		if (post.postedBy.toString() !== req.user._id.toString()) {
			return res.status(401).json({ error: "Unauthorized to delete post" });
		}

		if (post.img) {
			const imgId = post.img.split("/").pop().split(".")[0];
			await cloudinary.uploader.destroy(imgId);
		}

		await Post.findByIdAndDelete(req.params.id);

		res.status(200).json({ message: "Post deleted successfully" });
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
};
const getPost = async (req, res) => {
	try {
		const post = await Post.findById(req.params.id);

		if (!post) {
			return res.status(404).json({ error: "Post not found" });
		}

		res.status(200).json(post);
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
};

export { createPost, deletePost,getPost };
