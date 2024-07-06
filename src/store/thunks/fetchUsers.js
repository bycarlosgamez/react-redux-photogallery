import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const fetchUsers = createAsyncThunk('users/fetch', async () => {
  const res = await axios.get('http://localhost:3000/users');

  // DEV TEST
  await pause(3000);

  return res.data;
});

// DEV TEST
const pause = (duration) => {
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
};

export { fetchUsers };
