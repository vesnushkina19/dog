import { useCallback, useEffect, useState } from "react";

import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Logo from "../../components/Logo/Logo";
import { Product } from "../../components/Product/Product";
import Search from "../../components/Search/Search";
import Sort from "../../components/Sort/Sort";
import Spinner from "../../components/Spinner/Spinner";
import api from "../../utils/Api";
import { isLiked } from "../../utils/products";

const ID_PRODUCT = "622c77e877d63f6e70967d22";

export const ProductPage = ({user, isLoading}) => {

  
    const [product, setProduct] = useState(null)


    const handleProductLike = useCallback(() => {
        const liked = isLiked(product.likes, user._id) ;
        api.changeLikeProduct(product._id, liked)
            .then((newProduct) => {
                setProduct(newProduct)
            })
        },[product, user])

        useEffect(() => {
          // setIsLoading(true);
          Promise.all([api.getProductById(), api.getUserInfo()])
            .then(([productsData, userData]) => {
              setProduct(productsData)
              // setUser(userData)
            })
            .catch(err => console.log(err))
            // .finally(() => {
            //   setIsLoading(false)
            // })
        },[])



    return (
        <>
        <div className="content__cards">
          {isLoading 
            ? <Spinner/> 
            : <Product {...product} user={user} onProductLike={handleProductLike}/>
          }
        </div>
    </>
    )
}