import "./style.css";
import axios from 'axios';
import { useState } from "react";
import { NavigatorBar } from "../../components/components";
import { useNavigate } from "react-router-dom";

function Login_Cliente() {

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();
  
    const handleLogin = async (e) => {
        e.preventDefault(); 
      
        try {
            const response = await axios.post("http://localhost:3000/login", {
                email,
                senha,
            });
      
            console.log("Login bem-sucedido:", response.data);
            setError(""); // Limpa a mensagem de erro em caso de sucesso
            
            const token = response.data.token; // jwb token

            // Armazenar o token no localStorage
            localStorage.setItem("token", token);

            navigate("/Cardapio"); // Redireciona para a rota /MinhaConta_Dados
            } catch (err) {
            console.error("Erro ao fazer login:", err.response?.data || err.message);
            setError(err.response?.data?.message || "Email ou senha inválidos"); // Define a mensagem de erro
            }

    };

    return (
        <div >
            <header className="header"></header>
            <div className="PlanoFundo">
                <NavigatorBar />
                <div className="box-box">
                    <div className="titulo-box">
                        <h2>Bem-vindo de volta!</h2>
                    </div>
                    <div className="formulario" onSubmit={handleLogin}>
                        <div className="placeHol-login">
                            <div className="placeHol-texto">
                                <h3>Email</h3>
                            </div>

                            <input type="text" 
                            placeholder="" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}/>
                        </div>
                        <div className="placeHol-login">
                            <div className="placeHol-texto">
                                <h3>Senha</h3>
                            </div>
                            <input type="password" 
                            placeholder=""
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)} />
                        </div>
                        <div className="esqueciSenha">
                            <p>Esqueci a senha</p>
                        </div>
                        {error && (
                            <div className="mensagem-erro">
                                <p style={{ color: "red", fontSize: "14px", marginTop: "8px" }}>
                                    {error}
                                </p>
                            </div>
                        )}
                        <form className="formulario" onSubmit={handleLogin}>
                            <button type="submit">Entrar</button>
                        </form>
                        <div className="linha-separador"></div>
                        <div className="textoNormal">
                            <h2>Não tem uma conta?</h2>
                        </div>
                        <div className="textoNormal" id="negrito">
                            <a href="/MinhaConta">
                                <h2>Inscreva-se</h2>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login_Cliente;