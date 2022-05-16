import { NextPageContext } from "next"
import { useRouter } from "next/router"
import { useState } from "react"
import { useEffect } from "react/cjs/react.development"
import { MainLayout } from "../../components/MainLayout"
import { MyPost } from "../../interfaces/Post"

interface PostPageProps{
   post:MyPost
}

export default function Post({post: serverPost}: PostPageProps){
   const router = useRouter()
   const[post, setPost] = useState(serverPost)
   useEffect(()=>{
      async function load(){
         const response = await fetch(`http://localhost:4200/posts/${router.query.id}`)
         const data = await response.json()
         setPost(data)
      }
      if(!serverPost){
         load()
      }
   },[])


   if(!post){
      return <MainLayout>
         <p>Loading...</p>
      </MainLayout>
   }


   return(
      <MainLayout>
         <h1>
            {post.title}
         </h1>
         <hr/>
         <p>{post.body}</p>
      </MainLayout>
   )
}

interface PostNextPageContext extends NextPageContext{
   query:{
      id:string,
   }
}

Post.getInitialProps = async ({query, req}: NextPageContext) => {
   if(!req){
      return{post: null}
   }
   const response = await fetch(`http://localhost:4200/posts/${query.id}`)
   const post: MyPost = await response.json()


   return{
      post
   }
}




// export async function getServerSideProps({query, req}){
//    if(!req){
//       return{post: null}
//    }
//    const response = await fetch(`http://localhost:4200/posts/${query.id}`)
//    const post = await response.json()
//    return{props:{posts}}
// }