import { useState } from "react";
import {
  Button,
  Spinner,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Input,
  ModalFooter,
  Text,
} from "@chakra-ui/react";
import { loginService } from "../services";

export const LoginForm = ({
  setIsLoggedIn,
  isFormOpen,
  onFormClose,
  setUser,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  // match(/[\^\,\.\\\/]/g);
  const isUserNameNotValid = userName.match(/[\^,.\\/]/g);
  const isPasswordNotValid = password.match(/[\^,.\\/]/g);

  const getUserLogin = async () => {
    setIsLoading(true);
    const loginResult = await loginService({
      name: userName,
      password: password,
    });
    if (loginResult.success) {
      setIsLoggedIn(true);
      setIsLoading(false);
      setUser(userName);
      resetFormState();
    } else {
      setError(loginResult.errorMessage);
      setIsLoading(false);
    }
  };

  const resetFormState = () => {
    setUserName("");
    setPassword("");
    setError(null);
    onFormClose();
  };

  const onEnterKey = (e) => {
    if (e.key === "Enter") {
      getUserLogin();
    }
  };

  return (
    <>
      <Modal isOpen={isFormOpen} onClose={resetFormState}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <Text fontSize="lg" color="black">
              Login
            </Text>
          </ModalHeader>
          <ModalCloseButton color="#000" />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>
                <Text fontSize="sm" color="gray.600">
                  Username
                </Text>
              </FormLabel>
              <Input
                color="black"
                placeholder="username"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
              {isUserNameNotValid ? (
                <Text fontSize="xs" color="tomato">
                  Invalid character in username
                </Text>
              ) : null}
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>
                <Text fontSize="sm" color="gray.600">
                  Password
                </Text>
              </FormLabel>
              <Input
                color="black"
                placeholder="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onKeyUp={onEnterKey}
              />
              {isPasswordNotValid ? (
                <Text fontSize="xs" color="tomato">
                  Invalid character in password
                </Text>
              ) : null}
            </FormControl>
            {error ? (
              <Text fontSize="xs" color="tomato">
                {error}
              </Text>
            ) : null}
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="teal"
              mr={3}
              onClick={getUserLogin}
              disabled={
                isUserNameNotValid ||
                isPasswordNotValid ||
                !userName ||
                !password
              }
            >
              {isLoading ? <Spinner /> : <p>Login</p>}
            </Button>
            <Button
              colorScheme="teal"
              variant="outline"
              onClick={resetFormState}
              disabled={isLoading}
            >
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
