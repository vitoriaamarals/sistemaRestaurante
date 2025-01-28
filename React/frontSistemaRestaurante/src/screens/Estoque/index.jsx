import "./style.css";
import { NavigatorBar } from "../../components/components";
import { useState, useRef } from "react";

function Estoque() {
    // STATES
    const [listaItens, setListaItens] = useState([]);
    const [item, setItem] = useState("");
    const [idItemEstoque, setIDEstoque] = useState("");
    const [qtdItem, setQtd] = useState("");
    const [editando, setEditando] = useState(null); // Rastreador de edição
    const [editValues, setEditValues] = useState({ item: "", idItemEstoque: "", qtdItem: "" });
    const [popup, setPopup] = useState({ visivel: false, itemId: null }); // Controle do popup de exclusão

    // REF para gerar IDs únicos
    const idCounter = useRef(0);

    // MÉTODOS
    function adicionarItem() {
        if (!item || !idItemEstoque || !qtdItem) {
            alert("Preencha todos os campos antes de adicionar um item.");
            return;
        }

        const novoItem = {
            id: idCounter.current,
            item,
            idItemEstoque,
            qtdItem,
        };

        setListaItens((old) => [...old, novoItem]);
        idCounter.current++; // Incrementa o ID único
        setItem("");
        setIDEstoque("");
        setQtd("");
    }

    function limparLista() {
        setListaItens([]);
        idCounter.current = 0;
    }

    function iniciarEdicao(produto) {
        setEditando(produto.id);
        setEditValues({
            item: produto.item,
            idItemEstoque: produto.idItemEstoque,
            qtdItem: produto.qtdItem,
        });
    }

    function salvarEdicao(id) {
        setListaItens((old) =>
            old.map((produto) =>
                produto.id === id ? { ...produto, ...editValues } : produto
            )
        );
        setEditando(null);
    }

    function confirmarRemocao(id) {
        setPopup({ visivel: true, itemId: id });
    }

    function removerItemConfirmado() {
        setListaItens((old) => old.filter((produto) => produto.id !== popup.itemId));
        setPopup({ visivel: false, itemId: null });
    }

    function cancelarRemocao() {
        setPopup({ visivel: false, itemId: null });
    }

    return (
        <div>
            <NavigatorBar />
            <div className="navigator-buttons">
                <h1>Estoque</h1>
                <div id="grid-adicionar-estoque">
                    <input
                        type="text"
                        placeholder="Item"
                        value={item}
                        onChange={(e) => setItem(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="ID Item"
                        value={idItemEstoque}
                        onChange={(e) => setIDEstoque(e.target.value)}
                    />
                    <input
                        type="number"
                        placeholder="Quantidade"
                        value={qtdItem}
                        onChange={(e) => setQtd(e.target.value)}
                    />
                    <button id="adicionar-produto" onClick={adicionarItem}>
                        <h3>+ Adicionar Novo Produto</h3>
                    </button>
                </div>
                <hr />
            </div>

            <div className="navigator-buttons">
                <div id="grid-titulos">
                    <h3>Item</h3>
                    <h3>ID Item</h3>
                    <h3>Quantidade</h3>
                </div>
                <div className="lista-produtos">
                    {listaItens.map((produto) => (
                        <div key={produto.id} id="grid-titulos">
                            {editando === produto.id ? (
                                <>
                                    <input
                                        type="text"
                                        value={editValues.item}
                                        onChange={(e) =>
                                            setEditValues((old) => ({ ...old, item: e.target.value }))
                                        }
                                    />
                                    <input
                                        type="text"
                                        value={editValues.idItemEstoque}
                                        onChange={(e) =>
                                            setEditValues((old) => ({
                                                ...old,
                                                idItemEstoque: e.target.value,
                                            }))
                                        }
                                    />
                                    <input
                                        type="number"
                                        value={editValues.qtdItem}
                                        onChange={(e) =>
                                            setEditValues((old) => ({ ...old, qtdItem: e.target.value }))
                                        }
                                    />
                                    <button id="botao-editar" onClick={() => salvarEdicao(produto.id)}>Salvar</button>
                                </>
                            ) : (
                                <>
                                    <p>{produto.item}</p>
                                    <p>{produto.idItemEstoque}</p>
                                    <p>{produto.qtdItem}</p>
                                    <button onClick={() => confirmarRemocao(produto.id)}>Excluir</button>
                                    <button id="botao-editar" onClick={() => iniciarEdicao(produto)}>Alterar</button>
                                </>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Popup de confirmação */}
            {popup.visivel && (
                <div className="popup">
                    <div className="popup-content">
                        <h1>
                            Excluir item {listaItens.find((produto) => produto.id === popup.itemId)?.item}?
                        </h1>
                        <p>Essa ação não poderá ser desfeita</p>
                        <div className="popup-buttons">
                            <hr />
                            <button id="popup-excluir" onClick={removerItemConfirmado}>Excluir</button>
                            <hr />
                            <button id="popup-cancelar" onClick={cancelarRemocao}>Cancelar</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Estoque;
