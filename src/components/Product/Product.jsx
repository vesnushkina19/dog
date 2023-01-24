import s from "./style.module.css";
import cn from "classnames";
import { calcDiscountPrice, isLiked } from "../../utils/products";
import {ReactComponent as Save} from "./img/save.svg";
import truck from "./img/truck.svg";
import quality from "./img/quality.svg";


export const Product = ({pictures, likes, reviews, tags, name, price, discount, wight, description, _id, user}) => {
    const discount_price = calcDiscountPrice(discount, price);
    const isLike = isLiked(likes, user?._id)
    return (
        <>
            <div>
                <a href="#" className="button-back">Назад</a>
                <h1 className={s.productTitle}>{name}</h1>
                <div>
                    <span>Артикул:</span> <b>2335462</b>
                </div>
            </div>
            <div className={s.productCard}>
                <div className={s.imgWrapper}>
                    <img src={pictures} alt={`Изображение ${name}`} />
                </div>
                <div className={s.desc}>
                    <span className={discount ? s.oldPrice : s.price}>{price}&nbsp;₽</span>
                    {discount && <span className={cn(s.price, 'card__price_type_discount')}>{discount_price}&nbsp;₽</span>}
                    <div className={s.btnWrap}>
                        <div className={s.left}>
                            <button className={s.minus}>-</button>
                            <span className={s.num}>0</span>
                            <button className={s.plus}>+</button>
                        </div>
                        <a href="/#" className={cn('btn', 'btn_type_primary', s.cart)}>В корзину</a>
                    </div>
                    <button className={cn(s.favorite)}>
                        <Save/>
                        <span>{isLike ? "В избранном" : "В избранное"}</span>
                    </button>
                    <div className={s.delivery}>
                        <img src={truck} alt="truck" />
                        <div className={s.right}>
                            <h3 className={s.name}>Доставка по всему миру!</h3>
                            <p className={s.text}>
                                Доставка курьером - <span>от 399 ₽</span>
                                 
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}