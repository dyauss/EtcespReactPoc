import { Form } from "react-router-dom";
import 'bulma/css/bulma.min.css';
import './login.css'

export default function Login() {
  return (
    <section className="hero is-success is-fullheight">
        <div className="hero-body">
            <div className="container has-text-centered">
                <div className="column is-4 is-offset-4">
                    <h3 className="title has-text-black">Login</h3>
                    <hr className="login-hr" />
                    <p className="subtitle has-text-black">Please login to proceed.</p>
                    <div className="box">
                        <figure className="avatar">
                            <img src="https://via.placeholder.com/150" />
                        </figure>
                        <form>
                            <div className="field">
                                <div className="control">
                                    <input className="input is-large" type="email" placeholder="Usuário" autofocus="" />
                                </div>
                            </div>

                            <div className="field">
                                <div className="control">
                                    <input className="input is-large" type="password" placeholder="Senha" />
                                </div>
                            </div>
                            <div className="field">
                                <label className="checkbox">
                                  <input type="checkbox" />
                                  &nbsp;Lembrar de mim
                                </label>
                            </div>
                            <button className="button is-block is-info is-large is-fullwidth">Entrar <i className="fa fa-sign-in" aria-hidden="true"></i></button>
                        </form>
                    </div>
                    <p className="has-text-grey">
                        <a href="../">Cadastro</a> &nbsp;·&nbsp;
                        <a href="../">Esqueci minha senha</a> &nbsp;·&nbsp;
                        <a href="../">Ajuda</a>
                    </p>
                </div>
            </div>
        </div>
    </section>
  );
}