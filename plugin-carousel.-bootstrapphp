<?php
/*
Plugin Name: Plugin Carousel Bootstrap
Plugin URI: 
Description: 
Version: 
Author: Rodrigo
Author URI: 
License: 
License URI: 
*/




function load_bootstrap(){
    
   //$path = plugin_dir_url( __FILE__ );


    wp_enqueue_style('bootstrap_css', 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css', date("h:i:s"));
   


    wp_enqueue_script('bootstrap_js', 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js', [], date("h:i:s"), true);

   
}


add_action('wp_footer','load_bootstrap');