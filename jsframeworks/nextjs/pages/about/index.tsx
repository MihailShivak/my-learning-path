import React from "react";
import Router from 'next/router';
import { MainLayout } from "../../components/MainLayout";

export default function About({title}){
   const linkClickHandler = () => {
      Router.push('/')
   }

   return(
      <MainLayout>
         <h1>{title}</h1>
         <button onClick={linkClickHandler}>Go back to Home</button>
         <button onClick={() => Router.push('/posts')}>Go Post</button>
         <style jsx>{`
            h1{
               height: 60px;
               display: flex;
               justify-content: center;
            } 
            button {
               margin: 50px 0 0 0;
            }
         `}</style>
      </MainLayout>
   )
}


About.getInitialProps = async() => {
   const response = await fetch('http://localhost:4200/about')
   const data = await response.json()

   return{
      title:data.title
   }
}