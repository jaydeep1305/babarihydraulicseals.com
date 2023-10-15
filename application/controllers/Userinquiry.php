<?php
	class Userinquiry extends CI_Controller{
		
		function __construct()
		{
			parent::__construct();
			
			$this->load->model('Inquiry_model'); # <- add this
			$this->load->helper('form');
			$this->load->helper('text');
			//$this->load->library('form_validation');
			$this->load->helper('form');
		}
		
		//-------- Create inquiry at Client Side // Contact Page ----------
		public function create(){

			$data['title'] = "Create Inquiry";
			$this->Inquiry_model->create_inquiry();
		}
        public function createCareer()
        {
            $config['csrf_protection'] = FALSE;
            $data['title'] = "Create Career Inquiry";
            $this->Inquiry_model->create_career_inquiry();
            $result['status'] = "ok";
            $result['response'] = $data;
            echo json_encode(array($result));
        }
		public function create_callback(){
			$config['csrf_protection'] = FALSE;
			$data['title'] = "Create Callback";
			$data = $this->Inquiry_model->create_callback();
			$result['status'] = "ok";
		    $result['response'] = $data;
		    echo json_encode(array($result));
		}
	} 
?>