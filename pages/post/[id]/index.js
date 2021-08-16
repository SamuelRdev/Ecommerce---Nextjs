import { useRouter } from "next/dist/client/router";
import Link from 'next/Link'

const post = ({post}) => {
    //const router = useRouter();
    //const {id} = router.query

    return ( 
        <div>
            <h1>{post.id}</h1>
            <p>{post.body}</p>
            <br/>
            <Link href="/">Retour à la page d'accueil</Link>
        </div>
     );
}

export const getStaticProps = async (context) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)
    const post = await res.json()

    return {
        props: {
            post
        }
    }
}

export const getStaticPaths = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/`)
    const post = await res.json()
    const ids = post.map(post=>post.id)
    const paths = ids.map((id)=>{params:{id:id.toString()}})
   
    return {
        paths: {
            paths,
            fallback: false
        }
    }
}
 
export default post;
