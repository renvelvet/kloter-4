<?php 
    include "koneksi.php";

    $sql_name = "CREATE TABLE nama (
        id int PRIMARY KEY,
        name varchar(50),
        id_work int,
        id_salary int
    )";
    $sql_work = "CREATE TABLE work (
        id int PRIMARY KEY,
        name varchar(50),
        id_salary int
    )";
    $sql_kategori = "CREATE TABLE kategori (
        id int PRIMARY KEY,
        salary int
    )";     

    $koneksi->query($sql_name);
    $koneksi->query($sql_work);
    $koneksi->query($sql_kategori);

    
//     if($koneksi->query($sql_name) === TRUE) {
//         echo "Tabel berhasil dibuat";
//     } else {
//         echo "Tabel gagal dibuat";
//     }
//     if($koneksi->query($sql_work) === TRUE) {
//         echo "Tabel berhasil dibuat";
//     } else {
//         echo "Tabel gagal dibuat";
//     }
//     if($koneksi->query($sql_kategori) === TRUE) {
//         echo "Tabel berhasil dibuat";
//     } else {
//         echo "Tabel gagal dibuat";
//     }
?>