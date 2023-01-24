import { useState } from "react";

import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Logo from "../../components/Logo/Logo";
import { Product } from "../../components/Product/Product";
import Search from "../../components/Search/Search";
import Sort from "../../components/Sort/Sort";
import Spinner from "../../components/Spinner/Spinner";
import api from "../../utils/Api";
import { isLiked } from "../../utils/products";



export const ProductPage = () => {

    const [searchQuery, setSearchQuery] = useState("");
    const [user, setUser] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [product, setProduct] = useState(null)


    const handleRequest = () => {
        setIsLoading(true)
        api.search(searchQuery)
          .then((searchResult) => {
            console.log(searchResult);
          })
          .catch(err => console.log(err))
          .finally(() => {
            setIsLoading(false)
          })
      }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        handleRequest();
      }

    function handleProductLike(product) {
        const liked = isLiked(product.likes, user._id) ;
        api.changeLikeProduct(product._id, liked)
            .then((newProduct) => {
                setProduct(newProduct)
            })
        }

    return (
        <>
      <Header>
      <>
        <Logo className="logo logo_place_header"/>
        <Search onSubmit={handleFormSubmit} />
        </>
      </Header>
      <main className="content container">
        <Sort/>
        <div className="content__cards">
          {isLoading 
            ? <Spinner/> 
            : <Product/>
          }
        </div>
      </main>
      <Footer/>
    </>
    )
}