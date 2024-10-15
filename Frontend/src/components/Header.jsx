/* eslint-disable no-unused-vars */
import React from 'react';
import { Button, Image, Link, Flex } from "@chakra-ui/react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import userAtom from "../atoms/userAtom";
import { AiFillHome } from "react-icons/ai";
import { RxAvatar } from "react-icons/rx";
import { Link as RouterLink } from "react-router-dom";
import { FiLogOut } from "react-icons/fi";
import useLogout from "../hooks/useLogout";
import authScreenAtom from "../atoms/authAtom";
import { BsFillChatQuoteFill } from "react-icons/bs";
import { MdOutlineSettings } from "react-icons/md";
import img from "../assets/NERD_NINJAS.png";
import './css/Header.css'; // Import CSS file

const Header = () => {
  const user = useRecoilValue(userAtom);
  const logout = useLogout();
  const setAuthScreen = useSetRecoilState(authScreenAtom);

  return (
    <Flex className="header-container">
      {user && (
        <Link as={RouterLink} to="/">
          <AiFillHome className="icon" />
        </Link>
      )}
      {!user && (
        <Link
          className="header-link"
          as={RouterLink}
          to="/auth"
          onClick={() => setAuthScreen("login")}
        >
          Login
        </Link>
      )}

      <Image
        className="header-logo"
        alt="logo"
        src={img}
        onClick={() => {
          /* toggle theme color functionality */
        }}
      />

      {user && (
        <Flex className="header-buttons">
          <Link as={RouterLink} to={`/${user.username}`}>
            <RxAvatar className="icon" />
          </Link>
          <Link as={RouterLink} to="/chat">
            <BsFillChatQuoteFill className="icon" />
          </Link>
          <Link as={RouterLink} to="/settings">
            <MdOutlineSettings className="icon" />
          </Link>
          <Button className="logout-button" onClick={logout}>
            <FiLogOut className="icon" />
          </Button>
        </Flex>
      )}

      {!user && (
        <Link
          className="header-link"
          as={RouterLink}
          to="/auth"
          onClick={() => setAuthScreen("signup")}
        >
          Sign up
        </Link>
      )}
    </Flex>
  );
};

export default Header;
