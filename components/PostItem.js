
import Link from 'next/Link'
import stylesPost from '../styles/Post.module.css'


const PostItem = ({post}) => {
    return ( 
            <Link href="/post/[id]" as={`/post/${post.id}`}>
                <a className={stylesPost.card}>
                    <h3>{post.title} &rarr;</h3>
                    <p>{post.body}</p>
                </a>
            </Link>
     );
}
 
export default PostItem;