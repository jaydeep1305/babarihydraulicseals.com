<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="Wilio Survey, Quotation, Review and Register form Wizard by Ansonika.">
    <meta name="author" content="Ansonika">
    <title>Basic Questionnaire</title>

    <!-- GOOGLE WEB FONT -->
    <link href="https://fonts.googleapis.com/css?family=Work+Sans:400,500,600" rel="stylesheet">

    <!-- BASE CSS -->
    <link href="<?=base_url()?>assets//question/css/bootstrap.min.css" rel="stylesheet">
	<link href="<?=base_url()?>assets//question/css/menu.css" rel="stylesheet">
    <link href="<?=base_url()?>assets//question/css/style.css" rel="stylesheet">
	<link href="<?=base_url()?>assets//question/css/vendors.css" rel="stylesheet">

    <!-- YOUR CUSTOM CSS -->
    <link href="<?=base_url()?>assets//question/css/custom.css" rel="stylesheet">
	
	<!-- MODERNIZR MENU -->
	<script src="<?=base_url()?>assets//question/js/modernizr.js"></script>
	<style>
	body{background-color:#3B3F45;}
	h3{color:#fff;font-size:30px !important;text-transform:capitalize;}
	h6{color:#fff;font-size:20px !important;text-transform:capitalize;}
	label{color:#fff;font-size:18px !important;text-transform:capitalize;}
	.checkmark{background-color:#3B3F45 !important; border: 1px solid #fff !important;}
	.container_check.version_2{padding-top:3px !important;}
	.main_question{text-align:center;}
	input[type="text"]{background-color:#3B3F45;  border-width: 0 0 2px;color: #ccc}
	input[type="text"]:focus{background-color:#3B3F45;  border-width: 0 0 2px;color:#fff !important;}
	textarea{background-color:#3B3F45 !important;  border-width: 0 0 2px;color: #ccc !important; border-top: 0 !important;border-right: 0 !important;border-left: 0 !important;}
	textarea:focus{background-color:#3B3F45 !important;  border-width: 0 0 2px;color:#fff !important;}
	.container_check input:checked ~ .checkmark {background-color: #434bdf !important;border: 1px solid transparent;}
	.logo svg{max-width:350px;text-align:center;padding-left:100px;fill:#eee}
	.logo h1.logo{color:#fff;margin:0;padding-left:50px;font-size:60px;}
	
	.logo h2{color:#fff;margin:0;padding-left:60px;padding-top:30px;}
	.logo h3{color:#fff;margin:0;padding-left:90px;}
	
	.thanks-container h1.thanks{color:#fff;font-size:60px; text-align:center}
	.thanks-container {color:#fff;text-align:center}
	</style>
</head>

<body>
	
	<div id="preloader">
		<div data-loader="circle-side"></div>
	</div><!-- /Preload -->
	
	<div id="loader_form">
		<div data-loader="circle-side-2"></div>
	</div><!-- /loader_form -->
	
	<div class="container-fluid full-height">
		<div class="row">
			<div class="col-md-4"></div>
			<div class="col-md-6">
				<div class="logo">
					<br/><br/>
<svg version="1.1" id="Layer_1" xmlns="https://www.w3.org/2000/svg" xmlns:xlink="https://www.w3.org/1999/xlink" x="0px" y="0px"
 viewBox="0 0 784.5 556" enable-background="new 0 0 784.5 556" xml:space="preserve">
<path d="M101,385.5c12.328,8.336,28,12.5,47,12.5h263c15.664,0,28-3.672,37-11.023c8-6.68,14.828-17.617,20.5-33.32l67-188.656H303
l-33.5,94h124c-5.336,13-8.672,21.086-10,22.75c-5.672,15-19.172,22.25-40.5,22.25H229c-16.672,0-25-5.32-25-15.961
c0-4.656,9-32.423,27-83.306c5.432-15.352,10.286-28.926,14.565-40.733H136.962c-19.54,55.635-36.694,105.306-51.461,148.999
c-4,11.336-6,21.336-6,30C79.5,361.671,86.672,375.836,101,385.5z"/>
<path d="M550.357,93l33.144-93h-347c-15.672,0-28,3.585-37,11.25c-7.672,6.672-14.336,17.546-20,32.875
C173.516,60.872,167.697,77.079,162.043,93h240.168H550.357z"/>
<path d="M676,0l-70.917,199h0.306l-56.306,158L521,436c-2.672,7-8.172,13-16.5,18c-9.336,5.336-19.672,8-31,8H423H296h-56h-24H113
H33L0,556h80h127h9h80h127h96.5c45.664,0,75.328-19.328,89-58l49.691-141l55.823-158h0.177L784.5,0H676z"/>
</svg>
				<h1 class="logo">Great Join</h1> <br><br><br>
				
				</div>
			</div>
		</div>
		<div class="row">
		<div class="col-md-12 thanks-container">
			<h1 class="thanks">Thanks for answering the questions.</h1><br/><br/>
			<h3 class="thanks-small">We will contact you soon.</h3>
		</div>
		</div>
		<!-- /row-->
	</div>
	<!-- /container-fluid -->

	<div class="cd-overlay-nav">
		<span></span>
	</div>
	<!-- /cd-overlay-nav -->

	<div class="cd-overlay-content">
		<span></span>
	</div>
	<!-- /cd-overlay-content -->
	
	
	<!-- COMMON SCRIPTS -->
	<script src="<?=base_url()?>assets//question/js/jquery-3.2.1.min.js"></script>
    <script src="<?=base_url()?>assets//question/js/common_scripts.min.js"></script>
	<script src="<?=base_url()?>assets//question/js/velocity.min.js"></script>
	<script src="<?=base_url()?>assets//question/js/functions.js"></script>

	<!-- Wizard script -->
	<script src="<?=base_url()?>assets//question/js/survey_func.js"></script>

</body>
</html>

<?php
	function step_count($sn,$en,$heading)
	{
		return "<h3 class='main_question'>$heading<strong>$sn/$en</strong></h3>";
	}
	function checkbox_question($que_id,$que,$ans_array,$required)
	{
		$r1 = '<label>'.$que.'</label>';
		$r2 = '';
			foreach($ans_array as $key=>$ans) :
				$checked = (strpos($key,"checked")>0)?"checked":"" ;
				$r2 .= '<div class="form-group"><label class="container_check version_2">'.$ans.'<input type="checkbox" name="question_'.$que_id.'[]" value="'.$ans.'" class="'.$required.'" '. $checked .' onchange="getVals(this, "question_'.$que_id.'");"><span class="checkmark"></span></label></div>';
			endforeach;
		return $r1.$r2."<br/>";
	}
	function radio_question($que_id,$que,$ans_array,$required)
	{
		$r1 = '<label>'.$que.'</label>';
		$r2 = '';
			foreach($ans_array as $key=>$ans) :
				$r2 .= '<label class="container_radio version_2">'.$ans.'<input type="radio" name="question_'.$que_id.'" value="'.$ans.'" class="'.$required.'"'.' onchange="getVals(this, "question_'.$que_id.'");"><span class="checkmark"></span></label>';
			endforeach;
		return $r1.'<div class="form-group radio_input">'.$r2.'</div><br/>';
	}
	function input($type,$name,$required,$label,$placeholder)
	{
		return "<div class='form-group'><label>$label</label><input type='$type' name='$name' class='form-control $required' placeholder='$placeholder'></div><br/>";
	}
	function textarea($type,$name,$required,$label,$placeholder,$rows="2")
	{
		return "<div class='form-group'><label>$label</label><textarea type='$type' name='$name' class='form-control $required' placeholder='$placeholder' rows='$rows'></textarea>	</div><br/>";
	}
?>