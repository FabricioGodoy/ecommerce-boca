'use client'
import { BackgroundImage, Overlay, Text } from '@mantine/core'
import styles from '@styles/pages/HomePage.module.css'
import Link from 'next/link'


interface CategoryTile {
    imageSrc : string
    link : string
    catText ?: string
}

const CategoryTile = ({ imageSrc, link, catText } : CategoryTile) => {
    return (
        <div className={styles.categories_square} >
            <BackgroundImage 
                src={imageSrc}
                component={Link}
                href={link}
            >
            </BackgroundImage>
            <Text c="white" size='xl'>
                {catText}
            </Text>
        </div>
    )
}

export default CategoryTile