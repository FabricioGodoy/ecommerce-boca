'use client'
import first from '@public/images/VAGOS/IMG_4287.png'
import second from '@public/images/VAGOS/IMG_4305.png'
import styles from '@styles/components/Cards.module.css'
import { Badge, Image, Text } from '@mantine/core'
import NextImage, { StaticImageData } from 'next/image';
import { formatCurrency } from '@/utils/formaters'
import { BaseSyntheticEvent, useState } from 'react'
import Link from 'next/link'

const ProductCard = () => {

    const [mainPic, setMainPic] = useState<StaticImageData>(first)

    const handleHover = (e: BaseSyntheticEvent) => {
        if(e.target.id === 'second') {
            setMainPic(second)
        } else {
            setMainPic(first)
        }
    }

    const handleMouseLeave =()=> {
        setMainPic(first)
    }

    return (
        <Link href={'/producto'} className={styles.main_link}>
            <div className={styles.main_card}>
                <Badge  className={styles.chip_card} color="primaryOro" radius="md">{'Nuevo'}</Badge >
                <Image
                    component={NextImage}
                    alt={'nombre producto'}
                    src={mainPic}
                    objectFit={'cover'}
                    width={311}
                    height={311}
                    className={styles.main_image}
                />

                <div className={styles.main_text}>
                    <Text fw={600}>Remera japones</Text>
                    <Text>Remera | Oversize</Text>
                    <Text>{formatCurrency(100000)}</Text>
                </div>

                <div className={styles.preview_image_container}>
                    <Image
                        component={NextImage}
                        onMouseEnter={handleHover}
                        onMouseLeave={handleMouseLeave}
                        alt={'nombre producto'}
                        src={first}
                        objectFit={'cover'}
                        className={styles.preview_image}
                        id='first'
                    />
                    <Image
                        component={NextImage}
                        onMouseEnter={handleHover}
                        onMouseLeave={handleMouseLeave}
                        alt={'nombre producto'}
                        src={second}
                        objectFit={'cover'}
                        className={styles.preview_image}
                        id='second'
                    />
                </div>
            </div>
        </Link>
    )
}

export default ProductCard