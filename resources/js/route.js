const Home = ()=> import('./components/Pages/Home.vue');
const Contacto = ()=> import('./components/Pages/Home.vue');
const Mostrar = ()=> import('./components/Blogs/Mostrar.vue');
const Crear = ()=> import('./components/Blogs/Crear.vue');
const Editar = ()=> import('./components/Blogs/Editar.vue');

const routes = [
    {
        name:'home',
        path:'/',
        component: Home
    },
    {
        name:'contacto',
        path:'/contacto',
        component: Contacto
    },
    {
        name:'mostrar',
        path:'/mostrar',
        component: Mostrar
    },
    {
        name:'crear',
        path:'/crear',
        component: Crear
    },
    {
        name:'editar',
        path:'/editar/:id',
        component: Editar
    }
];

export default routes;
