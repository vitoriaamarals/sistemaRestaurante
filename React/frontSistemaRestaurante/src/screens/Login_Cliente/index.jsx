import "./style.css";
import { NavigatorBar } from "../../components/components";

function Login_Cliente() {
    return (
        <div >
            <header className="header"></header>
            <div className="PlanoFundo">
                <NavigatorBar />
                <div className="box-box">
                    <div className="titulo-box">
                        <h2>Bem-vindo de volta!</h2>
                    </div>
                    <div className="formulario">
                        <div className="placeHol">
                            <div className="placeHol-texto">
                                <h3>Email</h3>
                            </div>

                            <input type="text" placeholder="" />
                        </div>
                        <div className="placeHol">
                            <div className="placeHol-texto">
                                <h3>Senha</h3>
                            </div>

                            <input type="password" placeholder="" />
                        </div>
                        <div className="esqueciSenha">
                            <p>Esqueci a senha</p>
                        </div>
                        <button>Entrar</button>
                        <div className="linha-separador"></div>
                        <div className="textoNormal">
                            <h2>Não tem uma conta?</h2>
                        </div>
                        <div className="textoNormal" id="negrito">
                            <h2>Inscreva-se</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login_Cliente;