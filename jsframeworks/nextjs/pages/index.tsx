import Link from "next/link";
import Head from "next/head";
import { MainLayout } from "../components/MainLayout";

export default function Index(){
   return(
      <MainLayout>
         <Head>
            <title>NextJS</title>
         </Head>
         <h1>Hello Next.JS</h1>
         <p><Link href={'/about'}><a>About</a></Link></p>
         <p><Link href={'/posts'}><a>Posts</a></Link></p>
         <p>lorem ipsum dolor sit amet, consectetur</p>
         <style jsx>{`
            h1{
               height: 60px;
               display: flex;
               justify-content: center;
            } 
         `}</style>
      </MainLayout>
   )
}