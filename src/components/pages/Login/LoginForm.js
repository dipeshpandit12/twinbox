import { Formik, Field } from "formik";
import {
  Box,
  Button,
  // Checkbox,
  Flex,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  VStack
} from "@chakra-ui/react";
import { ChakraProvider } from '@chakra-ui/react'
import { Link } from "react-router-dom";
export default function LoginForm() {
  return (
    <ChakraProvider>
      <h1 className="primary-color">Make maximum use of unlimited Storage </h1>
      <h3 className="tertiary-color">Welcome  back! Please login to your account.</h3>
    <Flex h="auto">
      <Box rounded="md" w="350px">
        <Formik
          initialValues={{
            email: "",
            password: "",
            rememberMe: false
          }}
          onSubmit={(values) => {
            alert(JSON.stringify(values, null, 2));
          }}
        >
          {({ handleSubmit, errors, touched }) => (
            <form onSubmit={handleSubmit}>
              <VStack spacing={4} align="flex-start">
                <FormControl isInvalid={!!errors.email && touched.email}>
                  <FormLabel htmlFor="email">Email Address</FormLabel>
                  <Field
                  color="#3751FE"
                    as={Input}
                    id="email"
                    name="email"
                    type="email"
                    variant="filled"
                    validate={(value) => {
                      let error;
                      if (value.length <2) {
                        error = "Please enter email address";
                      }

                      return error;
                    }}
                  />
                  <FormErrorMessage>{errors.email}</FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={!!errors.password && touched.password}>
                  <FormLabel htmlFor="password">Password</FormLabel>
                  <Field
                    color="#3751FE"
                    as={Input}
                    id="password"
                    name="password"
                    type="password"
                    variant="filled"
                    validate={(value) => {
                      let error;

                      if (value.length < 6) {
                        error = "Password must contain at least 6 characters";
                      }

                      return error;
                    }}
                  />
                  <FormErrorMessage>{errors.password}</FormErrorMessage>
                </FormControl>
                {/* <Field
                  as={Checkbox}
                  id="rememberMe"
                  name="rememberMe"
                  color="#3751FE"
                >
                  Remember me?
                </Field> */}
                <Button type="submit" bg="#3751FE" color="white" width="full">
                  Login
                </Button>
                <FormLabel className="tertiary-color">OR</FormLabel>
                <Flex>
                  <Link className='button button-secondary' target='/blank' to='/'>
                    Google
                  </Link>
                  <Link className='button button-secondary' target='/blank' to='/'>
                    Facebook
                  </Link>
                  <Link className='button button-secondary' target='/blank' to='/'>
                    Github
                  </Link>
                </Flex>
              </VStack>
            </form>
          )}
        </Formik>
      </Box>
    </Flex>
    </ChakraProvider>
  );
}