import { useEffect, useState } from "react";

const useApartments = () => {
  const [apartments, setApartments] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("apartments.json")
      .then((res) => res.json())
      .then((data) => {
        setApartments(data);
        setLoading(false);
      });
  }, []);

  return [apartments, loading];
};

export default useApartments;
