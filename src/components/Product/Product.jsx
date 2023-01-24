import s from "./style.module.css";
import cn from "classnames";
import { calcDiscountPrice } from "../../utils/products";


export const Product = ({pictures, likes, reviews, tags, name, price, discount, wight, description, _id, user}) => {
    const discount_price = calcDiscountPrice(discount, price);

    return (
        <>
            <div>
                <a href="#" className="button-back">Назад</a>
                <h1 className={s.productTitle}>{name}</h1>
                <div>
                    <span>Артикул:</span> <b>2335462</b>
                </div>
            </div>
            <div className={s.product}>
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
                    </div>
                </div>
            </div>
        </>
    )
}