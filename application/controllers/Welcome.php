<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Welcome extends CI_Controller {

	/**
	 * Index Page for this controller.
	 *
	 * Maps to the following URL
	 * 		https://example.com/index.php/welcome
	 *	- or -
	 * 		https://example.com/index.php/welcome/index
	 *	- or -
	 * Since this controller is set as the default controller in
	 * config/routes.php, it's displayed at https://example.com/
	 *
	 * So any other public methods not prefixed with an underscore will
	 * map to /index.php/welcome/<method_name>
	 * @see https://codeigniter.com/user_guide/general/urls.html
	 */
	function __construct()
	{
		parent::__construct();
		$this->load->model('Setting_model');
		$this->load->model('Contact_model');
		$this->load->model('Process_model');
		$this->load->model('Category_model');
		$this->load->model('Catalog_model');
		$this->load->model('Slider_model');
		$this->load->model('Testimonial_model');
		$this->load->model('Partner_model');
		$this->load->model('Slider_model');
		$this->load->model('Product_model');# <- add this
		$this->load->model('Product_image_model');# <- add this
		$this->load->model('Seo_onpage_value_model');# <- add this
		$this->load->model('Seo_onpage_model');# <- add this
		$this->load->model('Blog_post_model');# <- add this
		$this->load->model('Blog_category_model');# <- add this
		$this->load->model('Blog_category_post_model');# <- add this
		$this->load->model('Blog_author_model');# <- add this
		$this->load->model('Blog_tag_model');# <- add this
		$this->load->model('Blog_tag_post_model');# <- add this
		$this->load->model('Page_slug_model');# <- add this
		$this->load->helper('form');
		$this->load->helper('text');
		//$this->load->library('form_validation');
		$this->load->helper('form');
		$this->ci_minifier->init(1);

	}
	
	public function index()
	{
		$data = $this->common();

		$slider_data['sliders'] = $this->Slider_model->get_slider();
		$data['testimonial'] = $this->Testimonial_model->get_testimonial();
		$data['partners'] = $this->Partner_model->get_partner();
		$data['sliders'] = $this->Slider_model->get_slider();
		$data['title'] = "Babari Hydraulic Seals | Total Sealing Solution";
		$data['page'] = "home"; 
		
		$blog_data = array();
		$Blog_post_model = $this->Blog_post_model->get_blog_post_limit();
		$j = 0;
		foreach ($Blog_post_model as $bpm) {
			$blog_data[$j]['blog_post_id'] = $bpm['blog_post_id'];
			$blog_data[$j]['blog_post_title'] = $bpm['blog_post_title'];
			$blog_data[$j]['blog_post_slug'] = $bpm['blog_post_slug'];
			$blog_data[$j]['blog_author'] = $this->Blog_author_model->get_blog_author($bpm['blog_author_id'])['blog_author_name'];
			$blog_data[$j]['blog_author_slug'] = $this->Blog_author_model->get_blog_author($bpm['blog_author_id'])['blog_author_username'];
			$blog_data[$j]['blog_post_date'] = $bpm['blog_post_date'];
			$blog_data[$j]['blog_post_content'] = $bpm['blog_post_content'];
			$blog_data[$j]['blog_post_short_content'] = $bpm['blog_post_short_content'];
			$blog_data[$j]['blog_post_thumbnail_image'] = $bpm['blog_post_thumbnail_image'];
			$blog_data[$j]['blog_post_featured_image'] = $bpm['blog_post_featured_image'];
			$blog_post_id = $bpm['blog_post_id'];
			$blog_categories = $this->Blog_category_post_model->get_blog_category_post_by_post($blog_post_id);
			$i=0;
			$blog_data[$j]['blog_categories'] = array();
			foreach($blog_categories as $bc)
			{
				$blog_data[$j]['blog_categories'][$i++] = $this->Blog_category_model->get_blog_category($bc['blog_cat_id']);
			}
			$j++;
		}
		$data['blog_data'] = $blog_data;

		$this->load->view('templates/header',$data);
		$this->load->view('templates/slider',$slider_data);
		$this->load->view('pages/home',$data);
		$this->load->view('templates/footer',$data);
	}

	public function about()
	{
		$data = $this->common();
		$data['title'] = "About Us | Babari Hydraulic Seals";
		$data['page'] = "about";
		$data['testimonial'] = $this->Testimonial_model->get_testimonial();
		$data['partners'] = $this->Partner_model->get_partner();
		$this->load->view('templates/header',$data);
		$this->load->view('pages/about');
		$this->load->view('templates/footer',$data);
	}
    public function team()
    {
        $data = $this->common();
        $data['title'] = "Board of Directors | Babari Hydraulic Seals";
        $data['page'] = "team";
        $this->load->view('templates/header',$data);
        $this->load->view('pages/team');
        $this->load->view('templates/footer',$data);
    }
    public function production()
    {
        $data = $this->common();
        $data['title'] = "Production | Babari Hydraulic Seals";
        $data['page'] = "production";
        $this->load->view('templates/header',$data);
        $this->load->view('pages/production');
        $this->load->view('templates/footer',$data);
    }
	public function certificate()
	{
		$data = $this->common();
		$data['title'] = "Certificates | Babari Hydraulic Seals";
		$data['page'] = "certificate";
		$this->load->view('templates/header',$data);
		$this->load->view('pages/certificate');
		$this->load->view('templates/footer',$data);
	}
    public function quality()
    {
        $data = $this->common();
        $data['title'] = "Quality | Babari Hydraulic Seals";
        $data['page'] = "quality";
        $this->load->view('templates/header',$data);
        $this->load->view('pages/quality');
        $this->load->view('templates/footer',$data);
    }

	public function career()
	{
		$data = $this->common();
		$data['title'] = "Career | Babari Hydraulic Seals";
		$data['page'] = "career";
		$this->load->view('templates/header',$data);
		$this->load->view('pages/career');
		$this->load->view('templates/footer',$data);
	}

	public function contact()
	{
		$data = $this->common();
		$data['title'] = "Contact Us | Babari Hydraulic Seals";
		$data['page'] = "contact";
		$this->load->view('templates/header',$data);
		$this->load->view('pages/contact');
		$this->load->view('templates/footer',$data);
	}
	
	public function products()
	{
		$data = $this->common();
		$data['title'] = "Our Products";
		$data['page'] = "products";
		$data['products'] = $this->Product_model->get_product();
		$products_o = $data['products'];
		
		$products = array();
		$i = 0;

		foreach($products_o as $po)
		{
			$product_image = $this->Product_image_model->get_product_image_single($po['product_id']);
			$products[$i]['product_id'] = $po['product_id'];
			$products[$i]['product_name'] = $po['product_name'];
			$products[$i]['product_slug'] = $po['product_slug'];
			$products[$i]['product_image_name'] = $product_image['product_image_name'];
			$products[$i]['product_description'] = $po['product_description'];
			$products[$i]['cat_name'] = $this->Product_model->get_category_name($po['product_id'])['cat_name'];
			$products[$i]['cat_slug'] = $this->Product_model->get_category_name($po['product_id'])['cat_slug'];
			$i++;
		}
		$data['products'] = $products;

		$this->load->view('templates/header',$data);
		$this->load->view('pages/product',$data);
		$this->load->view('templates/footer',$data);
	}
	
	public function product($product_slug)
	{

		$data = $this->common();
		$data['product'] = $this->Product_model->get_product_by_slug($product_slug);
		$product_id = $data['product']['product_id'];
		$product_name = $data['product']['product_name'];
		$data['page'] = "products";

		$data['title'] = $product_name;

		if(empty($data['product'])){
			show_404();
		}
		
		$data['category'] = $this->Product_model->get_category_name($product_id);
		$data['related_product'] = $this->Product_model->get_related_product($product_id);
		$data['product_image'] = $this->Product_image_model->get_product_image($product_id);
		

		$this->load->view('templates/header',$data);
		$this->load->view('pages/product_detail',$data);
		$this->load->view('templates/footer',$data);
	}

	public function category($cat_slug)
	{
		$data = $this->common();
		$data['page'] = "products";
		$data['category'] = $this->Category_model->get_category_by_slug($cat_slug);
		if(empty($data['category'])){
			show_404();
		}
		$cat_id = $data['category']['cat_id'];
		$cat_name = $data['category']['cat_name'];
		
		$data['title'] = $cat_name;
		$child_cat = $this->Category_model->get_child($cat_id);
		
		$cat_ids = array();
		$cat_ids[0] = $cat_id;
		$i=1;
		foreach($child_cat as $cc)
		{
			$cat_ids[$i++] = $cc['cat_id'];
		}
		
		$data['products'] = $this->Product_model->get_product_by_categories($cat_ids);

		$products_o = $data['products'];
		$products = array();
		$i = 0;

		foreach($products_o as $po)
		{
			$product_image = $this->Product_image_model->get_product_image_single($po['product_id']);
			$products[$i]['product_id'] = $po['product_id'];
			$products[$i]['product_name'] = $po['product_name'];
			$products[$i]['product_slug'] = $po['product_slug'];
			$products[$i]['product_image_name'] = $product_image['product_image_name'];
			$products[$i]['product_description'] = $po['product_description'];
			$products[$i]['cat_name'] = $this->Product_model->get_category_name($po['product_id'])['cat_name'];
			$products[$i]['cat_slug'] = $this->Product_model->get_category_name($po['product_id'])['cat_slug'];
			$i++;
		}
		$data['products'] = $products;

		$this->load->view('templates/header',$data);
		$this->load->view('pages/product',$data);
		$this->load->view('templates/footer',$data);
	}
	
	public function terms()
	{
		$data = $this->common();
		$data['title'] = "Terms and Conditions | Babari Hydraulic Seals";
		$data['page'] = "terms";
		$this->load->view('templates/header',$data);
		$this->load->view('pages/terms',$data);
		$this->load->view('templates/footer',$data);
	}

	public function privacy()
	{
		$data = $this->common();
		$data['title'] = "Privacy Policy | Babari Hydraulic Seals";
		$data['page'] = "privacy";
		$this->load->view('templates/header',$data);
		$this->load->view('pages/privacy',$data);
		$this->load->view('templates/footer',$data);
	}
	public function disclaimer()
	{
		$data = $this->common();
		$data['title'] = "Disclaimer | Babari Hydraulic Seals";
		$data['page'] = "disclaimer";
		$this->load->view('templates/header',$data);
		$this->load->view('pages/disclaimer',$data);
		$this->load->view('templates/footer',$data);
	}

	public function blog($blog_post_slug = "")
	{
		if(!empty($blog_post_slug)){
			$data = $this->common();
			$data['title'] = "Disclaimer | Babari Hydraulic Seals";
			$data['page'] = "blog";

			$blog_post = $this->Blog_post_model->get_blog_post_by_slug($blog_post_slug);
			if(empty($blog_post)){
				show_404();
			}
			$blog_data = array();
			
			$blog_data['blog_post_id'] = $blog_post['blog_post_id'];
			$blog_data['blog_post_title'] = $blog_post['blog_post_title'];
			$blog_data['blog_post_slug'] = $blog_post['blog_post_slug'];
			$blog_data['blog_author'] = $this->Blog_author_model->get_blog_author($blog_post['blog_author_id'])['blog_author_name'];
			$blog_data['blog_author_slug'] = $this->Blog_author_model->get_blog_author($blog_post['blog_author_id'])['blog_author_username'];
			$blog_data['blog_post_date'] = $blog_post['blog_post_date'];
			$blog_data['blog_post_content'] = $blog_post['blog_post_content'];
			$blog_data['blog_post_short_content'] = $blog_post['blog_post_short_content'];
			$blog_data['blog_post_thumbnail_image'] = $blog_post['blog_post_thumbnail_image'];
			$blog_data['blog_post_featured_image'] = $blog_post['blog_post_featured_image'];
			$blog_post_id = $blog_post['blog_post_id'];
			$blog_categories = $this->Blog_category_post_model->get_blog_category_post_by_post($blog_post_id);
			$i=0;
			$blog_data['blog_categories'] = array();
			foreach($blog_categories as $bc)
			{
				$blog_data['blog_categories'][$i++] = $this->Blog_category_model->get_blog_category($bc['blog_cat_id']);
			}

			$blog_tags = $this->Blog_tag_post_model->get_blog_tag_post_by_post($blog_post_id);
			$i=0;
			$blog_data['blog_tags'] = array();
			foreach($blog_tags as $bc)
			{
				$blog_data['blog_tags'][$i++] = $this->Blog_tag_model->get_blog_tag($bc['blog_tag_id']);
			}

			$data['blog_data'] = $blog_data;
			$data['title'] = $blog_post['blog_post_title']." | Blog";
			$data['breadcumb_title'] = $blog_post['blog_post_title'];

			$blog_cat_tree = $this->Blog_category_model->get_blog_category_tree();
			$data['blog_all_categories'] = $this->Blog_category_model->buildTree($blog_cat_tree);
			$data['blog_all_tags'] = $this->Blog_tag_model->get_blog_tag_random();
			
			$this->load->view('templates/header',$data);
			$this->load->view('pages/blog',$data);
			$this->load->view('templates/footer',$data);
		}
		else
		{
			$data = $this->common();
			$data['page'] = "blog";

			$blog_category_data = $this->Blog_category_model->get_blog_category();
			$blog_data = array();
			$j = 0;
			foreach($blog_category_data as $blog_category)
			{
				$blog_cat_id = $blog_category['blog_cat_id'];
				$blog_category_post_data = $this->Blog_category_post_model->get_blog_category_post_by_cat($blog_cat_id);
				foreach($blog_category_post_data as $bcpd)
				{
					$bpm = $this->Blog_post_model->get_blog_post($bcpd['blog_post_id']);
					$blog_data[$j]['blog_post_id'] = $bpm['blog_post_id'];
					$blog_data[$j]['blog_post_title'] = $bpm['blog_post_title'];
					$blog_data[$j]['blog_post_slug'] = $bpm['blog_post_slug'];
					$blog_data[$j]['blog_author'] = $this->Blog_author_model->get_blog_author($bpm['blog_author_id'])['blog_author_name'];
					$blog_data[$j]['blog_author_slug'] = $this->Blog_author_model->get_blog_author($bpm['blog_author_id'])['blog_author_username'];
					$blog_data[$j]['blog_post_date'] = $bpm['blog_post_date'];
					$blog_data[$j]['blog_post_content'] = $bpm['blog_post_content'];
					$blog_data[$j]['blog_post_short_content'] = $bpm['blog_post_short_content'];
					$blog_data[$j]['blog_post_thumbnail_image'] = $bpm['blog_post_thumbnail_image'];
					$blog_data[$j]['blog_post_featured_image'] = $bpm['blog_post_featured_image'];
					$blog_post_id = $bpm['blog_post_id'];
					$blog_categories = $this->Blog_category_post_model->get_blog_category_post_by_post($blog_post_id);
					$i=0;
					$blog_data[$j]['blog_categories'] = array();
					foreach($blog_categories as $bc)
					{
						$blog_data[$j]['blog_categories'][$i++] = $this->Blog_category_model->get_blog_category($bc['blog_cat_id']);
					}
					$j++;
				}

			}
			$data['blog_data'] = $blog_data;
			$data['title'] = "Blog";
			$data['breadcumb_title'] = 'Blog';

            $blog_cat_tree = $this->Blog_category_model->get_blog_category_tree();
            $data['blog_all_categories'] = $this->Blog_category_model->buildTree($blog_cat_tree);
            $data['blog_all_tags'] = $this->Blog_tag_model->get_blog_tag_random();

            $this->load->view('templates/header',$data);
			$this->load->view('pages/blog_archive',$data);
			$this->load->view('templates/footer',$data);
		}
	}
	public function blog_category_all()
	{
		$data = $this->common();
		$data['page'] = "blog";

		$blog_category_data = $this->Blog_category_model->get_blog_category();
		$blog_data = array();
		$j = 0;
		foreach($blog_category_data as $blog_category)
		{
			$blog_cat_id = $blog_category['blog_cat_id'];
			$blog_category_post_data = $this->Blog_category_post_model->get_blog_category_post_by_cat($blog_cat_id);
			foreach($blog_category_post_data as $bcpd)
			{
				$bpm = $this->Blog_post_model->get_blog_post($bcpd['blog_post_id']);
				$blog_data[$j]['blog_post_id'] = $bpm['blog_post_id'];
				$blog_data[$j]['blog_post_title'] = $bpm['blog_post_title'];
				$blog_data[$j]['blog_post_slug'] = $bpm['blog_post_slug'];
				$blog_data[$j]['blog_author'] = $this->Blog_author_model->get_blog_author($bpm['blog_author_id'])['blog_author_name'];
				$blog_data[$j]['blog_author_slug'] = $this->Blog_author_model->get_blog_author($bpm['blog_author_id'])['blog_author_username'];
				$blog_data[$j]['blog_post_date'] = $bpm['blog_post_date'];
				$blog_data[$j]['blog_post_content'] = $bpm['blog_post_content'];
				$blog_data[$j]['blog_post_short_content'] = $bpm['blog_post_short_content'];
				$blog_data[$j]['blog_post_thumbnail_image'] = $bpm['blog_post_thumbnail_image'];
				$blog_data[$j]['blog_post_featured_image'] = $bpm['blog_post_featured_image'];
				$blog_post_id = $bpm['blog_post_id'];
				$blog_categories = $this->Blog_category_post_model->get_blog_category_post_by_post($blog_post_id);
				$i=0;
				$blog_data[$j]['blog_categories'] = array();
				foreach($blog_categories as $bc)
				{
					$blog_data[$j]['blog_categories'][$i++] = $this->Blog_category_model->get_blog_category($bc['blog_cat_id']);
				}
				$j++;
			}

		}
		$data['blog_data'] = $blog_data;
		$data['title'] = "Blog";
		$data['breadcumb_title'] = 'Blog';

        $blog_cat_tree = $this->Blog_category_model->get_blog_category_tree();
        $data['blog_all_categories'] = $this->Blog_category_model->buildTree($blog_cat_tree);
        $data['blog_all_tags'] = $this->Blog_tag_model->get_blog_tag_random();

		$this->load->view('templates/header',$data);
		$this->load->view('pages/blog_archive',$data);
		$this->load->view('templates/footer',$data);
	}
	public function blog_category($blog_cat_slug)
	{
		$data = $this->common();
		$data['page'] = "blog";

		$blog_category = $this->Blog_category_model->get_blog_category_by_slug($blog_cat_slug);
		if(empty($blog_category)){
			show_404();
		}

		$blog_cat_id = $blog_category['blog_cat_id'];
		$blog_data = array();
		$j = 0;
		$blog_category_post_data = $this->Blog_category_post_model->get_blog_category_post_by_cat($blog_cat_id);
		foreach($blog_category_post_data as $bcpd)
		{
			$bpm = $this->Blog_post_model->get_blog_post($bcpd['blog_post_id']);
			$blog_data[$j]['blog_post_id'] = $bpm['blog_post_id'];
			$blog_data[$j]['blog_post_title'] = $bpm['blog_post_title'];
			$blog_data[$j]['blog_post_slug'] = $bpm['blog_post_slug'];
			$blog_data[$j]['blog_author'] = $this->Blog_author_model->get_blog_author($bpm['blog_author_id'])['blog_author_name'];
			$blog_data[$j]['blog_author_slug'] = $this->Blog_author_model->get_blog_author($bpm['blog_author_id'])['blog_author_username'];
			$blog_data[$j]['blog_post_date'] = $bpm['blog_post_date'];
			$blog_data[$j]['blog_post_content'] = $bpm['blog_post_content'];
			$blog_data[$j]['blog_post_short_content'] = $bpm['blog_post_short_content'];
			$blog_data[$j]['blog_post_thumbnail_image'] = $bpm['blog_post_thumbnail_image'];
			$blog_data[$j]['blog_post_featured_image'] = $bpm['blog_post_featured_image'];
			$blog_post_id = $bpm['blog_post_id'];
			$blog_categories = $this->Blog_category_post_model->get_blog_category_post_by_post($blog_post_id);
			$i=0;
			$blog_data[$j]['blog_categories'] = array();
			foreach($blog_categories as $bc)
			{
				$blog_data[$j]['blog_categories'][$i++] = $this->Blog_category_model->get_blog_category($bc['blog_cat_id']);
			}
			$j++;
		}
		$data['blog_data'] = $blog_data;
		$data['title'] = $blog_category['blog_cat_name']." | Blog";
		$data['breadcumb_title'] = $blog_category['blog_cat_name'];

        $blog_cat_tree = $this->Blog_category_model->get_blog_category_tree();
        $data['blog_all_categories'] = $this->Blog_category_model->buildTree($blog_cat_tree);
        $data['blog_all_tags'] = $this->Blog_tag_model->get_blog_tag_random();


        $this->load->view('templates/header',$data);
		$this->load->view('pages/blog_archive',$data);
		$this->load->view('templates/footer',$data);
	}
	public function blog_author($blog_author_username)
	{
		$data = $this->common();
		$data['page'] = "blog";

		$blog_author = $this->Blog_author_model->get_blog_author_by_slug($blog_author_username);
		if(empty($blog_author)){
			show_404();
		}

		$blog_author_id = $blog_author['blog_author_id'];
		$blog_data = array();
		$j = 0;
		$blog_author_data = $this->Blog_post_model->get_blog_post_by_author($blog_author_id);
		
		foreach($blog_author_data as $bcpd)
		{
			$bpm = $this->Blog_post_model->get_blog_post($bcpd['blog_post_id']);
			$blog_data[$j]['blog_post_id'] = $bpm['blog_post_id'];
			$blog_data[$j]['blog_post_title'] = $bpm['blog_post_title'];
			$blog_data[$j]['blog_post_slug'] = $bpm['blog_post_slug'];
			$blog_data[$j]['blog_author'] = $this->Blog_author_model->get_blog_author($bpm['blog_author_id'])['blog_author_name'];
			$blog_data[$j]['blog_author_slug'] = $this->Blog_author_model->get_blog_author($bpm['blog_author_id'])['blog_author_username'];
			$blog_data[$j]['blog_post_date'] = $bpm['blog_post_date'];
			$blog_data[$j]['blog_post_content'] = $bpm['blog_post_content'];
			$blog_data[$j]['blog_post_short_content'] = $bpm['blog_post_short_content'];
			$blog_data[$j]['blog_post_thumbnail_image'] = $bpm['blog_post_thumbnail_image'];
			$blog_data[$j]['blog_post_featured_image'] = $bpm['blog_post_featured_image'];
			$blog_post_id = $bpm['blog_post_id'];
			$blog_categories = $this->Blog_category_post_model->get_blog_category_post_by_post($blog_post_id);
			$i=0;
			$blog_data[$j]['blog_categories'] = array();
			foreach($blog_categories as $bc)
			{
				$blog_data[$j]['blog_categories'][$i++] = $this->Blog_category_model->get_blog_category($bc['blog_cat_id']);
			}
			$j++;
		}
		$data['blog_data'] = $blog_data;
		$data['title'] = $blog_author['blog_author_name']." | Blog";
		$data['breadcumb_title'] = $blog_author['blog_author_name'];

        $blog_cat_tree = $this->Blog_category_model->get_blog_category_tree();
        $data['blog_all_categories'] = $this->Blog_category_model->buildTree($blog_cat_tree);
        $data['blog_all_tags'] = $this->Blog_tag_model->get_blog_tag_random();

        $this->load->view('templates/header',$data);
		$this->load->view('pages/blog_archive',$data);
		$this->load->view('templates/footer',$data);
	}
	public function blog_tag($blog_tag_slug)
	{
		$data = $this->common();
		$data['page'] = "blog";

		$blog_tag = $this->Blog_tag_model->get_blog_tag_by_slug($blog_tag_slug);
		if(empty($blog_tag)){
			show_404();
		}

		$blog_tag_id = $blog_tag['blog_tag_id'];
		$blog_data = array();
		$j = 0;
		$blog_tag_post_data = $this->Blog_tag_post_model->get_blog_tag_post_by_tag($blog_tag_id);
		foreach($blog_tag_post_data as $bcpd)
		{
			$bpm = $this->Blog_post_model->get_blog_post($bcpd['blog_post_id']);
			$blog_data[$j]['blog_post_id'] = $bpm['blog_post_id'];
			$blog_data[$j]['blog_post_title'] = $bpm['blog_post_title'];
			$blog_data[$j]['blog_post_slug'] = $bpm['blog_post_slug'];
			$blog_data[$j]['blog_author'] = $this->Blog_author_model->get_blog_author($bpm['blog_author_id'])['blog_author_name'];
			$blog_data[$j]['blog_author_slug'] = $this->Blog_author_model->get_blog_author($bpm['blog_author_id'])['blog_author_username'];
			$blog_data[$j]['blog_post_date'] = $bpm['blog_post_date'];
			$blog_data[$j]['blog_post_content'] = $bpm['blog_post_content'];
			$blog_data[$j]['blog_post_short_content'] = $bpm['blog_post_short_content'];
			$blog_data[$j]['blog_post_thumbnail_image'] = $bpm['blog_post_thumbnail_image'];
			$blog_data[$j]['blog_post_featured_image'] = $bpm['blog_post_featured_image'];
			$blog_post_id = $bpm['blog_post_id'];
			$blog_categories = $this->Blog_category_post_model->get_blog_category_post_by_post($blog_post_id);
			$i=0;
			$blog_data[$j]['blog_categories'] = array();
			foreach($blog_categories as $bc)
			{
				$blog_data[$j]['blog_categories'][$i++] = $this->Blog_category_model->get_blog_category($bc['blog_cat_id']);
			}
			$j++;
		}
		$data['blog_data'] = $blog_data;
		$data['title'] = $blog_tag['blog_tag_name']." | Blog";
		$data['breadcumb_title'] = $blog_tag['blog_tag_name'];

        $blog_cat_tree = $this->Blog_category_model->get_blog_category_tree();
        $data['blog_all_categories'] = $this->Blog_category_model->buildTree($blog_cat_tree);
        $data['blog_all_tags'] = $this->Blog_tag_model->get_blog_tag_random();

        $this->load->view('templates/header',$data);
		$this->load->view('pages/blog_archive',$data);
		$this->load->view('templates/footer',$data);
	}
	
	function languages()
	{
	   extract($_POST);
	   $this->session->set_userdata('language', $dlang);
	   $redirect_url = base_url().$current;
	   redirect($redirect_url);	
	}

	// -------------------- Common Fuction ---------------------------//
	public function common()
	{
		/*--------------------COMMING SOON----------------------------*/
		$setting = $this->Setting_model->get_setting();
		$coming_soon = 0;
		foreach($setting as $s)
		{
			if($s['name'] == 'coming_soon')
			{
				$coming_soon = $s['value'];
				break;
			}
		}
		if($coming_soon)
		{
			$data['contact'] = $this->Contact_model->get_contact(); 
			$this->load->view('admin/coming_soon/index',$data);
			return;	
		}
		/*------------######COMMING SOON######--------------------*/
		
		$cat_tree = $this->Category_model->get_category_tree();
		$data['cat_tree'] = $this->Category_model->buildTree($cat_tree);
		$data['parent_cats'] = $this->Category_model->get_parent();
				
		$data['setting_detail'] = $this->Setting_model->get_setting_detail();
		$data['contact_detail'] = $this->Contact_model->get_contact_detail();
		$contact_detail = $data['contact_detail'];
		$data['products_4'] = $this->Product_model->get_product_4();
		
		/*----------------SEO-------------------*/
		$slug = "";
		if(!empty($this->uri->segment(1)))
			$slug.=$this->uri->segment(1);
		if(!empty($this->uri->segment(2)))
			$slug.= "/".$this->uri->segment(2);
		if(!empty($this->uri->segment(3)))
			$slug.= "/".$this->uri->segment(3);
		
        $slug = trim($slug);
        
        $meta_tags = "";
        $Page_slug_model = $this->Page_slug_model->get_page_slug_id($slug);
        if(!empty($Page_slug_model))
        {
        	$page_slug_id = $Page_slug_model['page_slug_id'];
        	$Seo_onpage_value_data = $this->Seo_onpage_value_model->get_seo_onpage_value($page_slug_id);
        	foreach($Seo_onpage_value_data as $sovd)
        	{
        		$Seo_onpage_value_data = $this->Seo_onpage_model->get_seo_onpage($sovd['seo_onpage_id']);
        		if(!empty($Seo_onpage_value_data))
        		{
        			$tag_name = $Seo_onpage_value_data['name'];
        			if($tag_name == "meta_keywords")
        			{
        				$meta_tags .= '<meta name="keywords" content="'.$sovd['value'].'"/>';
        			}

        			if($tag_name == "meta_description")
        			{
        				$meta_tags .= '<meta name="description" content="'.$sovd['value'].'"/>';	
        				$meta_tags .= '<meta name="og:description" content="'.$sovd['value'].'"/>';	
        				$meta_tags .= '<meta name="twitter:description" content="'.$sovd['value'].'"/>';	
        			}	

        			if($tag_name == "subject")
        			{
        				$meta_tags .= '<meta name="topic" content="'.$sovd['value'].'"/>';
        				$meta_tags .= '<meta name="subject" content="'.$sovd['value'].'"/>';
        				$meta_tags .= '<meta name="og:title" content="'.$sovd['value'].'"/>';
        				$meta_tags .= '<meta name="twitter:title" content="'.$sovd['value'].'"/>';
        			}

        			if($tag_name == "facebook_image")
        			{
        				$meta_tags .= '<meta name="og:image" content="'.$sovd['value'].'"/>';
        			}
        			
        			if($tag_name == "twitter_image")
        			{
        				$meta_tags .= '<meta name="twitter:image" content="'.$sovd['value'].'"/>';
        			}
        		}
        	}
        }
        $meta_tags .= '<meta name="og:url" content="'.base_url(uri_string()).'"/>';
        $meta_tags .= '<meta name="url" content="'.base_url(uri_string()).'"/>';
        $meta_tags .= '<meta name="twitter:url" content="'.base_url(uri_string()).'"/>';
        $meta_tags .= '<meta name="identifier-URL" content="'.base_url(uri_string()).'"/>';
        
        $meta_tags .= '<meta name="copyright" content="'.$contact_detail['company_name'].'"/>';
        $meta_tags .= '<meta name="og:site_name" content="'.$contact_detail['company_name'].'"/>';
        $meta_tags .= '<meta name="twitter:site" content="'.$contact_detail['company_name'].'"/>';
        $meta_tags .= '<meta name="owner" content="'.$contact_detail['company_name'].'"/>';
        $meta_tags .= '<meta name="apple-mobile-web-app-title" content="'.$contact_detail['company_name'].'"/>';
        $meta_tags .= '<meta name="application-name" content="'.$contact_detail['company_name'].'"/>';
        $meta_tags .= '<meta name="application-name" content="'.$contact_detail['company_name'].'"/>';

        $meta_tags .= '<meta name="author" content="'.$contact_detail['company_name'].",".$contact_detail['email1'].'"/>';
        
        $meta_tags .= '<meta name="reply-to" content="'.$contact_detail['email1'].'"/>';
        $meta_tags .= '<meta name="og:email" content="'.$contact_detail['email1'].'"/>';
        
        $meta_tags .= '<meta name="og:phone_number" content="'.$contact_detail['office1'].'"/>';
        $meta_tags .= '<meta name="og:street-address" content="'.$contact_detail['address1'].'"/>';
        
        $meta_tags .= '<meta name="language" content="En"/>';
        $meta_tags .= '<meta name="robots" content="archive,follow,imageindex,index,odp,snippet,translate"/>';
        
        $meta_tags .= '<meta name="target" content="all"/>';
        $meta_tags .= '<meta name="audience" content="all"/>';
        $meta_tags .= '<meta name="coverage" content="Worldwide"/>';
        $meta_tags .= '<meta name="distribution" content="Global"/>';
        
        $meta_tags .= '<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />';
        $meta_tags .= '<meta property="og:type" content="website">';
        $meta_tags .= '<meta property="twitter:card" content="summary">';
        $meta_tags .= '<meta name="viewport" content="height=device-height,width=device-width,initial-scale=1.0,maximum-scale=1.0,minimum-scale=1.0,user-scalable=no,minimal-ui"/>';

        $data['meta_tags'] = $meta_tags;

        /*------------Catalog URL -------------*/
        $catalog = $this->Catalog_model->get_catalog();
        $data['catalog_url'] = base_url()."assets/catalog/".$catalog[0]['catalog'];
        $data['ver'] = "1.1";
        /*------------------------------------*/
		return $data;
	}
	
}
