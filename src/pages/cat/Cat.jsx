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
            A simple container to divide your page into <strong>sections</strong>, like the one you're currently reading.
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
            <a className="panel-block is-active" href={'users/1'}>
              <span className="panel-icon">
                <FontAwesomeIcon icon={faUser} />
              </span>
              José Alberto
            </a>
            <a className="panel-block" href={'users/2'}>
              <span className="panel-icon">
                <FontAwesomeIcon icon={faUser} />
              </span>
              Francisco Coco
            </a>
            <a className="panel-block" href={'users/3'}>
              <span className="panel-icon">
                <FontAwesomeIcon icon={faUser} />
              </span>
              Zé do Picadinho
            </a>
            <a className="panel-block" href={'users/4'}>
              <span className="panel-icon">
                <FontAwesomeIcon icon={faUser} />
              </span>
              Pedro Lucas
            </a>
            <a className="panel-block" href={'users/4'}>
              <span className="panel-icon">
                <FontAwesomeIcon icon={faUser} />
              </span>
              <p>Carregando</p>
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