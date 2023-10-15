<?php
defined('BASEPATH') OR exit('No direct script access allowed');

$route['default_controller'] = 'welcome';
$route['404_override'] = '';
$route['translate_uri_dashes'] = FALSE;

// next here....

$route['product/(:any)'] = "welcome/product/$1";
$route['category/(:any)'] = "welcome/category/$1";
$route['blog'] = "welcome/blog/";
$route['blog/category'] = "welcome/blog_category_all/";
$route['blog/category/(:any)'] = "welcome/blog_category/$1";
$route['blog/author/(:any)'] = "welcome/blog_author/$1";
$route['blog/tag/(:any)'] = "welcome/blog_tag/$1";
$route['blog/(:any)'] = "welcome/blog/$1";
$route['products'] = "welcome/products";
$route['about'] = "welcome/about";
$route['contact'] = "welcome/contact";
$route['career'] = "welcome/career";
$route['team'] = "welcome/team";
$route['sitemap'] = "welcome/sitemap";
$route['terms'] = "welcome/terms";
$route['terms'] = "welcome/terms";
$route['disclaimer'] = "welcome/disclaimer";
$route['privacy'] = "welcome/privacy";
$route['quality'] = "welcome/quality";
$route['certificate'] = "welcome/certificate";
$route['production'] = "welcome/production";

