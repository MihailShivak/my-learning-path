import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { IPost } from "../models/IPost";
import { postAPI } from "../service/PostService";
import PostItem from "./PostItem";

const PostContainer = () => {
   const [limit, setLimit] = useState(100);
   const {data: posts, error, isLoading, refetch} = postAPI.useFetchAllPostsQuery(limit/*, {
      pollingInterval: 1000
   }*/)
   const[createPost, {}] = postAPI.useCreatePostsMutation()
   const[updatePost, {}] = postAPI.useUpdatePostMutation()
   const[deletePost, {}] = postAPI.useDeletePostMutation()

   useEffect(() => {
      // setTimeout(()=>{
      //    setLimit(3)
      // }, 2000)
   }, [])

   const handleCreate =async () => {
      const title = prompt()
      await createPost({title, body: title} as IPost)
   }

   const handleRemove = (post: IPost) => {
      deletePost(post)
   }
   const handleUpdate = (post: IPost) => {
      updatePost(post)
   }


   return (
      <div>
         <div style={{fontSize: "10px"}} className="post__list">
            <button onClick={handleCreate}>Add new post</button>
            {isLoading && <h1>Is Loading...</h1>}
            {error && <p>Произошла ошибка</p>}
            {posts && posts.map(post => 
               <PostItem remove={handleRemove} update={handleUpdate} key={post.id} post={post}/>   
            )}
         </div>
      </div>
   );
};



export default PostContainer;