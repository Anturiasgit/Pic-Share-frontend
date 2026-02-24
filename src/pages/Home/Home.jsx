import { useEffect, useState } from "react";
import picService from "../../services/picService";
import Card from "../../components/Card/Card";
import './Home.css'

function Home() {
  const [pics, setPics] = useState([]);

  useEffect(() => {
    picService.getAll().then(setPics);
  }, []);

  return (
    <div>
      <section className="all-section">
        <div className="title">
        <h2 className="text-title">Nos derniers souvenirs</h2>
        </div>
      </section>

      <section className="pics-section">
      {pics.map(pic => (
          <Card id={pic.id} cover={pic.url} title={pic.title}/>
      ))}
      </section>
    
    </div>
  );
}

export default Home;
