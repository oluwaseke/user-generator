import { Box, Heading, Spinner, Stack } from '@chakra-ui/react';

import React from 'react';
import axios from 'axios';

export default function Users() {
  const [post, setPost] = React.useState({
    users: [],
    isLoading: true,
    errors: null,
  });
  const noOfResults = 5;
  const baseURL = 'https://randomuser.me/api/?results=' + noOfResults;

  React.useEffect(() => {
    axios
      .get(baseURL)
      .then(response =>
        response.data.results.map(user => ({
          name: `${user.name.first} ${user.name.last}`,
          username: `${user.login.username}`,
          email: `${user.email}`,
          image: `${user.picture.thumbnail}`,
        }))
      )
      .then(users => {
        setPost({
          users,
          isLoading: false,
        });
      })
      .catch(error => setPost({ error, isLoading: false }));
  }, []);

  if (!post) return null;
  return (
    <React.Fragment>
      <Heading as="h2" p={4}>
        Users
      </Heading>
      <Box p={6}>
        {!post.isLoading ? (
          post.users.map(user => {
            const { username, name, email, image } = user;
            return (
              <Stack spacing={10}>
                <Box borderWidth={1} key={username}>
                  <p>{name}</p>
                  <Box>
                    <img src={image} alt={name} />
                  </Box>
                  <p>{email}</p>
                </Box>
              </Stack>
            );
          })
        ) : (
          <Spinner label="Loading" />
        )}
      </Box>
    </React.Fragment>
  );
}
