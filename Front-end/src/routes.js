import Home from "./pages/Home/Home";
import NewUsre from "./pages/NewUser/NewUsre";
import NotFaund from "./pages/NotFaund/NotFaund";
import Product from "./pages/Prroduct/Prroduct";
import Users from "./pages/Users/Users";
import Products from "./pages/products/Products"

let route = [
    {path : "/" , element : <Home />},
    {path : "/users" , element : <Users />},
    {path : "/new_user" , element : <NewUsre />},
    {path : "/products" , element : <Products />},
    {path: "/product/:productID" , element :<Product />},


    {path:"*" , element : <NotFaund />}
]

export default route