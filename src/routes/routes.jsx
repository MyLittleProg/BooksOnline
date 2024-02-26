import BookPage from "../pages/BookPage";
import Home from "../pages/Home"
import LoginPage from '../pages/LoginPage'
import Cart from '../pages/Cart'
import WishList from "../pages/WishList";
export const publicRoutes = [
    {path: '/', component:Home, exact:true},
    {path: '/id_page', component:BookPage, exact:true},
    {path: '/login', component:LoginPage, exact:true},
    {path: '/cart_items', component:Cart, exact:true},
    {path: '/wish_list', component:WishList, exact:true},
]