<?php 
    include "koneksi.php";

    $sql = "CREATE DATABASE employee";

    if($koneksi->query($sql) === TRUE) {
        echo "Database berhasil dibuat";
    } else {
        echo "Database gagal dibuat";
    }
?>