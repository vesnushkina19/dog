import Card from "../Card/Card";
import "./style.css";





function CardList({goods}) {
  return (
    <div className="cards">

    {
    goods.map((item, index) => <Card key={index} {...item}/>)
      }
    </div>
  )
}


export default CardList;
