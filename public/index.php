<?php
require_once "../vendor/autoload.php";
$router = new AltoRouter();
include "../templates/header.php";
$router->map('GET', '/404', function (){
    include "errors/404.php";
});
$router->map( 'GET', '/', function (){
    include "login.php";
});
$router->map('GET', '/profile/dietitian', function (){
    include "../templates/nav.php";
    include "profiles/dietitian.php";
});
$router->map('GET', '/profile/patient', function(){
   include '../templates/nav.php';
   include "profiles/patient.php";
});

$router->map('GET', '/patient/create', function (){
    include "../templates/nav.php";
    include "forms/formCreatePatient.php";
});
$router->map('GET', '/dietitian/create', function (){
    include "../templates/nav.php";
    include "forms/formCreateDietitian.php";
});
$router->map('GET', '/patients', function (){
    include "../templates/nav.php";
    include "diet/patients.php";
});
$router->map('GET', '/patient/meals', function (){
    include "../templates/nav.php";
    include "patient/meals.php";
});


$match =$router->match();
if(is_array($match) && is_callable( $match['target'] )){
    $match['target']();
}else{
    include 'errors/404.php';

}
include "../templates/footer.php";