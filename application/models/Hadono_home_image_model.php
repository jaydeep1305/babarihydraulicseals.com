<?php 
	class Hadono_home_image_model extends CI_Model{
		public function __construct(){
			$this->load->database();
		}

		public function get_hadono_home_image($hadono_home_image_id = ""){
			if($hadono_home_image_id === ""){
				$this->db->order_by('hadono_home_image_order', 'asc');
				$query = $this->db->get('hadono_home_image');
				return $query->result_array();
			}
			$this->db->where('hadono_home_image_id',$hadono_home_image_id);
			$query = $this->db->get('hadono_home_image');
			return $query->row_array();			
		}

		public function create_hadono_home_image($image){

			$data = array(
				'hadono_home_image_title' => $this->input->post('hadono_home_image_title'),
				'hadono_home_image_url' => $this->input->post('hadono_home_image_url'),
				'hadono_home_image_order' => $this->input->post('hadono_home_image_order'),
				'hadono_home_image_name' => $image
			);
			return $this->db->insert('hadono_home_image',$data); 
		}
		
		public function delete_hadono_home_image($hadono_home_image_id){
			$this->db->where('hadono_home_image_id',$hadono_home_image_id);
			$this->db->delete('hadono_home_image');
		}
		
		public function edit_hadono_home_image($hadono_home_image_id){

			$data = array(
				'hadono_home_image_name' => $image,
				'hadono_home_image_title' => $this->input->post('hadono_home_image_title'),
				'hadono_home_image_url' => $this->input->post('hadono_home_image_url'),
				'hadono_home_image_order' => $this->input->post('hadono_home_image_order')
			);
			return $this->db
					->where('hadono_home_image_id',$hadono_home_image_id)
					->update('hadono_home_image',$data);
		}

		public function update_hadono_home_image($image){
			$hadono_home_image_id = $this->input->post('hadono_home_image_id');
			$data = array(
				'hadono_home_image_name' => $image,
				'hadono_home_image_title' => $this->input->post('hadono_home_image_title'),
				'hadono_home_image_url' => $this->input->post('hadono_home_image_url'),
				'hadono_home_image_order' => $this->input->post('hadono_home_image_order')
			);
			$this->db->where('hadono_home_image_id',$hadono_home_image_id);
			return $this->db->update('hadono_home_image',$data);
		}
		
		
	}