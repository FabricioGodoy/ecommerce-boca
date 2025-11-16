import styles from '@styles/pages/HomePage.module.css'

import ProductCard from '@components/cards/ProductCard'
import { Text } from '@mantine/core'

const NewestProducts = () => {
    return (
        <div className={styles.new_products_section}>
            <Text size='xl' fw={600}>Lo nuevo</Text>
            <div className={styles.new_products_container}>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
            </div>
        </div>
    )
}

export default NewestProducts