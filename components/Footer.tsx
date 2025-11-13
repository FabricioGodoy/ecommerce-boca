"use client";
import {
  BrandInstagramSolid,
  BrandTwitterSolid,
  BrandYoutubeSolid,
} from "@mynaui/icons-react";
import classes from "./FooterLinks.module.css";
import { ActionIcon, Container, Group, Text } from "@mantine/core";
import Link from "next/link";
import Image from "next/image";

import logo from '@/public/images/logo.png'
console.log(logo)
const data = [
  {
    title: "About",
    links: [
      { label: "Features", link: "#" },
      { label: "Pricing", link: "#" },
      { label: "Support", link: "#" },
      { label: "Forums", link: "#" },
    ],
  },
  {
    title: "Project",
    links: [
      { label: "Contribute", link: "#" },
      { label: "Media assets", link: "#" },
      { label: "Changelog", link: "#" },
      { label: "Releases", link: "#" },
    ],
  },
  {
    title: "Community",
    links: [
      { label: "Join Discord", link: "#" },
      { label: "Follow on Twitter", link: "#" },
      { label: "Email newsletter", link: "#" },
      { label: "GitHub discussions", link: "#" },
    ],
  },
];

export function Footer() {
  const groups = data.map((group) => {
    const links = group.links.map((link, index) => (
      <Text
        key={index}
        className={classes.link}
        component={Link}
        href={link.link}
        onClick={(event) => event.preventDefault()}
      >
        {link.label}
      </Text>
    ));

    return (
      <div className={classes.wrapper} key={group.title}>
        <Text className={classes.title}>{group.title}</Text>
        {links}
      </div>
    );
  });
  const year = new Date().getFullYear();
  return (
    <footer className={classes.footer}>
      <Container fluid className={classes.inner}>
        <div className={classes.logo}>
          <div className={classes.withText}>
            <Image
              src={logo.src}
              width={75}
              height={39.75}
              alt="logo"
            />
            <Text size="lg" c="primaryOro">VagoXeneize</Text>
          </div>
          <Text size="xs" c="dimmed" className={classes.description}>
            Indumentaria Xeneize
          </Text>
        </div>
        <div className={classes.groups}>{groups}</div>
      </Container>

      <Container fluid className={classes.afterFooter}>
        <Text c="primaryOro" size="sm">
          © {year} VagoXeneize. Todos los derechos reservados.
        </Text>

        <Group
          gap={0}
          className={classes.social}
          justify="flex-end"
          wrap="nowrap"
        >
          <ActionIcon size="lg" color="gray" variant="subtle">
            <BrandTwitterSolid size={18} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg" color="gray" variant="subtle">
            <BrandYoutubeSolid size={18} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg" color="gray" variant="subtle">
            <BrandInstagramSolid size={18} stroke={1.5} />
          </ActionIcon>
        </Group>
      </Container>
    </footer>
  );
}
