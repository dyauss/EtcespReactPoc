import './Cat.css';

import { Form } from "react-router-dom";
import { Link } from "react-router-dom";

import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import axios from "axios";
import React, { useState } from 'react';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const baseURL = "http://localhost:8080/clientes";


export default function Cat() {

  const [idSelected, setIdSelected] = new useState();

  const [filteredList, setFilteredList] = new useState();
  const [post, setPost] = React.useState([]);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
      setFilteredList(response.data);
    });
  }, []);

  const deleteHandler = () => {
    axios.delete("http://localhost:8080/clientes/delete/" + idSelected ).then(response => {
      window.location.reload(true);
    }).catch((error) => {
      console.log(error);
    });
  }

  const filterBySearch = (event) => {
    const query = event.target.value;
    var updatedList = [...post];

    updatedList = updatedList.filter((item) =>
      item.nome.toLowerCase().indexOf(query.toLowerCase()) !== -1
    );

    setFilteredList(updatedList);
  };

  const [open, setOpen] = new useState(false);
  const handleClickOpen = (e, userId) => {
    e.preventDefault();
    setIdSelected(userId);
    setOpen(true);
  };

  const handleClose = (e) => {
    e.preventDefault();
    setOpen(false);
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
            <div>
              <Button variant="outlined" color="error" onClick={e => handleClickOpen(e, user.id)}>
                Excluir
              </Button>
            </div>
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
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">
              {"Tem certeza que deseja excluir esse item??"}
            </DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                Essa é uma ação permanente.
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Cancelar</Button>
              <Button onClick={deleteHandler} autoFocus>
                Confirmar
              </Button>
            </DialogActions>
          </Dialog>
        </article>
        <Link className="button is-success" to={'/new-user'}>Adicionar cliente</Link>
      </section>
    </div>
  );
}