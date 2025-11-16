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
 "#fffce3",
  "#fcf8cf",
  "#f8efa2",
  "#f5ea84",
  "#f0df47",
  "#eeda2c",
  "#edd81c",
  "#d2bf0b",
  "#baaa00",
  "#a09200"
];

export const theme = createTheme({
    primaryColor: 'primaryTitular',
    colors:{
        primaryTitular ,
        primaryOro,
    }
})