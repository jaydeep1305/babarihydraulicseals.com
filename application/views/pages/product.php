<section class="single-page-title-area" data-background="<?=base_url()?>assets/img/bg/page-banner.webp" style="background-image: url('<?=base_url()?>assets/img/bg/page-banner.webp');">
    <div class="auto-container">
        <div class="row">
            <div class="col-lg-8 col-md-8 col-sm-12 col-12">
                <div class="single-page-title">
                    <h6>Our Products</h6>
                    <span></span>
                    <h2>Products</h2>
                </div>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-12 col-12">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="<?=base_url()?>">Home</a></li>
                    <li class="breadcrumb-item active">Products</li>
                </ol>
            </div>
        </div>
        <!-- end row-->
    </div>
</section>
<section class="section-padding">
    <div class="container portfolio-items">
        <div class="row">
            <?php foreach($products as $product) :  ?>
            <a href="<?=base_url()?>product/<?=$product['product_slug']?>">
                <div class="col-lg-4 col-md-6 col-sm-12 col-12 mix one four" style="display: inline-block;" data-bound="">
                    <div class="single-portfolio single-portfolio-fourth">
                        <img class="img-fluid" src="<?= base_url();?>assets/images/product/<?=$product['product_image_name']?>" alt="">
                        <div class="mask">
                            <div class="mask-po">
                                <h4><?= $product['product_name']; ?></h4>
                                <a href="<?=base_url()?>product/<?=$product['product_slug']?>" class="info">
                                    <i class="icofont icofont-link"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </a>
            <?php endforeach; ?>
        </div>
    </div>
</section>
