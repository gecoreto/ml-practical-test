import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from "react-router-dom";
import currencyFormat from '../../../utils/format';
import { fetchProductDetail, selectProduct, selectWorking } from '../store/itemsSlice';
import './item-detail.sass';

export const ItemDetail = () => {
  const dispatch = useDispatch();
  const working = useSelector(selectWorking);
  const item = useSelector(selectProduct)
  let { id } = useParams();
  useEffect(() => dispatch(fetchProductDetail(id)), [dispatch, id]);
  useEffect(() => {
    document.title = item && item.hasOwnProperty('title') ? item.title : '';
  }, [item]);

  return working ? <Loading /> : item ? <Detail item={item} /> : <Empty />
}

const Detail = ({ item }) => {
  return (
    <div className="item-detail-container p-4">
      <div className="item-detail-container-column left">
        <figure className="item-img">
          <img
            src={item.picture}
            className="product-item-img__image"
            alt={item.title} />
        </figure>
        <Buttons className="short-description-btns mobile" />
        <div className="specs">
          <h3 className="specs-title">Descripción del producto</h3>
          <p className="specs-content">{item.description}</p>
        </div>
      </div>
      <div className="item-detail-container-column short-description">
        <div className="short-description-title">
          <div className="secodary">
            <span className="ui-pdp-subtitle">
              {item.condition} | {item.sold_quantity} vendidos
            </span>
          </div>
          <h3 className="principal">{item.title}</h3>
        </div>
        <div className="short-description-price">
          <h1>
            {/* {{ item.price.amount | currency:item.price.amount.currency }} */}
            {currencyFormat(item.price.amount)}
          </h1>
        </div>
        <Buttons className="short-description-btns desktop" />
      </div>
    </div >
  )
}

const Loading = () => (
  <div className="item-detail-container p-4">
    {[1, 2, 3, 4].map((number) =>
      <div key={number.toString()} className={`card-loader card-loader-item-${number}`}></div>
    )}
  </div>
)

const Empty = () => <div className="item-detail-container p-4">Producto no encontrado</div>

const Buttons = ({ className }) => (
  <div className={className}>
    <button
      className="ml-btn-primary mb-1"
      type="button">
      Comprar
    </button>
    <button
      className="ml-btn-secondary"
      type="button">
      Agregar al carrito
    </button>
  </div>
);

export default ItemDetail