
import React from 'react';
import Item from './Item'

class Listning extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { items } = this.props

    return (
      <div className="item-list">
        {items.filter(item => item.state === 'active').map(item =>
          < Item
            key={item.listing_id}
            url={item.url}
            mainImage={item.MainImage}
            title={item.title}
            currency_code={item.currency_code}
            price={item.price}
            quantity={item.quantity} />
        )}

      </div>
    )
  }

}

Listning.defaultProps = {
  items: []
}

export default Listning