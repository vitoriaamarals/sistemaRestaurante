import "./style.css";
import { NavigatorBar } from "../../components/components";
import { IMaskInput } from "react-imask";
import iconAlterar from "../../assets/icons/alterarIcon.png";


function MinhaContaDados() {
    return (
        <div >
            <NavigatorBar />
            <div className="formulario-conta-dados">
                <div className="gridConta-criar-excluir">
                    <div className="titulo-CriarConta">
                        <h1>Dados da conta</h1>
                    </div>
                    <div id="excluirConta">
                        <p>Excluir Conta
                        </p>
                    </div>
                </div>

                <div className="placeHol">
                    <div className="placeHol-partes-dados">
                        <div className="placeHol-texto" id="pla-tex-alterar">
                            <h3>Nome completo*</h3>
                            <div id="botao-alterar">
                                <h3>Alterar Nome</h3>
                            </div>
                            <div id="iconAterar">
                                <img src={iconAlterar} alt="iconAlterar" width={25} height={25} />
                            </div>
                        </div>
                        <input type="text" placeholder="" />
                    </div>
                    <div className="placeHol-partes-dados">
                        <div className="placeHol-texto" id="pla-tex-alterar">
                            <h3>CPF*</h3>
                            <div id="botao-alterar">
                                <h3>Alterar CPF</h3>
                            </div>
                            <div id="iconAterar">
                                <img src={iconAlterar} alt="iconAlterar" width={25} height={25} />
                            </div>
                        </div>
                        <IMaskInput
                            mask="000.000.000-00"
                            placeholder=""
                        />
                    </div>
                    <div className="placeHol-partes-dados">
                        <div className="placeHol-texto" id="pla-tex-alterar">
                            <h3>Telefone*</h3>
                            <div id="botao-alterar">
                                <h3>Alterar Telefone</h3>
                            </div>
                            <div id="iconAterar">
                                <img src={iconAlterar} alt="iconAlterar" width={25} height={25} />
                            </div>
                        </div>
                        <IMaskInput
                            mask="(00) 0 0000-000"
                            placeholder=""
                        />
                    </div>
                    <div className="placeHol-partes-dados">
                        <div className="placeHol-texto" id="pla-tex-alterar">
                            <h3>Email*</h3>
                            <div id="botao-alterar">
                                <h3>Alterar Email</h3>
                            </div>
                            <div id="iconAterar">
                                <img src={iconAlterar} alt="iconAlterar" width={25} height={25} />
                            </div>
                        </div>
                        <input type="text" placeholder="" />
                    </div>
                    <div className="placeHol-partes-dados">
                        <div className="placeHol-texto" id="pla-tex-alterar">
                            <h3>Senha*</h3>
                            <div id="botao-alterar">
                                <h3>Alterar Senha</h3>
                            </div>
                            <div id="iconAterar">
                                <img src={iconAlterar} alt="iconAlterar" width={25} height={25} />
                            </div>
                        </div>
                        <input type="text" placeholder="" />
                    </div>
                </div>
                <div id="link-historico">
                    <p>Visualizar histórico de pedidos</p>
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