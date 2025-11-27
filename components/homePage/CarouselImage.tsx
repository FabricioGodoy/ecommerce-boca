'use client'
import { CarouselSlide } from '@mantine/carousel'
import { Image, Overlay, Text } from '@mantine/core';
import NextImage, { StaticImageData } from 'next/image';
import styles from '@styles/pages/HomePage.module.css'
import { useState } from 'react';
import { ChevronRight } from "@mynaui/icons-react";
import { useRouter } from 'next/navigation';

interface CarouselImageComponent {
    imageSrc : StaticImageData
    imageLink ?: string
    imageText ?: string
}

const CarouselImage = ({ imageSrc, imageLink, imageText } : CarouselImageComponent) => {
    const router = useRouter()

    const [displayOverlay, setDisplayOverlay] = useState(false)

    const handleTextHover = (type : 'enter' | 'leave') => {
        if(type === 'enter' && imageText) {
            setDisplayOverlay(true)
        } else {
            setDisplayOverlay(false)
        }
    }

    const handleImageClick = () => {
        imageLink && router.push(imageLink)
    }

    return (
        <CarouselSlide 
            onMouseEnter={()=>handleTextHover('enter')} 
            onMouseLeave={()=>handleTextHover('leave')} 
            onClick={handleImageClick}
        >
            {
                displayOverlay && <div className={styles.carousel_hover_overlay}>
                    <div className={styles.carousel_hover_overlay_text_container}>
                        <Text size='xl'>
                            {imageText}
                        </Text>
                        <ChevronRight size={'2rem'}/>
                    </div>
                    <Overlay color="#000" backgroundOpacity={0.75} />
                </div>
            }
            <Image
                component={NextImage}
                src={imageSrc}
                alt='boke'
                fit='cover'
                h={'80dvh'}
                
            />
        </CarouselSlide>
    )
}

export default CarouselImage