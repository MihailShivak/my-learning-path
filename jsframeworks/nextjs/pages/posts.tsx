import { NextPageContext } from "next";
import Link from "next/link";
import { useState, useEffect } from "react";
import { MainLayout } from "../components/MainLayout";
import { MyPost } from "../interfaces/Post";

interface PostsPageProps{
   posts:MyPost[]
}

export default function Posts({posts: serverPosts}: PostsPageProps){
    const[posts, setPosts] = useState(serverPosts)
    useEffect(()=>{
       async function load(){
          const response = await fetch('http://localhost:4200/posts')
          const json = await response.json()
          setPosts(json)
       }
       if(!serverPosts){
         load()
       }
    },[])

    if(!posts){
       return <MainLayout>
          <p>Loading...</p>
       </MainLayout>
    }


   return(
      <MainLayout>
         <h1>
            Posts Page
         </h1>
         <style jsx>{`
            h1{
               height: 60px;
               display: flex;
               justify-content: center;
            } 
            ul{
               margin: 100px 0 0 0;
            }
         `}</style>
         <ul>
            {posts.map (post => (
               <li key={post.id}>
                  <Link href={`/post/${post.id}`}>
                     <a>{post.title}</a>
                  </Link>
               </li>
            ))}
         </ul>
      </MainLayout>
   )
}


Posts.getInitialProps = async({req}: NextPageContext) => {
   if(!req){
      return{posts:null}
   }

   const response = await fetch('http://localhost:4200/posts')
   const posts: MyPost[] = await response.json()

   return{
      posts
   }
}