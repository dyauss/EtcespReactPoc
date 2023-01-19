import './Cat.css';

import { Form } from "react-router-dom";
import { Link } from "react-router-dom";

import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import axios from "axios";
import React from "react";

const baseURL = "http://localhost:8080/clientes";



export default function Cat() {
  
  const [post, setPost] = React.useState([]);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
  }, []);

  console.log(post);

  if (post.length === 0) {
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
            <a className="panel-block is-active" href={'users/1'}>
              <div>
                <span className="panel-icon">
                  <FontAwesomeIcon icon={faUser} />
                </span>
                José Alberto
              </div>
              <a href={'users/10'}>Excluir</a>
            </a>
            <a className="panel-block" href={'users/2'}>
              <div>
                <span className="panel-icon">
                  <FontAwesomeIcon icon={faUser} />
                </span>
                Francisco Coco
              </div>
              <a href={'users/10'}>Excluir</a>
            </a>
            <a className="panel-block" href={'users/3'}>
              <div>
                <span className="panel-icon">
                  <FontAwesomeIcon icon={faUser} />
                </span>
                Zé do Picadinho
              </div>
              <a href={'users/10'}>Excluir</a>
            </a>
            <a className="panel-block" href={'users/4'}>
              <div>
                <span className="panel-icon">
                  <FontAwesomeIcon icon={faUser} />
                </span>
                Pedro Lucas
              </div>
              <a href={'users/10'}>Excluir</a>
            </a>
            <a className="panel-block" href={'users/4'}>
              <div>
                <span className="panel-icon">
                  <FontAwesomeIcon icon={faUser} />
                </span>
                <strong>Carregando...</strong>
              </div>
              <a href={'users/10'}>Excluir</a>
            </a>
          </article>
          <Link className="button is-success" to={'/new-user'}>Adicionar cliente</Link>
        </section>
      </div>
    );
  }

  return (
    <div className="container">
      <section className="section is-small">
        <h1 className="title">Lista de clientes</h1>
        <h2 className="subtitle">
          Abaixo está a lista de <strong>clientes</strong> cadastrados no sistema.
        </h2>
        <article className="panel is-danger">
          <p className="panel-heading">
            Danger
          </p>
          <p className="panel-tabs">
            <a className="is-active">All</a>
            <a>Public</a>
            <a>Private</a>
            <a>Sources</a>
            <a>Forks</a>
          </p>
          <div className="panel-block">
            <p className="control has-icons-left">
              <input className="input is-danger" type="text" placeholder="Search" />
              <span className="icon is-left">
                <i className="fas fa-search" aria-hidden="true"></i>
              </span>
            </p>
          </div>
          {post.map((user, index) =>
            <a className="panel-block is-active" href={'users/1'} key={index}>
              <span className="panel-icon">
                <FontAwesomeIcon icon={faUser} />
              </span>
              { user.nome }
            </a>
          )}
          
        </article>
        <Link className="button is-success" to={'/new-user'}>Adicionar cliente</Link>
      </section>
    </div>
  );
}