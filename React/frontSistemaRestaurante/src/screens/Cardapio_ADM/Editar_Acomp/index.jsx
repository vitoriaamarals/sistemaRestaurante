import React, { useState } from "react";
import { NavigatorBar } from "../../../components/components";

function EditarAcomp() {
    const [items, setItems] = useState([
        "ARROZ BRANCO",
        "ARROZ INTEGRAL",
        "FEIJÃO DE CALDO",
        "FEIJÃO TROPEIRO",
        "FEIJOADA",
        "MACARRÃO ALHO E ÓLEO",
        "ABÓBORA MORANGA",
        "CHUCHU REFOGADO",
        "BATATA FRITA",
        "BANANA FRITA",
    ]);
    const [selectedItem, setSelectedItem] = useState(null);
    const [newItem, setNewItem] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalType, setModalType] = useState(""); // "add", "delete", "edit"

    const handleSelectItem = (item) => {
        setSelectedItem(item === selectedItem ? null : item);
    };

    const handleDeleteItem = () => {
        setItems(items.filter((item) => item !== selectedItem));
        setSelectedItem(null);
        setIsModalOpen(false);
    };

    const handleEditItem = () => {
        if (newItem.trim() && selectedItem) {
            setItems(
                items.map((item) => (item === selectedItem ? newItem : item))
            );
            setSelectedItem(newItem);
            setNewItem("");
            setIsModalOpen(false);
        }
    };

    const handleAddItem = () => {
        if (newItem.trim()) {
            setItems([...items, newItem]);
            setNewItem("");
            setIsModalOpen(false);
        }
    };

    const openModal = (type) => {
        setModalType(type);
        setIsModalOpen(true);
    };

    return (
        <div>
            <NavigatorBar />
            <div>
                <section className="cardapio-section" id="cardapio-section-add">
                    <div className="header-container">
                        <h2>ACOMPANHAMENTOS</h2>
                        <div className="actions">
                            <button onClick={() => openModal("add")} className="button-add">
                                + Adicionar novo item
                            </button>
                            <button
                                onClick={() => openModal("edit")}
                                className="button edit"
                                disabled={!selectedItem}
                            >
                                Alterar
                            </button>
                            <button
                                onClick={() => openModal("delete")}
                                className="button delete"
                                disabled={!selectedItem}
                            >
                                Excluir
                            </button>
                        </div>
                    </div>
                    <div className="checklist-container">
                        <ul className="checklist">
                            {items.map((item) => (
                                <li key={item} className="checklist-item">
                                    <label>
                                        <input
                                            type="checkbox"
                                            checked={selectedItem === item}
                                            onChange={() => handleSelectItem(item)}
                                        />
                                        {item}
                                    </label>
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>

                {isModalOpen && (
                    <div className="modal-overlay">
                        <div className="modal">
                            {modalType === "add" && (
                                <>
                                    <h3>Adicionar Novo Item</h3>
                                    <input
                                        type="text"
                                        value={newItem}
                                        onChange={(e) => setNewItem(e.target.value)}
                                        placeholder="Novo item"
                                        className="new-item-input"
                                    />
                                    <div className="modal-actions">
                                        <button onClick={handleAddItem} className="button-add">
                                            Salvar
                                        </button>
                                        <button onClick={() => setIsModalOpen(false)} className="button cancel">
                                            Cancelar
                                        </button>
                                    </div>
                                </>
                            )}

                            {modalType === "edit" && (
                                <>
                                    <h3>Alterar Item</h3>
                                    <input
                                        type="text"
                                        value={newItem}
                                        onChange={(e) => setNewItem(e.target.value)}
                                        placeholder={`Novo nome para "${selectedItem}"`}
                                        className="new-item-input"
                                    />
                                    <div className="modal-actions">
                                        <button onClick={handleEditItem} className="button-add">
                                            Salvar
                                        </button>
                                        <button onClick={() => setIsModalOpen(false)} className="button cancel">
                                            Cancelar
                                        </button>
                                    </div>
                                </>
                            )}

                            {modalType === "delete" && (
                                <>
                                    <h3>Excluir Item</h3>
                                    <p>Tem certeza que deseja excluir "{selectedItem}"?</p>
                                    <div className="modal-actions">
                                        <button onClick={handleDeleteItem} className="button delete">
                                            Excluir
                                        </button>
                                        <button onClick={() => setIsModalOpen(false)} className="button cancel">
                                            Cancelar
                                        </button>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default EditarAcomp;
