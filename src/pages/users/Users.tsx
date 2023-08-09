import './Users.css';

// import $ from "jquery"

import { Form } from "react-router-dom";
import { Link } from "react-router-dom";

import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import axios from "axios";
import React, { useState } from 'react';

//new
import { useMemo } from "react";
import InfiniteScroll from "react-infinite-scroll-component"
import { useInfiniteQuery } from "@tanstack/react-query";

//Interfaces
import { ResponseAPI } from "./shared/interfaces/index.ts";

//Imports
import { Loading } from '../../shared/components/loading/Loading.tsx';
import { Card } from '../../shared/components/card/Card.tsx';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const baseURL = "http://localhost:8080/clientes";

const fetcher = (page: number): Promise<ResponseAPI> => fetch(`http://localhost:8080/clientes/pages?page=${page}`).then(res => res.json())

export default function Users() {

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

  const { data, error, fetchNextPage, status, hasNextPage } = useInfiniteQuery(
    ['characters'],
    ({ pageParam = 1 }) => fetcher(pageParam),
    {
      getNextPageParam: (lastPage: ResponseAPI) => {
        const previousPage = lastPage.info.prev ? +lastPage.info.prev.split('=')[1] : 0
        const currentPage = previousPage + 1;

        if (currentPage === lastPage.info.pages) return false;
        return currentPage + 1;
      }
    }
  )

  const characters = useMemo(() => data?.pages.reduce((prev, page)=> {
    return {
      info: page.info,
      results: [...prev.results, ...page.results]
    }
  }), [data])

  const renderElement = (post) => {

      if (status === 'loading') return <Loading />

      if (status === 'error') return <h4>Error </h4>

      return (
        <div>
          <InfiniteScroll
            dataLength={characters ? characters.results.length : 0}
            next={() => fetchNextPage()}
            hasMore={!!hasNextPage}
            loader={<Loading />}
          >
              {
                characters && characters.results.map(character => (

                  <Link className="panel-block" to={"/user/" + 1 } key="1">
                    <div>
                      <span className="panel-icon">
                        <FontAwesomeIcon icon={faUser} />
                      </span>
                      { character.nome }
                    </div>
                    <div>
                      <Button variant="outlined" color="error" onClick={e => handleClickOpen(e, character.id)}>
                        Excluir
                      </Button>
                    </div>
                  </Link>

                  // <Card key={character.id} character={character} />
                ))
              }
          </InfiniteScroll>

        </div>
      )
}


  return (
    <div className="container">

      <section className="section is-small">
        <h1 className="title">Lista de clientes</h1>
        <h2 className="subtitle">
          Abaixo estarão listados os <strong>clientes</strong> do sistema.
        </h2>

        <Link className="button is-success mb-5" to={'/new-user'}>Adicionar cliente</Link>
        <article className="panel is-black has-background-white ">
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
        <h2>Using CKEditor 5 build in React</h2>
                <CKEditor
                    editor={ ClassicEditor }
                    data="<p>Hello from CKEditor 5!</p>"
                    onReady={ editor => {
                        // You can store the "editor" and use when it is needed.
                        console.log( 'Editor is ready to use!', editor );
                    } }
                    onChange={ ( event, editor ) => {
                        const data = editor.getData();
                        console.log( { event, editor, data } );
                    } }
                    onBlur={ ( event, editor ) => {
                        console.log( 'Blur.', editor );
                    } }
                    onFocus={ ( event, editor ) => {
                        console.log( 'Focus.', editor );
                    } }
                />
      </section>
    </div>
  );
}