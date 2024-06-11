import { useEffect, useState } from "react";

const useApartments = () => {
  const [apartments, setApartments] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://skyview-apartmets-server.vercel.app/apartments")
      .then((res) => res.json())
      .then((data) => {
        setApartments(data);
        setLoading(false);
      });
  }, []);

  return [apartments, loading];
};

export default useApartments;
