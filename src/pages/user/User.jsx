import { Form } from "react-router-dom";
import { Link } from "react-router-dom";
import { useParams } from "react-router";

import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useLocation } from 'react-router-dom';

import axios from "axios";
import React from "react";

const baseURL = "http://localhost:8080/clientes";

export default function User() {

  const [post, setPost] = React.useState([]);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
  }, []);

  console.log(post);

  let escolhido = {};

  let params = useParams();
  const number = parseInt(params.userId, 10);

  const location = useLocation();

  const renderUser = () => {
    if (location.state !== undefined && location.state !== null) {
      escolhido = location.state;
      return (
        <div>
          <p><strong>Nome: </strong>{ escolhido.name }</p>
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
    } else {
      escolhido = post[number-1];
      console.log(escolhido)
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
  }

  return (
    <div className="container" id="user">
      <section className="section is-small">
        <h1 className="title">Página do cliente</h1>
        {/*<h2>{ location.state.name }</h2>*/}
        { renderUser() }

        <div className="field is-grouped">
          <div className="control">
            <Link className="button is-link is-light"  to={-1}>Voltar</Link>
          </div>
        </div>
      </section>
    </div>
  );
}