<?php 
	class Gloshipexim_home_image_model extends CI_Model{
		public function __construct(){
			$this->load->database();
		}

		public function get_gloshipexim_home_image($gloshipexim_home_image_id = ""){
			if($gloshipexim_home_image_id === ""){
				$this->db->order_by('gloshipexim_home_image_order', 'asc');
				$query = $this->db->get('gloshipexim_home_image');
				return $query->result_array();
			}
			$this->db->where('gloshipexim_home_image_id',$gloshipexim_home_image_id);
			$query = $this->db->get('gloshipexim_home_image');
			return $query->row_array();			
		}

		public function create_gloshipexim_home_image($image){

			$data = array(
				'gloshipexim_home_image_title' => $this->input->post('gloshipexim_home_image_title'),
				'gloshipexim_home_image_url' => $this->input->post('gloshipexim_home_image_url'),
				'gloshipexim_home_image_order' => $this->input->post('gloshipexim_home_image_order'),
				'gloshipexim_home_image_description' => $this->input->post('gloshipexim_home_image_description'),
				'gloshipexim_home_image_name' => $image
			);
			return $this->db->insert('gloshipexim_home_image',$data); 
		}
		
		public function delete_gloshipexim_home_image($gloshipexim_home_image_id){
			$this->db->where('gloshipexim_home_image_id',$gloshipexim_home_image_id);
			$this->db->delete('gloshipexim_home_image');
		}
		
		public function edit_gloshipexim_home_image($gloshipexim_home_image_id){

			$data = array(
				'gloshipexim_home_image_name' => $image,
				'gloshipexim_home_image_title' => $this->input->post('gloshipexim_home_image_title'),
				'gloshipexim_home_image_url' => $this->input->post('gloshipexim_home_image_url'),
				'gloshipexim_home_image_description' => $this->input->post('gloshipexim_home_image_description'),
				'gloshipexim_home_image_order' => $this->input->post('gloshipexim_home_image_order')
			);
			return $this->db
					->where('gloshipexim_home_image_id',$gloshipexim_home_image_id)
					->update('gloshipexim_home_image',$data);
		}

		public function update_gloshipexim_home_image($image){
			$gloshipexim_home_image_id = $this->input->post('gloshipexim_home_image_id');
			$data = array(
				'gloshipexim_home_image_name' => $image,
				'gloshipexim_home_image_title' => $this->input->post('gloshipexim_home_image_title'),
				'gloshipexim_home_image_url' => $this->input->post('gloshipexim_home_image_url'),
				'gloshipexim_home_image_description' => $this->input->post('gloshipexim_home_image_description'),
				'gloshipexim_home_image_order' => $this->input->post('gloshipexim_home_image_order')
			);
			$this->db->where('gloshipexim_home_image_id',$gloshipexim_home_image_id);
			return $this->db->update('gloshipexim_home_image',$data);
		}
		
		
	}