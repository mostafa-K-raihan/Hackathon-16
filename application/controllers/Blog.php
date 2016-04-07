<?php

/**
*  Stat page
*/
//include_once './vendor/autoload.php';

class Blog extends CI_Controller {

	public function index() {
		$this->load->helper('url');
		$this->load->view('common_include_css', 
							array('specificCSS' => 'assets/css/home.css'));
		$this->load->view('pie_chart_js',
						array('specificJS' => 'assets/js/dummy.js'));
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
		$this->load->view('blog');
		//$this->load->view('footer');
		
	}
}