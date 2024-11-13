import { useContext } from "react";
import { LoginContext } from "../Products/HomePage";
import { getData } from "../../Functions";

const Login = () => {
    const {isShowLogin, setIsShowLogin} = useContext(LoginContext);
    
    function handleClickCerrar(e){
        setIsShowLogin(!isShowLogin);
    }
    async function handleClickLogin(e){
        getData();
    }
    return (
        <section className="login-modal">
            <form>
                <h2 className="color-titulos ">Inicio de Sesion</h2>
                <main>
                    <div>
                        <input id="user" placeholder=" " type="text" />
                        <label htmlFor="user">Usuario</label>
                    </div>
                    <div>
                        <input id="pass" placeholder=" " type="password" />
                        <label htmlFor="pass">Contraseña</label>
                    </div>

                </main>
                <div className="">
                    <button type="button" class="btn-card-product" onClick={handleClickCerrar}>Cerrar</button>
                    <button type="button" class="btn-success" onClick={handelClickLogin}>Ingresar</button>
                </div>

                


            </form>
        </section>
    );
}
export default Login;