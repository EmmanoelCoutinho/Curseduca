import axios from 'axios';

export function Login(email: string, password: string) {
  return axios.post('/api/login', {
    email,
    password,
  });
}
