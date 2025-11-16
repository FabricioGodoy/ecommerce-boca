import { navigationLinks } from "@/utils/navlinks"
import { AppShellNavbar, Button, NavLink } from "@mantine/core"
import Link from "next/link"
import styles from '@styles/Shell.module.css'


const MobileLinkList = () => {
    return (
        <AppShellNavbar flex={1}>
            <div className={styles.mobileNav}>
                <div className={styles.mobileLinksContainer}>
                    {
                        navigationLinks.map(l => (
                            <NavLink
                                component={Link}
                                href={l.link}
                                label={l.name}
                                key={`mobile-${l.name}`}
                            />
                        ))
                    }
                </div>
                <Button onClick={()=>console.log('MODAL')} color={'primaryTitular.9'} size='xs' className={styles.mobileLogin}>
                    Iniciar sesión
                </Button>
            </div>
        </AppShellNavbar>
    )
}

export default MobileLinkList