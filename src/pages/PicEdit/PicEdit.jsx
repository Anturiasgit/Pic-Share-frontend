import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function PicEdit() {
  const { id } = useParams();

  const [title, setTitle] = useState("");
  const [image, setImage] = useState(null);

  useEffect(() => {
    setTitle("Ancien titre");
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title) {
      alert("Le titre est obligatoire");
      return;
    }
  };

  return (
    <div className="pic-edit">
      <h1>Modifier le souvenir</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Titre :</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div>
          <label>Nouvelle image (optionnel) :</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
          />
        </div>

        <button type="submit">Mettre à jour</button>
      </form>
    </div>
  );
}

export default PicEdit;