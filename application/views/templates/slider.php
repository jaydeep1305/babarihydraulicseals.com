<!-- START SLIDER SECTION -->
<section class="slider-section">
    <div class="owl-carousel owl-theme navana-slides">
        <?php foreach($sliders as $slider) { ?>
        <div class="item" data-background="">
            <img src="<?= base_url(); ?>assets/images/slider/<?= $slider['image']; ?>"/>
        </div>
        <?php } ?>
    </div>
</section>
