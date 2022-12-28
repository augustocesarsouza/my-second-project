import { useEffect, useMemo, useRef, useState } from 'react';
import './App.css';

const Posts = ({ post, handleClick }) => {
  console.log('Filho Renderizou')
  return (
    <div key={post.id} className="post">
      <h1 style={{ fontSize: '2rem' }}
        onClick={() => handleClick(post.title)}>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  )
}

function App() {
  const [posts, setPosts] = useState([]);
  const [value, setValue] = useState('');
  const input = useRef(null);

  console.log('Pai renderizou!')

  // Component did mount
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(r => r.json())
      .then(r => setPosts(r))
  }, []);

  useEffect(() => {
    input.current.focus()
    console.log(input.current)

  }, [value]);

  const handleClick = (value) => {
    setValue(value)
  }

  return (
    <div className='App'>
      <p>
        <input
          type="search"
          ref={input}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </p>
      {useMemo(() => {
        return posts.length > 0 &&
          posts.map(post => {
            return <Posts key={post.id} post={post} handleClick={handleClick} />
          })
      }, [posts])}
      {posts.length <= 0 && (<p>Ainda não existe post</p>)}
    </div>
  )
}

export default App;