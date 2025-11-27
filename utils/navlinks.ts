import { NavLink } from "@/interfaces/Navigation";


export const navigationLinks: NavLink[] = [
    {
        name:'Inicio',
        link:'/',
        children: null,
        functionality: null
    },
    {
        name:'Productos',
        link:'/products',
        children: null,
        functionality: null
    },
    {
        name:'Promociones',
        link:'/promotions',
        children:null,
        functionality: null
    },
]

export const adminLinks: NavLink[] = [
    {
        name:'Dashboard',
        link:'/admin/home',
        children: null,
        functionality: null
    },
    {
        name:'Productos',
        link:'/admin/products',
        children: null,
        functionality: null
    },
    {
        name:'Ofertas',
        link:'/admin/offers',
        children: null,
        functionality: null
    },
    {
        name:'Ventas',
        link:'/admin/sales',
        children:null,
        functionality: null
    },
    {
        name:'Usuarios',
        link:'/admin/users',
        children:null,
        functionality: null
    },
]