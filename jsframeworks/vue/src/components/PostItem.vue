<template>
   <div class="post">
      <div>
         <div><strong>Title:</strong>{{post.title}}</div>
         <div><strong>Description:</strong>{{post.body}}</div>
         <div>likes = {{ $store.state.likes }}</div>
      </div>
      <div class="post__btns">
         <my-button
            @click="$emit('remove', post)"
         >
            Delete
         </my-button>
         <my-button
            @click="$router.push(`/posts/${post.title}`)"
         >
            Open
         </my-button>
      </div>
   </div>
</template>

<script>
export default{
   props:{
      post:{
         type: Object,
         require: true,
      }
   }
}
</script>

<style>
.post__btns{
   margin: 0 0 0 91%;
   display: grid;
}
</style>