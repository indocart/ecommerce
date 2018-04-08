import React, { Component } from 'react';
import {Link} from 'react-router-dom'

import Item from './Item'

class Home extends Component {
  constructor(props) {
    super(props)
    this.state= {}
  }

  render() {
    return (
      <div>
      	{/* <div className="modal fade" id="myModal88" tabIndex="-1" role="dialog" aria-labelledby="myModal88"
      		aria-hidden="true">
      		<div className="modal-dialog modal-lg">
      			<div className="modal-content">
      				<div className="modal-header">
      					<button type="button" className="close" data-dismiss="modal" aria-hidden="true">
      						&times;</button>
      					<h4 className="modal-title" id="myModalLabel">Don't Wait, Login now!</h4>
      				</div>
      				<div className="modal-body modal-body-sub">
      					<div className="row">
      						<div className="col-md-8 modal_body_left modal_body_left1">
      							<div className="sap_tabs">
      								<div className="horizontalTab">
      									<ul>
      										<li className="resp-tab-item" aria-controls="tab_item-0"><span>Sign in</span></li>
      										<li className="resp-tab-item" aria-controls="tab_item-1"><span>Sign up</span></li>
      									</ul>
      									<div className="tab-1 resp-tab-content" aria-labelledby="tab_item-0">
      										<div className="facts">
      											<div className="register">
      												<form action="#" method="post">
      													<input name="Email" placeholder="Email Address" type="text" required=""/>
      													<input name="Password" placeholder="Password" type="password" required=""/>
      													<div className="sign-up">
      														<input type="submit" value="Sign in"/>
      													</div>
      												</form>
      											</div>
      										</div>
      									</div>
      									<div className="tab-2 resp-tab-content" aria-labelledby="tab_item-1">
      										<div className="facts">
      											<div className="register">
      												<form action="#" method="post">
      													<input placeholder="Name" name="Name" type="text" required=""/>
      													<input placeholder="Email Address" name="Email" type="email" required=""/>
      													<input placeholder="Password" name="Password" type="password" required=""/>
      													<input placeholder="Confirm Password" name="Password" type="password" required=""/>
      													<div className="sign-up">
      														<input type="submit" value="Create Account"/>
      													</div>
      												</form>
      											</div>
      										</div>
      									</div>
      								</div>
      							</div>
      							<div id="OR" className="hidden-xs">OR</div>
      						</div>
      						<div className="col-md-4 modal_body_right modal_body_right1">
      							<div className="row text-center sign-with">
      								<div className="col-md-12">
      									<h3 className="other-nw">Sign in with</h3>
      								</div>
      								<div className="col-md-12">
      									<ul className="social">
      										<li className="social_facebook"><a href="#" className="entypo-facebook"></a></li>
      										<li className="social_dribbble"><a href="#" className="entypo-dribbble"></a></li>
      										<li className="social_twitter"><a href="#" className="entypo-twitter"></a></li>
      										<li className="social_behance"><a href="#" className="entypo-behance"></a></li>
      									</ul>
      								</div>
      							</div>
      						</div>
      					</div>
      				</div>
      			</div>
      		</div>
      	</div> */}

      	<div className="banner">
      		<div className="container">
      			<h3>Electronic Store, <span>Special Offers</span></h3>
      		</div>
      	</div>

      	<div className="banner-bottom">
      		<div className="container">
      			<div className="col-md-5 wthree_banner_bottom_left">


      				{/* <div className="video-img">
      					<a className="play-icon popup-with-zoom-anim" href="#small-dialog">
      						<span className="glyphicon glyphicon-expand" aria-hidden="true"></span>
      					</a>
      				</div> */}


      			{/* <div className="col-md-7 wthree_banner_bottom_right">
      				<div className="bs-example bs-example-tabs" role="tabpanel" data-example-id="togglable-tabs">
      					<ul id="myTab" className="nav nav-tabs" role="tablist">
      						<li role="presentation" className="active"><a href="#home" id="home-tab" role="tab" data-toggle="tab" aria-controls="home">Mobiles</a></li>
      						<li role="presentation"><a href="#audio" role="tab" id="audio-tab" data-toggle="tab" aria-controls="audio">Audio</a></li>
      						<li role="presentation"><a href="#video" role="tab" id="video-tab" data-toggle="tab" aria-controls="video">Computer</a></li>
      						<li role="presentation"><a href="#tv" role="tab" id="tv-tab" data-toggle="tab" aria-controls="tv">Household</a></li>
      						<li role="presentation"><a href="#kitchen" role="tab" id="kitchen-tab" data-toggle="tab" aria-controls="kitchen">Kitchen</a></li>
      					</ul>
      					<div id="myTabContent" className="tab-content">
      						<div role="tabpanel" className="tab-pane fade active in" id="home" aria-labelledby="home-tab">
      							<div className="agile_ecommerce_tabs">
      								<div className="col-md-4 agile_ecommerce_tab_left">
      									<div className="hs-wrapper">
      										<img src="images/3.jpg" alt=" " className="img-responsive" />
      										<img src="images/4.jpg" alt=" " className="img-responsive" />
      										<img src="images/5.jpg" alt=" " className="img-responsive" />
      										<img src="images/6.jpg" alt=" " className="img-responsive" />
      										<img src="images/7.jpg" alt=" " className="img-responsive" />
      										<img src="images/3.jpg" alt=" " className="img-responsive" />
      										<img src="images/4.jpg" alt=" " className="img-responsive" />
      										<img src="images/5.jpg" alt=" " className="img-responsive" />
      										<div className="w3_hs_bottom">
      											<ul>
      												<li>
      													<a href="#" data-toggle="modal" data-target="#myModal"><span className="glyphicon glyphicon-eye-open" aria-hidden="true"></span></a>
      												</li>
      											</ul>
      										</div>
      									</div>
      									<h5><a href="single.html">Mobile Phone1</a></h5>
      									<div className="simpleCart_shelfItem">
      										<p><span>$380</span> <i className="item_price">$350</i></p>
      										<form action="#" method="post">
      											<input type="hidden" name="cmd" value="_cart" />
      											<input type="hidden" name="add" value="1" />
      											<input type="hidden" name="w3ls_item" value="Mobile Phone1" />
      											<input type="hidden" name="amount" value="350.00" />
      											<button type="submit" className="w3ls-cart">Add to cart</button>
      										</form>
      									</div>
      								</div>
      								<div className="col-md-4 agile_ecommerce_tab_left">
      									<div className="hs-wrapper">
      										<img src="images/4.jpg" alt=" " className="img-responsive" />
      										<img src="images/5.jpg" alt=" " className="img-responsive" />
      										<img src="images/6.jpg" alt=" " className="img-responsive" />
      										<img src="images/7.jpg" alt=" " className="img-responsive" />
      										<img src="images/3.jpg" alt=" " className="img-responsive" />
      										<img src="images/4.jpg" alt=" " className="img-responsive" />
      										<img src="images/5.jpg" alt=" " className="img-responsive" />
      										<img src="images/6.jpg" alt=" " className="img-responsive" />
      										<div className="w3_hs_bottom">
      											<ul>
      												<li>
      													<a href="#" data-toggle="modal" data-target="#myModal"><span className="glyphicon glyphicon-eye-open" aria-hidden="true"></span></a>
      												</li>
      											</ul>
      										</div>
      									</div>
      									<h5><a href="single.html">Mobile Phone2</a></h5>
      									<div className="simpleCart_shelfItem">
      										<p><span>$330</span> <i className="item_price">$302</i></p>
      										<form action="#" method="post">
      											<input type="hidden" name="cmd" value="_cart" />
      											<input type="hidden" name="add" value="1" />
      											<input type="hidden" name="w3ls_item" value="Mobile Phone2" />
      											<input type="hidden" name="amount" value="302.00" />
      											<button type="submit" className="w3ls-cart">Add to cart</button>
      										</form>
      									</div>
      								</div>
      								<div className="col-md-4 agile_ecommerce_tab_left">
      									<div className="hs-wrapper">
      										<img src="images/7.jpg" alt=" " className="img-responsive" />
      										<img src="images/6.jpg" alt=" " className="img-responsive" />
      										<img src="images/4.jpg" alt=" " className="img-responsive" />
      										<img src="images/3.jpg" alt=" " className="img-responsive" />
      										<img src="images/5.jpg" alt=" " className="img-responsive" />
      										<img src="images/7.jpg" alt=" " className="img-responsive" />
      										<img src="images/4.jpg" alt=" " className="img-responsive" />
      										<img src="images/6.jpg" alt=" " className="img-responsive" />
      										<div className="w3_hs_bottom">
      											<ul>
      												<li>
      													<a href="#" data-toggle="modal" data-target="#myModal"><span className="glyphicon glyphicon-eye-open" aria-hidden="true"></span></a>
      												</li>
      											</ul>
      										</div>
      									</div>
      									<h5><a href="single.html">Mobile Phone3</a></h5>
      									<div className="simpleCart_shelfItem">
      										<p><span>$250</span> <i className="item_price">$245</i></p>
      										<form action="#" method="post">
      											<input type="hidden" name="cmd" value="_cart" />
      											<input type="hidden" name="add" value="1" />
      											<input type="hidden" name="w3ls_item" value="Mobile Phone3" />
      											<input type="hidden" name="amount" value="245.00"/>
      											<button type="submit" className="w3ls-cart">Add to cart</button>
      										</form>
      									</div>
      								</div>
      								<div className="clearfix"> </div>
      							</div>
      						</div>
      						<div role="tabpanel" className="tab-pane fade" id="audio" aria-labelledby="audio-tab">
      							<div className="agile_ecommerce_tabs">
      								<div className="col-md-4 agile_ecommerce_tab_left">
      									<div className="hs-wrapper">
      										<img src="images/8.jpg" alt=" " className="img-responsive" />
      										<img src="images/9.jpg" alt=" " className="img-responsive" />
      										<img src="images/10.jpg" alt=" " className="img-responsive" />
      										<img src="images/8.jpg" alt=" " className="img-responsive" />
      										<img src="images/9.jpg" alt=" " className="img-responsive" />
      										<img src="images/10.jpg" alt=" " className="img-responsive" />
      										<img src="images/8.jpg" alt=" " className="img-responsive" />
      										<img src="images/9.jpg" alt=" " className="img-responsive" />
      										<div className="w3_hs_bottom">
      											<ul>
      												<li>
      													<a href="#" data-toggle="modal" data-target="#myModal1"><span className="glyphicon glyphicon-eye-open" aria-hidden="true"></span></a>
      												</li>
      											</ul>
      										</div>
      									</div>
      									<h5><a href="single.html">Speakers</a></h5>
      										<p><span>$320</span> <i className="item_price">$250</i></p>
      									<div className="simpleCart_shelfItem">
      										<form action="#" method="post">
      											<input type="hidden" name="cmd" value="_cart" />
      											<input type="hidden" name="add" value="1" />
      											<input type="hidden" name="w3ls_item" value="Speakers" />
      											<input type="hidden" name="amount" value="250.00" />
      											<button type="submit" className="w3ls-cart">Add to cart</button>
      										</form>
      									</div>
      								</div>
      								<div className="col-md-4 agile_ecommerce_tab_left">
      									<div className="hs-wrapper">
      										<img src="images/9.jpg" alt=" " className="img-responsive" />
      										<img src="images/8.jpg" alt=" " className="img-responsive" />
      										<img src="images/10.jpg" alt=" " className="img-responsive" />
      										<img src="images/8.jpg" alt=" " className="img-responsive" />
      										<img src="images/9.jpg" alt=" " className="img-responsive" />
      										<img src="images/10.jpg" alt=" " className="img-responsive" />
      										<img src="images/8.jpg" alt=" " className="img-responsive" />
      										<img src="images/9.jpg" alt=" " className="img-responsive" />
      										<div className="w3_hs_bottom">
      											<ul>
      												<li>
      													<a href="#" data-toggle="modal" data-target="#myModal1"><span className="glyphicon glyphicon-eye-open" aria-hidden="true"></span></a>
      												</li>
      											</ul>
      										</div>
      									</div>
      									<h5><a href="single.html">Headphones</a></h5>
      									<div className="simpleCart_shelfItem">
      										<p><span>$180</span> <i className="item_price">$150</i></p>
      										<form action="#" method="post">
      											<input type="hidden" name="cmd" value="_cart" />
      											<input type="hidden" name="add" value="1" />
      											<input type="hidden" name="w3ls_item" value="Headphones" />
      											<input type="hidden" name="amount" value="150.00" />
      											<button type="submit" className="w3ls-cart">Add to cart</button>
      										</form>
      									</div>
      								</div>
      								<div className="col-md-4 agile_ecommerce_tab_left">
      									<div className="hs-wrapper">
      										<img src="images/10.jpg" alt=" " className="img-responsive" />
      										<img src="images/8.jpg" alt=" " className="img-responsive" />
      										<img src="images/9.jpg" alt=" " className="img-responsive" />
      										<img src="images/8.jpg" alt=" " className="img-responsive" />
      										<img src="images/9.jpg" alt=" " className="img-responsive" />
      										<img src="images/10.jpg" alt=" " className="img-responsive" />
      										<img src="images/8.jpg" alt=" " className="img-responsive" />
      										<img src="images/9.jpg" alt=" " className="img-responsive" />
      										<div className="w3_hs_bottom">
      											<ul>
      												<li>
      													<a href="#" data-toggle="modal" data-target="#myModal1"><span className="glyphicon glyphicon-eye-open" aria-hidden="true"></span></a>
      												</li>
      											</ul>
      										</div>
      									</div>
      									<h5><a href="single.html">Audio Player</a></h5>
      									<div className="simpleCart_shelfItem">
      										<p><span>$220</span> <i className="item_price">$180</i></p>
      										<form action="#" method="post">
      											<input type="hidden" name="cmd" value="_cart" />
      											<input type="hidden" name="add" value="1" />
      											<input type="hidden" name="w3ls_item" value="Audio Player" />
      											<input type="hidden" name="amount" value="180.00"/>
      											<button type="submit" className="w3ls-cart">Add to cart</button>
      										</form>
      									</div>
      								</div>
      								<div className="clearfix"> </div>
      							</div>
      						</div>
      						<div role="tabpanel" className="tab-pane fade" id="video" aria-labelledby="video-tab">
      							<div className="agile_ecommerce_tabs">
      								<div className="col-md-4 agile_ecommerce_tab_left">
      									<div className="hs-wrapper">
      										<img src="images/11.jpg" alt=" " className="img-responsive" />
      										<img src="images/12.jpg" alt=" " className="img-responsive" />
      										<img src="images/13.jpg" alt=" " className="img-responsive" />
      										<img src="images/11.jpg" alt=" " className="img-responsive" />
      										<img src="images/12.jpg" alt=" " className="img-responsive" />
      										<img src="images/13.jpg" alt=" " className="img-responsive" />
      										<img src="images/11.jpg" alt=" " className="img-responsive" />
      										<img src="images/12.jpg" alt=" " className="img-responsive" />
      										<div className="w3_hs_bottom">
      											<ul>
      												<li>
      													<a href="#" data-toggle="modal" data-target="#myModal2"><span className="glyphicon glyphicon-eye-open" aria-hidden="true"></span></a>
      												</li>
      											</ul>
      										</div>
      									</div>
      									<h5><a href="single.html">Laptop</a></h5>
      									<div className="simpleCart_shelfItem">
      										<p><span>$880</span> <i className="item_price">$850</i></p>
      										<form action="#" method="post">
      											<input type="hidden" name="cmd" value="_cart" />
      											<input type="hidden" name="add" value="1" />
      											<input type="hidden" name="w3ls_item" value="Laptop" />
      											<input type="hidden" name="amount" value="850.00" />
      											<button type="submit" className="w3ls-cart">Add to cart</button>
      										</form>
      									</div>
      								</div>
      								<div className="col-md-4 agile_ecommerce_tab_left">
      									<div className="hs-wrapper">
      										<img src="images/12.jpg" alt=" " className="img-responsive" />
      										<img src="images/11.jpg" alt=" " className="img-responsive" />
      										<img src="images/13.jpg" alt=" " className="img-responsive" />
      										<img src="images/11.jpg" alt=" " className="img-responsive" />
      										<img src="images/12.jpg" alt=" " className="img-responsive" />
      										<img src="images/13.jpg" alt=" " className="img-responsive" />
      										<img src="images/11.jpg" alt=" " className="img-responsive" />
      										<img src="images/12.jpg" alt=" " className="img-responsive" />
      										<div className="w3_hs_bottom">
      											<ul>
      												<li>
      													<a href="#" data-toggle="modal" data-target="#myModal2"><span className="glyphicon glyphicon-eye-open" aria-hidden="true"></span></a>
      												</li>
      											</ul>
      										</div>
      									</div>
      									<h5><a href="single.html">Notebook</a></h5>
      									<div className="simpleCart_shelfItem">
      										<p><span>$290</span> <i className="item_price">$280</i></p>
      										<form action="#" method="post">
      											<input type="hidden" name="cmd" value="_cart" />
      											<input type="hidden" name="add" value="1" />
      											<input type="hidden" name="w3ls_item" value="Notebook" />
      											<input type="hidden" name="amount" value="280.00" />
      											<button type="submit" className="w3ls-cart">Add to cart</button>
      										</form>
      									</div>
      								</div>
      								<div className="col-md-4 agile_ecommerce_tab_left">
      									<div className="hs-wrapper">
      										<img src="images/13.jpg" alt=" " className="img-responsive" />
      										<img src="images/11.jpg" alt=" " className="img-responsive" />
      										<img src="images/12.jpg" alt=" " className="img-responsive" />
      										<img src="images/11.jpg" alt=" " className="img-responsive" />
      										<img src="images/12.jpg" alt=" " className="img-responsive" />
      										<img src="images/13.jpg" alt=" " className="img-responsive" />
      										<img src="images/11.jpg" alt=" " className="img-responsive" />
      										<img src="images/12.jpg" alt=" " className="img-responsive" />
      										<div className="w3_hs_bottom">
      											<ul>
      												<li>
      													<a href="#" data-toggle="modal" data-target="#myModal2"><span className="glyphicon glyphicon-eye-open" aria-hidden="true"></span></a>
      												</li>
      											</ul>
      										</div>
      									</div>
      									<h5><a href="single.html">Kid's Toy</a></h5>
      									<div className="simpleCart_shelfItem">
      										<p><span>$120</span> <i className="item_price">$80</i></p>
      										<form action="#" method="post">
      											<input type="hidden" name="cmd" value="_cart" />
      											<input type="hidden" name="add" value="1" />
      											<input type="hidden" name="w3ls_item" value="Kid's Toy" />
      											<input type="hidden" name="amount" value="80.00" />
      											<button type="submit" className="w3ls-cart">Add to cart</button>
      										</form>
      									</div>
      								</div>
      								<div className="clearfix"> </div>
      							</div>
      						</div>
      						<div role="tabpanel" className="tab-pane fade" id="tv" aria-labelledby="tv-tab">
      							<div className="agile_ecommerce_tabs">
      								<div className="col-md-4 agile_ecommerce_tab_left">
      									<div className="hs-wrapper">
      										<img src="images/14.jpg" alt=" " className="img-responsive" />
      										<img src="images/15.jpg" alt=" " className="img-responsive" />
      										<img src="images/16.jpg" alt=" " className="img-responsive" />
      										<img src="images/14.jpg" alt=" " className="img-responsive" />
      										<img src="images/15.jpg" alt=" " className="img-responsive" />
      										<img src="images/16.jpg" alt=" " className="img-responsive" />
      										<img src="images/14.jpg" alt=" " className="img-responsive" />
      										<img src="images/15.jpg" alt=" " className="img-responsive" />
      										<div className="w3_hs_bottom">
      											<ul>
      												<li>
      													<a href="#" data-toggle="modal" data-target="#myModal3"><span className="glyphicon glyphicon-eye-open" aria-hidden="true"></span></a>
      												</li>
      											</ul>
      										</div>
      									</div>
      									<h5><a href="single.html">Refrigerator</a></h5>
      									<div className="simpleCart_shelfItem">
      										<p><span>$950</span> <i className="item_price">$820</i></p>
      										<form action="#" method="post">
      											<input type="hidden" name="cmd" value="_cart" />
      											<input type="hidden" name="add" value="1" />
      											<input type="hidden" name="w3ls_item" value="Refrigerator" />
      											<input type="hidden" name="amount" value="820.00" />
      											<button type="submit" className="w3ls-cart">Add to cart</button>
      										</form>
      									</div>
      								</div>
      								<div className="col-md-4 agile_ecommerce_tab_left">
      									<div className="hs-wrapper">
      										<img src="images/15.jpg" alt=" " className="img-responsive" />
      										<img src="images/14.jpg" alt=" " className="img-responsive" />
      										<img src="images/16.jpg" alt=" " className="img-responsive" />
      										<img src="images/14.jpg" alt=" " className="img-responsive" />
      										<img src="images/15.jpg" alt=" " className="img-responsive" />
      										<img src="images/16.jpg" alt=" " className="img-responsive" />
      										<img src="images/14.jpg" alt=" " className="img-responsive" />
      										<img src="images/15.jpg" alt=" " className="img-responsive" />
      										<div className="w3_hs_bottom">
      											<ul>
      												<li>
      													<a href="#" data-toggle="modal" data-target="#myModal3"><span className="glyphicon glyphicon-eye-open" aria-hidden="true"></span></a>
      												</li>
      											</ul>
      										</div>
      									</div>
      									<h5><a href="single.html">LED Tv</a></h5>
      									<div className="simpleCart_shelfItem">
      										<p><span>$700</span> <i className="item_price">$680</i></p>
      										<form action="#" method="post">
      											<input type="hidden" name="cmd" value="_cart" />
      											<input type="hidden" name="add" value="1" />
      											<input type="hidden" name="w3ls_item" value="LED Tv"/>
      											<input type="hidden" name="amount" value="680.00"/>
      											<button type="submit" className="w3ls-cart">Add to cart</button>
      										</form>
      									</div>
      								</div>
      								<div className="col-md-4 agile_ecommerce_tab_left">
      									<div className="hs-wrapper">
      										<img src="images/16.jpg" alt=" " className="img-responsive" />
      										<img src="images/14.jpg" alt=" " className="img-responsive" />
      										<img src="images/15.jpg" alt=" " className="img-responsive" />
      										<img src="images/14.jpg" alt=" " className="img-responsive" />
      										<img src="images/15.jpg" alt=" " className="img-responsive" />
      										<img src="images/16.jpg" alt=" " className="img-responsive" />
      										<img src="images/14.jpg" alt=" " className="img-responsive" />
      										<img src="images/15.jpg" alt=" " className="img-responsive" />
      										<div className="w3_hs_bottom">
      											<ul>
      												<li>
      													<a href="#" data-toggle="modal" data-target="#myModal3"><span className="glyphicon glyphicon-eye-open" aria-hidden="true"></span></a>
      												</li>
      											</ul>
      										</div>
      									</div>
      									<h5><a href="single.html">Washing Machine</a></h5>
      									<div className="simpleCart_shelfItem">
      										<p><span>$520</span> <i className="item_price">$510</i></p>
      										<form action="#" method="post">
      											<input type="hidden" name="cmd" value="_cart" />
      											<input type="hidden" name="add" value="1" />
      											<input type="hidden" name="w3ls_item" value="Washing Machine" />
      											<input type="hidden" name="amount" value="510.00" />
      											<button type="submit" className="w3ls-cart">Add to cart</button>
      										</form>
      									</div>
      								</div>
      								<div className="clearfix"> </div>
      							</div>
      						</div>
      						<div role="tabpanel" className="tab-pane fade" id="kitchen" aria-labelledby="kitchen-tab">
      							<div className="agile_ecommerce_tabs">
      								<div className="col-md-4 agile_ecommerce_tab_left">
      									<div className="hs-wrapper">
      										<img src="images/17.jpg" alt=" " className="img-responsive" />
      										<img src="images/18.jpg" alt=" " className="img-responsive" />
      										<img src="images/19.jpg" alt=" " className="img-responsive" />
      										<img src="images/17.jpg" alt=" " className="img-responsive" />
      										<img src="images/18.jpg" alt=" " className="img-responsive" />
      										<img src="images/19.jpg" alt=" " className="img-responsive" />
      										<img src="images/17.jpg" alt=" " className="img-responsive" />
      										<img src="images/18.jpg" alt=" " className="img-responsive" />
      										<div className="w3_hs_bottom">
      											<ul>
      												<li>
      													<a href="#" data-toggle="modal" data-target="#myModal4"><span className="glyphicon glyphicon-eye-open" aria-hidden="true"></span></a>
      												</li>
      											</ul>
      										</div>
      									</div>
      									<h5><a href="single.html">Grinder</a></h5>
      									<div className="simpleCart_shelfItem">
      										<p><span>$460</span> <i className="item_price">$450</i></p>
      										<form action="#" method="post">
      											<input type="hidden" name="cmd" value="_cart" />
      											<input type="hidden" name="add" value="1" />
      											<input type="hidden" name="w3ls_item" value="Grinder" />
      											<input type="hidden" name="amount" value="450.00" />
      											<button type="submit" className="w3ls-cart">Add to cart</button>
      										</form>
      									</div>
      								</div>
      								<div className="col-md-4 agile_ecommerce_tab_left">
      									<div className="hs-wrapper">
      										<img src="images/18.jpg" alt=" " className="img-responsive" />
      										<img src="images/17.jpg" alt=" " className="img-responsive" />
      										<img src="images/19.jpg" alt=" " className="img-responsive" />
      										<img src="images/17.jpg" alt=" " className="img-responsive" />
      										<img src="images/18.jpg" alt=" " className="img-responsive" />
      										<img src="images/19.jpg" alt=" " className="img-responsive" />
      										<img src="images/17.jpg" alt=" " className="img-responsive" />
      										<img src="images/18.jpg" alt=" " className="img-responsive" />
      										<div className="w3_hs_bottom">
      											<ul>
      												<li>
      													<a href="#" data-toggle="modal" data-target="#myModal4"><span className="glyphicon glyphicon-eye-open" aria-hidden="true"></span></a>
      												</li>
      											</ul>
      										</div>
      									</div>
      									<h5><a href="single.html">Water Purifier</a></h5>
      									<div className="simpleCart_shelfItem">
      										<p><span>$390</span> <i className="item_price">$350</i></p>
      										<form action="#" method="post">
      											<input type="hidden" name="cmd" value="_cart" />
      											<input type="hidden" name="add" value="1" />
      											<input type="hidden" name="w3ls_item" value="Water Purifier" />
      											<input type="hidden" name="amount" value="350.00" />
      											<button type="submit" className="w3ls-cart">Add to cart</button>
      										</form>
      									</div>
      								</div>
      								<div className="col-md-4 agile_ecommerce_tab_left">
      									<div className="hs-wrapper">
      										<img src="images/19.jpg" alt=" " className="img-responsive" />
      										<img src="images/17.jpg" alt=" " className="img-responsive" />
      										<img src="images/18.jpg" alt=" " className="img-responsive" />
      										<img src="images/17.jpg" alt=" " className="img-responsive" />
      										<img src="images/18.jpg" alt=" " className="img-responsive" />
      										<img src="images/19.jpg" alt=" " className="img-responsive" />
      										<img src="images/17.jpg" alt=" " className="img-responsive" />
      										<img src="images/18.jpg" alt=" " className="img-responsive" />
      										<div className="w3_hs_bottom">
      											<ul>
      												<li>
      													<a href="#" data-toggle="modal" data-target="#myModal4"><span className="glyphicon glyphicon-eye-open" aria-hidden="true"></span></a>
      												</li>
      											</ul>
      										</div>
      									</div>
      									<h5><a href="single.html">Coffee Maker</a></h5>
      									<div className="simpleCart_shelfItem">
      										<p><span>$250</span> <i className="item_price">$220</i></p>
      										<form action="#" method="post">
      											<input type="hidden" name="cmd" value="_cart" />
      											<input type="hidden" name="add" value="1" />
      											<input type="hidden" name="w3ls_item" value="Coffee Maker" />
      											<input type="hidden" name="amount" value="220.00" />
      											<button type="submit" className="w3ls-cart">Add to cart</button>
      										</form>
      									</div>
      								</div>
      								<div className="clearfix"> </div>
      							</div>
      						</div>
      					</div>
      				</div>
      			</div>
      			<div className="clearfix"> </div> */}
      		</div>
      	</div>


      	{/* <div className="modal video-modal fade" id="myModal" tabIndex="-1" role="dialog" aria-labelledby="myModal">
      		<div className="modal-dialog" role="document">
      			<div className="modal-content">
      				<div className="modal-header">
      					<button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
      				</div>
      				<section>
      					<div className="modal-body">
      						<div className="col-md-5 modal_body_left">
      							<img src="images/3.jpg" alt=" " className="img-responsive" />
      						</div>
      						<div className="col-md-7 modal_body_right">
      							<h4>The Best Mobile Phone 3GB</h4>
      							<p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      								commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
      							<div className="rating">
      								<div className="rating-left">
      									<img src="images/star-.png" alt=" " className="img-responsive" />
      								</div>
      								<div className="rating-left">
      									<img src="images/star-.png" alt=" " className="img-responsive" />
      								</div>
      								<div className="rating-left">
      									<img src="images/star-.png" alt=" " className="img-responsive" />
      								</div>
      								<div className="rating-left">
      									<img src="images/star.png" alt=" " className="img-responsive" />
      								</div>
      								<div className="rating-left">
      									<img src="images/star.png" alt=" " className="img-responsive" />
      								</div>
      								<div className="clearfix"> </div>
      							</div>
      							<div className="modal_body_right_cart simpleCart_shelfItem">
      								<p><span>$380</span> <i className="item_price">$350</i></p>
      								<form action="#" method="post">
      									<input type="hidden" name="cmd" value="_cart"/>
      									<input type="hidden" name="add" value="1"/>
      									<input type="hidden" name="w3ls_item" value="Mobile Phone1"/>
      									<input type="hidden" name="amount" value="350.00"/>
      									<button type="submit" className="w3ls-cart">Add to cart</button>
      								</form>
      							</div>
      							<h5>Color</h5>
      							<div className="color-quality">
      								<ul>
      									<li><a href="#"><span></span></a></li>
      									<li><a href="#" className="brown"><span></span></a></li>
      									<li><a href="#" className="purple"><span></span></a></li>
      									<li><a href="#" className="gray"><span></span></a></li>
      								</ul>
      							</div>
      						</div>
      						<div className="clearfix"> </div>
      					</div>
      				</section>
      			</div>
      		</div>
      	</div> */}


      	{/* <div className="modal video-modal fade" id="myModal1" tabIndex="-1" role="dialog" aria-labelledby="myModal1">
      		<div className="modal-dialog" role="document">
      			<div className="modal-content">
      				<div className="modal-header">
      					<button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
      				</div>
      				<section>
      					<div className="modal-body">
      						<div className="col-md-5 modal_body_left">
      							<img src="images/9.jpg" alt=" " className="img-responsive" />
      						</div>
      						<div className="col-md-7 modal_body_right">
      							<h4>Multimedia Home Accessories</h4>
      							<p>Ut enim ad minim veniam, quis nostrud
      								exercitation ullamco laboris nisi ut aliquip ex ea
      								commodo consequat.Duis aute irure dolor in
      								reprehenderit in voluptate velit esse cillum dolore
      								eu fugiat nulla pariatur. Excepteur sint occaecat
      								cupidatat non proident, sunt in culpa qui officia
      								deserunt mollit anim id est laborum.</p>
      							<div className="rating">
      								<div className="rating-left">
      									<img src="images/star-.png" alt=" " className="img-responsive" />
      								</div>
      								<div className="rating-left">
      									<img src="images/star-.png" alt=" " className="img-responsive" />
      								</div>
      								<div className="rating-left">
      									<img src="images/star-.png" alt=" " className="img-responsive" />
      								</div>
      								<div className="rating-left">
      									<img src="images/star.png" alt=" " className="img-responsive" />
      								</div>
      								<div className="rating-left">
      									<img src="images/star.png" alt=" " className="img-responsive" />
      								</div>
      								<div className="clearfix"> </div>
      							</div>
      							<div className="modal_body_right_cart simpleCart_shelfItem">
      								<p><span>$180</span> <i className="item_price">$150</i></p>
      								<form action="#" method="post">
      									<input type="hidden" name="cmd" value="_cart"/>
      									<input type="hidden" name="add" value="1"/>
      									<input type="hidden" name="w3ls_item" value="Headphones"/>
      									<input type="hidden" name="amount" value="150.00"/>
      									<button type="submit" className="w3ls-cart">Add to cart</button>
      								</form>
      							</div>
      							<h5>Color</h5>
      							<div className="color-quality">
      								<ul>
      									<li><a href="#"><span></span></a></li>
      									<li><a href="#" className="brown"><span></span></a></li>
      									<li><a href="#" className="purple"><span></span></a></li>
      									<li><a href="#" className="gray"><span></span></a></li>
      								</ul>
      							</div>
      						</div>
      						<div className="clearfix"> </div>
      					</div>
      				</section>
      			</div>
      		</div>
      	</div> */}


      	{/* <div className="modal video-modal fade" id="myModal2" tabIndex="-1" role="dialog" aria-labelledby="myModal2">
      		<div className="modal-dialog" role="document">
      			<div className="modal-content">
      				<div className="modal-header">
      					<button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
      				</div>
      				<section>
      					<div className="modal-body">
      						<div className="col-md-5 modal_body_left">
      							<img src="images/11.jpg" alt=" " className="img-responsive" />
      						</div>
      						<div className="col-md-7 modal_body_right">
      							<h4>Quad Core Colorful Laptop</h4>
      							<p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in
      								reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia  deserunt.</p>
      							<div className="rating">
      								<div className="rating-left">
      									<img src="images/star-.png" alt=" " className="img-responsive" />
      								</div>
      								<div className="rating-left">
      									<img src="images/star-.png" alt=" " className="img-responsive" />
      								</div>
      								<div className="rating-left">
      									<img src="images/star-.png" alt=" " className="img-responsive" />
      								</div>
      								<div className="rating-left">
      									<img src="images/star-.png" alt=" " className="img-responsive" />
      								</div>
      								<div className="rating-left">
      									<img src="images/star.png" alt=" " className="img-responsive" />
      								</div>
      								<div className="clearfix"> </div>
      							</div>
      							<div className="modal_body_right_cart simpleCart_shelfItem">
      								<p><span>$880</span> <i className="item_price">$850</i></p>
      								<form action="#" method="post">
      									<input type="hidden" name="cmd" value="_cart"/>
      									<input type="hidden" name="add" value="1"/>
      									<input type="hidden" name="w3ls_item" value="Laptop"/>
      									<input type="hidden" name="amount" value="850.00"/>
      									<button type="submit" className="w3ls-cart">Add to cart</button>
      								</form>
      							</div>
      							<h5>Color</h5>
      							<div className="color-quality">
      								<ul>
      									<li><a href="#"><span></span></a></li>
      									<li><a href="#" className="brown"><span></span></a></li>
      									<li><a href="#" className="purple"><span></span></a></li>
      									<li><a href="#" className="gray"><span></span></a></li>
      								</ul>
      							</div>
      						</div>
      						<div className="clearfix"> </div>
      					</div>
      				</section>
      			</div>
      		</div>
      	</div> */}


      	{/* <div className="modal video-modal fade" id="myModal3" tabIndex="-1" role="dialog" aria-labelledby="myModal3">
      		<div className="modal-dialog" role="document">
      			<div className="modal-content">
      				<div className="modal-header">
      					<button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
      				</div>
      				<section>
      					<div className="modal-body">
      						<div className="col-md-5 modal_body_left">
      							<img src="images/14.jpg" alt=" " className="img-responsive" />
      						</div>
      						<div className="col-md-7 modal_body_right">
      							<h4>Cool Single Door Refrigerator </h4>
      							<p>Duis aute irure dolor inreprehenderit in voluptate velit esse cillum dolore
      								eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      							<div className="rating">
      								<div className="rating-left">
      									<img src="images/star-.png" alt=" " className="img-responsive" />
      								</div>
      								<div className="rating-left">
      									<img src="images/star-.png" alt=" " className="img-responsive" />
      								</div>
      								<div className="rating-left">
      									<img src="images/star-.png" alt=" " className="img-responsive" />
      								</div>
      								<div className="rating-left">
      									<img src="images/star.png" alt=" " className="img-responsive" />
      								</div>
      								<div className="rating-left">
      									<img src="images/star.png" alt=" " className="img-responsive" />
      								</div>
      								<div className="clearfix"> </div>
      							</div>
      							<div className="modal_body_right_cart simpleCart_shelfItem">
      								<p><span>$950</span> <i className="item_price">$820</i></p>
      								<form action="#" method="post">
      									<input type="hidden" name="cmd" value="_cart"/>
      									<input type="hidden" name="add" value="1"/>
      									<input type="hidden" name="w3ls_item" value="Mobile Phone1"/>
      									<input type="hidden" name="amount" value="820.00"/>
      									<button type="submit" className="w3ls-cart">Add to cart</button>
      								</form>
      							</div>
      							<h5>Color</h5>
      							<div className="color-quality">
      								<ul>
      									<li><a href="#"><span></span></a></li>
      									<li><a href="#" className="brown"><span></span></a></li>
      									<li><a href="#" className="purple"><span></span></a></li>
      									<li><a href="#" className="gray"><span></span></a></li>
      								</ul>
      							</div>
      						</div>
      						<div className="clearfix"> </div>
      					</div>
      				</section>
      			</div>
      		</div>
      	</div> */}


      	{/* <div className="modal video-modal fade" id="myModal4" tabIndex="-1" role="dialog" aria-labelledby="myModal4">
      		<div className="modal-dialog" role="document">
      			<div className="modal-content">
      				<div className="modal-header">
      					<button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
      				</div>
      				<section>
      					<div className="modal-body">
      						<div className="col-md-5 modal_body_left">
      							<img src="images/17.jpg" alt=" " className="img-responsive" />
      						</div>
      						<div className="col-md-7 modal_body_right">
      							<h4>New Model Mixer Grinder</h4>
      							<p>Excepteur sint occaecat laboris nisi ut aliquip ex ea
      								commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
      								eu fugiat nulla pariatur cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      							<div className="rating">
      								<div className="rating-left">
      									<img src="images/star-.png" alt=" " className="img-responsive" />
      								</div>
      								<div className="rating-left">
      									<img src="images/star-.png" alt=" " className="img-responsive" />
      								</div>
      								<div className="rating-left">
      									<img src="images/star-.png" alt=" " className="img-responsive" />
      								</div>
      								<div className="rating-left">
      									<img src="images/star.png" alt=" " className="img-responsive" />
      								</div>
      								<div className="rating-left">
      									<img src="images/star.png" alt=" " className="img-responsive" />
      								</div>
      								<div className="clearfix"> </div>
      							</div>
      							<div className="modal_body_right_cart simpleCart_shelfItem">
      								<p><span>$460</span> <i className="item_price">$450</i></p>
      								<form action="#" method="post">
      									<input type="hidden" name="cmd" value="_cart"/>
      									<input type="hidden" name="add" value="1"/>
      									<input type="hidden" name="w3ls_item" value="Mobile Phone1"/>
      									<input type="hidden" name="amount" value="450.00"/>
      									<button type="submit" className="w3ls-cart">Add to cart</button>
      								</form>
      							</div>
      							<h5>Color</h5>
      							<div className="color-quality">
      								<ul>
      									<li><a href="#"><span></span></a></li>
      									<li><a href="#" className="brown"><span></span></a></li>
      									<li><a href="#" className="purple"><span></span></a></li>
      									<li><a href="#" className="gray"><span></span></a></li>
      								</ul>
      							</div>
      						</div>
      						<div className="clearfix"> </div>
      					</div>
      				</section>
      			</div>
      		</div>
      	</div> */}


        {/* <div className="modal video-modal fade" id="myModal5" tabIndex="-1" role="dialog" aria-labelledby="myModal5">
      		<div className="modal-dialog" role="document">
      			<div className="modal-content">
      				<div className="modal-header">
      					<button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
      				</div>
      				<section>
      					<div className="modal-body">
      						<div className="col-md-5 modal_body_left">
      							<img src="images/36.jpg" alt=" " className="img-responsive" />
      						</div>
      						<div className="col-md-7 modal_body_right">
      							<h4>Dry Vacuum Cleaner</h4>
      							<p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      								commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      								cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      							<div className="rating">
      								<div className="rating-left">
      									<img src="images/star-.png" alt=" " className="img-responsive" />
      								</div>
      								<div className="rating-left">
      									<img src="images/star-.png" alt=" " className="img-responsive" />
      								</div>
      								<div className="rating-left">
      									<img src="images/star-.png" alt=" " className="img-responsive" />
      								</div>
      								<div className="rating-left">
      									<img src="images/star.png" alt=" " className="img-responsive" />
      								</div>
      								<div className="rating-left">
      									<img src="images/star.png" alt=" " className="img-responsive" />
      								</div>
      								<div className="clearfix"> </div>
      							</div>
      							<div className="modal_body_right_cart simpleCart_shelfItem">
      								<p><span>$960</span> <i className="item_price">$920</i></p>
      								<form action="#" method="post">
      									<input type="hidden" name="cmd" value="_cart"/>
      									<input type="hidden" name="add" value="1"/>
      									<input type="hidden" name="w3ls_item" value="Vacuum Cleaner"/>
      									<input type="hidden" name="amount" value="920.00"/>
      									<button type="submit" className="w3ls-cart">Add to cart</button>
      								</form>
      							</div>
      							<h5>Color</h5>
      							<div className="color-quality">
      								<ul>
      									<li><a href="#"><span></span></a></li>
      									<li><a href="#" className="brown"><span></span></a></li>
      									<li><a href="#" className="purple"><span></span></a></li>
      									<li><a href="#" className="gray"><span></span></a></li>
      								</ul>
      							</div>
      						</div>
      						<div className="clearfix"> </div>
      					</div>
      				</section>
      			</div>
      		</div>
      	</div> */}


      	{/* <div className="modal video-modal fade" id="myModal6" tabIndex="-1" role="dialog" aria-labelledby="myModal6">
      		<div className="modal-dialog" role="document">
      			<div className="modal-content">
      				<div className="modal-header">
      					<button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
      				</div>
      				<section>
      					<div className="modal-body">
      						<div className="col-md-5 modal_body_left">
      							<img src="images/37.jpg" alt=" " className="img-responsive" />
      						</div>
      						<div className="col-md-7 modal_body_right">
      							<h4>Kitchen & Dining Accessories</h4>
      							<p>Ut enim ad minim veniam, quis nostrud
      								exercitation ullamco laboris nisi ut aliquip ex ea
      								commodo consequat.Duis aute irure dolor in
      								reprehenderit in voluptate velit esse cillum dolore
      								eu fugiat nulla pariatur. Excepteur sint occaecat
      								cupidatat non proident, sunt in culpa qui officia
      								deserunt mollit anim id est laborum.</p>
      							<div className="rating">
      								<div className="rating-left">
      									<img src="images/star-.png" alt=" " className="img-responsive" />
      								</div>
      								<div className="rating-left">
      									<img src="images/star-.png" alt=" " className="img-responsive" />
      								</div>
      								<div className="rating-left">
      									<img src="images/star-.png" alt=" " className="img-responsive" />
      								</div>
      								<div className="rating-left">
      									<img src="images/star.png" alt=" " className="img-responsive" />
      								</div>
      								<div className="rating-left">
      									<img src="images/star.png" alt=" " className="img-responsive" />
      								</div>
      								<div className="clearfix"> </div>
      							</div>
      							<div className="modal_body_right_cart simpleCart_shelfItem">
      								<p><span>$280</span> <i className="item_price">$250</i></p>
      								<form action="#" method="post">
      									<input type="hidden" name="cmd" value="_cart"/>
      									<input type="hidden" name="add" value="1"/>
      									<input type="hidden" name="w3ls_item" value="Induction Stove"/>
      									<input type="hidden" name="amount" value="250.00"/>
      									<button type="submit" className="w3ls-cart">Add to cart</button>
      								</form>
      							</div>
      							<h5>Color</h5>
      							<div className="color-quality">
      								<ul>
      									<li><a href="#"><span></span></a></li>
      									<li><a href="#" className="brown"><span></span></a></li>
      									<li><a href="#" className="purple"><span></span></a></li>
      									<li><a href="#" className="gray"><span></span></a></li>
      								</ul>
      							</div>
      						</div>
      						<div className="clearfix"> </div>
      					</div>
      				</section>
      			</div>
      		</div>
      	</div> */}
      	<div className="banner-bottom1">
      		<div className="agileinfo_banner_bottom1_grids">
      			<div className="col-md-7 agileinfo_banner_bottom1_grid_left">
      				<h3>Grand Opening Event With flat<span>20% <i>Discount</i></span></h3>
      				<a href="products.html">Shop Now</a>
      			</div>
      			<div className="col-md-5 agileinfo_banner_bottom1_grid_right">
      				<h4>hot deal</h4>
      				<div className="timer_wrap">
      					<div id="counter"> </div>
      				</div>
      			</div>
      			<div className="clearfix"> </div>
      		</div>
      	</div>
      	{/* <div className="special-deals">
      		<div className="container">
      			<h2>Special Deals</h2>
      			<div className="w3agile_special_deals_grids">
      				<div className="col-md-7 w3agile_special_deals_grid_left">
      					<div className="w3agile_special_deals_grid_left_grid">
      						<img src="images/21.jpg" alt=" " className="img-responsive" />
      						<div className="w3agile_special_deals_grid_left_grid_pos1">
      							<h5>30%<span>Off/-</span></h5>
      						</div>
      						<div className="w3agile_special_deals_grid_left_grid_pos">
      							<h4>We Offer <span>Best Products</span></h4>
      						</div>
      					</div>
      					<div className="wmuSlider example1">
      						<div className="wmuSliderWrapper">
      							<article>
      								<div className="banner-wrap">
      									<div className="w3agile_special_deals_grid_left_grid1">
      										<img src="images/t1.png" alt=" " className="img-responsive" />
      										<p>Quis autem vel eum iure reprehenderit qui in ea voluptate
      											velit esse quam nihil molestiae consequatur, vel illum qui dolorem
      											eum fugiat quo voluptas nulla pariatur</p>
      										<h4>Laura</h4>
      									</div>
      								</div>
      							</article>
      							<article>
      								<div className="banner-wrap">
      									<div className="w3agile_special_deals_grid_left_grid1">
      										<img src="images/t2.png" alt=" " className="img-responsive" />
      										<p>Quis autem vel eum iure reprehenderit qui in ea voluptate
      											velit esse quam nihil molestiae consequatur, vel illum qui dolorem
      											eum fugiat quo voluptas nulla pariatur</p>
      										<h4>Michael</h4>
      									</div>
      								</div>
      							</article>
      							<article>
      								<div className="banner-wrap">
      									<div className="w3agile_special_deals_grid_left_grid1">
      										<img src="images/t3.png" alt=" " className="img-responsive" />
      										<p>Quis autem vel eum iure reprehenderit qui in ea voluptate
      											velit esse quam nihil molestiae consequatur, vel illum qui dolorem
      											eum fugiat quo voluptas nulla pariatur</p>
      										<h4>Rosy</h4>
      									</div>
      								</div>
      							</article>
      						</div>
      					</div>
      				</div>
      				<div className="col-md-5 w3agile_special_deals_grid_right">
      					<img src="images/20.jpg" alt=" " className="img-responsive" />
      					<div className="w3agile_special_deals_grid_right_pos">
      						<h4>Women's <span>Special</span></h4>
      						<h5>save up <span>to</span> 30%</h5>
      					</div>
      				</div>
      				<div className="clearfix"> </div>
      			</div>
      		</div>
      	</div> */}
      	<div className="new-products">
      		<div className="container">
      			<h3>New Products</h3>
            <Item/>
      		</div>
      	</div>
      	{/* <div className="top-brands">
      		<div className="container">
      			<h3>Top Brands</h3>
      			<div className="sliderfig">
      				<ul id="flexiselDemo1">
      					<li>
      						<img src="images/tb1.jpg" alt=" " className="img-responsive" />
      					</li>
      					<li>
      						<img src="images/tb2.jpg" alt=" " className="img-responsive" />
      					</li>
      					<li>
      						<img src="images/tb3.jpg" alt=" " className="img-responsive" />
      					</li>
      					<li>
      						<img src="images/tb4.jpg" alt=" " className="img-responsive" />
      					</li>
      					<li>
      						<img src="images/tb5.jpg" alt=" " className="img-responsive" />
      					</li>
      				</ul>
      			</div>
      		</div>
      	</div> */}


      	{/* <div className="newsletter">
      		<div className="container">
      			<div className="col-md-6 w3agile_newsletter_left">
      				<h3>Newsletter</h3>
      				<p>Excepteur sint occaecat cupidatat non proident, sunt.</p>
      			</div>
      			<div className="col-md-6 w3agile_newsletter_right">
      				<form action="#" method="post">
      					<input type="email" name="Email" placeholder="Email" required=""/>
      					<input type="submit" value="" />
      				</form>
      			</div>
      			<div className="clearfix"> </div>
      		</div>
      	</div> */}


      </div>
    </div>
    );
  }
}

export default Home;
