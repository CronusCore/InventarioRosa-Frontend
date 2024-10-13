import HeaderAuth from "./HeaderAuth";
import SideBar from "./SideBar";
import SearchBar from "../Struct/SearchBar";
import AddIcon from "../../assets/add.svg"
import DeleteIcon from "../../assets/trash.svg"
import EditIcon from "../../assets/pencil.svg"

export default function ManageProduct(){
    return(
        <>
            <HeaderAuth/>
            <section className="principal-layer">
                <SideBar/>
                <section className="product-section">
                    <header className="d-flex justify-content-between">
                        <h1 className='color-titulos'>Lista de productos actuales</h1>
                        <button className="btn-add"><img src={AddIcon}/> Agregar producto</button>
                    </header>
                    <div className="filter-actions">
                        <SearchBar Width={"700px"} Height={"32px"} Placeholder={"Busca el producto especifico"}/>
                        <select className="select-category" name="" id="">
                            <option selected disabled>Categorias</option>
                        </select>
                        <button className="btn-filtrar">Filtrar</button>
                    </div>
                    <div className='table-container'>
                        <table>
                            <thead>
                                <tr>
                                    <th>SKU</th>
                                    <th>Nombre</th>
                                    <th>Precio</th>
                                    <th>Disponible</th>
                                    <th>Color</th>
                                    <th>Acciones</th>
                                </tr>
                                <tr className="separation-tr"></tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>6789678</td>
                                    <td>Ecos twusw</td>
                                    <td>909</td>
                                    <td>123</td>
                                    <td>Azzul mediterraneo</td>
                                    <td className="actions-cell">
                                        <button className="btn-icons">
                                            <img src={EditIcon} alt="" />
                                        </button>
                                        <button className="btn-icons">
                                            <img src={DeleteIcon} alt="" />
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>6789678</td>
                                    <td>Ecos twusw</td>
                                    <td>909</td>
                                    <td>123</td>
                                    <td>Azzul mediterraneo</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>6789678</td>
                                    <td>Ecos twusw</td>
                                    <td>909</td>
                                    <td>123</td>
                                    <td>Azzul mediterraneo</td>
                                    <td></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>

            </section>
        </>
    );
}