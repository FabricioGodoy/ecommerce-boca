import { Carousel, CarouselSlide } from '@mantine/carousel'
import boca from '@public/images/VAGOS/IMG_3990.png'
import primera from '@public/images/VAGOS/IMG_4411.png'
import segunda from '@public/images/VAGOS/IMG_4260.png'
import {Image} from '@mantine/core'
import styles from '@styles/pages/HomePage.module.css'
import NextImage from 'next/image';
const HomeCarousel = () => {

    return (
        <div className={styles.carousel}>
            <Carousel
                flex={1}
                slideSize="100%"
                height="100%"
                controlsOffset="xs"
                emblaOptions={{ loop: true, dragFree: false, align: 'center' }}
                controlSize={20}
                withControls
                withIndicators={true}
            >
                <CarouselSlide>
                    <Image
                        component={NextImage}
                        src={primera}
                        alt='boke'
                        fit='cover'
                        h={'100dvh'}
                    />
                </CarouselSlide>
                <CarouselSlide>
                    <Image
                        component={NextImage}
                        src={boca}
                        alt='boke'
                        fit='cover'
                        h={'100dvh'}
                    />
                </CarouselSlide>
                <CarouselSlide>
                    <Image
                        component={NextImage}
                        src={segunda}
                        alt='boke'
                        fit='cover'
                        h={'100dvh'}
                    />
                </CarouselSlide>
            </Carousel>
        </div>
    )
}

export default HomeCarousel