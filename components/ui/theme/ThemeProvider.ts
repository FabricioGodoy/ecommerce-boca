import { createTheme, MantineColorsTuple } from "@mantine/core";

const primaryTitular: MantineColorsTuple = [
  '#f0f2f9',
  '#dee0ec',
  '#babfdb',
  '#939bcb',
  '#727dbd',
  '#5e69b5',
  '#5360b2',
  '#44509d',
  '#3b478d',
  '#1c2348'
];


const primaryOro: MantineColorsTuple = [
  '#fff9e3',
  '#fbf1d0',
  '#f5e1a5',
  '#efd075',
  '#e9c24d',
  '#e6b933',
  '#e5b525',
  '#cb9e15',
  '#b58c0b',
  '#9c7800'
];

export const theme = createTheme({
    colors:{
        primaryTitular,
        primaryOro,
    }
})