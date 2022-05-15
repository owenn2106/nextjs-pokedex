import { useEffect, useState } from "react";

const DetailPage = ({ apiLink }) => {
  const [stats, setStats] = useState([]);

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = () => {
    fetch(apiLink)
      .then((res) => res.json())
      .then((data) => {
        setStats(data.stats);
      });
  };

  return <div>DetailPage</div>;
};

export default DetailPage;
