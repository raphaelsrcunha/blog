import { Link } from "react-router-dom"
import styles from "./Post.module.css"
import myPhoto  from 'assets/profile.png'
import MainButton from "Components/MainButton"


export default function PostCard ({ post }) {
    return (
        <Link to={`/posts/${post.id}`}>
            <div className={styles.post}>
                <img 
                    className={styles.photo}
                    src={myPhoto}
                    alt=""
                />

                <h2 className={styles.tile}>
                    {post.titulo}
                </h2>

                <MainButton>
                    Read
                </MainButton>
            </div>
        </Link>
    )
}