import { useEffect, useState } from "react";
import picService from "../../services/picService";
import Card from "../../components/Card/Card";

function Home() {
  const [pics, setPics] = useState([]);

  useEffect(() => {
    picService.getAll().then(setPics);
  }, []);

  return (
    <div>
      <h1>Tous les souvenirs</h1>

      {pics.map(pic => (
          <Card id={pic.id} cover={pic.url} title={pic.title}/>
      ))}
    </div>
  );
}

export default Home;
