import "./style.css";
import { NavigatorBar } from "../../components/components";
import { IMaskInput } from "react-imask";
import { useState, useRef } from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

function Estoque() {

    // STATE
    const [modalIsOpen, setIsOpen] = useState(false);
    const [listaItens, setListaItens] = useState(() => { return [] })
    const [item, setItem] = useState (() => { return '' })
    const [idItemEstoque, setIDEstoque] = useState (() => { return '' })
    const [qtdItem, setQtd] = useState (() => { return '' })

    // REF
    const idItem = useRef(0)

    //
    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <div >
            <NavigatorBar />
            <div className="navigator-buttons">
                <button id="adicionar-produto" onClick={openModal}><h3>+ Adicionar Novo Produto</h3></button>
                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    contentLabel="Example Modal"
                    overlayClassName="modal-overlay"
                    className="modal-content"
                >
                    <div className="placeHol">
                        <div className="placeHol-partes" id="espaco-estoque">
                            <div className="placeHol-texto">
                                <h3>Nome do item*</h3>
                            </div>
                            <input type="text" placeholder="" />
                        </div>
                        <div className="placeHol-partes">
                            <div className="placeHol-texto">
                                <h3>ID do item*</h3>
                            </div>
                            <input type="text" placeholder="" />
                        </div>
                        <div className="placeHol-partes">
                            <div className="placeHol-texto">
                                <h3>Quantidade Inicial*</h3>
                            </div>
                            <IMaskInput
                                mask="0000"
                                placeholder=""
                            />
                        </div>
                    </div>
                    <button onClick={closeModal}>Close</button>
                </Modal>
            </div>
            <div>
                <div id="grid-titulos">
                    <h3>Item</h3>
                    <h3>ID Item</h3>
                    <h3>Quantidade</h3>
                </div>
                <div id="grid-titulos">
                    <input type="text" value= {item} onChange={(evento) => { setItem(evento.target.value)}} />
                    <input type="text" value= {idItemEstoque} onChange={(evento) => { setIDEstoque(evento.target.value)}} />
                    <input type="text" value= {qtdItem} onChange={(evento) => { setQtd(evento.target.value)}} />
                </div>
            </div>
        </div>
    );
}

export default Estoque;