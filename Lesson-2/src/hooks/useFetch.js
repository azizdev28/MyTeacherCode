import { useEffect, useState } from 'react';

const useFetch = (url) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const resData = await response.json();
      setData(resData);
    } catch (err) {
      setError({ message: 'Serverdan xatolik' });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { loading, data, error };
};

export default useFetch;
