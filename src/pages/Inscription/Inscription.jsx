import { useState } from "react";
import './Inscription.css'

function Inscription () {
    const [email, setEmail] = useState("");
    const [password1, setPassword1] = useState("");
    const [password2, setPassword2] = useState("");
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
                <div className="inscription-title">
                    <h2 className="title">Inscription</h2>
                </div>

                  <form onSubmit={handleSignIn}>
                 <label htmlFor="email">Entrez votre email</label>       
                <input 
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <label htmlFor="password1">Créez un mot de passe</label>
                <input 
                    type="password"
                    placeholder="Mot de passe"
                    value={password1}
                    onChange={(e) => setPassword1(e.target.value)}
                />

                <label htmlFor="password2">Ressaisissez votre mot de passe</label>
                <input 
                    type="password"
                    placeholder="Ressaisissez le mot de passe"
                    value={password2}
                    onChange={(e) => setPassword2(e.target.value)}
                />

                 <label htmlFor="pseudo">Choisissez un pseudo</label>   
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