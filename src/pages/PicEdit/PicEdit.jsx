import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import '../PicCreate/PicCreate.css';

function PicEdit() {
  const { id } = useParams();

  const [image, setImage] = useState(null);
  const [description, setDescription] = useState("");

  useEffect(() => {
    setDescription("Ancienne description");
  }, [id]);

  const editPic = (e) => {
    e.preventDefault();

    if (!description || !image) {
      alert("Veuillez remplir tous les champs");
      return;
    }
  };

  return (
    <section className="edition-section">
      <div className="title">
        <h2 className="text-title">
          Modifier mon souvenir
        </h2>
      </div>

     <form onSubmit={editPic}>
        <div className="image">
          <label>Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
          />
        </div>

        <div className="description">
          <label>Description</label>
          <textarea
            type="text"
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Décrivez votre souvenir
Exemple : lieu, anecdote..."
            maxLength={300}
            rows={8}
          />
        </div>

        <button type="submit">Publier</button>
      </form>
    </section>
  );
}

export default PicEdit;