import styles from '@styles/pages/HomePage.module.css'
import primera from '@public/images/VAGOS/IMG_4411.png'
import segunda from '@public/images/VAGOS/IMG_4287.png'
import tercera from '@public/images/VAGOS/IMG_4307.png'
import cuarta from '@public/images/VAGOS/AZUL_DOS.png'
import CategoryTile from './CategoryTile'

const CategoriesSection = () => {
    return (
        <div className={styles.categories_container}>
            <CategoryTile imageSrc={primera.src} catText='Remeras' link='/'/>
            <CategoryTile imageSrc={segunda.src} catText='Oversize' link='/'/>
            <CategoryTile imageSrc={tercera.src} catText='Camperas' link='/'/>
            <CategoryTile imageSrc={cuarta.src} catText='Mayorista' link='/'/>
        </div>
    )
}

export default CategoriesSection