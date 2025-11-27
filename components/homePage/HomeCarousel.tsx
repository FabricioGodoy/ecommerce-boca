import { Carousel } from '@mantine/carousel'
import boca from '@public/images/VAGOS/IMG_3990.png'
import primera from '@public/images/VAGOS/IMG_4411.png'
import segunda from '@public/images/VAGOS/IMG_4260.png'
import styles from '@styles/pages/HomePage.module.css'
import CarouselImage from './CarouselImage'
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
                <CarouselImage
                    imageSrc={primera}
                    imageLink='/product/123'
                    imageText='Remera boca'
                />
                <CarouselImage
                    imageSrc={boca}
                />
                <CarouselImage
                    imageSrc={segunda}
                />
            </Carousel>
        </div>
    )
}

export default HomeCarousel