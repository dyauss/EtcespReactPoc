import './Cat.css';

import { Form } from "react-router-dom";
import { Link } from "react-router-dom";

import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import axios from "axios";
import React from "react";

const baseURL = "http://localhost:8080/clientes";

export default function Cat() {

  const renderElement = (post) => {
    if (post.length === 0){
      return (
        <a className="panel-block" href={'users/4'}>
          <div>
            <span className="panel-icon">
              <FontAwesomeIcon icon={faUser} />
            </span>
            <strong>Carregando...</strong>
          </div>
          <a href={'users/10'}>Excluir</a>
        </a>
      )
    }
    else {
      return (
        post.map((user, index) =>
          <a className="panel-block" href={"users/" + user.id } key={index}>
            <div>
              <span className="panel-icon">
                <FontAwesomeIcon icon={faUser} />
              </span>
              { user.nome }
            </div>
            <a href={'users/10'}>Excluir</a>
            
          </a>
        )
      )
    }
  }
  
  const [post, setPost] = React.useState([]);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
  }, []);

  console.log(post);

  return (
    <div className="container">
      <section className="section is-small">
        <h1 className="title">Lista de clientes</h1>
        <h2 className="subtitle">
          Abaixo estarão listados os <strong>clientes</strong> do sistema.
        </h2>
        <article className="panel is-black">
          <p className="panel-heading">
            Lista de clientes cadastrados
          </p>
          <div className="panel-block">
            <p className="control has-icons-left">
              <input className="input is-danger" type="text" placeholder="Search" />
              <span className="icon is-left">
                <i className="fas fa-search" aria-hidden="true"></i>
              </span>
            </p>
          </div>
          { renderElement(post) }
        </article>
        <Link className="button is-success" to={'/new-user'}>Adicionar cliente</Link>
      </section>
    </div>
  );
}