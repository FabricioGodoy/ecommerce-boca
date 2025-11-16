'use client'
import { AppShell, AppShellHeader, AppShellMain, AppShellNavbar, Burger } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks';
import Image from 'next/image';
import React from 'react'
import logo from '@public/images/logo.png'
import styles from '@styles/Shell.module.css'
import LinkList from './LinkList';
import MobileLinkList from './MobileLinkList';

const Shell = ({children}: { children: React.ReactNode }) => {

    const [opened, { toggle }] = useDisclosure();
    return (
        <AppShell
            header={{ height: 60, offset:true }}
            navbar={{
                width: 300,
                breakpoint: 'sm',
                collapsed: { mobile: !opened, desktop:true },
            }}
            withBorder={false}
        >
            <AppShellHeader className={styles.header}>
                <Image
                    src={logo.src}
                    width={75}
                    height={39.75}
                    preload
                    alt='VagoXeneize'
                />
                <LinkList/>
                <Burger
                    opened={opened}
                    onClick={toggle}
                    hiddenFrom="sm"
                    size="sm"
                />

        </AppShellHeader>
        <MobileLinkList/>
        <AppShellMain className={styles.main}>
            {children}
        </AppShellMain>
        </AppShell>
    )
}

export default Shell