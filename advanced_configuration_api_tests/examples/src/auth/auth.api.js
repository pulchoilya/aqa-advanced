import { client } from '../http/axiosClient.js';

export async function signupAndCaptureSid(payload) {
  // /auth/signup повертає 201 і автентифікує користувача (кукі sid)
  const res = await client.post('/auth/signup', payload);
  return res;
}
