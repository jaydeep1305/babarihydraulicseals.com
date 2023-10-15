
    
    <!-- START FOOTER -->
    <footer>
        <!--Footer top -->
        <div class="footer-top">
            <div class="auto-container">
                <div class="row">
                    <div class="col-lg-3 col-md-6 col-sm-12 col-12 footer-widget">
                        <div class="footer-logo col-12 no-padding">
                            <a href="<?=base_url()?>">
                                <img src="<?=base_url()?>assets/images/logo-white.svg" height="100"/>
                            </a>
                        </div>
                        <div class="about">

                        </div>
                        <div class="row">
                            <div class="col-lg-6 col-6">
                                <div class="footer-social">
                                    <div class="footer-social-icon s-facebook">
                                        <i class="icofont icofont-social-facebook"></i>
                                    </div>
                                    <div class="footer-social-text">
                                        <h4><a href="<?=$contact_detail['facebook_link']?>">Like Us</a></h4>
                                        <p>Facebook</p>
                                    </div>
                                 </div>
                                <div class="footer-social">
                                    <div class="footer-social-icon s-twitter">
                                        <i class="icofont icofont-social-twitter"></i>
                                    </div>
                                    <div class="footer-social-text">
                                        <h4><a href="<?=$contact_detail['twitter_link']?>">Follow Us</a></h4>
                                        <p>Twitter</p>
                                    </div>
                                 </div>
                             </div>
                            <div class="col-lg-6 col-6">
                                <div class="footer-social">
                                    <div class="footer-social-icon s-dribbble">
                                        <i class="icofont icofont-social-linkedin"></i>
                                    </div>
                                    <div class="footer-social-text">
                                        <h4><a href="<?=$contact_detail['linkedin_link']?>">Follow Us</a></h4>
                                        <p>Youtube</p>
                                    </div>
                                 </div>
                                <div class="footer-social">
                                    <div class="footer-social-icon s-youtube">
                                        <i class="icofont icofont-social-instagram"></i>
                                    </div>
                                    <div class="footer-social-text">
                                        <h4><a href="<?=$contact_detail['instagram_link']?>">Find Us</a></h4>
                                        <p>Instagram</p>
                                    </div>
                                 </div>
                             </div>
                         </div>
                    </div>
                    <!-- End Widget -->
                    <div class="col-lg-3 col-md-6 col-sm-12 col-12 footer-widget">
                        <div class="footer-section-title col-sm-12 no-padding">
                            <h4>Quick Links</h4>
                            <span class="line"></span>
                        </div>
                        <!-- END SECTION TITLE -->
                        <div class="row">
                            <div class="col-lg-6 col-md-6 col-sm-12 col-6">
                                <ul class="quick-link-list">
                                    <li><a href="<?=base_url()?>"><i class="icofont icofont-thin-right"></i> Home</a></li>
                                    <li><a href="<?=base_url()?>about"><i class="icofont icofont-thin-right"></i> About Us</a></li>
                                    <li><a href="<?=base_url()?>quality"><i class="icofont icofont-thin-right"></i> Quality</a></li>
                                    <li><a href="<?=base_url()?>blog"><i class="icofont icofont-thin-right"></i> Blog</a></li>
                                    <li><a href="<?=base_url()?>production"><i class="icofont icofont-thin-right"></i> Production</a></li>
                                    <li><a href="<?=base_url()?>contact"><i class="icofont icofont-thin-right"></i> Contact</a></li>
                                </ul>
                            </div>
                            <div class="col-lg-6 col-md-6 col-sm-12 col-6">
                                <ul class="quick-link-list">
                                    <li><a href="<?=base_url()?>category/pu"><i class="icofont icofont-thin-right"></i> PU</a></li>
                                    <li><a href="<?=base_url()?>category/rubber"><i class="icofont icofont-thin-right"></i> Rubber</a></li>
                                    <li><a href="<?=base_url()?>category/seal-kit"><i class="icofont icofont-thin-right"></i> Seal Kit</a></li>
                                    <li><a href="<?=base_url()?>category/other"><i class="icofont icofont-thin-right"></i> Other</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <!-- End Widget -->
                    <!-- End Widget -->
                    <div class="col-lg-3 col-md-6 col-sm-12 col-12 footer-widget">
                        <div class="footer-section-title col-sm-12 no-padding">
                            <h4>Subscribe Us</h4>
                            <span class="line"></span>
                        </div>
                        <!-- END SECTION TITLE -->
                        <div class="mailing-list">
                            <p>Get first access to our latest product and other updates by simply providing your email address.
                            </p>
                            <form id="subsciber">
                                <div class="form-group">
                                    <i class="lnr lnr-envelope"></i>
                                    <input type="email" name="semail" id="subscriber_email" class="form-control" placeholder="Email Address">
                                </div>
                                <button type="submit" id="subscriber_btn" class="btn news-btn">Subscribe Now <i class="icofont icofont-location-arrow"></i> </button>
                            </form>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-12 col-12 footer-widget">
                        <div class="footer-section-title col-sm-12 no-padding">
                            <h4>Contact Us</h4>
                            <span class="line"></span>
                        </div>
                        <!-- END SECTION TITLE -->
                        <ul class="contact-link-list">
                            <li><a href="#"><i class="lnr lnr-map-marker"></i> <strong></strong><?=$contact_detail['address1']?></a></li>
                            <li><a href="#"><i class="lnr lnr-envelope "></i> <strong></strong><?=$contact_detail['email1']?></a></li>
                            <li><a href="#"><i class="lnr lnr-phone "></i> <strong></strong><?=$contact_detail['office1']?></a></li>
                        </ul>
                    </div>
                    <!-- End Widget -->
                </div>
            </div>
        </div>
        
        <!--Footer Bottom -->
        <div class="copyright">
            <div class="auto-container">
                <div class="row">
                    <div class="col-lg-6 col-md-6 col-sm-12 col-12 copyright-text">
                        <p>Copyright &copy; 2018 <a href="<?=base_url()?>"> <?=$contact_detail['company_name']?>.</a> | All Rights Reserved</p>
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-12 col-12 footer-menu">
                        <ul>
                            <li><a href="<?=base_url()?>about">Company Profile</a> </li>
                            <li><a href="<?=base_url()?>terms">Terms & Condition</a> </li>
                            <li><a href="<?=base_url()?>privacy">Privacy Policy</a> </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    <!-- END FOOTER -->
    
    
    <!-- Latest jQuery -->
    <script src="<?=base_url()?>assets/js/jquery-2.2.4.min.js"></script>
    <!-- popper js -->
    <script src="<?=base_url()?>assets/bootstrap/js/popper.min.js"></script>
    <!-- Latest compiled and minified Bootstrap -->
    <script src="<?=base_url()?>assets/bootstrap/js/bootstrap.min.js"></script>
    <!-- meanmenu min js  -->
    <script src="<?=base_url()?>assets/js/jquery.meanmenu.min.js"></script>
    <!-- Sticky JS -->
    <script src="<?=base_url()?>assets/js/jquery.sticky.js"></script>
    <!-- prettyphoto js -->
    <script src="<?=base_url()?>assets/prettyphoto/js/jquery.prettyPhoto.js"></script>
    <!-- venobox js -->
    <script src="<?=base_url()?>assets/venobox/js/venobox.min.js"></script>
    <!-- jquery mixitup js -->
    <script src="<?=base_url()?>assets/js/jquery.mixitup.min.js"></script>
    <!-- owl-carousel min js  -->
    <script src="<?=base_url()?>assets/owlcarousel/js/owl.carousel.min.js"></script>
    <!-- jquery appear js  -->
    <script src="<?=base_url()?>assets/js/jquery.appear.js"></script>
    <!-- countTo js -->
    <script src="<?=base_url()?>assets/js/jquery.inview.min.js"></script>
    <!-- scrolltopcontrol js -->
    <script src="<?=base_url()?>assets/js/scrolltopcontrol.js"></script>
    <!-- WOW - Reveal Animations When You Scroll -->
    <script src="<?=base_url()?>assets/js/wow.min.js"></script>
    <!-- scripts js -->
    <script src="<?=base_url()?>assets/js/scripts.js"></script>
    <script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
    <script>
        $("form#subsciber").submit(function(e) {
            $("#subscriber_btn").click(function() {
                var subscriber_email = $("#subscriber_email").val();
                if (subscriber_email == "") {
                    swal('Sorry!', 'Please Fill Email!', 'info')
                } else {
                    $.ajax({
                        method: "POST",
                        url: "<?=base_url()?>usersubscriber/create/",
                        data: {
                            subscriber_email: subscriber_email
                        }
                    }).success(function() {
                        swal('Congrats!', 'Subscribe Successfully....!', 'success')
                    })
                }
            });

            e.preventDefault();
        });
        $("#subscriber_btn").click(function() {
            var subscriber_email = $("#subscriber_email").val();
            if (subscriber_email == "") {
                swal('Sorry!', 'Please Fill Email!', 'info')
            } else {
                $.ajax({
                    method: "POST",
                    url: "<?=base_url()?>usersubscriber/create/",
                    data: {
                        subscriber_email: subscriber_email
                    }
                }).success(function() {
                    swal('Congrats!', 'Subscribe Successfully....!', 'success')
                })
            }
        });
        $("form#contact").submit(function(e){
            $("#submit").click(function(){
                var your_name = $("#your_name").val();
                var your_email = $("#your_email").val();
                var your_contact = $("#your_contact").val();
                var your_inquiry = $("#your_inquiry").val();

                if(your_inquiry == "" || your_email == "" || your_name == "" )
                {
                    swal('Sorry!', 'Please Fill All Required* Detail in Form!', 'info');
                }
                else
                {
                    $.ajax({
                        method: "POST",
                        url: "<?php echo base_url(); ?>userinquiry/create/",
                        data: {your_name:your_name,your_email:your_email,your_contact:your_contact,your_inquiry:your_inquiry}
                    })
                        .success(function() {
                            swal('Congrats!', 'Your Inquiry send Successfully....!', 'success');
                            $("#your_name").val("");
                            $("#your_email").val("");
                            $("#your_contact").val("");
                            $("#your_inquiry").val("");
                        });
                }
            });
            e.preventDefault();
        });
        $("#submit").click(function(){
            var your_name = $("#your_name").val();
            var your_email = $("#your_email").val();
            var your_contact = $("#your_contact").val();
            var your_inquiry = $("#your_inquiry").val();

            if(your_inquiry == "" || your_email == "" || your_name == "" )
            {
                swal('Sorry!', 'Please Fill All Required* Detail in Form!', 'info');
            }
            else
            {
                $.ajax({
                    method: "POST",
                    url: "<?php echo base_url(); ?>userinquiry/create/",
                    data: {your_name:your_name,your_email:your_email,your_contact:your_contact,your_inquiry:your_inquiry}
                })
                    .success(function() {
                        swal('Congrats!', 'Your Inquiry send Successfully....!', 'success');
                        $("#your_name").val("");
                        $("#your_email").val("");
                        $("#your_contact").val("");
                        $("#your_inquiry").val("");
                    });
            }
        });
    </script>
    <script src="https://unpkg.com/webp-hero@0.0.0-dev.21/dist-cjs/polyfills.js"></script><script src="https://unpkg.com/webp-hero@0.0.0-dev.21/dist-cjs/webp-hero.bundle.js"></script><script>var webpMachine=new webpHero.WebpMachine();webpMachine.polyfillDocument();</script>
    <script type="text/javascript" src="<?= base_url(); ?>assets/js/custom.js?ver=<?=$ver?>"></script>
    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script defer="defer" src="<?=base_url()?>assets/js/jquery.magnific-popup.min.js"></script>
    <script>
        $(document).ready(function(){
            $('.image-popup').magnificPopup({
                type:'image',
                closeOnContentClick:!0,
                closeBtnInside:!1,
                fixedContentPos:!0,
                image:{verticalFit:!0},
                zoom:{enabled:!0,duration:300
            }})
        });
    </script>
    <script type="text/javascript">
        $('.social-share').click(function(e) {
            e.preventDefault();
            window.open($(this).attr('href'), 'share', 'height=450, width=550, top=' + ($(window).height() / 2 - 275) + ', left=' + ($(window).width() / 2 - 225) + ', toolbar=0, location=0, menubar=0, directories=0, scrollbars=0');
            return false;
        });
    </script>
    <script async src="https://www.googletagmanager.com/gtag/js?id=<?=$setting_detail['analytics_front_id']?>"></script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', '<?=$setting_detail['analytics_front_id']?>');
    </script>
    <!--Start of Tawk.to Script-->
    <link rel="stylesheet" href="<?= base_url(); ?>assets/all_in_one/jquery.contactus.min.css?ver=<?=$ver?>" />
    <script async src="<?=base_url()?>assets/all_in_one/jquery.contactus.min.js?ver=<?=$ver?>"></script>
    <script async src="<?=base_url()?>assets/all_in_one/scripts.js?ver=<?=$ver?>"></script>
    <script>
        /*---------------CONFIG------------------*/
        var whatsapp_url = "https://api.whatsapp.com/send?phone=91<?=$contact_detail['whatsapp_no']?>&text=Hello, I would like to know more about <?=$contact_detail['company_name']?>.";
        /*---------------------------------------*/
    </script>
    <script async src="<?=base_url()?>assets/all_in_one/all_in_one_main.js?ver=<?=$ver?>"></script>
    <div id="arcontactus" class="arcontactus-widget arcontactus-message right lg active"></div>
    <script>
        function twak_to_gj(){
            (function() {
                var s1 = document.createElement("script"),
                    s0 = document.getElementsByTagName("script")[0];
                s1.async = true;
                s1.src = 'https://embed.tawk.to/5d3713a99b94cd38bbe8db04/default';
                s1.charset = 'UTF-8';
                s1.setAttribute('crossorigin', '*');
                s0.parentNode.insertBefore(s1, s0);
            })();
        };
    </script>
    <!--End of Tawk.to Script-->
    <script language="JavaScript">
        window.onload = function() {
            document.addEventListener("contextmenu", function(e){
                e.preventDefault();
            }, false);
            document.addEventListener("keydown", function(e) {
                //document.onkeydown = function(e) {
                // "C" key
                if (e.ctrlKey && e.keyCode == 67) {
                    disabledEvent(e);
                }
                // "I" key
                if (e.ctrlKey && e.shiftKey && e.keyCode == 73) {
                    disabledEvent(e);
                }
                // "J" key
                if (e.ctrlKey && e.shiftKey && e.keyCode == 74) {
                    disabledEvent(e);
                }
                // "S" key + macOS
                if (e.keyCode == 83 && (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)) {
                    disabledEvent(e);
                }
                // "U" key
                if (e.ctrlKey && e.keyCode == 85) {
                    disabledEvent(e);
                }
                // "F12" key
                if (event.keyCode == 123) {
                    disabledEvent(e);
                }
            }, false);
            function disabledEvent(e){
                if (e.stopPropagation){
                    e.stopPropagation();
                } else if (window.event){
                    window.event.cancelBubble = true;
                }
                e.preventDefault();
                return false;
            }
        };
    </script>
    <div id="st-2" class=" st-sticky-share-buttons st-left st-toggleable st-has-labels ">
        <div class="st-btn st-first" data-network="facebook" style="display: inline-block;">
            <svg fill="#fff" preserveAspectRatio="xMidYMid meet" height="1em" width="1em" viewBox="0 0 40 40">
                <g>
                    <path d="m21.7 16.7h5v5h-5v11.6h-5v-11.6h-5v-5h5v-2.1c0-2 0.6-4.5 1.8-5.9 1.3-1.3 2.8-2 4.7-2h3.5v5h-3.5c-0.9 0-1.5 0.6-1.5 1.5v3.5z"></path>
                </g>
            </svg>
            <span class="st-label">Share</span>
        </div>
        <div class="st-btn" data-network="twitter" style="display: inline-block;">
            <svg fill="#fff" preserveAspectRatio="xMidYMid meet" height="1em" width="1em" viewBox="0 0 40 40">
                <g>
                    <path d="m31.5 11.7c1.3-0.8 2.2-2 2.7-3.4-1.4 0.7-2.7 1.2-4 1.4-1.1-1.2-2.6-1.9-4.4-1.9-1.7 0-3.2 0.6-4.4 1.8-1.2 1.2-1.8 2.7-1.8 4.4 0 0.5 0.1 0.9 0.2 1.3-5.1-0.1-9.4-2.3-12.7-6.4-0.6 1-0.9 2.1-0.9 3.1 0 2.2 1 3.9 2.8 5.2-1.1-0.1-2-0.4-2.8-0.8 0 1.5 0.5 2.8 1.4 4 0.9 1.1 2.1 1.8 3.5 2.1-0.5 0.1-1 0.2-1.6 0.2-0.5 0-0.9 0-1.1-0.1 0.4 1.2 1.1 2.3 2.1 3 1.1 0.8 2.3 1.2 3.6 1.3-2.2 1.7-4.7 2.6-7.6 2.6-0.7 0-1.2 0-1.5-0.1 2.8 1.9 6 2.8 9.5 2.8 3.5 0 6.7-0.9 9.4-2.7 2.8-1.8 4.8-4.1 6.1-6.7 1.3-2.6 1.9-5.3 1.9-8.1v-0.8c1.3-0.9 2.3-2 3.1-3.2-1.1 0.5-2.3 0.8-3.5 1z"></path>
                </g>
            </svg>
            <span class="st-label">Tweet</span>
        </div>
        <div class="st-btn" data-network="linkedin" style="display: inline-block;">
            <svg fill="#fff" preserveAspectRatio="xMidYMid meet" height="1em" width="1em" viewBox="0 0 40 40">
                <g>
                    <path d="m13.3 31.7h-5v-16.7h5v16.7z m18.4 0h-5v-8.9c0-2.4-0.9-3.5-2.5-3.5-1.3 0-2.1 0.6-2.5 1.9v10.5h-5s0-15 0-16.7h3.9l0.3 3.3h0.1c1-1.6 2.7-2.8 4.9-2.8 1.7 0 3.1 0.5 4.2 1.7 1 1.2 1.6 2.8 1.6 5.1v9.4z m-18.3-20.9c0 1.4-1.1 2.5-2.6 2.5s-2.5-1.1-2.5-2.5 1.1-2.5 2.5-2.5 2.6 1.2 2.6 2.5z"></path>
                </g>
            </svg>
            <span class="st-label">Share</span>
        </div>

        <div class="st-btn mobile-hide" data-network="email" style="display: inline-block;">
            <svg fill="#fff" preserveAspectRatio="xMidYMid meet" height="1em" width="1em" viewBox="0 0 40 40">
                <g>
                    <path d="m33.4 13.4v-3.4l-13.4 8.4-13.4-8.4v3.4l13.4 8.2z m0-6.8q1.3 0 2.3 1.1t0.9 2.3v20q0 1.3-0.9 2.3t-2.3 1.1h-26.8q-1.3 0-2.3-1.1t-0.9-2.3v-20q0-1.3 0.9-2.3t2.3-1.1h26.8z"></path>
                </g>
            </svg>
            <span class="st-label">Email</span>
        </div>
        <div class="st-btn mobile-hide" data-network="whatsapp" style="display: inline-block;">
            <img src="https://platform-cdn.sharethis.com/img/whatsapp.svg">
            <span class="st-label">Share</span>
        </div>
        <!--
        <div class="st-btn mobile-hide" data-network="messenger" style="display: inline-block;">
          <img src="https://platform-cdn.sharethis.com/img/messenger.svg">
          <span class="st-label">Share</span>
        </div>
        <div class="st-btn" data-network="print" style="display: inline-block;">
          <img src="https://platform-cdn.sharethis.com/img/print.svg">
          <span class="st-label">Print</span>
        </div>
        <div class="st-btn st-last" data-network="wechat" style="display: inline-block;">
            <img src="https://platform-cdn.sharethis.com/img/wechat.svg">
            <span class="st-label">Share</span>
        </div>
        -->
    </div>
    <script>
        window.mobileAndTabletcheck = function() {
            var check = false;
            (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
            return check;
        };
        $(".st-btn").click(function(){
            var network = $(this).attr("data-network");
            var url="";
            var url_type = "_blank";
            if(network == "facebook")
            {    url = "https://www.facebook.com/sharer.php?u="+window.location.href+"&t="+encodeURI(document.title); }
            if(network == "twitter")
            {    url = "https://twitter.com/intent/tweet?text="+encodeURI(document.title)+"&url="+window.location.href; }
            if(network == "whatsapp")
            {
                if(window.mobileAndTabletcheck())
                {    url = "whatsapp://send?text="+window.location.href; url_type = "_self";}
                else
                {    url = "https://web.whatsapp.com/send?text="+window.location.href; }
            }
            if(network == "email")
            {url = "mailto:?to=&subject="+encodeURI(document.title)+"&body="+window.location.href; url_type = "_self";}
            if(network == "messenger")
            {
                if(window.mobileAndTabletcheck())
                {    url = "fb-messenger://share/?link="+window.location.href+"app_id=521270401588372"; url_type = "_self";}
                else
                {   url = "https://www.facebook.com/dialog/send?link="+window.location.href+"&app_id= 521270401588372&redirect_uri=https://www.sharethis.com"; }
            }
            if(network == "linkedin")
            {
                url = "https://www.linkedin.com/shareArticle?title="+encodeURI(document.title)+"&url="+window.location.href;
            }
            window.open(url, url_type);
        });
    </script>



    </body>

</html>