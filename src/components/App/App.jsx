import { useCallback, useEffect, useState } from "react";

import CardList from "../CardList/CardList";
import Footer from "../Footer/Footer";
import Sort from "../Sort/Sort";
import "./style.css";
import Logo from "../Logo/Logo";
import Search from "../Search/Search";
import Header from "../Header/Header";
import SearchInfo from "../SearchInfo/SearchInfo";


import api from "../../utils/Api";
import useDebounce from "../../hooks/useDebounce";
import { isLiked } from "../../utils/products";
import { CatalogPage } from "../../Pages/CatalogPage/CatalogPage";
import { ProductPage } from "../../Pages/ProductPage/ProductPage";






function App() {
  const [cards, setCards] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [user, setUser] = useState();
  const debounceSearchQuery = useDebounce(searchQuery, 500);
  const [isLoading, setIsLoading] = useState(true);

  const handleRequest = useCallback((searchQuery) => {
    setIsLoading(true)
    api.search(searchQuery)
      .then((searchResult) => {
        console.log(searchResult);
      })
      .catch(err => console.log(err))
      .finally(() => {
        setIsLoading(false)
      })
  }, [])

  useEffect(() => {
    setIsLoading(true)
    Promise.all([api.getProductList(), api.getUserInfo()])
      .then(([productsData, userData]) => {
        setCards(productsData.products)
        setUser(userData)
      })
      .catch(err => console.log(err))
      .finally(() => {
        setIsLoading(false)
      })
  },[])


  useEffect(() => {
    handleRequest();
  },[debounceSearchQuery])


  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleRequest();
  }

  const handleInputChange = (inputValue) => {
    setSearchQuery(inputValue);
  }

  function handleUpdateUser (userUpdateData) {
    api.setUserInfo(userUpdateData)
      .then((newUserData) => {
        setUser(newUserData)
      })
  }

  function handleProductLike(product) {
    const liked = isLiked(product.likes, user._id) ;
    api.changeLikeProduct(product._id, liked)
      .then((newCard) => {
        const newProducts = cards.map(cardState => {
          return cardState._id === newCard._id ? newCard : cardState
        })
        setCards(newProducts)
      } )
  }

  return (
    <>
      <Header user={user} onUpdateUser={handleUpdateUser}>
      <>
        <Logo className="logo logo_place_header"/>
        <Search 
        onSubmit={handleFormSubmit} 
        onInput={handleInputChange}
        />
      </>
      </Header>
      <main className="content container">
        <SearchInfo searchCount={cards.length} searchText={searchQuery}/>
        <CatalogPage 
          isLoading={isLoading} 
          cards={cards} 
          handleProductLike={handleProductLike}
          user={user}
          />
        
        <ProductPage
         user={user}
         isLoading={isLoading}
        />
        
        
      </main>
      <Footer/>
    </>
  )
}


export default App;
