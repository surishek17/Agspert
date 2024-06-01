import React from 'react';
import { useForm } from 'react-hook-form';
import { Box, Button, Input, VStack, FormControl, FormLabel } from '@chakra-ui/react';
import useAuth from '../hooks/useAuth';

const Login = () => {
  const { register, handleSubmit } = useForm();
  const { login } = useAuth();

  const onSubmit = (data) => {
    login(data.username, data.password);
  };

  return (
    <Box maxW="sm" mx="auto" mt={10}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <VStack spacing={4}>
          <FormControl id="username">
            <FormLabel>Username</FormLabel>
            <Input
              type="text"
              {...register('username')}
              autoComplete="username"
            />
          </FormControl>
          <FormControl id="password">
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              {...register('password')}
              autoComplete="current-password"
            />
          </FormControl>
          <Button type="submit" colorScheme="blue">Login</Button>
        </VStack>
      </form>
    </Box>
  );
};

export default Login;

