export interface NavLink{
    name: string;
    link: string;
    adminAccess : boolean;
    children: null | NavLink[],
    functionality: null | (() => void);
}