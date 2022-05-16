<template>
<div>
  <!-- <input type="text" v-model.trim="modificatorValue"> -->
  <my-input
    v-focus
    v-model="searchQuery"
    placeholder="SEARCH..."
  />
  <div v-if="!createBtn"></div>
  <my-button>Create</my-button>
  <my-select
    v-model="selectedSort"
    :options="sortOptions"
  />
  <my-dialog v-model:show="dialogVisible">
    <post-form
    />
  </my-dialog>
  <post-list 
    :posts="sortedAndSearchedPosts"
    v-if="!isPostsLoading"
  />
  <h1 style="text-align: center; padding:20% 45% 0 45%;" v-else>IS POSTS LOADING...</h1>
</div>
</template>

<script>
import PostForm from "@/components/PostForm.vue";
import PostList from "@/components/PostList.vue";
import MyButton from '@/components/UI/MyButton.vue';
import MySelect from '@/components/UI/MySelect.vue';
import MyInput from '@/components/UI/MyInput.vue';
import axios from "axios";
import {ref} from 'vue';
import usePosts from '@/hooks/usePosts';
import useSortedPosts from '@/hooks/useSortedPosts';
import useSortedAndSearchedPosts from '@/hooks/useSortedAndSearchedPosts';
export default {
  components: {
    PostForm, PostList,
    MyButton, MySelect,
    MyInput,
  },
  data(){
    return{
      dialogVisible: false,
      sortOptions:[
        {value:'title', name:'by name'},
        {value:'body', name:'by content'},
      ]
    }
  },
  setup(props){
    const{posts, totalPages, isPostsLoading, createBtn} = usePosts(10);
    const {sortedPosts, selectedSort} = useSortedPosts(posts);
    const{searchQuery, sortedAndSearchedPosts} = useSortedAndSearchedPosts(sortedPosts);
    return{
      posts,
      totalPages,
      isPostsLoading,
      sortedPosts,
      selectedSort,
      searchQuery,
      sortedAndSearchedPosts, 
      createBtn,
    }
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
