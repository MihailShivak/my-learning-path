<template>
   <div v-if="posts.length > 0">
      <h3>Post List</h3>
      <post-item
         v-for="post in posts"
         :key="post.id"
         :post="post"
         @remove="$emit('remove',post)"
      />
   </div>
   <!--v-show="posts.length > 0"-->
   <h2 v-else style="text-align: center; margin: 50px 0 0 0">
      THE LIST OF POSTS IS EMPTY
   </h2>
   <!--v-show="posts.length === 0"-->
</template>

<script>
import PostItem from './PostItem.vue'
export default{
  components: { PostItem },
   props:{
      posts:{
         type:Array,
         required: true
      }
   }
}
</script>

<style>
.post{
  padding: 15px;
  border: 2px solid rgb(0, 149, 175);
  margin-top: 15px;
}
</style>
<!---->