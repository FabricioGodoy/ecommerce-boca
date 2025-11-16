import { NavLink } from "@/interfaces/Navigation";


export const navigationLinks: NavLink[] = [
    {
        name:'Inicio',
        link:'/',
        adminAccess: true,
        children: null,
        functionality: null
    },
    {
        name:'Dashboard',
        link:'/dashboard',
        adminAccess: true,
        children: null,
        functionality: null
    },
    {
        name:'Productos',
        link:'/products',
        adminAccess: false,
        children: null,
        functionality: null
    },
    {
        name:'Promociones',
        link:'/promotions',
        adminAccess: false,
        children:null,
        functionality: null
    },
]