import { useState, useEffect } from 'react';
import configData from './config';

const UseFetchTheatre = (url) => {
  const [theatre, setTheatre] = useState(null);
  useEffect(() => {
    const getData = async () => {
      const response = await configData('GET', url);
      setTheatre(response.data);
    };
    getData();
  }, [url]); 
  return theatre;
};
export default UseFetchTheatre
