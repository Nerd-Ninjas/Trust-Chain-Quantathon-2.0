import { useEffect, useState } from "react";
import UserHeader from "../components/UserHeader";
import { useParams } from "react-router-dom";
import useShowToast from "../hooks/useShowToast";
import { Flex, Spinner, Box, Container } from "@chakra-ui/react";
import Post from "../components/Post";
import useGetUserProfile from "../hooks/useGetUserProfile";
import { useRecoilState } from "recoil";
import postsAtom from "../atoms/postsAtom";

const UserPage = () => {
    const { user, loading } = useGetUserProfile();
    const { username } = useParams();
    const showToast = useShowToast();
    const [posts, setPosts] = useRecoilState(postsAtom);
    const [fetchingPosts, setFetchingPosts] = useState(true);

    useEffect(() => {
        const getPosts = async () => {
            if (!user) return;
            setFetchingPosts(true);
            try {
                const res = await fetch(`/api/posts/user/${username}`);
                const data = await res.json();
                console.log(data);
                setPosts(data);
            } catch (error) {
                showToast("Error", error.message, "error");
                setPosts([]);
            } finally {
                setFetchingPosts(false);
            }
        };

        getPosts();
    }, [username, showToast, setPosts, user]);

    if (!user && loading) {
        return (
            <Flex justifyContent={"center"}>
                <Spinner size={"xxl"} />
            </Flex>
        );
    }

    if (!user && !loading) return <h1>User not found</h1>;

    return (
<Box bg={"gray.200"} minHeight={"100vh"} w="100%" maxW="1200px" mx="auto">
<Container maxW={"container.xl"} p={4}>
                {/* User Header */}
                <UserHeader user={user} />

                {/* No posts message */}
                {!fetchingPosts && posts.length === 0 && <h1>User has no posts.</h1>}

                {/* Loading spinner */}
                {fetchingPosts && (
                    <Flex justifyContent={"center"} my={19}>
                        <Spinner size={"xxl"} />
                    </Flex>
                )}

                {/* Posts List */}
                {posts.map((post) => (
                    <Post key={post._id} post={post} postedBy={post.postedBy} />
                ))}
            </Container>
        </Box>
    );
};

export default UserPage;
