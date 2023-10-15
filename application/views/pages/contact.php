<section class="single-page-title-area" data-background="<?=base_url()?>assets/img/bg/page-banner.webp" style="background-image: url('<?=base_url()?>assets/img/bg/page-banner.webp');">
    <div class="auto-container">
        <div class="row">
            <div class="col-lg-8 col-md-8 col-sm-12 col-12">
                <div class="single-page-title">
                    <h6>Let's Connect</h6>
                    <span></span>
                    <h2>Contact Us</h2>
                </div>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-12 col-12">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="<?=base_url()?>">Home</a></li>
                    <li class="breadcrumb-item active">Contact</li>
                </ol>
            </div>
        </div>
        <!-- end row-->
    </div>
</section>
<section id="contact-page" class="section-padding pb-0">
    <div class="container">
        <div class="row">
            <div class="col-lg-12 text-center">
                <div class="section-title">
                    <h5>Connect with us</h5>
                    <h3>Our Workers ready to help you</h3>
                    <span class="line"></span>
                    <i class="icofont icofont-contact-add"></i>
                </div>
            </div>
            <!-- end section title -->
        </div>
        <!-- end row-->
    </div>
    <div class="section-padding contact-add-padd" data-background="assets/img/bg/dots-dark.webp" style="background-image: url(&quot;assets/img/bg/dots-dark.webp&quot;);">
        <div class="auto-container">

        </div>
        <!-- end container-->
        <div class="row">
            <div class="col-lg-4 col-md-4 col-sm-6 col-12">
                <div class="single-con-add">
                    <div class="single-con-add-icon">
                        <i class="icofont icofont-ui-office"></i>
                    </div>
                    <div class="single-con-add-text">
                        <h3>Corporate Offices</h3>
                        <p> <?=$contact_detail['address2']?></p>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-6 col-12">
                <div class="single-con-add">
                    <div class="single-con-add-icon">
                        <i class="icofont icofont-email"></i>
                    </div>
                    <div class="single-con-add-text">
                        <h3>Send Email</h3>
                        <p><?=$contact_detail['email1']?></p>
                        <p><?=$contact_detail['email2']?></p>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-6 col-12">
                <div class="single-con-add">
                    <div class="single-con-add-icon">
                        <i class="icofont icofont-open-eye"></i>
                    </div>
                    <div class="single-con-add-text">
                        <h3>Open Door</h3>
                        <p>Mon - Sat: 9 AM - 9 PM</p>
                        <p>Sun: 9 AM - 3 PM</p>
                    </div>
                </div>
            </div>
        </div></div>
</section>
<div class="gmap_canvas">
    <iframe id="gmap_canvas" src="https://maps.google.com/maps?q=babari+hydraulic+seals=&z=13&ie=UTF8&iwloc=&output=embed"></iframe>
</div>
<section class="section-padding">
    <div class="container">
        <div class="row">
            <div class="col-lg-12 text-center">

            </div>
            <!-- end section title -->
            <div class="mx-auto col-lg-10 mt-40">
                <div class="contact">
                    <form id="contact" class="form" name="enq" action="#">
                            <div class="row">
                            <div class="col-lg-6">
                                <div class="form-group col-lg-12">
                                    <input type="text" name="your_name" class="form-control" id="your_name" placeholder="Full Name" required="required">
                                </div>
                                <div class="form-group col-lg-12">
                                    <input type="email" name="your_email" class="form-control" id="your_email" placeholder="Enail Address" required="required">
                                </div>
                                <div class="form-group col-lg-12">
                                    <input type="text" name="your_contact" class="form-control" id="your_contact" placeholder="Phone Number" required="required">
                                </div>

                            </div>
                            <div class="col-lg-6">
                                <div class="form-group col-lg-12">
                                    <textarea rows="10" name="your_inquiry" class="form-control" id="your_inquiry" placeholder="Your Message" required="required"></textarea>
                                </div>
                                <div class="form-group col-lg-12 mb0">
                                    <div class="actions">
                                        <input type="submit" value="Send Message" name="submit" id="submit" class="btn btn-lg btn-contact-bg" title="Click here to submit your message!" />
                                        <img src="assets/img/ajax-loader.gif" width="16" height="16" id="loader" style="display:none" alt="loading">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <!-- end row-->
    </div>
</section>
