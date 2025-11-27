import { NavLink as navInterface } from '@/interfaces/Navigation'
import { adminLinks } from '@/utils/navlinks'
import {  NavLink } from '@mantine/core'
import styles from '@styles/Shell.module.css'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const AdminLinkList = () => {
    
    const path = usePathname()

    if(!path.includes('/admin/')) return

    return (
        <div className={styles.adminHeaderNavigation}>
            {
                adminLinks.map( (l: navInterface) => {
                    if(l.link) {
                        return <NavLink
                            key={`navLink-${l.name}`}
                            variant='filled'
                            active={path.includes(l.link)}
                            autoContrast
                            color="primaryTitular"
                            label={l.name}
                            component={Link}                            
                            href = {l.link}
                        />
                    }
                    
                
                })
            }
        </div>
    )
}

export default AdminLinkList