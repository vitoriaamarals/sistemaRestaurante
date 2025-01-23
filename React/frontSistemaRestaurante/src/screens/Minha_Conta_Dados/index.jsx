import "./style.css";
import { NavigatorBar } from "../../components/components";
import { IMaskInput } from "react-imask";


function MinhaContaDados() {
    return (
        <div >
            <NavigatorBar />
            <div className="formulario-conta">
                <div className="titulo-CriarConta">
                    <h1>Dados da conta</h1>
                </div>
                <div className="placeHol">
                    <div className="placeHol-partes">
                        <div className="placeHol-texto">
                            <h3>Nome completo*</h3>
                        </div>
                        <input type="text" placeholder="" />
                    </div>
                    <div className="placeHol-partes">
                        <div className="placeHol-texto">
                            <h3>CPF*</h3>
                        </div>
                        <IMaskInput
                            mask="000.000.000-00"
                            placeholder=""
                        />
                    </div>
                    <div className="placeHol-partes">
                        <div className="placeHol-texto">
                            <h3>Telefone*</h3>
                        </div>
                        <IMaskInput
                            mask="(00) 0 0000-000"
                            placeholder=""
                        />
                    </div>
                    <div className="placeHol-partes">
                        <div className="placeHol-texto">
                            <h3>Email*</h3>
                        </div>
                        <input type="text" placeholder="" />
                    </div>
                    <div className="placeHol-partes">
                        <div className="placeHol-texto">
                            <h3>Senha*</h3>
                        </div>
                        <input type="text" placeholder="" />
                    </div>
                </div>
            </div>
            <div className="botao-pronto">
                <button>Pronto</button>
            </div>
            <footer></footer>
        </div>
    );
}

export default MinhaContaDados;