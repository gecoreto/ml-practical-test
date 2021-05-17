import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { cleanItems } from '../../items/store/itemsSlice';
import './error.sass';

export const Error = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const goToHome = () => {
    dispatch(cleanItems())
    history.push(`/`)
  };
  return (
    <div className="app-error-container container p-4">
      <h1>Estamos presentando incovenientes</h1>
      <p className="zoom-area">
        <b>Oh no!</b>
        Ha ocurrido un error. (Mapeo de errores...)
    </p>
      <section className="error-container">
        <span className="four">
          <span className="screen-reader-text">4</span>
        </span>
        <span className="zero">
          <span className="screen-reader-text">0</span>
        </span>
        <span className="four">
          <span className="screen-reader-text">4</span>
        </span>
      </section>
      <div className="link-container">
        <button
          onClick={() => goToHome()}
          className="ml-btn-primary">
          Volver al inicio
        </button>
      </div>
    </div >

  )
}

export default Error