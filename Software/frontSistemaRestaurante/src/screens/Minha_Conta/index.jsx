import "./style.css";
import { NavigatorBar } from "../../components/components";
import { IMaskInput } from "react-imask";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function MinhaConta() {
  const [nome_cliente, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault(); // Evita o reload da página ao enviar o formulário

    try {
      // Envia os dados para o backend
      const response = await axios.post("http://localhost:3000/registrar", {
        nome_cliente,
        cpf,
        telefone,
        email,
        senha,
      });

      // Exibe mensagem de sucesso
      alert(response.data.message || "Conta criada com sucesso!");
      navigate("/Cardapio");
    } catch (error) {
      // Exibe mensagem de erro
      console.error("Erro ao criar conta:", error.response?.data || error.message);
      alert(error.response?.data?.message || "Erro ao criar conta.");
    }
  };

  return (
    <div>
      <NavigatorBar />
      {/* Transformar o container principal em um formulário */}
      <form className="formulario-conta" onSubmit={handleSubmit}>
        <div className="titulo-CriarConta">
          <h1>Criar uma conta</h1>
        </div>
        <div className="placeHol">
          <div className="placeHol-partes">
            <div className="placeHol-texto">
              <h3>Nome completo*</h3>
            </div>
            <input
              type="text"
              placeholder=""
              value={nome_cliente}
              onChange={(e) => setNome(e.target.value)}
            />
          </div>
          <div className="placeHol-partes">
            <div className="placeHol-texto">
              <h3>CPF*</h3>
            </div>
            <IMaskInput
              mask="000.000.000-00"
              placeholder=""
              value={cpf}
              onAccept={(value) => setCpf(value)}
            />
          </div>
          <div className="placeHol-partes">
            <div className="placeHol-texto">
              <h3>Telefone*</h3>
            </div>
            <IMaskInput
              mask="(00) 0 0000-0000"
              placeholder=""
              value={telefone}
              onAccept={(value) => setTelefone(value)}
            />
          </div>
          <div className="placeHol-partes">
            <div className="placeHol-texto">
              <h3>Email*</h3>
            </div>
            <input
              type="text"
              placeholder=""
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="placeHol-partes">
            <div className="placeHol-texto">
              <h3>Senha*</h3>
            </div>
            <input
              type="password"
              placeholder=""
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />
          </div>
        </div>
        <div className="botao-pronto">
          {/* Botão dentro do formulário */}
          <button type="submit">Pronto</button>
        </div>
      </form>
      <footer></footer>
    </div>
  );
}

export default MinhaConta;