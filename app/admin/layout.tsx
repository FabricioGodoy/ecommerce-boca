import styles from '@styles/pages/AdminLayout.module.css'


const NameLayout = ({ children }: { children: React.ReactNode; }) => {
    return (
        <div className={styles.admin_layout_container}>
            <h1>Hello Root and MetaData</h1>
            {children}
        </div>
    );
}

export default NameLayout