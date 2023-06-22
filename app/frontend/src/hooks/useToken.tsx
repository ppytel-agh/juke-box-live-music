import { useState } from 'react';

export default function useToken() {
  const getToken = () => {
    const tokenString = sessionStorage.getItem('token');
    return tokenString
  };
  const [token, setToken] = useState(getToken());

  const saveToken = (userToken: any) => {
    sessionStorage.setItem('token', JSON.stringify(userToken));
    setToken(userToken.token);
  };

  const deleteToken = () => {
    sessionStorage.removeItem('token')
    setToken(null)
  }

  return {
    setToken: saveToken,
    token,
    getToken,
    deleteToken
  }
}