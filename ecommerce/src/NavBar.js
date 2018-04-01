import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class NavBar extends Component {
  constructor(props) {
    super(props)
    this.state= {}
  }

  render() {
    return (
      <div>
        <div className="header" id="home1">
          <div className="container">
            <div className="w3l_login">
              <a href="#" data-toggle="modal" data-target="#myModal88"><span className="glyphicon glyphicon-user" aria-hidden="true"></span></a>
            </div>
            <div className="w3l_logo">
              <h1><a href="index.html">Electronic Store<span>Your stores. Your place.</span></a></h1>
            </div>
            <div className="search">
              <input className="search_box" type="checkbox" id="search_box"/>
              <label className="icon-search"><span className="glyphicon glyphicon-search" aria-hidden="true"></span></label>
              <div className="search_form">
                <form action="#" method="post">
                  <input type="text" name="Search" placeholder="Search..."/>
                  <input type="submit" value="Send"/>
                </form>
              </div>
            </div>
            <div className="cart cart box_1">
              <form action="#" method="post" className="last">
                <input type="hidden" name="cmd" value="_cart" />
                <input type="hidden" name="display" value="1" />
                <button className="w3view-cart" type="submit" name="submit" value=""><i className="fa fa-cart-arrow-down" aria-hidden="true"></i></button>
              </form>
            </div>
          </div>
        </div>

        <div className="navigation">
      		<div className="container">
      			<nav className="navbar navbar-default">
      				<div className="navbar-header nav_2">
      					<button type="button" className="navbar-toggle collapsed navbar-toggle1" data-toggle="collapse" data-target="#bs-megadropdown-tabs">
      						<span className="sr-only">Toggle navigation</span>
      						<span className="icon-bar"></span>
      						<span className="icon-bar"></span>
      						<span className="icon-bar"></span>
      					</button>
      				</div>
      				<div className="collapse navbar-collapse" id="bs-megadropdown-tabs">
      					<ul className="nav navbar-nav">
      						<li><a href="index.html" className="act">Home</a></li>
      						<li className="dropdown">
      							<a href="#" className="dropdown-toggle" data-toggle="dropdown">Products <b className="caret"></b></a>
      							<ul className="dropdown-menu multi-column columns-3">
      								<div className="row">
      									<div className="col-sm-3">
      										<ul className="multi-column-dropdown">
      											<h6>Mobiles</h6>
      											<li><a href="products.html">Mobile Phones</a></li>
      											<li><a href="products.html">Mp3 Players <span>New</span></a></li>
      											<li><a href="products.html">Popular Models</a></li>
      											<li><a href="products.html">All Tablets<span>New</span></a></li>
      										</ul>
      									</div>
      									<div className="col-sm-3">
      										<ul className="multi-column-dropdown">
      											<h6>Accessories</h6>
      											<li><a href="products1.html">Laptop</a></li>
      											<li><a href="products1.html">Desktop</a></li>
      											<li><a href="products1.html">Wearables <span>New</span></a></li>
      											<li><a href="products1.html"><i>Summer Store</i></a></li>
      										</ul>
      									</div>
      									<div className="col-sm-2">
      										<ul className="multi-column-dropdown">
      											<h6>Home</h6>
      											<li><a href="products2.html">Tv</a></li>
      											<li><a href="products2.html">Camera</a></li>
      											<li><a href="products2.html">AC</a></li>
      											<li><a href="products2.html">Grinders</a></li>
      										</ul>
      									</div>
      									<div className="col-sm-4">
      										<div className="w3ls_products_pos">
      											<h4>30%<i>Off/-</i></h4>
      											<img src="images/1.jpg" alt=" " className="img-responsive" />
      										</div>
      									</div>
      									<div className="clearfix"></div>
      								</div>
      							</ul>
      						</li>
      						<li><Link to="/About">About</Link></li>
      						<li className="w3pages"><a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Pages <span className="caret"></span></a>
      							<ul className="dropdown-menu">
      								<li><a href="icons.html">Web Icons</a></li>
      								<li><a href="codes.html">Short Codes</a></li>
      							</ul>
      						</li>
      						<li><a href="mail.html">Mail Us</a></li>
      					</ul>
      				</div>
      			</nav>
      		</div>
      	</div>
      </div>
    );
  }
}

export default NavBar;
