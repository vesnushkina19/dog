import { useEffect, useState } from "react";
import CardList from "../CardList/CardList";
import Footer from "../Footer/Footer";
import data from "../../assets/data.json";
import Sort from "../Sort/Sort";
import "./style.css";
import Logo from "../Logo/Logo";
import Search from "../Search/Search";
import Header from "../Header/Header";
import SearchInfo from "../SearchInfo/SearchInfo";
import Button from "../Card/Button/Button";




function App() {
  const [cards, setCards] = useState(data);
  const [searchQuery, setSearchQuery] = useState("");

  const handleRequest = () => {
    const filterCards = data.filter(item => item.name.toUpperCase().includes(searchQuery.toUpperCase()))
    setCards(filterCards);
  }

  useEffect(() => {
    handleRequest();
  },[searchQuery])


  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleRequest();
  }

  const handleInputChange = (inputValue) => {
    setSearchQuery(inputValue);
  }


  return (
    <>
      <Header>
      <>
        <Logo className="logo logo_place_header"/>
        <Search onSubmit={handleFormSubmit} onInput={handleInputChange}/>
        </>
      </Header>
      <main className="content container">
        <Button type="primary">Купить </Button>
        <Button type="secondary">Подробнее</Button>
        <SearchInfo searchCount={cards.length} searchText={searchQuery}/>
        <Sort/>
        <div className="content__cards">
          <CardList goods={cards}/>
        </div>
      </main>
      <Footer/>
    </>
  )
}


export default App;
