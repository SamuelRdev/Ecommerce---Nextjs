import Head from 'next/head'
import Image from 'next/image'
import PostList from '../components/PostList'
import styles from '../styles/Layout.module.css'

export default function Home({posts}) {
  console.log(posts)
  return (
    <div>
      <h1>Post list</h1>
      <PostList posts={posts}/>
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=8`)

  const posts = await res.json()

  return{
    props:{
      posts
    }
  }
}
