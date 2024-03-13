import { useState, useEffect, useCallback } from 'react';

import './Home.css';

import Posts from '../../component/Posts';
import loadPosts from '../../useful/loadPosts';
import SearchInput from '../../component/SearchInput/index';
import handleScroll from './../../useful/scroll-infinity';

const Home = () => {
	const [posts, setPosts] = useState([])
	const [allPosts, setAllPosts] = useState([])
	const [page, setPage] = useState(0)
	const [postsPerPage] = useState(8)
	const [searchValue, setSearchValue] = useState('')


	/* função async, usando o await para aguardar a resposta das duas fetch que foram feitas. e então tratando o dado até ser setado no state. 
		Se for ser chamado mais de um metodo no componentDidMount, então é melhor fazer em metodos separados e chama-los individualmente. Mas como no exemplo está apenas carregando uma api, então colocamos as ações no componentDidMount.
	*/

	const handleLoadPosts = useCallback(async (page, postsPerPage) => {
		const postsAndPhotos = await loadPosts();

		setPosts(postsAndPhotos.slice(0, postsPerPage));
		setAllPosts(postsAndPhotos);
	}, [])

	useEffect(() => {
    const loadPostsInPage = async () => {
      await handleLoadPosts();
    };

    const checkScroll = () => {
      const newPosts = handleScroll(page, postsPerPage, allPosts);

      if (newPosts.length) {
        setPosts((prevPosts) => [...prevPosts, ...newPosts]);
        setPage((prevPage) => prevPage + postsPerPage);
      }
    };

    loadPostsInPage();
    window.addEventListener('scroll', checkScroll);

    return () => {
      window.removeEventListener('scroll', checkScroll);
    };
  }, [page, postsPerPage, allPosts, handleLoadPosts]);

  const handleSearch = (e) => {
    const { value } = e.target;
    setSearchValue(value);
  };

  const filteredPosts = searchValue
    ? allPosts.filter((post) =>
        post.title.toLowerCase().includes(searchValue.toLowerCase())
      )
    : posts;

  return (
    <section className='container'>
      {!!searchValue && <h1>Search: {searchValue}</h1>}

      <SearchInput
        onChange={handleSearch}
        value={searchValue}
        className={'searchInput'}
        type={'search'}
        placeholder={'SearchInput'}
        data-testId={'input'}
      />

      {filteredPosts.length > 0 ? (
        <Posts posts={filteredPosts} />
      ) : posts.length > 0 ? (
        <h1>Desculpa, não encontramos nada.</h1>
      ) : (
        <h1>Carregando...</h1>
      )}
		</section>
	);
};

export default Home;
