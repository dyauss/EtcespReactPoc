import './Cat.css';

import { Form } from "react-router-dom";
import { Link } from "react-router-dom";

import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import axios from "axios";
import React, { useState } from 'react';

const baseURL = "http://localhost:8080/clientes";

export default function Cat() {

  const myguys = [
    {
      id: 1,
      nome: 'João'
    },
    {
      id: 2,
      nome: 'Alberto'
    },
    {
      id: 3,
      nome: 'Carlos'
    },
    {
      id: 4,
      nome: 'Bruno'
    }
  ]

  const [filteredList, setFilteredList] = new useState();
  const [post, setPost] = React.useState([]);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
      setFilteredList(response.data)
    });
  }, []);

  console.log(post);

  const filterBySearch = (event) => {
    const query = event.target.value;
    var updatedList = [...post];

    updatedList = updatedList.filter((item) =>
      item.nome.toLowerCase().indexOf(query.toLowerCase()) !== -1
    );

    setFilteredList(updatedList);
  };

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
        filteredList.map((user, index) => (
          <Link className="panel-block" to={"/users/" + user.id } key={index} 
            state={{ 
              name: user.nome,
              cpfCnpj: user.cpfCnpj,
              dataNascimento: user.dataNascimento,
              tipoLogradouro: user.tipoLogradouro,
              logradouro: user.logradouro,
              numero: user.numero,
              complemento: user.complemento,
              cidade: user.cidade,
              estado: user.estado,
              cep: user.cep,
              email: user.email,
              telefone: user.telefone
            }}
            >
            <div>
              <span className="panel-icon">
                <FontAwesomeIcon icon={faUser} />
              </span>
              { user.nome }
            </div>
            {/*<Link to="/users/10" state={{ name: user.nome }}>
              Next Step
            </Link>*/}
            {/*<a href={'users/10'}>Excluir</a>*/}
          </Link>
        ))
      )
    }
  }
  

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
              <input id="search-box" className="input is-gray-dark" type="text" placeholder="Search" onChange={filterBySearch}/>
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