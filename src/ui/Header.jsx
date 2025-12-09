import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import UserName from "../features/user/UserName";
function Header() {
  return (
    <header className="px- border-b-2 border-stone-500 bg-yellow-500 px-4 py-3  smuppercase">
      <Link to="/" className="tracking-widest">
        Fast React Pizza Go.
      </Link>

      <SearchOrder />

      <UserName />
    </header>
  );
}

export default Header;
