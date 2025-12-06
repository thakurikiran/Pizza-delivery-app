import {Link } from "react-router-dom"
import SearchOrder from "../features/order/SearchOrder";
function Header(){
    return (
       <header>
        <Link to="/">Fast React Pizza Go.</Link>
        <SearchOrder/>
        <p>Kiran</p>
       </header>


    )
}

export default Header;