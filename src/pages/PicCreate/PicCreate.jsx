import { useState } from "react";

function PicCreate() {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !image) {
      alert("Veuillez remplir tous les champs");
      return;
    }

  };

  return (
    <div className="pic-create">
      <h1>Créer un souvenir</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Titre :</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Nom du souvenir"
          />
        </div>

        <div>
          <label>Image :</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
          />
        </div>

        <button type="submit">Publier</button>
      </form>
    </div>
  );
}

export default PicCreate;