<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Login extends CI_Controller {

	function __construct()
		{
			parent::__construct();
			$this->load->model('Login_model'); # <- add this
			$this->load->model('Mail_model'); # <- add this
			$this->load->helper('form');
			$this->load->helper('text');
			//$this->load->library('form_validation');
			$this->load->helper('form');
		}

		public function login_validation()
		{
			$this->load->library('form_validation');
			$this->form_validation->set_rules('username','Username','required');
			$this->form_validation->set_rules('password','Password','required');

			if($this->form_validation->run()){
				
				$username = $this->input->post('username');
				$password = $this->input->post('password');

				$this->load->model('Login_model');

				if($this->Login_model->get_login($username, $password)){
					$session_data = array ('username' => $username);
					$this->session->set_userdata($session_data);
					$this->session->set_userdata('isLoggedIn', TRUE);

					$mail_count = $this->Mail_model->record_count(0);
                    $this->session->set_userdata('mail_count', $mail_count);

                    redirect(base_url().'gjdashboard/');
				}
				else{
					$this->session->set_flashdata('error', 'Invalid Username Or Password');
					$this->session->set_userdata('isLoggedIn', FALSE);
					redirect(base_url().'login');
				}
			}
			else{
				$this->index();
			}
		}

		public function enter()
		{
			if($this->session->userdata('username')=="")
			{
				$this->session->userdata('username');
			}	
			else {
				redirect(base_url().'login');
			}
		}
        public function edit_profile(){

            $data['username'] = $this->Login_model->get_username();

            $data['title'] = 'Edit Profile';

            $this->load->view('admin/templates/header');
            $this->load->view('admin/templates/sidebar');
            $this->load->view('admin/pages/edit_profile', $data);
            $this->load->view('admin/templates/footer');
        }
        public function update_profile(){
            $this->Login_model->update_profile();
            redirect('login/logout/');
        }

        public function logout()
		{
			$this->session->unset_userdata('username');
			$this->session->unset_userdata('mail_count');
			$this->session->set_userdata('isLoggedIn', FALSE);
			redirect(base_url().'login');		
		}

		public function index()
		{
			$data['title'] = 'Admin Login';
			$this->load->view('admin/pages/login',$data);
		}
	}