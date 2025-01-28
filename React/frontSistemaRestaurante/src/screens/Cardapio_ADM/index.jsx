import "./style.css";
import { NavigatorBar } from "../../components/components";
import { Link } from "react-router-dom";


function Cardapio_ADM() {
    return (
        <div>
            <NavigatorBar />
            <div className="cardapio-container">
                <h1 id="titulo-cardapio">Cardápio</h1>
                {/* Seção de Carnes */}
                <section className="cardapio-section">
                    <div>
                        <h2>CARNES</h2>
                        <Link to="/editar-carnes" className="cardapio-button">Editar Carnes</Link> {/* Botão */}
                    </div>
                    <div className="cardapio-content">
                        <div className="cardapio-list">
                            <div className="cardapio-item">
                                <h3>PICANHA</h3>
                            </div>
                            <div className="cardapio-item">
                                <h3>FRALDINHA</h3>
                            </div>
                            <div className="cardapio-item">
                                <h3>CONTRA-FILÉ</h3>
                            </div>
                            <div className="cardapio-item">
                                <h3>ALCATRA</h3>
                            </div>
                            <div className="cardapio-item">
                                <h3>MAMINHA</h3>
                            </div>
                            <div className="cardapio-item">
                                <h3>COSTELÃO</h3>
                            </div>
                            <div className="cardapio-item">
                                <h3>CUPIM</h3>
                            </div>
                            <div className="cardapio-item">
                                <h3>LOMBO DE PORCO</h3>
                            </div>
                            <div className="cardapio-item">
                                <h3>PICANHA SUÍNA</h3>
                            </div>
                            <div className="cardapio-item">
                                <h3>BARRIGUINHA</h3>
                            </div>
                            <div className="cardapio-item">
                                <h3>FRANGO DESSOSSADO</h3>
                            </div>
                            <div className="cardapio-item">
                                <h3>MEDALHÃO DE FRANGO</h3>
                            </div>
                            <div className="cardapio-item">
                                <h3>CORAÇÃO DE FRANGO</h3>
                            </div>
                            <div className="cardapio-item">
                                <h3>ASINHA DE FRANGO</h3>
                            </div>
                            <div className="cardapio-item">
                                <h3>LINGUIÇA TOSCANA</h3>
                            </div>
                            <div className="cardapio-item">
                                <h3>QUEIJO PROVOLONE</h3>
                            </div>
                        </div>
                        <div className="cardapio-images">
                            <img src="../../src/assets/img/carne1.png" alt="Picanha na Brasa" />
                            <img src="../../src/assets/img/carne2.png" alt="Costela Assada" />
                        </div>
                    </div>
                </section>

                {/* Seção de Acompanhamentos */}
                <section className="cardapio-section">
                    <div>
                        <h2>ACOMPANHAMENTOS</h2>
                        <Link to="/editar-acompanhamentos" className="cardapio-button">Editar Acompanhamentos</Link> {/* Botão */}
                    </div>
                    <div className="cardapio-content">
                        <div className="cardapio-list">
                            <div className="cardapio-item">
                                <h3>ARROZ BRANCO</h3>
                            </div>
                            <div className="cardapio-item">
                                <h3>ARROZ INTEGRAL</h3>
                            </div>
                            <div className="cardapio-item">
                                <h3>FEIJÃO DE CALDO</h3>
                            </div>
                            <div className="cardapio-item">
                                <h3>FEIJÃO TROPEIRO</h3>
                            </div>
                            <div className="cardapio-item">
                                <h3>FEIJOADA</h3>
                            </div>
                            <div className="cardapio-item">
                                <h3>MACARRÃO ALHO E ÓLEO</h3>
                            </div>
                            <div className="cardapio-item">
                                <h3>ABÓBORA MORANGA</h3>
                            </div>
                            <div className="cardapio-item">
                                <h3>CHUCHU REFOGADO</h3>
                            </div>
                            <div className="cardapio-item">
                                <h3>BATATA FRITA</h3>
                            </div>
                            <div className="cardapio-item">
                                <h3>BANANA FRITA</h3>
                            </div>
                        </div>
                        <div className="cardapio-images">
                            <img src="../../src/assets/img/acompanhamento1.png" alt="Arroz à Grega" />
                            <img src="../../src/assets/img/acompanhamento2.png" alt="Batata Frita" />
                        </div>
                    </div>
                </section>

                {/* Seção de Saladas */}
                <section className="cardapio-section">
                    <div>
                        <h2>SALADAS</h2>
                        <Link to="/editar-saladas" className="cardapio-button">Editar Saladas</Link> {/* Botão */}
                    </div>
                    <div className="cardapio-content">
                        <div className="cardapio-list">
                            <div className="cardapio-item">
                                <h3>ALFACE</h3>
                            </div>
                            <div className="cardapio-item">
                                <h3>TOMATE</h3>
                            </div>
                            <div className="cardapio-item">
                                <h3>BETERRABA</h3>
                            </div>
                            <div className="cardapio-item">
                                <h3>CENOURA</h3>
                            </div>
                            <div className="cardapio-item">
                                <h3>COUVE REFOGADA</h3>
                            </div>
                            <div className="cardapio-item">
                                <h3>BRÓCOLIS</h3>
                            </div>
                            <div className="cardapio-item">
                                <h3>COUVE-FLOR</h3>
                            </div>
                            <div className="cardapio-item">
                                <h3>PIMENTÃO REFOGADO</h3>
                            </div>
                            <div className="cardapio-item">
                                <h3>BERINJELA REFOGADA</h3>
                            </div>
                            <div className="cardapio-item">
                                <h3>ALHO-PORÓ</h3>
                            </div>
                        </div>
                        <div className="cardapio-images">
                            <img src="../../src/assets/img/salada1.png" alt="Coxinha" />
                            <img src="../../src/assets/img/salada2.png" alt="Esfiha" />
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Cardapio_ADM;
