import "./style.css";
import { NavigatorBar } from "../../components/components";
import { IMaskInput } from "react-imask";
import { useEffect, useState } from "react";
import iconAlterar from "../../assets/icons/alterarIcon.png";
import { jwtDecode } from "jwt-decode";

function MinhaContaDados() {
    // Estados para os dados do usuário
    const [dadosUsuario, setDadosUsuario] = useState({
        nome: "",
        cpf: "",
        telefone: "",
        email: "",
        senha: "",
    });

    // Estado para controlar se os dados estão carregando
    const [carregando, setCarregando] = useState(true);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            console.log('Token não encontrado');
            return; // Se não houver token, não faz a requisição
        }
        
        const decodedToken = jwtDecode(token); // Decodifica o token JWT
        console.log("Decoded token:", decodedToken);
    
        // Aqui você pode acessar as informações do payload, como id_cliente e exp
        const userId = decodedToken.id_cliente; // Corrigido para usar a chave correta
        console.log('User Id extraído:', userId);
        
        const exp = decodedToken.exp; // Data de expiração (em segundos desde a época Unix)
        console.log("Expiração:", exp);
    
        // Verifica se o token ainda é válido
        if (exp * 1000 < Date.now()) {
            console.log("Token expirado");
            return; // Se o token estiver expirado, não faz a requisição
        }
    
        // Fazer a requisição para buscar os dados do usuário
        fetch(`http://localhost:3000/usuarios/${userId}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`, // Adiciona o token no cabeçalho
            },
        })
            .then((response) => response.json())
            .then((data) => {
                setDadosUsuario(data); // Atualiza os dados do usuário
                setCarregando(false); // Finaliza o carregamento
            })
            .catch((error) => {
                console.error("Erro ao buscar os dados do usuário:", error);
                setCarregando(false); // Finaliza o carregamento em caso de erro
            });
    }, []);

    
    return (
        <div>
            <NavigatorBar />
            <div className="formulario-conta-dados">
                <div className="gridConta-criar-excluir">
                    <div className="titulo-CriarConta">
                        <h1>Dados da conta</h1>
                    </div>
                    <div id="excluirConta">
                        <p>Excluir Conta</p>
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
                        <input
                            type="text"
                            value={dadosUsuario.nome}
                            readOnly
                        />
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
                            value={dadosUsuario.cpf}
                            readOnly
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
                            mask="(00) 0 0000-0000"
                            value={dadosUsuario.telefone}
                            readOnly
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
                        <input
                            type="text"
                            value={dadosUsuario.email}
                            readOnly
                        />
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
                        <input
                            type="password"
                            value={dadosUsuario.senha}
                            readOnly
                        />
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