import "./style.css";
import imgLogo from "../../assets/icons/iconNavbar.png";

function Navbar() {
    return (
        <nav className="navbar">
            <div>
                <a href="/">
                    <img src={imgLogo} alt="Logo" width={330} height={130} />
                </a>
            </div>
            <div className="block-nav-links">
                <ul className="nav-links">
                    <li id="especialLine">
                        <a href="/Cardapio">
                            <h2>Cardápio</h2>
                        </a>
                    </li>
                    <li id="especialLine">
                        <a href="/FazerPedido">
                            <h2>Faça aqui seu pedido</h2>
                        </a>
                    </li>
                    <li id="especialLine">
                        <a href="FaleConosco">
                            <h2>Fale conosco</h2>
                        </a>
                    </li>
                    <li id="especialLine">
                        <a href="/Login">
                            <h2>Minha conta</h2>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;