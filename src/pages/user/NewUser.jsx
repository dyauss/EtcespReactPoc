import { Form } from "react-router-dom";
import { Link } from "react-router-dom";

import { Navigate } from 'react-router-dom'

import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import axios from "axios";
import React, { useState } from 'react';

export default function NewUser() {

  const handleSubmit = e => {
    e.preventDefault();

    axios.post("http://localhost:8080/clientes/add", {
      nome,
      cpfCnpj,
      dataNascimento,
      tipoLogradouro,
      logradouro,
      numero,
      complemento,
      cidade,
      estado,
      cep,
      email,
      telefone
    }).then(response => {
      console.log(response.status);
      if (response.status == '200') {
        console.log('duzentaopora');
        // navigate('/cat');
        // return <Navigate to="/cat" replace />
        // console.log('duzentao');
        window.location.replace('/cat');
      }
      

    })
  }

  const [nome, setNome] = new useState('');
  const [cpfCnpj, setCpfCnpj] = new useState('');
  const [dataNascimento, setDataNascimento] = new useState('');
  const [tipoLogradouro, setTipoLogradouro] = new useState('Rua');
  const [logradouro, setLogradouro] = new useState('');
  const [numero, setNumero] = new useState('');
  const [complemento, setComplemento] = new useState('');
  const [cidade, setCidade] = new useState('São Paulo');
  const [estado, setEstado] = new useState('São Paulo');
  const [cep, setCep] = new useState('');
  const [email, setEmail] = new useState('');
  const [telefone, setTelefone] = new useState('');

  return (
    <form  action="" id="login" method="post" onSubmit={handleSubmit}>
    <div className="container">
      <section className="section is-small">
        <h1 className="title">Adicionar cliente</h1>
        <div className="field">
          <label className="label">Nome</label>
          <div className="control">
            <input className="input" type="text" placeholder="Nome completo"
              value={nome}
              onChange={e => setNome(e.target.value)}
             />
          </div>
        </div>

        <div className="field">
          <label className="label">CPF/CNPJ</label>
          <div className="control has-icons-left has-icons-right">
            <input className="input" type="text" placeholder="CPF ou CNPJ" 
              value={cpfCnpj}
              onChange={e => setCpfCnpj(e.target.value)}
            />
            <span className="icon is-small is-left">
              <i className="fas fa-user"></i>
            </span>
            <span className="icon is-small is-right">
              <i className="fas fa-check"></i>
            </span>
          </div>
        </div>

        <div className="field">
          <label className="label">Data de nascimento</label>
          <div className="control has-icons-left has-icons-right">
            <input className="input" type="date" placeholder="dd/mm/AAAA" 
              value={dataNascimento}
              onChange={e => setDataNascimento(e.target.value)}
            />
            <span className="icon is-small is-left">
              <i className="fas fa-envelope"></i>
            </span>
            <span className="icon is-small is-right">
              <i className="fas fa-exclamation-triangle"></i>
            </span>
          </div>
          
        </div>

        <div className="field">
          <label className="label">Tipo de logradouro</label>
          <div className="control">
            <div className="select">
              <select onChange={e => setTipoLogradouro(e.target.value)} value={tipoLogradouro}>
                <option>Rua</option>
                <option>Avenida</option>
              </select>
            </div>
          </div>
        </div>

        <div className="field">
          <label className="label">Logradouro</label>
          <div className="control has-icons-left has-icons-right">
            <input className="input" type="text" placeholder="Logradouro" 
              value={logradouro}
              onChange={e => setLogradouro(e.target.value)}
            />
            <span className="icon is-small is-left">
              <i className="fas fa-user"></i>
            </span>
            <span className="icon is-small is-right">
              <i className="fas fa-check"></i>
            </span>
          </div>
        </div>

        <div className="field">
          <label className="label">Número</label>
          <div className="control has-icons-left has-icons-right">
            <input className="input" type="text" placeholder="Numero" 
              value={numero}
              onChange={e => setNumero(e.target.value)}
            />
            <span className="icon is-small is-left">
              <i className="fas fa-user"></i>
            </span>
            <span className="icon is-small is-right">
              <i className="fas fa-check"></i>
            </span>
          </div>
        </div>

        <div className="field">
          <label className="label">Complemento</label>
          <div className="control has-icons-left has-icons-right">
            <input className="input" type="text" placeholder="Complemento" 
              value={complemento}
              onChange={e => setComplemento(e.target.value)}
            />
            <span className="icon is-small is-left">
              <i className="fas fa-user"></i>
            </span>
            <span className="icon is-small is-right">
              <i className="fas fa-check"></i>
            </span>
          </div>
        </div>

        <div className="field">
          <label className="label">Estado</label>
          <div className="control">
            <div className="select">
              <select onChange={e => setEstado(e.target.value)} value={estado}>
                <option>São Paulo</option>
                <option>Rio de Janeiro</option>
              </select>
            </div>
          </div>
        </div>

        <div className="field">
          <label className="label">Cidade</label>
          <div className="control">
            <div className="select">
              <select onChange={e => setCidade(e.target.value)} value={cidade}>
                <option>São Paulo</option>
                <option>Campinas</option>
              </select>
            </div>
          </div>
        </div>

        <div className="field">
          <label className="label">Cep</label>
          <div className="control has-icons-left has-icons-right">
            <input className="input" type="text" placeholder="Cep" 
              value={cep}
              onChange={e => setCep(e.target.value)}
            />
            <span className="icon is-small is-left">
              <i className="fas fa-user"></i>
            </span>
            <span className="icon is-small is-right">
              <i className="fas fa-check"></i>
            </span>
          </div>
        </div>

        <div className="field">
          <label className="label">E-mail</label>
          <div className="control has-icons-left has-icons-right">
            <input className="input" type="text" placeholder="E-mail" 
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <span className="icon is-small is-left">
              <i className="fas fa-user"></i>
            </span>
            <span className="icon is-small is-right">
              <i className="fas fa-check"></i>
            </span>
          </div>
        </div>

        <div className="field">
          <label className="label">Telefone</label>
          <div className="control has-icons-left has-icons-right">
            <input className="input" type="text" placeholder="Telefone" 
              value={telefone}
              onChange={e => setTelefone(e.target.value)}
            />
            <span className="icon is-small is-left">
              <i className="fas fa-user"></i>
            </span>
            <span className="icon is-small is-right">
              <i className="fas fa-check"></i>
            </span>
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

        <div className="field is-grouped">
          <div className="control">
            <button type="submit" className="button is-link">Enviar</button>
          </div>
          <div className="control">
            <Link className="button is-link is-light"  to={-1}>Cancelar</Link>
          </div>
        </div>
      </section>
    </div>
    </form>
  );
}