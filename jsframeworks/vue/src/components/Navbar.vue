<template>
   <div class="nav">
      <h4 @click="$router.push('/')" class="nav__title">VueJS</h4>
      <div class="nav__btns">
         <my-button @click="$router.push('/posts')">POSTS</my-button>
         <my-button @click="$router.push('/')">MAIN</my-button>
         <my-button @click="$router.push('/store')">STORE</my-button>
         <my-button @click="$router.push('/composition')">COMPOSITION</my-button>
      </div>
   </div>
</template>

<script>
export default {
}
</script>

<style>
.nav{
   height: 100px;
   background-color: rgb(243, 243, 243);
   box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.48);
   display: flex;
}
.nav__btns{
   align-items: center;
   margin: 0 0 0 88%;

}
h4{
   display: flex;
   align-items: center;
   letter-spacing: 4px;
   margin: 0 0 0 1%;
}
</style>