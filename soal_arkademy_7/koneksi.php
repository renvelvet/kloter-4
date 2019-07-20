<?php 
    $host = "localhost";
    $username = "root";
    $password = "";
    $db = "employee";
    $koneksi = new mysqli($host, $username, $password, $db);
 
    if ($koneksi->connect_error){
        die("Koneksi ke database gagal");
    }
?>