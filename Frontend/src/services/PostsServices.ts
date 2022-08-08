import axios from 'axios';

const url = 'http://localhost:3333/posts';

interface IPostProps {
  title: string;
  content: string;
  authorId: number;
}

const headers = {
  headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
};

export const getPosts = async () => {
  const response = await axios.get(`${url}/get-all`, headers);
  return response.data;
};

export const sendPost = async ({ title, content, authorId }: IPostProps) => {
  const data = { title, content, authorId };

  try {
    const response = await axios.post(`${url}/new`, data, headers);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const updatePost = async (id: number, content: string) => {
  try {
    const response = await axios.put(`${url}/update/${id}`, content, headers);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const deletePost = async (id: number) => {
  try {
    const response = await axios.delete(`${url}/delete/${id}`, headers);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};
