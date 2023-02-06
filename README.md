# Build settings
theme: minima



<!DOCTYPE html>
<html lang="en">
<head>
    <title>Welcome to the Allison Lab</title>
    <meta name="description" content="Home Page">
    <meta name="keywords" content="Allison Lab, University of Canterbury, New Zealand, NZ">
    <meta name="author" content="Viet-Anh Hoang">
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="shortcut icon" href="Images/Lab_Icon.ico">
    <link rel="stylesheet" href="CSS/NavBar.css">
    <link rel="stylesheet" href="CSS/Banner.css">
    <link rel="stylesheet" href="CSS/Content_Home_Pg.css">
    <link rel="stylesheet" href="CSS/Footer.css">
    <style>
        html, body {
            margin: 0;
            padding: 0;
            scroll-behavior: smooth;
        }
    </style>
</head>

<body>
    <div id="menu_button">
        <div class="bar1"></div>
        <div class="bar2"></div>
        <div class="bar3"></div>
    </div>

    <div id="sidenavbar" class="sidenav">
        <div id="close_button">&times;</div>
        <div id="upperpart">
            <a id="logo_link" href="Home.html"><img id="sidebar_lablogo" src="Images/Lab Logo_white.png"></a>
            <a id="sidenav_link1"><img class="sidebar_icon" src="Images/Research_Icon_Inverted.png">Research<span id="dropdown_arrow1">&#128898</span></a>
            <div class="sidebar_dropdown" id="dropdown1">
                <a class="dropdown_link" href="Themes & Technologies.html">&#8226; Research themes & technologies</a>
                <a class="dropdown_link" href="ScientificOutputs.html">&#8226; Scientific outputs</a>
            </div>
            <a id="sidenav_link2" href="Team.html"><img class="sidebar_icon" src="Images/Team_Icon_Inverted.png">Team</a>
            <a id="sidenav_link3" href="Facilities.html"><img class="sidebar_icon" src="Images/Facilities_Icon_Inverted.png">Facilities</a>
            <a id="sidenav_link4" href="Opportunities.html"><img class="sidebar_icon" src="Images/Opportunities_Icon_Inverted.png">Opportunities</a>
        </div>
        <div id="lowerpart">
            <a id="sidenav_link5" href="Contacts-Address-Access.html">
                <div><img class="sidebar_icon" src="Images/Contacts_Icon_Inverted.png">Contacts</div>
                <span>&#8212;&#8212;&#8212;&#8212;&#8212;</span>
                <div><img class="sidebar_icon" src="Images/Location_Icon_Inverted.png">Address</div>
                <span>&#8212;&#8212;&#8212;&#8212;&#8212;</span>
                <div><img class="sidebar_icon" src="Images/Directions_Icon_Inverted.png">Access</div>
            </a>
            <a id="sidenav_link6" href="Copyright.html"><img class="sidebar_icon" src="Images/Copyright_Icon_Inverted.png">Copyright</a>
        </div>
    </div>
    
    <div id="main">
        <ul id="topnavbar">
            <li><a id="home" href="Home.html"><img id="lab_logo" src="Images/Lab Logo.png" alt="Lab Logo"></a></li>
            <ul>
                <li>
                    <div class="link_container" id="link_container1">
                        <a class="link" href="Research.html">Research<img class="icon" id="research_icon" src="Images/Research_Icon_Colored.png"></a>
                        <div class="sub_menu" id="sub_menu1">
                            <span class="tooltip" id="tooltip1"></span>
                            <a class="sub_link" href="Themes & Technologies.html">Themes & technologies</a>
                            <hr id="hr1">
                            <a class="sub_link" href="ScientificOutputs.html">Scientific outputs</a>
                        </div>
                    </div>
                </li>
                <li><div class="link_container" id="link_container2"><a class="link" href="Team.html">Team<img class="icon" id="team_icon" src="Images/Team_Icon_Colored.png"></a></div></li>
                <li><div class="link_container" id="link_container3"><a class="link" href="Facilities.html">Facilities<img class="icon" id="facilities_icon" src="Images/Facilities_Icon_Colored.png"></a></div></li>
                <li><div class="link_container" id="link_container4"><a class="link" href="Opportunities.html">Opportunities<img class="icon" id="opportunities_icon" src="Images/Opportunities_Icon_Colored.png"></a></div></li>
            </ul>
        </ul>

        <section id="banner">
            <a id="banner_link1" href="People.html"><img class="banner_img" src="Images/Banners/Banner1.jpg" alt="Banner1"></a>
            <a id="banner_link2" href="Opportunities.html"><img class="banner_img" src="Images/Banners/Banner2.jpg" alt="Banner2"></a>
            <a id="banner_link3" href="People.html"><img class="banner_img" src="Images/Banners/Banner3.jpg" alt="Banner3"></a>
            <a id="banner_link4" href="Opportunities.html"><img class="banner_img" src="Images/Banners/Banner4.jpg" alt="Banner4"></a>
            <a id="banner_link5" href="Opportunities.html"><img class="banner_img" src="Images/Banners/Banner5.jpg" alt="Banner5"></a>
            <a id="banner_link6" href="Opportunities.html"><img class="banner_img" src="Images/Banners/Banner6.jpg" alt="Banner6"></a>
            <a id="banner_link7" href="Opportunities.html"><img class="banner_img" src="Images/Banners/Banner7.jpg" alt="Banner7"></a>
            <a id="banner_link8" href="Opportunities.html"><img class="banner_img" src="Images/Banners/Banner8.jpg" alt="Banner8"></a>
            <a id="banner_link9" href="Opportunities.html"><img class="banner_img" src="Images/Banners/Banner9.jpg" alt="Banner9"></a>
            <a id="banner_link10" href="Opportunities.html"><img class="banner_img" src="Images/Banners/Banner10.jpg" alt="Banner10"></a>
            <div class="breadcrumb" id="breadcrumb_home_pg">Home</div>
            <div id="intro">
                <h1>Welcome to the Allison Lab!</h1>
                <div>The Allison Laboratory, a part of the School of Physical and Chemical Sciencies, University of Canterbury and Biomolecular Interaction Centre, is a structural and functional biochemistry research group located in Christchurch, the gateway to the South Island of New Zealand.
                    <br><br>
                    <a class="intro_button" href="Team.html">Our team</a>
                    <a class="intro_button" href="Research.html">Our research</a>
                </div>
            </div>
        </section>

        <section id="intro_mobile">
            <h2>Welcome to the Allison Lab!</h2>
            <div>The Allison Laboratory, a part of the School of Physical and Chemical Sciencies, University of Canterbury and Biomolecular Interaction Centre, is a structural and functional biochemistry research group located in Christchurch, the gateway to the South Island of New Zealand.
                <br><br>
                <a class="intro_button" href="Team.html">Our team</a>
                <a class="intro_button" href="Research.html">Our research</a>
            </div>
        </section>

        <section id="news">
            <h2>News</h2>
            <div id="news_container">
                <a href="#" id="col1" class="scrolling_animation">
                    <img src="Images/Resource Img/Campus.jpg">
                    <p>Vivamus venenatis velit nec neque ultricies, eget elementum magna tristique. <br><span>April 15, 2022</span></p>
                </a>
                <div id="col2">
                    <a class="row scrolling_animation" href="#">
                        <img src="Images/Resource Img/Campus2.jpeg">
                        <p>Vivamus venenatis velit nec neque ultricies, eget elementum magna tristique. <br><span>April 15, 2022</span></p>
                    </a>
                    <a class="row scrolling_animation" href="#">
                        <img src="Images/Resource Img/Campus2.jpeg">
                        <p>Vivamus venenatis velit nec neque ultricies, eget elementum magna tristique. <br><span>April 15, 2022</span></p>
                    </a>
                    <a class="row scrolling_animation" href="#">
                        <img src="Images/Resource Img/Campus2.jpeg">
                        <p>Vivamus venenatis velit nec neque ultricies, eget elementum magna tristique. <br><span>April 15, 2022</span></p>
                    </a>
                </div>
            </div>
        </section>

        <section id="pub_n_tweet">
            <div id="col3">
                <h2>Recent publications</h2>
                <div class="recent_pubs scrolling_animation">
                    <p class="title">Ion mobility-mass spectrometry shows stepwise protein unfolding under alkaline conditions</p><span>2021</span><span>Journal Articles</span>
                    <p class="author">Sahin C., Österlund N., Leppert A., Johansson J., Marklund EG., Benesch JLP., Ilag LL., Allison TM. and Landreh M.</p>
                    <p class="publisher"><b>Chemical Communications</b> 57(12): 1450-1453</p>
                    <a class="ref_link" href="http://dx.doi.org/10.1039/d0cc08135c">http://dx.doi.org/10.1039/d0cc08135c</a>
                </div>
                <div class="recent_pubs scrolling_animation">
                    <p class="title">Native Protein Mass Spectrometry</p><span>2020</span><span>Chapters</span>
                    <p class="author">Allison TM. and Agasid MT.</p>
                    <p class="publisher"><b>Methods in Molecular Biology</b>: 287-299</p>
                    <a class="ref_link" href="http://dx.doi.org/10.1007/978-1-4939-9869-2_15">http://dx.doi.org/10.1007/978-1-4939-9869-2_15</a>
                </div>
                <div class="recent_pubs scrolling_animation">
                    <p class="title">Software requirements for the analysis and interpretation of native ion mobility mass spectrometry data</p><span>2020</span><span>Journal Articles</span>
                    <p class="author">Allison TM., Barran P., Benesch JLP., Cianferani S., Degiacomi MT., Gabelica V., Grandori R., Marklund EG., Menneteau T. and Migas LG.</p>
                    <p class="publisher"><b>Analytical Chemistry</b> 92(16): 10881-10890</p>
                    <a class="ref_link" href="http://dx.doi.org/10.1021/acs.analchem.9b05792">http://dx.doi.org/10.1021/acs.analchem.9b05792</a>
                </div>
                <div class="recent_pubs scrolling_animation">
                    <p class="title">Computational strategies and challenges for using native ion mobility mass spectrometry in biophysics and structural biology</p><span>2020</span><span>Journal Articles</span>
                    <p class="author">Allison TM., Barran P., Cianférani S., Degiacomi MT., Gabelica V., Grandori R., Marklund EG., Menneteau T., Migas LG. and Politis A.</p>
                    <p class="publisher"><b>Analytical Chemistry</b> 92(16): 10872-10880</p>
                    <a class="ref_link" href="http://dx.doi.org/10.1021/acs.analchem.9b05791">http://dx.doi.org/10.1021/acs.analchem.9b05791</a>
                </div>
                <div class="recent_pubs scrolling_animation">
                    <p class="title">A mass-spectrometry-based approach to distinguish annular and specific lipid binding to membrane proteins</p><span>2020</span><span>Journal Articles</span>
                    <p class="author">Bolla JR., Corey RA., Sahin C., Gault J., Hummer A., Hopper JTS., Lane DP., Drew D., Allison TM. and Stansfeld PJ.</p>
                    <p class="publisher"><b>Angewandte Chemie - International Edition</b> 59(9): 3523-3528</p>
                    <a class="ref_link" href="http://dx.doi.org/10.1002/anie.201914411">http://dx.doi.org/10.1002/anie.201914411</a>
                </div>
                <a class="button" href="Publications.html">All publications</a><br><br> <!--added 2 <br> to equal heights of col3 & col4 since <a> is inline block then no padding counts-->
            </div>
            <div id="col4" class="scrolling_animation">
                <a class="twitter-timeline" data-height="auto" data-theme="light" data-chrome="transparent" data-border-color="#c0c0c0" href="https://twitter.com/allison_lab?ref_src=twsrc%5Etfw">Tweets by allison_lab</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
            </div>
        </section>

        <section id="footer">
            <div id="upper_part">
                <a class="img_link" href="Home.html"><img id="lab_logo" src="Images/Lab Logo_white.png" alt="Lab Logo"></a>
                <div id="link_containers">
                    <div id="link_container5">
                        <a class="link" href="Contacts-Address-Access.html">Contacts<img class="icon" src="Images/Contacts_Icon_Inverted.png"></a>
                        <span>-</span>
                        <a class="link" href="Contacts-Address-Access.html">Address<img class="icon" src="Images/Location_Icon_Inverted.png"></a>
                        <span>-</span>
                        <a class="link" href="Contacts-Address-Access.html">Access<img class="icon" src="Images/Directions_Icon_Inverted.png"></a>
                    </div>
                    <div id="link_container6"><a class="link" href="Copyright.html">Copyright<img class="icon" src="Images/Copyright_Icon_Inverted.png"></a></div>
                    <p id="break">|<p>
                </div>
                <a class="img_link" href="https://www.canterbury.ac.nz" target="_blank"><img id="univ_logo" src="Images/UC_Logo3.png" alt="University Logo"></a>
            </div>
            <div id="lower_part">
                <div class="lower_containers"><a class="link" href="Copyright.html"><img class="icon" src="Images/Copyright_Icon_Inverted.png">2017-2021 Allison Lab</a></div>
                <div class="lower_containers" id="lower_container1">
                    <a class="link" href="tel:+64 (3) 369 3034"><img class="icon" src="Images/PhoneCall_Icon_Inverted.png">+64 (3) 369 3034</a>
                    <span>|</span>
                    <a class="link" href="mailto:timothy.allison@canterbury.ac.nz"><img class="icon" src="Images/Email_Icon_Inverted.png">timothy.allison@canterbury.ac.nz</a>
                </div>
                <div class="lower_containers"><a class="link" href="Contacts-Address-Access.html"><img class="icon" src="Images/Location_Icon_Inverted.png">School of Physical and Chemical Sciences, University of Canterbury, Private Bag 4800, Christchurch 8140, New Zealand</a></div>
            </div>
        </section>

        <a id="jump_link" class="anchor hide" href="#topnavbar">
            <div>&#11165;</div>
        </a>

        <script src="JS/AnchorLink_appearance_timing.js"></script>
        <script src="JS/ScrollingTriggered_animation.js"></script>
        <script src="JS/SideNavBar_animation.js"></script>
    </div>
</body>
</html>
