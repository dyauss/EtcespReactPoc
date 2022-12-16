import { Form } from "react-router-dom";
import { Link } from "react-router-dom";

import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import axios from "axios";
import React from "react";

export default function NewUser() {

  return (
    <div className="container">
      <section className="section is-small">
        <h1 className="title">Adicionar cliente</h1>
        <div className="field">
          <label className="label">Nome</label>
          <div className="control">
            <input className="input" type="text" placeholder="Nome completo" />
          </div>
        </div>

        <div className="field">
          <label className="label">CPF/CNPJ</label>
          <div className="control has-icons-left has-icons-right">
            <input className="input is-success" type="text" placeholder="CPF ou CNPJ" />
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
            <input className="input is-danger" type="email" placeholder="dd/mm/AAAA" />
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
              <select>
                <option>Rua</option>
                <option>Avenida</option>
              </select>
            </div>
          </div>
        </div>

        <div className="field">
          <label className="label">Logradouro</label>
          <div className="control has-icons-left has-icons-right">
            <input className="input is-success" type="text" placeholder="Logradouro" />
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
            <input className="input is-success" type="text" placeholder="Numero" />
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
            <input className="input is-success" type="text" placeholder="Complemento" />
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
              <select>
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
              <select>
                <option>São Paulo</option>
                <option>Campinas</option>
              </select>
            </div>
          </div>
        </div>

        <div className="field">
          <label className="label">Cep</label>
          <div className="control has-icons-left has-icons-right">
            <input className="input is-success" type="text" placeholder="Cep" />
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
            <input className="input is-success" type="text" placeholder="E-mail" />
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
            <input className="input is-success" type="text" placeholder="Telefone" />
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