<?php

/**
*  Home page
*/
//include_once './vendor/autoload.php';

class Home extends CI_Controller {

	public function index() {
		$this->load->helper('url');
		$this->load->view('common_include_css', 
							array('specificCSS' => 'assets/css/home.css'));
		session_start();
		if(isset($_SESSION['user'])) {
			$this->load->view('sidebarIn');
		}
		else {
		    $this->load->view('sidebarOut');
		}
		if(isset($_SESSION['message'])) {
			$this->load->view('message');
		}
		//$this->load->view('sidebar');
		//$this->load->view('footer');
		$this->load->view('common_include_js',
						array('specificJS' => 'assets/js/dummy.js', 'specificJSX' => 'assets/js/home_react.js'));
	}
}