<!DOCTYPE html>
<html lang="zxx">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
    <title><?= $title ?></title>
    <?=$meta_tags?>
    <!-- Bootstrap core CSS -->
    <link href="<?=base_url();?>assets/bootstrap/css/bootstrap.min.css" rel="stylesheet">
    <!-- Google Font  --> 
    <link href="https://fonts.googleapis.com/css?family=Montserrat:400,400i,500,500i,600,600i,700,700i|Roboto:400,400i,500,500i,700,700i" rel="stylesheet"> 
    <!-- flaticon icon -->
    <link rel="stylesheet" href="<?=base_url();?>assets/fonts/icon-font.min.css">
    <!-- icofont icon -->
    <link rel="stylesheet" href="<?=base_url();?>assets/fonts/icofont.css">
    <!--- meanmenu Css-->
    <link rel="stylesheet" href="<?=base_url();?>assets/css/meanmenu.min.css" media="all" />
    <!-- animate CSS -->
    <link rel="stylesheet" href="<?=base_url();?>assets/css/animate.css">
    <!-- prettyphoto -->
    <link rel="stylesheet" href="<?=base_url();?>assets/prettyphoto/css/prettyPhoto.css" />
    <!--- owl carousel Css-->
    <link rel="stylesheet" href="<?=base_url();?>assets/owlcarousel/css/owl.carousel.min.css">
    <link rel="stylesheet" href="<?=base_url();?>assets/owlcarousel/css/owl.theme.default.min.css">
    <!-- Style CSS -->
    <link rel="stylesheet" href="<?=base_url();?>assets/css/style.css">
    <!-- Responsive  CSS -->
    <link rel="stylesheet" href="<?=base_url();?>assets/css/responsive.css">
    <link rel="stylesheet" href="<?=base_url();?>assets/css/magnific-popup.css">
    <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/font-awesome/5.8.2/css/all.min.css">
    <link rel="stylesheet" href="<?=base_url();?>assets/social-share.css">
    <link rel="stylesheet" href="<?=base_url();?>assets/greatjoin.css">
</head>

