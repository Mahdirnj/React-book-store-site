import ShopItem from "../Components/ShopItem.jsx";
import Header from "../Components/Header.jsx";
import SearchBook from "../Components/SearchBook.jsx";
import {Helmet} from "react-helmet";

function BookStore() {
    return(
        <div>
            <Helmet>
                <title>Store</title>
            </Helmet>
            <Header/>
            <div>
                <SearchBook/>
            </div>

        </div>
    )
}
export default BookStore;