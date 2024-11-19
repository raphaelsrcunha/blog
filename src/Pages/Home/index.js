import styles from "./Home.module.css";
import PostCard from "Components/PostCard";
import posts from "assets/json/posts.json";

export default function Home() {
    return (            
        <ul className={styles.posts}>
            {posts.map((post) => (
                <li key={post.id}>
                    <PostCard post={post} />
                </li>
            ))}
        </ul>

    )
}