<template>
<div>
  <!-- <input type="text" v-model.trim="modificatorValue"> -->
  <my-input
    v-focus
    v-model="searchQuery"
    placeholder="SEARCH..."
  />
  <div v-if="!createBtn"></div>
  <my-button v-else @click="showDialog">Create</my-button>
  <my-select
    v-model="selectedSort"
    :options="sortOptions"
  />
  <my-dialog v-model:show="dialogVisible">
    <post-form
      @create="createPost"
    />
  </my-dialog>
  <post-list 
    :posts="sortedAndSearchedPosts"
    @remove="removePost"
    v-if="!isPostsLoading"
  />
  <h1 style="text-align: center; padding:20% 45% 0 45%;" v-else>IS POSTS LOADING...</h1>
  <div v-intersection="loadMorePosts" class="observer"></div>
  <!-- <div class="page__wrapper">
    <div @click="changePage(pageNumber)" :class="{'current-page': page === pageNumber}" class="pageNumber" v-for="pageNumber in totalPages" :key="pageNumber">{{page}}</div>
  </div> -->
</div>
</template>

<script>
import PostForm from "@/components/PostForm.vue";
import PostList from "@/components/PostList.vue";
import MyButton from '@/components/UI/MyButton.vue';
import MySelect from '@/components/UI/MySelect.vue';
import MyInput from '@/components/UI/MyInput.vue';
import axios from "axios";
export default {
  components: {
    PostForm, PostList,
    MyButton, MySelect,
    MyInput,
  },
  data(){
    return{
      posts: [

      ],
      dialogVisible: false,
      isPostsLoading: false,
      createBtn: false,
      selectedSort: '',
      searchQuery: '',
      page: 1,
      limit: 10,
      totalPages: 0,
      sortOptions:[
        {value:'title', name:'by name'},
        {value:'body', name:'by content'},
      ]
    }
  },
  methods:{
    createPost(post){
      this.posts.push(post);
      this.dialogVisible = false
    },
    removePost(post){
      this.posts = this.posts.filter(p=>p.id !== post.id)
    },
    showDialog(){
      this.dialogVisible=true;
    },
    // changePage(pageNumber){
    //   this.page = pageNumber
    // },
    async fetchPosts(){
      try{
        this.isPostsLoading = true;
        this.createBtn = false;
        setTimeout( async () => {
          const response = await axios.get('https://jsonplaceholder.typicode.com/posts',{
            params:{
              _page: this.page,
              _limit: this.limit,
            }
          });
          this.totalPages = Math.ceil(response.headers['x-total-count'] / this.limit)          
          this.posts = response.data;
          this.isPostsLoading = false;
          this.createBtn = true;
        }, 1000)
      } catch(e){
        alert('ERROR')
      }
    },
    async loadMorePosts(){
      try{
        this.page += 1;
        setTimeout( async () => {
          const response = await axios.get('https://jsonplaceholder.typicode.com/posts',{
            params:{
              _page: this.page,
              _limit: this.limit,
            }
          });
          this.totalPages = Math.ceil(response.headers['x-total-count'] / this.limit)          
          this.posts = [...this.posts, ...response.data];
        }, 1000)
      } catch(e){
        alert('ERROR')
      }
    }
  },
  mounted(){
    this.fetchPosts();
    console.log(this.$refs.observer);
    // const options ={
    //   rootMargin: '0px',
    //   threshold: 1.0
    // }
    // const callback = (entries, observer) => {
    //   if(entries[0].isIntersecting && this.posts.page < this.totalPages){
    //     this.loadMorePosts()
    //   }
    // };
    // const observer = new IntersectionObserver(callback, options);
    // observer.observe(this.$refs.observer);
  },
  computed:{
    sortedPosts(){
      
    },
    sortedAndSearchedPosts(){
      
    }
  },
  watch:{
    // page(){
    //   this.fetchPosts()
    // }
  }
}
</script>

<style>
.page__wrapper{
  display: flex;
  margin-top: 15px;
}
.pageNumber{
  border: 1px solid black;
  padding: 10px;
}
.observer{
  height: 30px;
}
</style>
