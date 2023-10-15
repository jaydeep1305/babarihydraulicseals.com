<?php
require 'application/libraries/gapi.class.php';
require 'application/libraries/vendor/autoload.php';

defined('BASEPATH') OR exit('No direct script access allowed');

class Gjdashboard extends CI_Controller {
	
	public function __construct()
	{
		parent::__construct();
		if(!$this->session->userdata('isLoggedIn'))
		{
			redirect(base_url().'/login');
		}
		$this->load->model('Setting_model');
		$this->load->model('Inquiry_model');
		$this->load->model('Product_model');
		$this->load->model('Subscriber_model');
	}
	
	public function index()
	{
		$start_date = null;
		$end_date = null;

		if(isset($_GET['start_date']))
			$start_date = $_GET['start_date'];

		if(isset($_GET['end_date']))
			$end_date = $_GET['end_date'];

		$data['start_date'] = $start_date;
		$data['end_date'] = $end_date;
		/*----------------------------------------*/
		/*----COUNTING---*/
		$data['total_inquires'] = $this->Inquiry_model->count_inquiry();
		$data['total_products'] = $this->Product_model->count_inquiry();
		$data['total_subscriber'] = $this->Subscriber_model->count_inquiry();


		$this->load->view('admin/templates/header');
		$this->load->view('admin/templates/sidebar');
		$this->load->view('admin/pages/index',$data);
		//$this->load->view('admin/templates/footer'); // Commented
	}

