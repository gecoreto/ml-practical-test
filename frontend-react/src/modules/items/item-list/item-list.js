import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { fetchSearchProducts, selectWorking } from '../store/itemsSlice';
import './item-list.sass'

export const Loading = () => {
  return [1, 2, 3, 4].map((number) =>
    <div key={number.toString()} className="card-loader card-loader-item-1"></div>
  )
}

export const Itemlist = (props) => {
  const working = useSelector(selectWorking);
  // const dispatch = useDispatch();
  // dispatch(fetchSearchProducts())
  console.log('paso')
  return working
      ? <Loading />
      : (
        <h1>Itemlist</h1>
      );
}

export default Itemlist