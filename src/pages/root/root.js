import 'bulma/css/bulma.min.css';

import { Navbar } from '../../shared/components';
import { Homescreen } from '../../shared/components';

import axios from "axios";
import React from "react";
import { Outlet } from "react-router-dom";

const baseURL = "https://jsonplaceholder.typicode.com/posts/1";

// <Homescreen props={post.body}/>

export default function Root() {

  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
  }, []);

  if (!post) return null;

  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}