<body oncontextmenu="return false;" oncopy="return false;" oncut="return false;"  ondragstart="return false;">

    <header class="main-header header-1">
    
        <!-- START PRELOADER --
        <div id="page-preloader">
            <div class="preload-tetrominos text-center">
                <img src="<?=base_url()?>assets/images/logo.svg" width="300"/><br/>
                <img src="<?=base_url()?>assets/images/spin.svg" width="30"/>
            </div>
        </div>
        <!-- END PRELOADER --> 
        
        <!-- START TOP AREA -->
        <div class="top-area mobile-hide">
            <div class="auto-container">
                <div class="row">
                    <div class="col-lg-8 col-md-12 col-sm-12 col-12">
                        <div class="info-menu">
                            <ul>
                                <li><a href="#"><i class="icofont icofont-clock-time"></i> Opening Hours - Monday to Saturday: 9AM to 8PM</a></li>
                                <li><a href="<?=base_url("about")?>"><i class="icofont icofont-compass-alt"></i> Company Profile</a></li>
                            </ul>
                        </div>
                    </div>
                    <!-- end col -->
                    <div class="col-lg-4 col-md-12 col-sm-12 col-12">
                        <div class="social">
                            <ul>
                               <li><a href="<?=$contact_detail['facebook_link']?>"><i class="icofont icofont-social-facebook"></i></a></li>
                               <li><a href="<?=$contact_detail['twitter_link']?>"><i class="icofont icofont-social-twitter"></i></a></li>
                               <li><a href="<?=$contact_detail['instagram_link']?>"><i class="icofont icofont-social-instagram"></i></a></li>
                               <li><a href="<?=$contact_detail['linkedin_link']?>"><i class="icofont icofont-social-linkedin"></i></a></li>
                               <li><a href="skype:rajesh.patel158?chat"><i class="icofont icofont-social-skype"></i></a></li>
                            </ul>
                        </div>
                    </div> 
                    <!-- end col -->
                </div>
            </div>
        </div>
        <!-- END TOP AREA -->

        <!-- START LOGO AREA -->
        <div class="logo-area">
            <div class="auto-container">
                <div class="row">
                    <div class="col-lg-3 col-md-3 col-sm-6 col-7 mx-md-auto mx-sm-auto mx-auto pl-0">
                        <div class="logo">
                            <a href="<?=base_url()?>">
                               <img src="<?=base_url()?>assets/images/logo.svg" height="80" alt="">
                            </a>
                        </div>
                    </div>
                    <!-- end col -->
                    <div class="col-lg-9 col-md-12 col-sm-12 col-12 mobile-hide">
                        <div class="header-info-box">
                            <div class="header-info-icon"><span class="lnr lnr-envelope"></span></div>
                            <h6>Mail Us</h6>
                            <p><?=$contact_detail['email1']?></p>
                        </div>
                        <div class="header-info-box">
                            <div class="header-info-icon"><span class="lnr lnr-phone"></span></div>
                            <h6>Call Now</h6>
                            <p><?=$contact_detail['office1']?></p>
                        </div>
                        <div class="header-info-box">
                            <a href="<?=$catalog_url?>" title="Babari Catalog" download="Babari Catalog" class="btn news-btn gj-catalog"><i class="lnr lnr-download"></i> Catalog</a>
                        </div>
                    </div>
                    <!-- end col -->
                </div>
            </div>
        </div>
        <!-- END LOGO AREA -->

        <!-- START NAVIGATION AREA -->
        <div class="">
            <div class="mainmenu-area">
                <div class="auto-container">
                    <div class="row">
                        <div class="col-lg-8 d-none d-lg-block d-md-none">
                            <nav class="navbar navbar-expand-lg justify-content-left">
                                <ul class="navbar-nav">
                                    <li class="<?= ($page=="home")?'active':'' ?>"><a href="<?=base_url()?>" class="nav-link">Home</a></li>
                                    <li class="dropdown <?= ($page=="about")?'active':'' ?>"><a class="nav-link" href="<?=base_url("about")?>">About</a>
                                        <ul class="dropdown-menu">
                                            <li><a href="<?=base_url("about")?>">Company Profile</a></li>
                                            <li><a href="<?=base_url("team")?>">Board Of Directors</a></li>
                                            <li><a href="<?=base_url("certificate")?>">Our Cerificates</a></li>
                                            <li><a href="<?=base_url("terms")?>">Terms & Condition</a></li>
                                            <li><a href="<?=base_url("privacy")?>">Privacy Policy</a></li>
                                            <!--<li><a href="<?=base_url("team")?>">Board of Directors</a></li>-->
                                        </ul>
                                    </li>
                                    <li class="dropdown <?= ($page=="products")?'active':'' ?>"><a class="nav-link" href="<?=base_url("products")?>">Products</a>
                                        <ul class="dropdown-menu">
                                             <?= toSelect($cat_tree);?>
                                                <?php
                                                    function toSelect ($arr, $depth=0) {    
                                                        $html = '';
                                                        foreach ( $arr as $v ) {
                                                            if($depth>0)
                                                            {
                                                                $html.= '<li><a href="'.base_url().'category/'.$v['cat_slug'].'">'.$v['cat_name'].'</a></li>';
                                                            }else
                                                            {
                                                                $html.= '<li><a href="'.base_url().'category/'.$v['cat_slug'].'">'.$v['cat_name'].'';
                                                            }
                                                            if($depth<1)
                                                            {
                                                                if ( array_key_exists('childs', $v) ) {
                                                                    $html.= ' <span class="pull-right"><i class="fas fa-caret-right"></i></span></a><ul class="dropdown-menu">';
                                                                    $html.= toSelect($v['childs'], $depth+1);
                                                                    $html.= '</ul>';
                                                                    $html.= '</li>';
                                                                }                                                               
                                                            }
                                                        }
                                                        return $html;
                                                    }
                                                ?>
                                        </ul>
                                    </li>
                                    <li class="<?= ($page=="quality")?'active':'' ?>"><a href="<?=base_url("quality")?>" class="nav-link">Quality</a></li>
                                    <li class="<?= ($page=="production")?'active':'' ?>"><a href="<?=base_url("production")?>" class="nav-link">Production</a></li>
                                    <li class="<?= ($page=="blog")?'active':'' ?>"><a href="<?=base_url("blog")?>" class="nav-link">Blog</a></li>
                                    <li class="<?= ($page=="contact")?'active':'' ?>"><a href="<?=base_url("contact")?>" class="nav-link">Contact</a></li>
                                </ul>
                            </nav>  
                        </div>
                        <div class="col-lg-4 col-md-12 d-lg-block d-md-block mobile-hide">
                            <div class="header-search">
                                <ul>
                                    <li class="menuleft-address"><p><?=$contact_detail['address1']?></p></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <!--- END CONTAINER -->
            </div>
            <!-- END NAVIGATION AREA -->

            <!-- MOBILE-MENU-AREA START -->
            <div class="mobile-menu-area d-block d-lg-none d-md-block">
                <div class="col-md-7">
                    <div class="mobile-menu">
                        <nav id="dropdown">
                            <ul class="navbar-nav">
                                <li class="<?= ($page=="home")?'active':'' ?>"><a href="<?=base_url()?>" class="nav-link">Home</a></li>
                                <li class="dropdown <?= ($page=="about")?'active':'' ?>"><a class="nav-link" href="<?=base_url("about")?>">About</a>
                                    <ul>
                                        <li><a href="<?=base_url("about")?>">Company Profile</a></li>
                                        <li><a href="<?=base_url("team")?>">Board Of Directors</a></li>
                                        <li><a href="<?=base_url("certificate")?>">Our Cerificates</a></li>
                                        <li><a href="<?=base_url("terms")?>">Terms & Condition</a></li>
                                        <li><a href="<?=base_url("privacy")?>">Privacy Policy</a></li>
                                        <!--<li><a href="<?=base_url("team")?>">Board of Directors</a></li>-->
                                    </ul>
                                </li>
                                <li class="dropdown <?= ($page=="products")?'active':'' ?>"><a class="nav-link" href="<?=base_url("products")?>">Products</a>
                                    <ul>
                                        <?= toSelect($cat_tree);?>
                                    </ul>
                                </li>
                                <li class="<?= ($page=="quality")?'active':'' ?>"><a href="<?=base_url("quality")?>" class="nav-link">Quality</a></li>
                                <li class="<?= ($page=="blog")?'active':'' ?>"><a href="<?=base_url("blog")?>" class="nav-link">Blog</a></li>
                                <li class="<?= ($page=="contact")?'active':'' ?>"><a href="<?=base_url("contact")?>" class="nav-link">Contact</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
        <!-- MOBILE-MENU-AREA END -->
    </header>
    <!-- end header -->


                                    
                                                