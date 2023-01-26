import CardList from "../../components/CardList/CardList";
import Sort from "../../components/Sort/Sort";
import Spinner from "../../components/Spinner/Spinner";

export const CatalogPage = ({isLoading, cards, user, handleProductLike}) => {
    return (
      <>
        <Sort/>
        <div className="content__cards">
          {isLoading 
            ? <Spinner/> 
            : <CardList goods={cards} onProductLike={handleProductLike} user={user}/>
          }
        </div>
      </>
    )
  }
  
  
  