import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Root from './component/root/Root.jsx';
import Home from './component/home/Home.jsx';
import Mobiles from './component/mobiles/Mobiles.jsx';
import Laptop from './component/laptop/Laptop.jsx';
import Users from './users/Users.jsx';
import Users2 from './component/users2/Users2.jsx';
import Userdetails from './component/userDetails/Userdetails.jsx';
import User3 from './component/user3/User3.jsx';
import Posts from './component/posts/Posts.jsx';
import PostDetail from './component/postDetail/PostDetail.jsx';
import User4 from './component/user4/User4.jsx';

const userPromise = fetch("https://jsonplaceholder.typicode.com/posts").then(res => res.json());
const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "mobiles", Component: Mobiles },
      { path: "laptops", Component: Laptop },
      {
        path: "users",
        loader:()=>fetch("https://jsonplaceholder.typicode.com/users"),
        Component: Users
      },
     
      {
        path: "users2",
        element: <Suspense fallback={<span>Loadin....</span>}>
          
         <Users2 userPromise={userPromise}></Users2>
        </Suspense>
      },

      // : dile dynamic hobe...
      {
        path: 'users/:userId',
        loader:({params})=>fetch(`https://jsonplaceholder.typicode.com/posts/${params.userId}`),
        Component:User4

      },
      {
        path: 'posts',
       
        loader:()=>fetch(`https://jsonplaceholder.typicode.com/posts`),
        Component:Posts
        
      },
      {
        path: 'posts/:postId',
       
        loader:({params})=>fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
        Component:PostDetail
        
      },
      {
        path: 'users/:userId',
        loader: ({ params }) => {
          console.log("params inside:",params.userId);
          fetch(`https://jsonplaceholder.typicode.com/users`)
        },
        Component:Userdetails
        
      }
    ]
  },
  {
    path: "about",
    element: <div>About me here</div>
  },
  {
    path: "blogs",
    element: <div>All my blogs are here</div>
  },
  {
    path: "app",
   Component:App
  },
]);+

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
