import HomeCarousel from "@/components/homePage/HomeCarousel";
import { Container } from "@mantine/core";
import styles from '@styles/pages/HomePage.module.css'
import NewestProducts from "@/components/homePage/NewestProducts";
import CategoriesSection from "@/components/homePage/CategoriesSection";

export default function Home() {
    return (
        <Container fluid component={'main'} className={styles.homeContainer}>
            <HomeCarousel />
            <NewestProducts/>
            <CategoriesSection/>
        </Container>
    );
}
