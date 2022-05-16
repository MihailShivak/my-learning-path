<template>
<div>
  <!-- <input type="text" v-model.trim="modificatorValue"> -->
  <my-input
    v-focus
   :model-value="searchQuery"
   @update:model-value='setSearchQuery'
    placeholder="SEARCH..."
  /> 
  <div v-if="!createBtn"></div>
  <my-button v-else @click="showDialog">Create</my-button>
  <my-select
    :model-value="selectedSort"
    @update:model-value='setSelectedSort'
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
import { mapState, mapMutations, mapActions, mapGetters } from 'vuex';
import axios from "axios";
export default {
  components: {
    PostForm, PostList,
    MyButton, MySelect,
    MyInput,
  },
  data(){
    return{
      dialogVisible: false,
    }
  },
  methods:{
    ...mapMutations({
      setPage: 'post/setPage',
      setSearchQuery: 'post/setSearchQuery',
      setSelectedSort:'post/setSelectedSort'
    }),
    ...mapActions({
      loadMorePosts:'post/loadMorePosts',
      fetchPosts: 'post/fetchPosts',
    }),
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

  },
  mounted(){
    this.fetchPosts();
    // this.fetchPosts();
    // console.log(this.$refs.observer);
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
    ...mapState({
      posts: state => state.post.posts,
      isPostsLoading: state => state.post.isPostsLoading,
      createBtn: state => state.post.createBtn,
      selectedSort: state => state.post.selectedSort,
      searchQuery: state => state.post.searchQuery,
      page: state => state.post.page,
      limit: state => state.post.limit,
      totalPages: state => state.post.totalPages,
      sortOptions: state => state.post.sortOptions,
    }),
    ...mapGetters({
      sortedPosts: 'post/sortedPosts',
      sortedAndSearchedPosts: 'post/sortedAndSearchedPosts'
    }),
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
