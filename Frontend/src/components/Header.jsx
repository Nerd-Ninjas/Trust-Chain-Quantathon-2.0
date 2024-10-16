import { Button, Flex, Image, Link, useColorMode, useColorModeValue } from "@chakra-ui/react";
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
import "./css/Header.css"

const Header = () => {
  const { toggleColorMode } = useColorMode();
  const user = useRecoilValue(userAtom);
  const logout = useLogout();
  const setAuthScreen = useSetRecoilState(authScreenAtom);

  // Dynamically setting background color based on color mode
  const bg = useColorModeValue("#f7f7f7", "#2D3748"); 

  return (
    <Flex
      justifyContent="space-between"
      alignItems="center"
      mt={6}
      mb={12}
      px={4}
      py={3}
      bg={bg} // Background color controlled here
      boxShadow="0px 4px 6px rgba(0, 0, 0, 0.1)"
      borderRadius="8px"
      position="sticky"
      top={0}
      zIndex={10}
      className="header-container"
    >
      {user && (
        <Link as={RouterLink} to="/">
          <AiFillHome size={24} />
        </Link>
      )}
      {!user && (
        <Link as={RouterLink} to={"/auth"} onClick={() => setAuthScreen("login")}>
          Login
        </Link>
      )}

      <Image
        cursor="pointer"
        alt="logo"
        w={6}
        src={img}
        onClick={toggleColorMode}
      />

      {user && (
        <Flex alignItems="center" gap={4}>
          <Link as={RouterLink} to={`/${user.username}`}>
            <RxAvatar size={24} />
          </Link>
          <Link as={RouterLink} to={`/chat`}>
            <BsFillChatQuoteFill size={20} />
          </Link>
          <Link as={RouterLink} to={`/settings`}>
            <MdOutlineSettings size={20} />
          </Link>
          <Button size="xs" onClick={logout}>
            <FiLogOut size={20} />
          </Button>
        </Flex>
      )}

      {!user && (
        <Link as={RouterLink} to={"/auth"} onClick={() => setAuthScreen("signup")}>
          Sign up
        </Link>
      )}
    </Flex>
  );
};

export default Header;
