import { Button, useDisclosure } from "@chakra-ui/react";
import { LoginForm } from "./LoginForm";

export const Header = ({ isLoggedIn, setIsLoggedIn, setUser }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <header className="app-header">
      <img src="ion-logo.png" alt="ion group logo" width="80px" />
      {isLoggedIn ? (
        <Button onClick={() => setIsLoggedIn(false)} colorScheme="red" variant='outline'>
          Logout
        </Button>
      ) : (
        <Button colorScheme="teal" onClick={onOpen}>
          Login
        </Button>
      )}
      <LoginForm
        setIsLoggedIn={setIsLoggedIn}
        isFormOpen={isOpen}
        onFormClose={onClose}
        setUser={setUser}
      />
    </header>
  );
};
