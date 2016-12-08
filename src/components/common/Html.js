import React from 'react'
import App from '../../pages/App'

class Html extends React.Component {

    render() {
        const { stores, children, dataPromise } = this.props
        const devServerURL = !process.env.DEV ? '' : `http://${stores.common.hostname.replace(2000, 2002)}`

        return <html>
            <head>
                <meta charSet="utf-8"/>
                <title>{stores.common.title}</title>
                <meta name="title" content={stores.common.title}/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"/>

                {/* Favicons */}
                <link rel="icon" href="/favicon.ico"/>

                {/* Bundled CSS */}
                <link href={devServerURL + '/build/bundle.css'} rel="stylesheet"/>

                {/* SSR State*/}
                <script dangerouslySetInnerHTML={insertState(stores)}/>
            </head>
            <body>
                {/* Our content rendered here */}
                <div id="container">
                    <App stores={stores} dataPromise={dataPromise}>
                        {children}
                        <div class="panel">
        <h1 style="color: #e31e25;font-size: 23px;">Offer of the Month</h1>
        <div class="ui-block-a">
            <h3 style="color: #e31e25; font-family: 'Oswald', sans-serif;">Will </h3>
            <p style="font-family: 'Oswald', sans-serif;">Making a Will can be Troublesome, Visheshagya makes it Simple. To make Difficult times less Difficult. Get your Will drafted today. </p>
            <a href="http://visheshagya.in/Expertdetails/willoffer">Click here to get started</a>
        </div>
        <div class="ui-block-a">
            <h3 style="color: #e31e25; font-family: 'Oswald', sans-serif;"> ITR</h3>
            <p style="font-family: 'Oswald', sans-serif;">Tax return filing can be taxing, Visheshagya makes it relaxing!.</p>
            <a href="http://visheshagya.in/Expertdetails/offer"> Click here</a>
        </div>
    </div>




        <div class="navbar navbar-default navbar-fixed-top">
            <div class="container">
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <a class="navbar-brand" href="#"><div class="logo"></div><div class="logo_text">Tax &amp; Legal Services Redefined</div></a>
                </div>
                <div class="collapse navbar-collapse">

                    <ul class="nav navbar-nav navbar-right">


                        <li><a class="launch-modal" href="#" data-modal-id="modal-login" data-modal-value="normal">Login</a></li>
                        <li><a href="http://visheshagya.in/Expert">For Experts</a></li>
                        <li><a href="http://visheshagya.in/Contact">Contact</a></li>


                        <li><a href="javascript:void(0);" class="slider-arrow">Offers </a></li>
                    </ul>
                </div><!--/.nav-collapse -->
            </div>
        </div>

        <!-- Banner START -->
        <div class="wide">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="bannerSearchForm" style="display:none;">
                            <div class="input-group" id="adv-search">
                                <input type="text" class="form-control bannerSearchInput" placeholder="What are you looking for?">
                                <div class="input-group-btn">
                                    <div class="btn-group" role="group">
                                        <div class="dropdown dropdown-lg">
                                            <button type="button" class="bannerSearchDD btn btn-default dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><span class="caret"></span></button>
                                            <div class="dropdown-menu dropdown-menu-right" role="menu">
                                                <form class="form-horizontal" role="form">

                                                </form>
                                            </div>
                                        </div>
                                        <div class="bannerSearchBtnGap"></div>
                                        <button type="button" class="bannerSearchGo btn btn-primary" onclick="searchExpert()">Search an Expert</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="row text-center" style="padding-bottom: 40px;">
                        <div class="col-xs-3 col-sm-2 col-sm-offset-2">
                            <div class="bannerIconBox">
                                <img src="http://visheshagya.in/assets1/img/expert.svg" alt="Book Appointment">
                            </div>
                            <div class="bannerIconText hidden-xs">Search Expert</div>
                        </div>
                        <div class="col-xs-3 col-sm-2">
                            <div class="bannerIconBox">
                                <img src="http://visheshagya.in/assets1/img/appoint1.svg" alt="Book Appointment">
                            </div>
                            <div class="bannerIconText hidden-xs">Book Appointment</div>
                        </div>
                        <div class="col-xs-3 col-sm-2">
                            <div class="bannerIconBox">
                                <img src="http://visheshagya.in/assets1/img/pay.svg" alt="Pay Online">
                            </div>
                            <div class="bannerIconText hidden-xs">Pay Online</div>
                        </div>
                        <div class="col-xs-3 col-sm-2">
                            <div class="bannerIconBox lastbox">
                                <img src="http://visheshagya.in/assets1/img/consult.svg" alt="Pay Online">
                            </div>
                            <div class="bannerIconText hidden-xs">Audio/Video Consultation</div>
                        </div>
                    </div>
                    <div class="row">
                        <br><h3 class="bannerHead">Our Panel of Experts</h3>
                    </div>


                    <div class="row" style="padding-bottom: 10px;">

                        <div class="col-xs-6 col-sm-3">
                            <div class="bannerSquareBox eqHt" style="height: 168px;">
                                <div class="bannerSquareLogo">

                                    <a href="Expertdetails/search/1"><img src="http://visheshagya.in/assets1/img/logo_ca.svg" alt="CA Logo"></a>
                                </div>
                                <div class="bannerSquareText">Chartered Accountant</div>
                            </div>
                        </div>
                        <div class="col-xs-6 col-sm-3">
                            <div class="bannerSquareBox eqHt" style="height: 168px;">
                                <div class="bannerSquareLogo">

                                    <a href="Expertdetails/search/2"><img src="http://visheshagya.in/assets1/img/logo_cs.svg" alt="CS Logo"></a>
                                </div>
                                <div class="bannerSquareText">Company Secretary</div>
                            </div>
                        </div>
                        <div class="col-xs-6 col-sm-3">
                            <div class="bannerSquareBox eqHt" style="height: 168px;">
                                <div class="bannerSquareLogo">
                                    <a href="Expertdetails/search/4"><img src="http://visheshagya.in/assets1/img/logo_cma.png" alt="CMA Logo"></a>
                                </div>
                                <div class="bannerSquareText">Certified Management Accountant</div>
                            </div>
                        </div>
                        <div class="col-xs-6 col-sm-3">
                            <div class="bannerSquareBox eqHt" style="height: 168px;">
                                <div class="bannerSquareLogo">
                                    <a href="Expertdetails/search/3"><img src="http://visheshagya.in/assets1/img/logo_law.svg" alt="Lawyer Logo"></a>
                                </div>
                                <div class="bannerSquareText">Lawyer</div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
            <section id="expertConsultancy" class="fullWidthSection redColor textcenter">
                <div class="container">
                    <a href="#"><span id="rotateText"><i class="ti-placeholder" style="display:inline-block;width:0;line-height:0;overflow:hidden;">.</i><span style="display:inline;position:relative;font:inherit;color:inherit;" class="ti-container"></span></span>&nbsp;Consultancy Just a click Away !</a>
                </div>
            </section>

            <section id="waitInQueue" class="fullWidthSection textcenter padding40">
                <div class="container">
                    <h4>Are you struggling with your Taxes?</h4>
                    <h5>Book instant appointments with Experts.</h5><br>
                    <div class="row">
                        <a href="http://visheshagya.in/Searchexpertdetails/clientBookingAppointmentInstant" class="btn btn-primary btn-lg active">Consult Immediately</a>
                    </div>
                </div>
            </section>
            <section id="whyVishesagya" class="fullWidthSection padding40 textcenter greyColor">
                <div class="container">
                    <h3 class="sectionHead">Why Visheshagya?</h3>
                    <div class="rowGap">&nbsp;</div>
                    <div class="row">
                        <div class="col-lg-3 col-md-6 text-center">
                            <div class="service-box">
                                <div class="serviceIcon">
                                    <img src="http://visheshagya.in/assets1/img/experts.svg" alt="Experts">
                                </div>
                                <h3>Search, Connect &amp; Consult</h3>
                                <p class="text-muted">Certified &amp; Verified Experts (CA/CS/CMA/Lawyers)</p>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 text-center">
                            <div class="service-box">
                                <div class="serviceIcon">
                                    <img src="http://visheshagya.in/assets1/img/webcam.svg" alt="Experts">
                                </div>
                                <h3>Audio &amp; Video Consultation<br>Anytime! Anywhere!</h3>
                                <p class="text-muted">Conveniently &amp; Comfortably <br>from your home/office <br> even on the Move/Go</p>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 text-center">
                            <div class="service-box">
                                <div class="serviceIcon">
                                    <img src="http://visheshagya.in/assets1/img/saveMoney.svg" alt="Experts">
                                </div>
                                <h3>Work Smarter<br>Achieve More</h3>
                                <p class="text-muted">Save on travel time &amp; expenses,<br> Schedule appointments,<br> Manage your calendar</p>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 text-center">
                            <div class="service-box">
                                <div class="serviceIcon">
                                    <img src="http://visheshagya.in/assets1/img/elocker.svg" alt="Experts">
                                </div>
                                <h3>Safe,Secure,Simple,Smarter Document storage</h3>
                                <p class="text-muted">Save, View, Organise, Access, Share documents anytime</p>
                            </div>
                        </div>

                    </div>
                    <div class="rowGap">&nbsp;</div>
                    <h3 class="sectionHead">How it Works</h3>
                    <div class="rowGap">&nbsp;</div>
                    <div class="row">
                        <div class="col-sm-12 col-md-8 col-md-offset-2">
                            <div class="embed-responsive embed-responsive-16by9 videoBox">
                                <iframe width="860" height="315" src="https://www.youtube.com/embed/RCXUIr5nlHw?autoplay=0&amp;loop=1&amp;playlist=i8AeakXxufM,9TIpcWA4vE8,Pfx7EYc1ERU" frameborder="0" allowfullscreen=""></iframe>
                            </div>
                        </div>
                    </div>
                    <div class="rowGap">&nbsp;</div>



                </div>
            </section>

            <section id="recenPost" class="fullWidthSection padding20">
                <div class="container">
                    <h3 class="textcenter recenPostHeading">Recent Post</h3>




                    <div id="myCarousel" class="carousel slide" data-ride="carousel">
                        <!-- Indicators -->
                        <ol class="carousel-indicators">
                            <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                            <li data-target="#myCarousel" data-slide-to="1" class=""></li>
                            <li data-target="#myCarousel" data-slide-to="2" class=""></li>
                            <li data-target="#myCarousel" data-slide-to="3" class=""></li>
                        </ol>

                        <!-- Wrapper for slides -->

                        <div class="carousel-inner" role="listbox">
                            <div class="item active">
                                <h3>What rights do landlords and tenants have in India, especially w.r.t. to duration of contract and eviction ?</h3>
                                <p>Since Lease and License Agreements are designed to escape restrictive regulations, all terms are governed by agreement between landlord and tenant. Aside from the most basic condition that the tenancy is only for 11 months, everything must be stated in the contract.Typical contracts include a provision that, if either party wishes to prematurely terminate the contract, three month’s notice must be given.The typical agreement also prohibits subleasing. To deter tenants from overstaying, we recommend including a clause quadrupling the rent if the tenant does not leave when the contract ends.
                                </p>
                                <a href="http://visheshagya.in/blog" style="color:white;"><p>Know More...</p></a></div>

                            <div class="item">
                                <h3>How effective is the legal system to help landlords who have given their homes on rent ?</h3>
                                <p>Court proceedings of any type should be avoided at all times. Well-defined contracts will greatly help landlords to convince tenants that they (the landlords) are likely to win the case in court. An eviction cases can last up to 10 or even 20 years.(Legislation)
                                    Local laws cover landlord and tenant agreements. Many local rent control laws such as the Maharashtra Rent Act 1999, Delhi Rent Act 1995, Tamil Nadu Buildings (Lease and Rent Control) Act 1960, strictly regulate rental agreements that are 12 months or longer in favor of tenants. If the monthly rent payable on a property exceeds Rs3,500 (US$76), the agreement is subject to the Transfer of Property Act (TPA), which assigns the landlord responsibilities including i) disclosure of information regarding material defects in the property and ii) uninterrupted occupation of the property for the agreed period (subject to periodic visits by the landlord for inspection).</p>
                                <a href="http://visheshagya.in/blog" style="color:white;"><p>Know More...</p></a>
                            </div>

                            <div class="item">
                                <h3>Tired of time consuming, expensive court battles ? We've got the right solution for you...</h3>
                                <p>The Indian law of Arbitration and Conciliation act 1996, under section 61 provides the scope and application of conciliation (alternate dispute redressal). Interminable, time consuming, complex and expensive Court procedures have led parties to settle their disputes out of the court.  It would be the right answer for people who want  their disputes to be settled expeditiously and through an option which is cost effective and simple.However;it is non-binding in nature!</p>
                                <a href="http://visheshagya.in/blog" style="color:white;"><p>Know More...</p></a>
                            </div>

                            <div class="item">
                                <h3>Statutory explanation of will and its features ! </h3>
                                <p>The Indian Succession Act 1925 under Section 2(h) provides the statutory explanation of a will and its features. Will means the legal declaration of the intention of a person with respect to his property, which he desires to take effect after his death. It is a unilateral document and takes effect after the death of the person making it. It can be revoked or altered by the maker of it at any time he is competent to dispose of his property. </p>
                                <a href="http://visheshagya.in/blog" style="color:white;"><p>Know More...</p></a>
                            </div>
                        </div>


                        <!-- Left and right controls -->
                        <a class="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
                            <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                            <span class="sr-only">Previous</span>
                        </a>
                        <a class="right carousel-control" href="#myCarousel" role="button" data-slide="next">
                            <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                            <span class="sr-only">Next</span>
                        </a>
                    </div>



                </div>
            </section>




            <section class="fullWidthSection greyColor padding40">
                <div class="container">
                    <h3 class="textcenter areuExpertHeading">Are You An Expert?</h3><br>

                    <p style="text-align: center;">Come be a part of our journey, revolutionize taxation, legal  and accounting services.<br> Create a hassle free life for everyone ! </p>
                    <a href="http://visheshagya.in/Expert"><p class="textright">Know More...
                        </p></a>
                </div>
            </section>

            <section class="fullWidthSection padding40">
                <div class="container">
                    <h3 class="textcenter">About Us</h3><br>
                    <br>
                    <br>
                    <h4><b>About Visheshagya</b></h4>
                    <p><b class="new">Visheshagya, Tax &amp; Legal Services Redefined</b> is a one stop e-commerce portal in the taxation, legal and accounting space.
                        Visheshagya empowers clients by helping them search, connect, consult certified &amp; verified CA/CS/CMA/Lawyers at a click.
                        Clients can schedule appointments, seek advice through audio/video consultation and even pay conveniently through a secure payment gateway.
                        Visheshagya offers multiple services at the convenience of both client &amp; experts in the comfort of their office, home and even when one is on the go. Visheshagya’s USP of transparency and confidentiality is all set to digitize operations helping everyone manage their time &amp; documents efficiently.</p>
                    <h4><b>Our Vision</b></h4>
                    <p>
                        Visheshagya aims to bring about a paradigm shift in the way professional services for taxation, accounting and legal are rendered to clients!<br>
                        Visheshagya’s vision is to<b class="new"> empower clients</b> by providing easy accessibility, convenience, transparency through technology driven, state of the art professional services and <b class="new">enable experts</b> to adapt to newer &amp; smarter ways of doing &amp; growing business.
                    </p>
                    <h4><b>About The Founder</b></h4>
                    <p><b>Ms. Rashmmi Khetrapal</b> – a dynamic and enterprising CA. She has 16 + years of experience in Accounting &amp; Finance. She has held the esteemed post of the Chairperson of the Gurgaon Branch of the NIRC of the ICAI during 2009-10. She was also the first lady to be elected as NIRC member of ICAI in 2010-13. During her tenure as a NIRC member, she has held various prestigious positions like NICASA Chairperson, Chairperson for CA members in Industry, Chairperson for Branch Coordination Committee and Chairperson for VAT Committee etc. Her area of expertise lies in the field of assessment &amp; appeal cases for VAT, Service &amp; Income Tax for corporate &amp; high net worth individuals.</p>
                </div>
            </section>





            <section class="fullWidthSection greyColor padding40">

                <div class="container">
                    <h3 class="textcenter">Featured In</h3><br>



                    <ul id="news">
                        <li><a target="_blank" href=""><img src="http://visheshagya.in/assets1/img/yoSuccess.png" width="10" height="20"> </a></li>

                        <li><a target="_blank" href="http://jaipurwomenblog.org/rashmmi-khetrapal-from-an-abusive-marriage-to-a-successful-business-that-empowers-women/"><img src="http://visheshagya.in/assets1/img/jaipurWomenBlog.png" width="40" height="20"> </a></li>

                        <li><a target="_blank" href="https://yourstory.com/2016/08/rashmmi-khetrapal/"><img src="http://visheshagya.in/assets1/img/yourstory.png" width="40" height="20"> </a></li>




                         <li><a target="_blank" href="https://www.youtube.com/channel/UCP-5hg80ZMVCYDZwnmnAbTg"><img src="http://visheshagya.in/assets1/img/youtube.png" width="10" height="20"> </a></li>
                         </ul>
                         <br>
                         <ul id="news">


                          <li><a target="_blank" href="http://www.cityairnews.com/content/visheshagya-redefining-services-digitizing-finance-and-legal-processes-individuals-sme%E2%80%99s-and"><img src="http://visheshagya.in/assets1/img/city.png" width="10" height="20"> </a></li>


                           <li><a target="_blank" href="http://www.yourchennai.com/2016/05/14/visheshagya-is-a-new-e-trade-gateway-for-ca-cma-cs-and-lawyers/"><img src="http://visheshagya.in/assets1/img/YClogo.gif" width="10" height="20"> </a></li>

                            <li><a target="_blank" href="http://www.thisweekdelhi.com/visheshagya-redefining-services-digitizing-finance-and-legal-processes-for-individuals-smes-and-experts/"><img src="http://visheshagya.in/assets1/img/thisweek.png" width="10" height="20"> </a></li>

                             <li><a target="_blank" href="https://www.google.com/url?hl=en&amp;q=http://www.pocketnewsalert.com/2016/05/Visheshagya-redefining-services-Digitizing-Finance-and-Legal-processes-for-individuals-SMEs-and-Experts.html&amp;source=gmail&amp;ust=1475225153738000&amp;usg=AFQjCNGqGkQ8Luq8_D4bBsLtUG9j4o0iKg"><img src="http://visheshagya.in/assets1/img/pocketnewsalert.png" width="10" height="20"> </a></li>




                                           </ul>


                 </div>
            </section>

            <footer id="footer" class="fullWidthSection greyColor">
                <div class="container">
                    <div class="row">
                        <div class="col-md-6 col-sm-6">
                            <ul class="list-inline social-buttons">
                                <li>Follow Us On:</li>
                                <li><a href="https://www.facebook.com/visheshagya/"><i class="fa fa-facebook"></i></a></li>
                                <li><a href="https://twitter.com/Visheshagya_IN"><i class="fa fa-twitter"></i></a></li>
                                <li><a href="https://in.linkedin.com/in/visheshagya-india-a35780117"><i class="fa fa-linkedin"></i></a></li>
                                <!--counter start -->
                               <!-- <li><a href="http://www.hitwebcounter.com" target="_blank">
                                        <img src="http://hitwebcounter.com/counter/counter.php?page=6443082&style=0003&nbdigits=5&type=page&initCount=0" title="website counter" Alt="website counter"   border="0" >
                                    </a>                                        <br/>-->
                                    <!-- hitwebcounter.com --><!--<a href="http://www.hitwebcounter.com" title="Stats For Free"
                                                                 target="_blank" style="font-family: Arial, Helvetica, sans-serif;
                                                                 font-size: 9px; color: #736C65; text-decoration: none ;"><em>Stats For Free                                        </em>
                                    </a>   </li>-->
                                <!--end -->
                            </ul>

                        </div>
                        <div class="col-md-6 col-sm-6 textright">
                            <a href="http://visheshagya.in">  Visheshagya.in</a> | <a href="http://visheshagya.in/blog"> Blog</a>   |  <a href="http://visheshagya.in/ExpertTermsAndCondition">Terms of Use</a> | <a href="http://visheshagya.in/Privacy">Privacy Policy</a>
                        </div>
                    </div>

                </div>
            </footer>


            <!-- MODAL -->
            <div class="modal fade" id="modal-login" tabindex="-1" role="dialog" aria-labelledby="modal-login-label" aria-hidden="true" data-role="none">
                <div class="modal-dialog">

                    <!-- Modal content-->
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal">×</button>
                            <h4><span class="glyphicon glyphicon-lock"></span> <span id="frmLoginTitle">Login</span></h4>
                        </div>
                        <div class="modal-body" style="padding:40px 50px;">
                            <div id="frmLogin">
                                <form role="form" action="http://visheshagya.in/clientHome/clientLogin" method="post">
                                    <input type="hidden" name="frmLoginOfferType" id="frmLoginOfferType">

                                    <div class="form-group">
                                        <label for="usrname"><span class="glyphicon glyphicon-user"></span> Username</label>
                                        <input type="text" class="form-control" id="usrname" name="clientEmailId" placeholder="Enter email">
                                    </div>
                                    <div class="form-group">
                                        <label for="psw"><span class="glyphicon glyphicon-eye-open"></span> Password</label>
                                        <input type="password" class="form-control" id="psw" name="clientPassword" placeholder="Enter password">
                                    </div>
                                    <div class="loginFormPopup checkbox">
                                        <label>
                                            <input type="checkbox" value="">
                                            <span class="cr"><i class="cr-icon glyphicon glyphicon-ok"></i></span>
                                            Remember me
                                        </label>
                                    </div>
                                    <button type="submit" name="submit" class="btn btn-success btn-block"><span class="glyphicon glyphicon-off"></span> Login</button>
                                </form>
                            </div>
                            <!--forgot -->

                            <div id="frmForgot" style="display:none;">
                                <form role="form" action="http://visheshagya.in/ExpertForgotPass/expertPasswordRecover" method="post">

                                    <div class="form-group">
                                        <label for="usrname"><span class="glyphicon glyphicon-user"></span> Email</label>
                                        <input type="email" class="form-control" id="usrname" name="expertEmailId" placeholder="Enter email" required="">
                                    </div>
                                    <div class="form-group">
                                        <label for="psw"><span class="glyphicon glyphicon-eye-open"></span> Mobile</label>
                                        <input type="text" class="form-control" name="expertMobileNumber" id="psw" placeholder="Enter Mobile Number" pattern="[1-9]{1}[0-9]{9}" oninvalid="setCustomValidity('Mobile Number with 6-9 and remaing 9 digit with 0-9')">
                                    </div>

                                    <button type="submit" class="btn btn-success btn-block"><span class="glyphicon glyphicon-off"></span> Reset Password</button>
                                </form>
                            </div>


                            <!--forgot end -->
                            <div id="frmRegister">

                                <form action="http://visheshagya.in/clientHome/addClient" class="form-horizontal" method="post" accept-charset="utf-8">


                                <div class="form-group">
                                    <label for="usrname"><i class="fa fa-user" aria-hidden="true"></i> Full Name</label>
                                    <input type="name" name="clientName" value="" required="true" class="form-control" placeholder="Enter Your name">
                                </div>
                                <div class="form-group">
                                    <label for="email"><i class="fa fa-envelope" aria-hidden="true"></i> Email Id</label>
                                    <input type="email" name="clientEmailId" value="" id="clientEmailId" required="true" class="form-control" placeholder="abc@xyz.com" onchange="checkClientEmailId(this.value)">
                                </div>
                                <div class="form-group">
                                    <label for="phone"><i class="glyphicon glyphicon-phone" aria-hidden="true"></i> Mobile No.</label>

