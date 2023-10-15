<section class="single-page-title-area" data-background="<?=base_url()?>assets/img/bg/page-banner.webp" style="background-image: url('<?=base_url()?>assets/img/bg/page-banner.webp');">
    <div class="auto-container">
        <div class="row">
            <div class="col-lg-8 col-md-8 col-sm-12 col-12">
                <div class="single-page-title">
                    <h6><?= $category['cat_name']?></h6>
                    <span></span>
                    <h2><?= $product['product_name']?></h2>
                </div>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-12 col-12">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="<?=base_url()?>">Home</a></li>
                    <li class="breadcrumb-item"><a href="<?=base_url("products")?>">Products</a></li>
                    <li class="breadcrumb-item"><a href="<?=base_url("category/").$category['cat_slug']?>"><?=$category['cat_name']?></a></li>
                    <li class="breadcrumb-item active"><?= $product['product_name']?></li>
                </ol>
            </div>
        </div>
        <!-- end row-->
    </div>
</section>
<section id="single-product" class="section-padding">
    <div class="auto-container">
        <div class="row">
            <div class="col-md-12 col-lg-6 col-sm-12 col-12">
                <?php
                    $first_element = array_shift($product_image);
                ?>
                <div class="sin-pro-image">
                    <a class="image-popup" href="<?=base_url()?>assets/images/product/<?=$first_element['product_image_name']?>">
                        <img id="zoom_01" class="img-fluid" src="<?=base_url()?>assets/images/product/<?=$first_element['product_image_name']?>" data-zoom-image="<?=base_url()?>assets/images/product/<?=$first_element['product_image_name']?>" alt="img">
                    </a>
                </div>
                <div class="row">
                    <?php foreach($product_image as $pi) : ?>
                        <div class="col-4">
                            <a class="image-popup" href="<?=base_url()?>assets/images/product/<?=$pi['product_image_name']?>">
                                <img class="img-fluid" src="<?=base_url()?>assets/images/product/<?=$pi['product_image_name']?>"/>
                            </a>
                        </div>
                    <?php endforeach; ?>
                </div>
            </div>
            <div class="col-md-12 col-lg-6 col-sm-12 col-12">
                <div class="product-summary">
                    <h2><?= $product['product_name']?></h2>
                    <div class="price"><a href="<?=base_url()."category/".$category['cat_slug']?>" ><?= $category['cat_name']; ?> </a></div>
                    <div class="description">
                        <?= $product['product_description']?>
                    </div>
                    <div class="cart-info clearfix">
                        <div class="button col-6 p-0">
                            <button type="submit" class="btncart">Quick Inquiry</button>
                        </div>
                    </div>
                </div>
            </div>
            <!--- END COL -->
        </div>
        <!--- END ROW -->
    </div>
</section>



        <!-- Quick View POPUP START-->
        <section class="quick-view-popup model">
            <div class="container">
                <div class="row">
                    <div class="col-md-10 col-md-offset-1 col-sm-12 col-sm-offset-0 col-xs-12 col-xs-offset-0">
                        <div class="popup-inner">
                            <a href="#" class="close-quick-view"><i class="fa fa-times"></i></a>
                            <div class="popup-content padT15 padB15">
                                <div class="prod-info-section">
                                    <div class="clearfix">
                                        <!--Thumbnail Column-->
                                        <div class="carousel-column col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                            <div class="wa-product-main-image">
                                                <h2> <?= $product['product_name']; ?> </h2>
                                                <h3> <a href="<?=base_url()?>" ><?= $category['cat_name']; ?> </a></h3>
                                                <img src="<?=base_url()?>assets/images/product/<?=$first_element['product_image_name']?>" alt="">
                                            </div>
                                        </div>
                                        <!--Content Column-->
                                        <div class="content-column col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                            <div class="outer padT30">
                                                <div class="title-box">
                                                    <div class="clear"></div>
                                                    <div class="prod-options ">
                                                        <div class="clearfix">
                                                            <div class="col-md-12 col-sm-12 padL0">
                                                                <div class="form-group">
                                                                    <label><strong>Your Name</strong> </label>
                                                                    <input type="text" name="your_name" id="your_name">
                                                                </div>
                                                                <div class="form-group">
                                                                    <label><strong>Your Email</strong> </label>
                                                                    <input type="email" name="your_email" id="your_email">
                                                                </div>
                                                                <div class="form-group">
                                                                    <label><strong>Your Contact No</strong> </label>
                                                                    <input type="text" name="your_contact" id="your_contact">
                                                                </div>
                                                                <div class="form-group">
                                                                    <label><strong>Your Inquiry</strong> </label>
                                                                    <textarea name="your_inquiry" id="your_inquiry"></textarea>
                                                                </div>
                                                            </div>                                                        
                                                        </div>
                                                    </div>
                                                </div>
                                                <!--Add-->
                                                <div class="add-options">
                                                    <button type="button" id="inquiry" class="theme-button">Inquiry Now</button>
                                                </div>
                                            </div>
                                        </div>
                                        <script src="https://code.jquery.com/jquery-2.2.4.min.js"></script>
                                        <script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
                                        <script>
                                            $("form").submit(function(e){
                                                e.preventDefault();
                                            });
                                            $("#inquiry").click(function(){
                                                var your_name = $("#your_name").val();
                                                var your_email = $("#your_email").val();
                                                var your_contact = $("#your_contact").val();
                                                var your_inquiry = "Inquiry of <?= $product['product_name']; ?> :: " + $("#your_inquiry").val();
                                                
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
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- Quick View POPUP END--> 
