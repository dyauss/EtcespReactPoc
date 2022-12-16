import { Form } from "react-router-dom";
import { Link } from "react-router-dom";
import { useParams } from "react-router";

import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import axios from "axios";
import React from "react";

const baseURL = "http://localhost:8080/clientes";

export default function User() {
  
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
  }, []);

  console.log(post);

  let params = useParams();

  return (
    <div className="container" id="user">
      <section className="section is-small">
        <h1 className="title">Página do cliente</h1>
        <h3>{ params.userId }</h3>
        <div className="field">
          <label className="label">Name</label>
          <div className="control">
            <input className="input" type="text" placeholder="Text input" />
          </div>
        </div>

        <div className="field">
          <label className="label">Username</label>
          <div className="control has-icons-left has-icons-right">
            <input className="input is-success" type="text" placeholder="Text input" value="bulma" />
            <span className="icon is-small is-left">
              <i className="fas fa-user"></i>
            </span>
            <span className="icon is-small is-right">
              <i className="fas fa-check"></i>
            </span>
          </div>
          <p className="help is-success">This username is available</p>
        </div>

        <div className="field">
          <label className="label">Email</label>
          <div className="control has-icons-left has-icons-right">
            <input className="input is-danger" type="email" placeholder="Email input" value="hello@" />
            <span className="icon is-small is-left">
              <i className="fas fa-envelope"></i>
            </span>
            <span className="icon is-small is-right">
              <i className="fas fa-exclamation-triangle"></i>
            </span>
          </div>
          <p className="help is-danger">This email is invalid</p>
        </div>

        <div className="field">
          <label className="label">Subject</label>
          <div className="control">
            <div className="select">
              <select>
                <option>Select dropdown</option>
                <option>With options</option>
              </select>
            </div>
          </div>
        </div>

        <div className="field">
          <label className="label">Message</label>
          <div className="control">
            <textarea className="textarea" placeholder="Textarea"></textarea>
          </div>
        </div>

        <div className="field">
          <div className="control">
            <label className="checkbox">
              <input type="checkbox" />
              &nbsp; Eu concordo com os <a href="#"><b>termos e condições</b></a>
            </label>
          </div>
        </div>

        <div className="field">
          <div className="control">
            <label className="radio">
              <input type="radio" name="question" />
              &nbsp;Sim
            </label>
            <label className="radio">
              <input type="radio" name="question" />
              &nbsp;Não
            </label>
          </div>
        </div>

        <div className="field is-grouped">
          <div className="control">
            <button className="button is-link">Enviar</button>
          </div>
          <div className="control">
            <Link className="button is-link is-light"  to={-1}>Cancelar</Link>
          </div>
        </div>
      </section>
    </div>
  );
}