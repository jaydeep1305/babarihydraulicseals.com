<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Gjonpageseo extends CI_Controller {

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
		if(!$this->session->userdata('isLoggedIn'))
		{
			redirect(base_url().'/login');
		}
		$this->load->model('Seo_onpage_model'); # <- add this
		$this->load->model('Seo_onpage_value_model'); # <- add this
		$this->load->model('Page_slug_model'); # <- add this
		$this->load->model('Blog_post_model'); # <- add this
		$this->load->model('Image_gallery_model'); # <- add this
		$this->load->model('Product_image_model'); # <- add this
		$this->load->model('Partner_model'); # <- add this
		$this->load->model('Slider_model'); # <- add this
		$this->load->model('Testimonial_model'); # <- add this
		$this->load->helper('form');
		$this->load->helper('text');
		$this->load->library('form_validation');
	}
	
	public function index()
	{
		$data['page_slug'] = $this->Page_slug_model->get_page_slug();

		$this->load->view('admin/templates/header');
		$this->load->view('admin/templates/sidebar');
		$this->load->view('admin/seo_onpage/index', $data);
		$this->load->view('admin/templates/footer');
	}
	public function step2()
	{
		$page_slug_id = $this->input->post('page_slug_id');
		$data['page_slug_id'] = $page_slug_id;
		$data['seo_onpage'] = $this->Seo_onpage_model->get_seo_onpage();
		$data['seo_onpage_value'] = $this->Seo_onpage_value_model->get_seo_onpage_value($data['page_slug_id']);
		$seo = array();
		$i = 0;
		foreach($data['seo_onpage'] as $so)
		{
			$seo[$i]['page_slug_id'] = $page_slug_id;
			$seo[$i]['seo_onpage_id'] = $so['seo_onpage_id'];
			$seo[$i]['name'] = $so['name'];
			$seo[$i]['type'] = $so['type'];

				
			foreach($data['seo_onpage_value'] as $sov)
			{
				if($so['seo_onpage_id'] == $sov['seo_onpage_id'])
				{
					$seo[$i]['value'] = $sov['value'];
				}
			}
			$i++;
		}
		$data['seo'] = $seo;
		$this->load->view('admin/templates/header');
		$this->load->view('admin/templates/sidebar');
		$this->load->view('admin/seo_onpage/step2', $data);
		$this->load->view('admin/templates/footer');
	}
	public function save()
	{
		$seo_onpage_id_value = $this->input->post('seo_onpage_id');
		$page_slug_id = $this->input->post('page_slug_id');
		foreach($seo_onpage_id_value as $seo_onpage_id=>$value)
		{
			if(!empty($value))
			{
				$this->Seo_onpage_value_model->create($page_slug_id,$seo_onpage_id,$value);	
			}
			else
			{
				$this->Seo_onpage_value_model->delete($page_slug_id,$seo_onpage_id);	
			}
		}
		redirect('gjonpageseo/view/'.$page_slug_id);
	}
	public function view($page_slug_id)
	{
		$data['page_slug_id'] = $page_slug_id;
		$data['page_slug'] = $this->Page_slug_model->get_page_name($page_slug_id);
		$data['seo_onpage'] = $this->Seo_onpage_model->get_seo_onpage();
		$data['seo_onpage_value'] = $this->Seo_onpage_value_model->get_seo_onpage_value($data['page_slug_id']);
		$seo = array();
		$i = 0;
		foreach($data['seo_onpage'] as $so)
		{
			foreach($data['seo_onpage_value'] as $sov)
			{
				if($so['seo_onpage_id'] == $sov['seo_onpage_id'])
				{
						$seo[$i]['page_slug_id'] = $page_slug_id;
						$seo[$i]['seo_onpage_id'] = $so['seo_onpage_id'];
						$seo[$i]['name'] = $so['name'];
						$seo[$i]['type'] = $so['type'];
						$seo[$i]['value'] = $sov['value'];
				}
			}
			$i++;
		}
		$data['seo'] = $seo;

		$this->load->view('admin/templates/header');
		$this->load->view('admin/templates/sidebar');
		$this->load->view('admin/seo_onpage/view', $data);
		$this->load->view('admin/templates/footer');
	}
	public function generateslug()
	{
		$data = $this->Page_slug_model->generateslug();

        $myfile = fopen("sitemap.xml", "w") or die("Unable to open file!");
        $txt = '<?xml version="1.0" encoding="UTF-8"?>';
        $txt .= '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">';
        $txt .= '<url><loc>'.base_url().'</loc><priority>1.0</priority></url>';

        $page_slug = $this->Page_slug_model->get_page_slug();
        foreach($page_slug as $ps){
            $txt .= '<url>';
            $txt .= '<loc>'.base_url().$ps['page_slug'].'</loc>';
            $txt .= '<priority>0.5</priority>';
            $txt .= '</url>';
        }

        $txt .= '</urlset>';
        fwrite($myfile, $txt);
        fclose($myfile);

        $this->load->view('admin/templates/header');
        $this->load->view('admin/templates/sidebar');
        $this->load->view('admin/seo_onpage/generate_slug');
        $this->load->view('admin/templates/footer');
    }
	public function generaterobots()
	{
        $myfile = fopen("robots.txt", "w") or die("Unable to open file!");
        $txt = "User-agent: *\n";
        $txt .= "Disallow:\n";
        $txt .= 'Sitemap: '.base_url().'sitemap.xml';
        fwrite($myfile, $txt);
        fclose($myfile);

        $this->load->view('admin/templates/header');
        $this->load->view('admin/templates/sidebar');
        $this->load->view('admin/seo_onpage/generate_robots');
        $this->load->view('admin/templates/footer');
    }

	public function compress_images()
	{
		$path = FCPATH."assets/images/";
		/*---------------------------------------------*/
		/*---------------------------------------------*/
		/*-------USE MIND FOR Blog_post_model-----*/
		/*---------------------------------------------*/
		/*---------------------------------------------*/
		

		/*---------------------------------------------*/
		/*------------------IMAGE GALLERY--------------*/
		/*---------------------------------------------*/

		$Image_gallery_model = $this->Image_gallery_model->get_image();
		foreach($Image_gallery_model as $igm){
			$file = $igm['image_name'];
			$temp = explode(".",$file);
			$ext = end($temp);
			if($ext !== "webp")
			{
				array_pop($temp);
				$file_name = implode(".",$temp);

				$source_path = $path."gallery/".$file_name.".".$ext;
				$target_path = $path."gallery/".$file_name.".webp";

				if(!file_exists($target_path))
				{
					//convert
					echo shell_exec("cwebp -q 80 $source_path -o $target_path");
				}
				if(file_exists($target_path))
				{
					//Database Update
					$this->Image_gallery_model->convert_webp($igm['image_id'],$file_name.".webp");
				}

			}
		}

		/*---------------------------------------------*/
		/*------------------Partner--------------------*/
		/*---------------------------------------------*/
		$Partner_model = $this->Partner_model->get_partner();
		foreach($Partner_model as $pm){
			$file = $pm['partner_logo'];
			$temp = explode(".",$file);
			$ext = end($temp);
			if($ext !== "webp")
			{
				array_pop($temp);
				$file_name = implode(".",$temp);

				$source_path = $path."partner/".$file_name.".".$ext;
				$target_path = $path."partner/".$file_name.".webp";

				if(!file_exists($target_path))
				{
					//convert
					echo shell_exec("cwebp -q 80 $source_path -o $target_path");
				}
				if(file_exists($target_path))
				{
					//Database Update
					$this->Partner_model->convert_webp($pm['partner_id'],$file_name.".webp");
				}

			}
		}
		
		/*---------------------------------------------*/
		/*---------------Product Image-----------------*/
		/*---------------------------------------------*/
		$Product_image_model = $this->Product_image_model->get_all_product_image();
		foreach($Product_image_model as $pim){
			$file = $pim['product_image_name'];
			$temp = explode(".",$file);
			$ext = end($temp);
			if($ext !== "webp")
			{
				array_pop($temp);
				$file_name = implode(".",$temp);

				$source_path = $path."product/".$file_name.".".$ext;
				$target_path = $path."product/".$file_name.".webp";

				if(!file_exists($target_path))
				{
					//convert
					echo shell_exec("cwebp -q 80 $source_path -o $target_path");
				}
				if(file_exists($target_path))
				{
					//Database Update
					$this->Product_image_model->convert_webp($pim['product_image_id'],$file_name.".webp");
				}

			}
		}

		/*---------------------------------------------*/
		/*---------------Slider Image------------------*/
		/*---------------------------------------------*/
		$Slider_model = $this->Slider_model->get_slider();
		foreach($Slider_model as $sm){
			$file = $sm['image'];
			$temp = explode(".",$file);
			$ext = end($temp);
			if($ext !== "webp")
			{
				array_pop($temp);
				$file_name = implode(".",$temp);

				$source_path = $path."slider/".$file_name.".".$ext;
				$target_path = $path."slider/".$file_name.".webp";

				if(!file_exists($target_path))
				{
					//convert
					echo shell_exec("cwebp -q 80 $source_path -o $target_path");
				}
				if(file_exists($target_path))
				{
					//Database Update
					$this->Slider_model->convert_webp($sm['slider_id'],$file_name.".webp");
				}

			}
		}

		/*---------------------------------------------*/
		/*---------------Testimonial Image-------------*/
		/*---------------------------------------------*/
		$Testimonial_model = $this->Testimonial_model->get_testimonial();
		foreach($Testimonial_model as $tm){
			$file = $tm['testimonial_image'];
			$temp = explode(".",$file);
			$ext = end($temp);
			if($ext !== "webp")
			{
				array_pop($temp);
				$file_name = implode(".",$temp);

				$source_path = $path."testimonial/".$file_name.".".$ext;
				$target_path = $path."testimonial/".$file_name.".webp";

				if(!file_exists($target_path))
				{
					//convert
					echo shell_exec("cwebp -q 80 $source_path -o $target_path");
				}
				if(file_exists($target_path))
				{
					//Database Update
					$this->Testimonial_model->convert_webp($tm['testimonial_id'],$file_name.".webp");
				}

			}
		}
        $this->load->view('admin/templates/header');
        $this->load->view('admin/templates/sidebar');
        $this->load->view('admin/seo_onpage/compress_image');
        $this->load->view('admin/templates/footer');
	}

	public function submit_sitemap()
    {
        //sitemap already generated in generateslug()
        $this->load->view('admin/templates/header');
        $this->load->view('admin/templates/sidebar');
        $this->load->view('admin/seo_onpage/sitemap_submit');
        $this->load->view('admin/templates/footer');

    }
}
