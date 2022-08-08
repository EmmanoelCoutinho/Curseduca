import axios from 'axios';

const url = 'http://localhost:3333';

export const getCurrentUser = async () => {
  const user = await axios.get(`${url}/me`, {
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
  });
  const data = { ...user.data, email: null };
  return data;
};

export const userRegister = async (
  name: string,
  email: string,
  password: string
) => {
  try {
    const response = await axios.post(`${url}/register`, {
      name,
      email,
      password,
    });
    console.log(response.data);
  } catch (err) {
    console.log(err);
  }
};

export async function userLogin(email: string, password: string) {
  try {
    const userToken = await axios.post(`${url}/login`, {
      email,
      password,
    });
    localStorage.setItem('token', userToken.data.access_token);
  } catch (err) {
    console.log(err);
  }
}

export function userLogout() {
  localStorage.removeItem('token');
}
