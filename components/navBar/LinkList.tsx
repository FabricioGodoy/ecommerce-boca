import { NavLink as navInterface } from '@/interfaces/Navigation'
import { navigationLinks } from '@/utils/navlinks'
import { Button } from '@mantine/core'
import styles from '@styles/Shell.module.css'
import Link from 'next/link'

const LinkList = () => {
    return (
        <div className={styles.headerNavigation}>
            {
                navigationLinks.map( (l: navInterface) => {
                    if(l.link) {
                        return <Button
                            key={`nav-${l.name}`}
                            size='xs'
                            variant='subtle'
                            component={Link}                            
                            href = {l.link}
                        >
                            {l.name}
                        </Button>
                    }
                    
                
                })
            }
            <Button onClick={()=>console.log('MODAL')} color={'primaryTitular.9'} size='xs'>
                Iniciar sesión
            </Button>
        </div>
            
    )
}

export default LinkList