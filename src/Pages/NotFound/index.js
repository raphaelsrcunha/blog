import MainButton from 'Components/MainButton'
import styles from './NotFound.module.css'
import erro404 from 'assets/erro_404.png'
import { useNavigate } from 'react-router-dom'

export default function NotFound() {

    const navigate = useNavigate();

    return (
        <>
            <div className={styles.conteudoContainer}>
                <span className={styles.texto404}>404</span>
                
                <h1 className={styles.titulo}>Ops! Page Not Found.</h1>
                <p className={styles.paragrafo}>
                    Are you sure that was it you are looking for?    
                </p>                      
                <div 
                    className={styles.botaoContainer}
                    onClick={() => navigate(-1)}
                >
                    <MainButton length="lg">Go back</MainButton>
                </div>
                <img 
                    className={styles.imagemCachorro} 
                    src={erro404} 
                    alt='dog'
                />
            </div>

            <div className={styles.espacoEmBranco}>

            </div>
        </>
    )
}