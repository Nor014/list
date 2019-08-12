
import React from 'react'
import PropTypes from 'prop-types'
import Listning from './Listning'

class Item extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const itemPrice = this.props.currency_code === 'USD' || this.props.currency_code === 'EUR'
      ? this.props.currency_code + ' ' + this.props.price
      : this.props.price + ' ' + this.props.currency_code

    const qantityClassName = this.props.quantity < 10 && "item-quantity level-low"
      || this.props.quantity < 20 && "item-quantity level-medium"
      || this.props.quantity > 20 && "item-quantity level-high"


    return (
      <div className='item'>
        <div className="item-image">
          <a href={this.props.url}>
            <img src={this.props.mainImage.url_570xN} />
          </a>
        </div>
        <div className="item-details">
          <p className="item-title">{this.props.title}</p>
          <p className="item-price">{itemPrice}</p>
          <p className={qantityClassName}> {this.props.quantity}</p>
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