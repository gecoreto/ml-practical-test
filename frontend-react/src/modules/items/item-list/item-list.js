import { bindActionCreators } from '@reduxjs/toolkit';
import React from 'react';
import { connect } from 'react-redux';
import trackImg from '../../../assets/img/track.svg';
import currencyFormat from '../../../utils/format';
import { fetchSearchProducts, selectItems, selectWorking } from '../store/itemsSlice';
import './item-list.sass';

const Loading = () => [1, 2, 3, 4].map((number) =>
  <div key={number.toString()} className="card-loader card-loader-item-1"></div>
)

const DeliveryIcon = () => (
  <span className="delivery-icon">
    <img
      src={trackImg}
      alt="Envio" />
  </span>
)

class Itemlist extends React.Component {

  componentDidMount() {
    const query = new URLSearchParams(this.props.location.search)
    this.fetchProducts(query.get('search'));
  }

  fetchProducts(search) {
    if (!!search) {
      this.props.fetchSearchProducts(search);
    }
  }

  goToDetail(url) {
    let history = this.props.history;
    history.push(url);
  }

  render() {
    const { items, working } = this.props;
    let { url } = this.props.match;

    return working
      ? <Loading />
      : (
        <div className="item-list-container p-1">
          {(items.length === 0)
            ? 'Bienvenido'
            : items.map((item) =>
              <div id={item.id.toString()} key={item.id.toString()} className="product-item" onClick={() => this.goToDetail(`${url}/${item.id}`)}>
                <div className="product-item-img">
                  <figure>
                    <img
                      src={item.picture}
                      className="item-image"
                      alt={item.title} />
                  </figure>
                </div>
                <div className="product-item-info">
                  <div className="product-item-info-options location">{item.city_name}</div>
                  <div className="product-item-info-options amount">
                    <h2 className="price">
                      {/* {{ item.price.amount | currency:item.price.amount.currency }} */}
                      {currencyFormat(item.price.amount)}
                    </h2>
                    {item.free_shipping ? <DeliveryIcon /> : ''}
                  </div>
                  <div className="product-item-info-options">
                    <h3 className="m-0">{item.title}</h3>
                  </div>
                </div>
              </div>
            )}
        </div>
      );
  }
}

function mapStateToProps(state) {
  return {
    items: selectItems(state),
    working: selectWorking(state)
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchSearchProducts }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Itemlist)

export { Itemlist };