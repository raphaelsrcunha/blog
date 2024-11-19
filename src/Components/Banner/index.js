import styles from './Banner.module.css'
import coloredCircle from '../../assets/circulo_colorido.png'
import myPhoto  from '../../assets/profile.png'

export default function Banner() {
    return (
        <div className={styles.banner}>
            <div className={styles.presentation}>
                <h1 className={styles.title}>
                    blog
                </h1>

                <p className={styles.paragraph}>
                    Welcome to my blog! :)
                </p>
            </div>
            
            <div className={styles.images}>
                <img 
                    className={styles.coloredCircle}
                    src={coloredCircle} 
                    alt=''
                    aria-hidden={true}
                />
                <img
                    className={styles.myPhoto} 
                    src={myPhoto}
                    alt='myPhoto'
                />
            </div>
        </div>
    )
}