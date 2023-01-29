import { Form } from "react-router-dom";
import { Link } from "react-router-dom";
import { useParams } from "react-router";

import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useLocation } from 'react-router-dom';

import axios from "axios";
import React, { useState, useEffect } from 'react';

const baseURL = "http://localhost:8080/clientes";

export default function User() {

  const [post, setPost] = new useState([]);

  new useEffect(() => {
    console.log('go2');
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
  }, []);

  let params = useParams();
  const number = parseInt(params.userId, 10);

  const location = useLocation();

  function findUserById(users, id) {
    return users.find((user) => {
      return user.id === id;
    })
  }

  const renderUser = () => {
    if (post.length === 0){
      return (
        <div>
          <p>Interventor</p>
        </div>
      )
    } else {
      console.log(post);
      const escolhido = findUserById(post, number);
      // const escolhido = post[number-1];
      return (
        <div>
          <p><strong>Nome: </strong>{ escolhido.nome }</p>
          <p><strong>CPF/CNPJ: </strong>{ escolhido.cnpj }</p>
          <p><strong>Data de nascimento: </strong>{ escolhido.dataNascimento }</p>
          <p><strong>Tipo de logradouro: </strong>{ escolhido.tipoLogradouro }</p>
          <p><strong>Logradouro: </strong>{ escolhido.logradouro }</p>
          <p><strong>Número: </strong>{ escolhido.numero }</p>
          <p><strong>Complemento: </strong>{ escolhido.complemento }</p>
          <p><strong>Cidade: </strong>{ escolhido.cidade }</p>
          <p><strong>Estado: </strong>{ escolhido.estado }</p>
          <p><strong>Cep: </strong>{ escolhido.cep }</p>
          <p><strong>E-mail: </strong>{ escolhido.email }</p>
          <p><strong>Telefone: </strong>{ escolhido.telefone }</p>
        </div>
      )
    }
  };

  const putHandler = (params) => {
    console.log(params);

    axios.put("http://localhost:8080/clientes/update/" + params.userId).then(response => {
      window.location.reload(true);
      // console.log(response);
    }).catch((error) => {
      console.log(error);
    });
  };

  return (
    <div className="container" id="user">
      <section className="section is-small">
        <h1 className="title">Página do cliente</h1>
        { renderUser() }
        <div className="field is-grouped">
          <div className="control">
            <button className="button is-link is-light" onClick={e => putHandler(params)}>Atualizar nome</button>
          </div>
          <div className="control">
            <Link className="button is-link is-light"  to={-1}>Voltar</Link>
          </div>
        </div>
      </section>
    </div>
  );
}