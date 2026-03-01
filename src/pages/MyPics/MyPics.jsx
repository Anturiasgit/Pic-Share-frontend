import { useEffect, useState } from "react";
import picService from "../../services/picService";
import Card from "../../components/Card/Card";
import './MyPics.css'

function MyPics() {
  const [pics, setPics] = useState([]);

  useEffect(() => {
    picService.getAll().then(setPics);
  }, []);

  return (
    <div>
      <section className="mypicstitle-section">
         <div className="title">
        <h2 className="text-title">Mes souvenirs</h2>
        </div>
      </section>

      <section className="mypicscard-section">
      {pics.map(pic => (
          <Card id={pic.id} cover={pic.url} title={pic.title}/>
      ))}
      </section>
    
    </div>
  );
}

export default MyPics;
