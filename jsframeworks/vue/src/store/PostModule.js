export const postModule = {
   state: () => ({
      posts: [],
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
   }),
   getters:{
      sortedPosts(state){
         return[...state.posts].sort((post1, post2) => post1[state.selectedSort]?.localeCompare(post2[state.selectedSort]))
      },
      sortedAndSearchedPosts(state, getters){
         return getters.sortedPosts.filter(post => post.title.toLowerCase().includes(state.searchQuery.toLowerCase()))
      }
   },
   mutations:{
      setPosts(state, posts){
         state.posts = posts;
      },
      setLoading(state, bool){
         state.isPostsLoading = bool
      },
      setPage(state, page) {
         state.page = page
      },
      setSelectedSort(state, selectedSort){
         state.selectedSort = selectedSort
      },
      setSearchQuery(state, searchQuery){
         state.searchQuery = searchQuery
      },
      setTotalPages(state, totalPages){
         state.totalPages = totalPages
      },
      setCreateBtn(state, createBtn){
         state.createBtn = createBtn
      },
   },
   actions:{
      async fetchPosts({state, commit}){
         try{
           commit('setLoading', true);
           commit('setCreateBtn', false);
           setTimeout( async () => {
               const response = await axios.get('https://jsonplaceholder.typicode.com/posts',{
                  params:{
                     _page: state.page,
                     _limit: state.limit,
                  }
               });
               commit('setTotalPages',Math.ceil(response.headers['x-total-count'] / state.limit))          
               commit('setPosts', response.data)
               commit('setLoading', false);
               commit('setCreateBtn', true);
            }, 1000)
         } catch(e){
           alert('ERROR')
         }
      },
      async loadMorePosts({state, commit}){
         try{
           commit('setPage', state.page + 1)
           setTimeout( async () => {
               const response = await axios.get('https://jsonplaceholder.typicode.com/posts',{
                  params:{
                     _page: state.page,
                     _limit: state.limit,
                  }
               });
               commit('setTotalPages', Math.ceil(response.headers['x-total-count'] / state.limit))          
               commit('setPosts',[...state.posts, ...response.data]);
            }, 1000)
         } catch(e){
           alert('ERROR')
         }
       }
   },
   namespaced: true
}
//2:33:33