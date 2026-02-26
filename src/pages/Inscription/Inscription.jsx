import { useState } from "react";
import './Inscription.css'

function Inscription () {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [pseudo, setPseudo] = useState("");
    
        const handleSignIn = async (e) => {
            e.preventDefault(); // empêche le rechargement
    
            const response = await fetch("http://localhost:8080/api/signin", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email,
                    password,
                    pseudo,
                }),
            });
    
            const data = await response.json();
            console.log(data);
        };

        return(
            <section className="inscription-section">
                  <form onSubmit={handleSignIn}>
                <input 
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <input 
                    type="password"
                    placeholder="Mot de passe"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                 <input 
                    type="text"
                    placeholder="Choisissez un pseudo"
                    value={pseudo}
                    onChange={(e) => setPseudo(e.target.value)}
                />

                <button type="submit">S'inscrire</button>
            </form>
            </section>
        );
}


export default Inscription;