<input type="text" name="clientMobileNumber" value="" required="true" class="form-control" placeholder="Mobile Number">
                                </div>

                                <div class="loginFormPopup checkbox">
                                    <label>
                                        <input type="checkbox" value="">
                                        <span class="cr"><i class="cr-icon glyphicon glyphicon-ok"></i></span>
                                        I agree with the <a href="http://visheshagya.in/ExpertTermsAndCondition" title="Click here to read Terms and Conditions">terms and conditions</a> for Registration.
                                    </label>
                                </div>


<input type="submit" name="submit" value="Sign-Up" class="btn btn-success btn-block">
                                </form>

                            </div>
                        </div>
                        <div class="modal-footer">
                            <input type="hidden" name="frmLoginOfferType2" id="frmLoginOfferType2">



                            <a href="https://www.facebook.com/dialog/oauth?client_id=360705264099904&amp;redirect_uri=http%3A%2F%2Fvisheshagya.in%2FClientHome&amp;state=01dcad45a5893f5196d9b7124e6519a7&amp;scope=email" id="btnFBlogin" class="btn btn-default pull-left"><i class="fa fa-facebook-official" aria-hidden="true"></i> login with facebook</a>
                           <!-- <a id="btnFBlogin" class="btn btn-default pull-left" href="'"><i class="fa fa-facebook-official" aria-hidden="true"></i> login with facebook </a>-->




                            <div id="frmLoginFooter">
                                <p>New to Visheshagya? <a id="btnShowSignup" href="#">Sign Up</a></p>
                            </div>
                            <div id="frmRegisterFooter">
                                <p>Already a member? <a id="btnShowLogin" href="#">Login</a></p>
                            </div>
                            <div id="frmForgotFooter">
                                <p>Forgot <a id="btnShowForgot" href="#">Password?</a></p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            
                    </App>
                </div>

                {/* Bundled JS */}
                <script async src={devServerURL + '/build/bundle.js'}/>
            </body>
        </html>
    }
}

export default Html

function insertState(stores) {
    return {
        __html: 'window.__STATE = ' + JSON.stringify(stores, null, process.env.DEV ? 4 : 0) + ';'
    }
}
