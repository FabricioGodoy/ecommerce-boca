import { createTheme, MantineColorsTuple } from "@mantine/core";

const primaryTitular: MantineColorsTuple = [
  "#f0f3f9",
  "#dfe2ec",
  "#bbc3db",
  "#94a2cb",
  "#7486bd",
  "#6074b5",
  "#556bb2",
  "#465b9c",
  "#3c508c",
  "#324780"
]


const primaryOro: MantineColorsTuple = [
  "#fff9e3",
  "#fbf1d0",
  "#f5e1a5",
  "#efd075",
  "#e9c24d",
  "#e6b933",
  "#e5b525",
  "#cb9e15",
  "#b58c0b",
  "#9c7800"
]

export const theme = createTheme({
    primaryColor: 'primaryTitular',
    colors:{
        primaryTitular ,
        primaryOro,
    }
})