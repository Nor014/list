
import React from 'react'
import PropTypes from 'prop-types'
import Listning from './Listning'

class Item extends React.Component {
  constructor(props) {
    super(props)
    this.url = props.url
    this.mainImage = props.mainImage
    this.title = props.title.length > 50 ? props.title.substr(0, 50) + "..." : props.title
    this.currency_code = props.currency_code
    this.price = props.price
    this.quantity = props.quantity
  }

  render() {
    return (
      <div className='item'>
        <div className="item-image">
          <a href={this.url}>
            <img src={this.mainImage.url_570xN} />
          </a>
        </div>
        <div className="item-details">
          <p className="item-title">{this.title}</p>
          <p className="item-price">{this.currency_code === 'USD' || this.currency_code === 'EUR'
            ? this.currency_code + ' ' + this.price
            : this.price + ' ' + this.currency_code}</p>
          <p className={this.quantity < 10 && "item-quantity level-low"
            || this.quantity < 20 && "item-quantity level-medium"
            || this.quantity > 20 && "item-quantity level-high"}> {this.quantity}</p>
        </div>
      </div >
    )
  }
}

Item.defaultProps = {
  mainImage: '',
  title: '',
  currency_code: '',
  price: '',
  quantity: ''
}

export default Item