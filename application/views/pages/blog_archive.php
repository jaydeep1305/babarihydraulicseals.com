<section class="single-page-title-area" data-background="<?=base_url()?>assets/img/bg/page-banner.webp" style="background-image: url('<?=base_url()?>assets/img/bg/page-banner.webp');">
    <div class="auto-container">
        <div class="row">
            <div class="col-lg-8 col-md-8 col-sm-12 col-12">
                <div class="single-page-title">
                    <h6>Latest news</h6>
                    <span></span>
                    <h2><?=$breadcumb_title?></h2>
                </div>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-12 col-12">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="<?=base_url()?>">Home</a></li>
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
                <?php $i=0; ?>
                <?php foreach($blog_data as $bd) : ?>
                <div class="blog-allpost-single wow fadeInUp  animated" style="visibility: visible; animation-name: fadeInUp;">
                    <div class="allpost-media-wrap">
                        <a href="<?=base_url("blog/".$bd['blog_post_slug'])?>">
                            <img src="<?=$bd['blog_post_featured_image']?>" alt="" class="img-fluid">
                        </a>
                    </div>
                    <div class="blog-allpost-title">
                        <h4><a href="<?=base_url("blog/".$bd['blog_post_slug'])?>"><?=$bd['blog_post_title']?></a></h4>
                    </div>
                    <div class="blog-allpost-meta">
                        <span class="allpost-admin"><a href="#"><i class="lnr lnr-user"></i><?=$bd['blog_author']?></a></span>
                        <span class="allpost-cata"><i class="lnr lnr-tag"></i>
                                <?php $j=0; ?>
                                <?php foreach($bd['blog_categories'] as $bc): ?>
                                    <?php $j++ ?>
                                    <a href="<?=base_url("blog/category/".$bc['blog_cat_slug'])?>"><?=$bc['blog_cat_name']?><?=(count($bd['blog_categories']) != $j) ? ",&nbsp;":""; ?>
                                    </a>
                                <?php endforeach; ?>
                        </span>
                        <span class="allpost-date"><i class="lnr lnr-clock"></i><?=$bd['blog_post_date']?></span>
                    </div>
                    <div class="blog-allpost-content">
                        <p><?=$bd['blog_post_short_content']?></p>
                    </div>
                    <div class="blog-allpost-button-warp">
                        <a class="blog-allpost-button" href="<?=base_url("blog/".$bd['blog_post_slug'])?>" target="_blank">Read More <i class="lnr lnr-chevron-right"></i></a>
                    </div>
                </div>
                <?php endforeach; ?>
                <!-- end single blog post -->
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
