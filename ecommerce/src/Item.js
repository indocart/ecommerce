import React, { Component } from 'react';
import {connect} from 'react-redux'

import currencyformatter from 'currency-formatter';

var dummy = [
  {
    nama:'Induction Cooker',
    harga:1200000,
    image:'https://images-na.ssl-images-amazon.com/images/I/61R6ZSVGSJL._SL1336_.jpg',
    category: 'kompor'
  },
  {
    nama:'Gas Cooker',
    harga:1200000,
    image:'https://brain-images-ssl.cdn.dixons.com/8/1/16395118/u_16395118.jpg',
    category: 'kompor'
  },
  {
    nama:'Laptop',
    harga:1200000,
    image:'https://images-na.ssl-images-amazon.com/images/I/416OmNBvqkL._SL500_AC_SS350_.jpg',
    category: 'laptop'
  }
]

class Item extends Component {
  constructor(props) {
    super(props)
    this.state= {
      // search: '',
    }
  }

  search (e) {
    this.setState({
      search: e
    })
  }

  render() {
    return (
      <div>
      <input type="text" onChange={(e) => this.search(e.target.value)} />
        <div className="agileinfo_new_products_grids">
          {dummy.map((item, index)=>
            (item.category.includes(this.props.input))
            ? <div className="col-md-3 agileinfo_new_products_grid">
                <div className="agile_ecommerce_tab_left agileinfo_new_products_grid1">
                  <div className="hs-wrapper hs-wrapper1">
                    <img src={item.image} alt=" " className="img-responsive" />
                    {/* <img src="https://images-na.ssl-images-amazon.com/images/I/71pDzlm%2Bh%2BL._SL1500_.jpg" alt=" " className="img-responsive" />
                    <img src="https://images-na.ssl-images-amazon.com/images/I/61wdozH4R%2BL._SL1000_.jpg" alt=" " className="img-responsive" />
                    <img src="https://images-na.ssl-images-amazon.com/images/I/61D6k9UCbAL._SL1200_.jpg" alt=" " className="img-responsive" />
                    <img src="https://images-na.ssl-images-amazon.com/images/I/81sNgcgyOML._SL1500_.jpg" alt=" " className="img-responsive" /> */}
                    <div className="w3_hs_bottom w3_hs_bottom_sub">
                      <ul>
                        <li>
                          <a href="#" data-toggle="modal" data-target="#myModal6"><span className="glyphicon glyphicon-eye-open" aria-hidden="true"></span></a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <h5><a href="single.html">{item.nama}</a></h5>
                  <div className="simpleCart_shelfItem">
                    <p><span>{currencyformatter.format(item.harga, { code: 'IDR'})}</span> <i className="item_price">{item.harga*0.9}</i></p>
                    <form action="#" method="post">
                      <input type="hidden" name="cmd" value="_cart"/>
                      <input type="hidden" name="add" value="1"/>
                      <input type="hidden" name="w3ls_item" value="Induction Stove"/>
                      <input type="hidden" name="amount" value="250.00"/>
                      <button type="submit" className="w3ls-cart">Add to cart</button>
                    </form>
                  </div>
                </div>
              </div>
          : null
          )}
          <div className="clearfix"> </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    input: state.input
  }
}


const mapDispatchToProps = (dispatch) => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Item);
