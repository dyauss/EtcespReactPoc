import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import ReactDOM from 'react-dom/client';

//new
import { useMemo } from "react";
import InfiniteScroll from "react-infinite-scroll-component"
import { useInfiniteQuery } from "@tanstack/react-query";

//Pages
import Root from './pages/root/root.tsx';
import ErrorPage from "./pages/error/Error.tsx";
import Index from './pages/index/Index.tsx';
import Home from './pages/home/Home.tsx';
import Users from './pages/users/Users.tsx';
import Login from './pages/login/Login.tsx';
import NewUser from './pages/user/NewUser.tsx';
import User from './pages/user/User.tsx';

//Components
import { Navbar } from './shared/components';
import Protected from './shared/components/protected/Protected.tsx';

//Interfaces
import { ResponseAPI } from "./shared/interfaces/index.ts";

//Imports
import { Loading } from './shared/components/loading/Loading.tsx';
import { Card } from './shared/components/card/Card.tsx';

const fetcher = (page: number): Promise<ResponseAPI> => fetch(`http://localhost:8080/clientes/pages?page=${page}`).then(res => res.json())


export default function App() {
  const [isSignedIn, setIsSignedIn] = useState(null)

  function ToggleSignedInn() {
    isSignedIn === true ? setIsSignedIn(false) : setIsSignedIn(true);
  }

  function testFunction() {
    console.log("Funcionando");
  }

  const color = 'red';

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

  const characters = useMemo(() => data?.pages.reduce((prev, page) => {
    return {
        info: page.info,
        results: [...prev.results, ...page.results]
    }
  }), [data])
  
  if (status === 'loading') return <Loading />

  if (status === 'error') return <h4>Ups! </h4>

  // return (
  //   <div>
  //     <h1 className="title">React Infinite Scroll</h1>

  //     <InfiniteScroll
  //       dataLength={characters ? characters.results.length : 0}
  //       next={() => fetchNextPage()}
  //       hasMore={!!hasNextPage}
  //       loader={<Loading />}
  //     >
  //       <div className="grid-container">
  //         {
  //           characters && characters.results.map(character => (
  //             <Card key={character.id} character={character} />
  //           ))
  //         }
  //       </div>
  //     </InfiniteScroll>

  //   </div>
  // )

  return (
    <BrowserRouter>
      <Navbar
        color = {color}
        ToggleSignedInn = {ToggleSignedInn}
        isSignedIn = {isSignedIn}
       />
      <Routes>
        <Route path="/" element={<Index />} errorElement={<ErrorPage />} />
        <Route 
          path="home" 
          element={
            <Protected isSignedIn={isSignedIn}>
              <Home />
            </Protected>
          } 
        />
        <Route path="users" element={<Users />} />
        <Route path="new-user" element={<NewUser />} />
        <Route path="user/:userId" element={<User />} />
        {/*<Route path="user" element={<User />} />*/}
        <Route path="login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}