import styles from "./About.module.css"
import PostModel from "Components/PostModel";
import coverPhoto from "assets/sobre_mim_capa.png"

export default function About() {
    return (
        <PostModel
            coverPhoto={coverPhoto}
            title={"About"}
        >
            <h3 className={styles.subtitle}>

            </h3>

        </PostModel>
    )
}