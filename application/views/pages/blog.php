<section class="single-page-title-area" data-background="<?=base_url()?>assets/img/bg/page-banner.webp" style="background-image: url('<?=base_url()?>assets/img/bg/page-banner.webp');">
    <div class="auto-container">
        <div class="row">
            <div class="col-lg-8 col-md-8 col-sm-12 col-12">
                <div class="single-page-title">
                    <h6>Our Blog</h6>
                    <span></span>
                    <h2><?=$breadcumb_title?></h2>
                </div>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-12 col-12">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="<?=base_url()?>">Home</a></li>
                    <li class="breadcrumb-item"><a href="<?=base_url("blog")?>">Blog</a></li>
                    <li class="breadcrumb-item active"><?=$breadcumb_title?></li>
                </ol>
            </div>
        </div>
        <!-- end row-->
    </div>
</section>
<section class="section-padding">
    <div class="auto-container">
        <div class="row">
            <div class="col-lg-8 col-md-12 col-sm-12 col-12 sidebar-padding-right">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="allpost-media-wrap">
                            <img src="<?=$blog_data['blog_post_featured_image']?>" alt="" class="img-fluid">
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-12">
                        <div class="blog-allpost-title">
                            <h4><a href="#"><?=$blog_data['blog_post_title']?></a></h4>
                        </div>
                        <div class="blog-allpost-meta mt-3">
                            <span class="allpost-admin"><a href="<?=base_url("blog/author/".$blog_data['blog_author_slug'])?>"><i class="lnr lnr-user"></i><?=$blog_data['blog_author']?></a></span>
                            <span class="allpost-date"><i class="lnr lnr-clock"></i><?=$blog_data['blog_post_date']?></span>
                        </div>
                    </div>
                </div>
                <div class="row mt-5">
                    <?=$blog_data['blog_post_content']?>
                </div>
                <div class="row mt-5">
                    <div class="col-lg-12">
                        <div class="blog-allpost-meta">
                            <span class="allpost-cata"><strong>TAGS:</strong>
                                <?php $j=0;?>
                                <?php foreach($blog_data['blog_tags'] as $bt): ?>
                                    <?php $j++ ?>
                                    <a href="<?=base_url("blog/tag/".$bt['blog_tag_slug'])?>"><?=$bt['blog_tag_name']?>
                                    </a>
                                <?php endforeach; ?>
                            </span><br>
                            <span class="allpost-cata"><strong>CATEGORIES:</strong>
                                <?php $j=0;?>
                                <?php foreach($blog_data['blog_categories'] as $bc): ?>
                                    <?php $j++ ?>
                                    <a href="<?=base_url("blog/category/".$bc['blog_cat_slug'])?>"><?=$bc['blog_cat_name']?><?=(count($blog_data['blog_categories']) != $j) ? ",&nbsp;":""; ?>
                                    </a>
                                <?php endforeach; ?>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <aside class="col-lg-4 col-md-12 col-sm-12 col-12 sidebar sidebar-left">
                <!-- end widget -->
                <div class="widget cat_wid">
                    <h5 class="widget-title">Categories</h5>
                    <!-- end widget tittle-->
                    <ul>
                        <?php foreach($blog_all_categories as $bac) : ?>
                            <li><a href="<?=base_url()?>blog/category/<?=$bac['blog_cat_slug']?>"><?=$bac['blog_cat_name']?></a></li>
                        <?php endforeach; ?>
                    </ul>
                </div>
                <!-- end widget -->
                <div class="widget promo_wid">
                    <div class="promo-box-wrap">
                        <h5>How can we help you?</h5>
                        <p>Contact to us on babari hydraulic solution on our office address or put a online inquiry.</p>
                        <a class="promo-wid-button" href="<?=base_url()?>contact" target="_blank"><i class="icofont icofont-support"></i> Contact Us</a>
                    </div>
                </div>
                <!-- end widget -->
                <div class="widget cat_wid">
                    <h5 class="widget-title">Popular Tags</h5>
                    <!-- end widget tittle-->
                    <div class="tags-lists">
                        <?php foreach($blog_all_tags as $bat) : ?>
                            <span><a href="<?=base_url()?>blog/tag/<?=$bat['blog_tag_slug']?>"><?=$bat['blog_tag_name']?></a></span>
                        <?php endforeach; ?>
                    </div>
                </div>
                <!-- end widget -->
            </aside>
            <!-- end sidebar -->
        </div>
        <!-- end row-->
    </div>
</section>
