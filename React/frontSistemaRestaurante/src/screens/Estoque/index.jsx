import "./style.css";
import { NavigatorBar } from "../../components/components";
import { useState, useEffect } from "react";

function Estoque() {
    // STATES
    const [listaItens, setListaItens] = useState([]);
    const [nomeProduto, setNomeProduto] = useState("");
    const [idProduto, setIdProduto] = useState("");
    const [qtdAtual, setQtdAtual] = useState("");
    const [qtdMinima, setQtdMinima] = useState("");
    const [unidadeMedida, setUnidadeMedida] = useState("");
    const [statusProduto, setStatusProduto] = useState("");
    const [editando, setEditando] = useState(null);
    const [editValues, setEditValues] = useState({
        id_produto: "",
        nome_produto: "",
        qtd_atual: "",
        qtd_minima: "",
        unidade_medida: "",
        status_produto: "",
    });
    const [popup, setPopup] = useState({ visivel: false, itemId: null });

    // Fetch inicial para buscar os itens do backend
    useEffect(() => {
        fetch("http://localhost:3000/estoque")
            .then((response) => response.json())
            .then((data) => setListaItens(data))
            .catch((error) => console.error("Erro ao buscar estoque:", error));
    }, []);

    // Função para adicionar um item
    function adicionarItem() {
        if (!nomeProduto || !idProduto || !qtdAtual || !qtdMinima || !unidadeMedida || !statusProduto) {
            alert("Preencha todos os campos antes de adicionar um item.");
            return;
        }

        const novoItem = {
            id_produto: parseInt(idProduto),
            nome_produto: nomeProduto,
            qtd_atual: parseInt(qtdAtual),
            qtd_minima: parseInt(qtdMinima),
            unidade_medida: unidadeMedida,
            status_produto: statusProduto,
        };

        fetch("http://localhost:3000/estoque", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(novoItem),
        })
            .then((response) => response.json())
            .then((data) => {
                setListaItens((old) => [...old, data]);
                setNomeProduto("");
                setIdProduto("");
                setQtdAtual("");
                setQtdMinima("");
                setUnidadeMedida("");
                setStatusProduto("");
            })
            .catch((error) => console.error("Erro ao adicionar item:", error));
    }

    // Função para salvar edição
    function salvarEdicao(id) {
        const itemEditado = {
            ...editValues,
            id_produto: Number(id),  // Garantir que ID seja um número
            qtd_atual: Number(editValues.qtd_atual),  // Converter para número
            qtd_minima: Number(editValues.qtd_minima) // Converter para número
        };

        console.log("Dados enviados:", itemEditado);
        fetch(`http://localhost:3000/estoque/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(editValues),
        })
            .then((response) => response.json())
            .then(() => {
                setListaItens((old) =>
                    old.map((produto) =>
                        produto.id_produto === id ? { ...produto, ...editValues } : produto
                    )
                );
                setEditando(null);
            })
            .catch((error) => console.error("Erro ao editar item:", error));
    }

    // Função para remover item
    function removerItemConfirmado() {
        fetch(`http://localhost:3000/estoque/${popup.itemId}`, {
            method: "DELETE",
        })
            .then(() => {
                setListaItens((old) => old.filter((produto) => produto.id_produto !== popup.itemId));
                setPopup({ visivel: false, itemId: null });
            })
            .catch((error) => console.error("Erro ao remover item:", error));
    }

    return (
        <div>
            <NavigatorBar />
            <div className="navigator-buttons">
                <h1>Estoque</h1>
                <div id="grid-adicionar-estoque">
                    <input
                        type="number"
                        placeholder="ID Produto"
                        value={idProduto}
                        onChange={(e) => setIdProduto(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Nome do Produto"
                        value={nomeProduto}
                        onChange={(e) => setNomeProduto(e.target.value)}
                    />
                    <input
                        type="number"
                        placeholder="Quantidade Atual"
                        value={qtdAtual}
                        onChange={(e) => setQtdAtual(Number(e.target.value))}
                    />
                    <input
                        type="number"
                        placeholder="Quantidade Mínima"
                        value={qtdMinima}
                        onChange={(e) => setQtdMinima(Number(e.target.value))}
                    />
                    <input
                        type="text"
                        placeholder="Unidade de Medida"
                        value={unidadeMedida}
                        onChange={(e) => setUnidadeMedida(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Status do Produto"
                        value={statusProduto}
                        onChange={(e) => setStatusProduto(e.target.value)}
                    />
                    <button id="adicionar-produto" onClick={adicionarItem}>
                        + Adicionar Novo Produto
                    </button>
                </div>

            </div>
            <hr />
            <div className="navigator-buttons">
                <div id="grid-titulos">
                    <h3>ID</h3>
                    <h3>Produto</h3>
                    <h3>Quantidade</h3>
                    <h3>Qtd Mínima</h3>
                    <h3>Unidade Medida</h3>
                    <h3>Status</h3>
                </div>
                <div className="lista-produtos">
                    {listaItens.map((produto) => (
                        <div key={produto.id_produto} id="grid-titulos">
                            {editando === produto.id_produto ? (
                                <>
                                    <input
                                        type="text"
                                        value={editValues.id_produto}
                                        onChange={(e) =>
                                            setEditValues((old) => ({ ...old, id_produto: e.target.value }))
                                        }
                                    />
                                    <input
                                        type="text"
                                        value={editValues.nome_produto}
                                        onChange={(e) =>
                                            setEditValues((old) => ({ ...old, nome_produto: e.target.value }))
                                        }
                                    />
                                    <input
                                        type="number"
                                        value={editValues.qtd_atual}
                                        onChange={(e) =>
                                            setEditValues((old) => ({ ...old, qtd_atual: Number(e.target.value) }))
                                        }
                                    />
                                    <input
                                        type="number"
                                        value={editValues.qtd_minima}
                                        onChange={(e) =>
                                            setEditValues((old) => ({ ...old, qtd_minima: Number(e.target.value) }))
                                        }
                                    />
                                    <input
                                        type="text"
                                        value={editValues.unidade_medida}
                                        onChange={(e) =>
                                            setEditValues((old) => ({ ...old, unidade_medida: e.target.value }))
                                        }
                                    />
                                    <input
                                        type="text"
                                        value={editValues.status_produto}
                                        onChange={(e) =>
                                            setEditValues((old) => ({ ...old, status_produto: e.target.value }))
                                        }
                                    />
                                    <button onClick={() => salvarEdicao(produto.id_produto)}>Salvar</button>
                                </>
                            ) : (
                                <>
                                    <p>{produto.id_produto}</p>
                                    <p>{produto.nome_produto}</p>
                                    <p>{produto.qtd_atual}</p>
                                    <p>{produto.qtd_minima}</p>
                                    <p>{produto.unidade_medida}</p>
                                    <p>{produto.status_produto}</p>
                                    <button onClick={() => setPopup({ visivel: true, itemId: produto.id_produto })}>
                                        Excluir
                                    </button>
                                    <button onClick={() => setEditando(produto.id_produto)}>
                                        Alterar
                                    </button>
                                </>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {popup.visivel && (
                <div className="popup">
                    <div className="popup-content">
                        <h1>
                            Excluir o produto{" "}
                            {listaItens.find((produto) => produto.id_produto === popup.itemId)?.nome_produto}?
                        </h1>
                        <p>Essa ação não poderá ser desfeita.</p>
                        <div className="popup-buttons">
                            <hr />
                            <button id="popup-excluir" onClick={removerItemConfirmado}>Excluir</button>
                            <hr />
                            <button id="popup-cancelar" onClick={() => setPopup({ visivel: false, itemId: null })}>Cancelar</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Estoque;