import Card from "../Card/Card";
import "./style.css";





function CardList({goods, onProductLike, user}) {
  return (
    <div className="cards">

    {
    goods.map((item) => <Card key={item._id} {...item}  onProductLike={onProductLike} user={user}/>)
      }
    </div>
  )
}


export default CardList;
