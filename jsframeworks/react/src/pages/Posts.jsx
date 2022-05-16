
import React,{ useEffect, useMemo, useRef, useState } from 'react';
import PostService from '../API/PostService';
import PostFilter from '../components/PostFilter';
import PostForm from '../components/PostForm';
import PostList from '../components/PostList';
import MyButton from '../components/UI/button/MyButton';
import Loader from '../components/UI/Loader/Loader'
import MyModal from '../components/UI/MyModal/MyModal';
import { useFetching } from '../hooks/useFetching';
import { usePosts } from '../hooks/usePosts';
import { getPageCount, getPagesArray } from '../utils/page';
import '../styles/App.css';
import Pagination from '../components/UI/pagenation/pagenation';

function Posts() {
  
  const [posts, setPosts] = useState([
  ])
  const [filter, setFilter] = useState({sort:'', query:''})
  const [modal, setModal] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
  const lastElement = useRef();
  const observer = useRef();

  const [fetchPosts, isPostsLoading, postError] = useFetching(async (limit, page) => {
    const response = await PostService.getAll(limit, page);
    setPosts([...posts, ...response.data])
    const totalCount = response.headers['x-total-count']
    setTotalPages(getPageCount(totalCount, limit));
  })

  /*const [title, setTitle] = useState("")
  const [body, setBody] = useState("")*/
  /*const bodyInputRef = useRef();*/

  useEffect(() => {
    if(isPostsLoading) return;
    if(observer.current) observer.current.disconnect();
    var callback = function(entries, observer){
      if(entries[0].isIntersecting && page < totalPages){
        setPage(page+1)
      }
    };
    observer.current = new IntersectionObserver(callback);
    observer.current.observe(lastElement.current)
  },[isPostsLoading])

  useEffect(()=>{
    fetchPosts(limit, page)
  },[page])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
    setModal(false)
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  const changePage = (page) => {
    setPage(page)
  }

  return (
    <div className="Posts">
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost}/>
      </MyModal>
      <PostFilter 
        filter={filter}
        setFilter={setFilter}
      />
      <MyButton onClick={() => setModal(true)}>
        Создать
      </MyButton>
      {postError &&
        <h1>Произошла ошибка ${postError}</h1>
      }
      {isPostsLoading &&
        <div style={{display: "flex", justifyContent: 'center'}}><Loader/></div>
      }
      
      <PostList remove={removePost} posts={sortedAndSearchedPosts} title="заголовок для поля с инпутами, кнопками и удалением"/>
      <div ref={lastElement} style={{height:20, background:"red"}}>

      </div>
      <Pagination page={page} changePage={changePage} totalPages={totalPages}/>
    </div>
  );
};

export default Posts;
