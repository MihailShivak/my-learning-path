<template>
<form @submit.prevent>
   <h4>Create Post</h4>
   <my-input
      v-focus
      v-model="post.title"
      type="text" 
      placeholder="Title Post"
   />
   <my-input
      v-model="post.body" 
      type="text" 
      placeholder="Description Post"
   />
   <my-button class="btn" @click="createPost">Create</my-button>
 </form>
</template>

<script>
export default{
   data(){
      return{
         post:{
            title:'',
            body:'',
         }
      }
   },
   methods:{
      createPost(){
         this.post.id = Date.now();
         this.$emit('create', this.post)
         this.post = {
            title:'',
            body:'',
         }
      }
   }
}
</script>

<style>
form{
   text-align: center;
}
.btn{
   background: none;
   border: 1.5px solid teal;
   padding: 3px 20px 3px 20px;
   border-radius: 5px;
   display: flex;
   margin: 20px 0 0 50%;
}
</style>
<!--
-->