import { adminLinks, navigationLinks } from "@/utils/navlinks"
import { AppShellNavbar, Button, Divider, NavLink } from "@mantine/core"
import Link from "next/link"
import styles from '@styles/Shell.module.css'


const MobileLinkList = () => {
    return (
        <AppShellNavbar flex={1}>
            <div className={styles.mobileNav}>
                <div className={styles.mobileLinksContainer}>
                    <Divider my="sm" mx={'sm'}  label="Admin" labelPosition="left" />
                    {
                        adminLinks.map(l => (
                            <NavLink
                                component={Link}
                                href={l.link}
                                label={l.name}
                                key={`mobile-${l.name}`}
                            />
                        ))
                    }
                    <Divider my="sm" mx={'sm'} label="General" labelPosition="left" />
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