export interface NavLink{
    name: string;
    link: string;
    children: null | NavLink[],
    functionality: null | (() => void);
}