	public function users()
    {
        /*------Analytics Value-----*/
        $setting = $this->Setting_model->get_setting();
        $analytics_id = 0;
        foreach($setting as $s)
        {
            if($s['name'] == 'analytics_id')
            {
                $analytics_id = $s['value'];
                break;
            }
        }

        /*------ Analytics -----*/
        $ga = new gapi("greatjoin@ultra-airway-592.iam.gserviceaccount.com", "application/greatjoin.p12");
        define('ga_profile_id',$analytics_id);
        $start_date = null;
        $end_date = null;

        if(isset($_GET['start_date']))
            $start_date = $_GET['start_date'];

        if(isset($_GET['end_date']))
            $end_date = $_GET['end_date'];

        $filter = '';
        $ga->requestReportData(ga_profile_id,array('browser'),array('pageviews','visits','users','newUsers','avgSessionDuration'),'-visits',$filter,$start_date,$end_date);
        $data['ga'] = $ga;

        echo ($ga->getUsers() + $ga->getNewUsers())."|||||".$ga->getPageViews()."|||||".round($ga->getAvgSessionDuration())." sec" ;
    }
	public function os()
    {
        /*------Analytics Value-----*/
        $setting = $this->Setting_model->get_setting();
        $analytics_id = 0;
        foreach($setting as $s)
        {
            if($s['name'] == 'analytics_id')
            {
                $analytics_id = $s['value'];
                break;
            }
        }
        define('ga_profile_id',$analytics_id);

        /*------ Analytics -----*/
        $ga2 = new gapi("greatjoin@ultra-airway-592.iam.gserviceaccount.com", "application/greatjoin.p12");
        $filter = '';
        $start_date = null;
        $end_date = null;

        if(isset($_GET['start_date']))
            $start_date = $_GET['start_date'];

        if(isset($_GET['end_date']))
            $end_date = $_GET['end_date'];

        $ga2->requestReportData(ga_profile_id,array('operatingSystem'),array('pageviews','visits'),'-visits',$filter,$start_date,$end_date);
        $results2 = $ga2->getResults();
        $data['ga2'] = $ga2;
        $data['results2'] = $results2;

        $os_data_name = array();
        $os_data_user = array();
        $i = 0;
        foreach($results2 as $r)
        {
            $os = $r->getOperatingSystem();

            if($os == "Windows" or $os == "Android" or $os == "Macintosh" or $os == "iOS" or $os == "Linux" or $os == "Windows Phone" or $os == "SymbianOS")
            {
                $os_data_name[$i] = $r->getOperatingSystem();
                $os_data_user[$i] = $r->getVisits();
            }
            $i++;
        }
        echo implode(",",$os_data_name)."|||||".implode(",",$os_data_user);
    }
	public function browser()
    {
        try {
                /*------Analytics Value-----*/
                $setting = $this->Setting_model->get_setting();
                $analytics_id = 0;
                foreach($setting as $s)
                {
                    if($s['name'] == 'analytics_id')
                    {
                        $analytics_id = $s['value'];
                        break;
                    }
                }

                /*------ Analytics -----*/
                $ga = new gapi("greatjoin@ultra-airway-592.iam.gserviceaccount.com", "application/greatjoin.p12");
                define('ga_profile_id',$analytics_id);
                $start_date = null;
                $end_date = null;

                if(isset($_GET['start_date']))
                    $start_date = $_GET['start_date'];

                if(isset($_GET['end_date']))
                    $end_date = $_GET['end_date'];

                $filter = '';
                $ga->requestReportData(ga_profile_id,array('browser'),array('pageviews','visits','users','newUsers','avgSessionDuration'),'-visits',$filter,$start_date,$end_date);
                $results = $ga->getResults();
                $data['ga'] = $ga;
                $data['results'] = $results;
                $data['results'] = array();

                $browsers_data_name = array();
                $browsers_data_user = array();
                $i = 0;
                foreach($results as $r)
                {
                    $browser = $r->getBrowser();
                    if($browser == "Chrome" or $browser == "Firefox" or $browser == "Internet Explorer" or $browser == "UC Browser" or $browser == "Safari")
                    {
                        $browsers_data_name[$i] = $r->getBrowser();
                        $browsers_data_user[$i] = $r->getPageViews();
                    }
                    $i++;
                }
        }
        catch (Exception $ex) {
            $browsers_data_name = "";
            $browsers_data_user = "";
        }
        echo implode(",",$browsers_data_name)."|||||".implode(",",$browsers_data_user);
    }
    public function country(){
	    try{
            /*------Analytics Value-----*/
            $setting = $this->Setting_model->get_setting();
            $analytics_id = 0;
            foreach($setting as $s)
            {
                if($s['name'] == 'analytics_id')
                {
                    $analytics_id = $s['value'];
                    break;
                }
            }

            /*------ Analytics -----*/
            define('ga_profile_id',$analytics_id);
            $start_date = null;
            $end_date = null;

            if(isset($_GET['start_date']))
                $start_date = $_GET['start_date'];

            if(isset($_GET['end_date']))
                $end_date = $_GET['end_date'];

            $filter = '';

            $ga3 = new gapi("greatjoin@ultra-airway-592.iam.gserviceaccount.com", "application/greatjoin.p12");
            $ga3->requestReportData(ga_profile_id,array('country'),array('pageviews','visits'),'-visits',$filter,$start_date,$end_date);
            $results3 = $ga3->getResults();
            foreach($results3 as $r)
            {
                echo "<tr>";
                echo "<td>";
                echo $r->getCountry();
                echo "<td>";
                echo $r->getPageViews();
                echo "<td>";
                echo $r->getVisits();
                echo "</tr>";
            }
        }catch(Exception $ex){

        }

    }
    public function city(){
	    try{
            /*------Analytics Value-----*/
            $setting = $this->Setting_model->get_setting();
            $analytics_id = 0;
            foreach($setting as $s)
            {
                if($s['name'] == 'analytics_id')
                {
                    $analytics_id = $s['value'];
                    break;
                }
            }

            /*------ Analytics -----*/
            define('ga_profile_id',$analytics_id);
            $start_date = null;
            $end_date = null;

            if(isset($_GET['start_date']))
                $start_date = $_GET['start_date'];

            if(isset($_GET['end_date']))
                $end_date = $_GET['end_date'];

            $filter = '';

            $ga3 = new gapi("greatjoin@ultra-airway-592.iam.gserviceaccount.com", "application/greatjoin.p12");
            $ga3->requestReportData(ga_profile_id,array('city'),array('pageviews','visits'),'-visits',$filter,$start_date,$end_date);
            $results3 = $ga3->getResults();
            foreach($results3 as $r)
            {
                echo "<tr>";
                echo "<td>";
                echo $r->getCity();
                echo "<td>";
                echo $r->getPageViews();
                echo "<td>";
                echo $r->getVisits();
                echo "</tr>";
            }
        }catch(Exception $ex){

        }

    }
    public function page_views(){
	    try{
            /*------Analytics Value-----*/
            $setting = $this->Setting_model->get_setting();
            $analytics_id = 0;
            foreach($setting as $s)
            {
                if($s['name'] == 'analytics_id')
                {
                    $analytics_id = $s['value'];
                    break;
                }
            }

            /*------ Analytics -----*/
            define('ga_profile_id',$analytics_id);
            $start_date = null;
            $end_date = null;

            if(isset($_GET['start_date']))
                $start_date = $_GET['start_date'];

            if(isset($_GET['end_date']))
                $end_date = $_GET['end_date'];

            $filter = '';

            $ga4 = new gapi("greatjoin@ultra-airway-592.iam.gserviceaccount.com", "application/greatjoin.p12");
            $ga4->requestReportData(ga_profile_id,array('pagePath'),array('pageviews','visits','avgTimeOnPage'),'-visits',$filter,$start_date,$end_date);
            $results4 = $ga4->getResults();
            foreach($results4 as $r)
            {
                echo "<tr>";
                echo "<td>";
                echo $r->getPagePath();
                echo "<td>";
                echo $r->getPageViews();
                echo "<td>";
                echo round($r->getAvgTimeOnPage())." sec";
                echo "</tr>";
            }

        }catch (Exception $ex){

        }
    }
    public function realtime()
	{
		/*------Analytics Value-----*/
		$setting = $this->Setting_model->get_setting();
		$analytics_id = 0;
		foreach($setting as $s)
		{
			if($s['name'] == 'analytics_id')
			{
				$analytics_id = $s['value'];
				break;
			}
		}
		/*------ RealTime -----*/
		$client = new Google_Client();
		$client->useApplicationDefaultCredentials();
		$client->setScopes(['https://www.googleapis.com/auth/analytics.readonly']);
		$client->setAuthConfig("application/greatjoin.json");
		$GA_VIEW_ID = 'ga:'.$analytics_id;
		$service = new \Google_Service_Analytics($client);
        $realtime = "-";
		try {
			$result = $service->data_realtime->get(
				$GA_VIEW_ID,
				'rt:activeVisitors'
			);
			$realtime = $result->totalsForAllResults['rt:activeVisitors'];
		} catch(Exception $e) {
		}

		echo $realtime;
	}
}
