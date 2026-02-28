import { useState } from "react";
import './PicCreate.css';

function PicCreate() {
  const [image, setImage] = useState(null);
  const [description, setDescription] = useState("");

  const submitPic = (e) => {
    e.preventDefault();

    if (!image || !description) {
      alert("Veuillez remplir tous les champs");
      return;
    }
  };

  return (
    <section className="creation-section">
      <div className="title">
        <h2 className="text-title">Créer un nouveau souvenir</h2>
      </div>

      <form onSubmit={submitPic}>
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

export default PicCreate;