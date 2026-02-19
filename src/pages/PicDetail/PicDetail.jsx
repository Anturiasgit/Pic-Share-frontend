import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import picService from "../services/picService";

function PicDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [pic, setPic] = useState(null);

  useEffect(() => {
    picService.getById(id).then(setPic);
  }, [id]);

  const handleDelete = () => {
    picService.delete(id).then(() => navigate("/"));
  };

  if (!pic) return <p>Chargement...</p>;

  return (
    <div>
      <img src={pic.url} width="400" />
      <h2>{pic.title}</h2>
      <p>{pic.description}</p>

      <button onClick={() => navigate(`/pics/edit/${id}`)}>
        Modifier
      </button>

      <button onClick={handleDelete}>
        Supprimer
      </button>
    </div>
  );
}

export default PicDetail;
