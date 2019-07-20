<?php 
    include "koneksi.php";

    $sql_name = "INSERT INTO nama (
        id,
        name, 
        id_work, 
        id_salary
    ) VALUE (
        '1', 'Rebecca', '1', '1'
    ), (
        '2', 'Vita', '2', '2'
    )";

    $sql_work = "INSERT INTO work (
        id, name, id_salary
    ) VALUE (
        '1', 'Frontend Dev', '1'
    ), (
        '2', 'Backend Dev', '2'
    )";

    $sql_kategori = "INSERT INTO kategori (
        id, salary
    ) VALUE (
        '1', 10000000
    ), (
        '2', 12000000
    )";
    
    if($koneksi->query($sql_name) === TRUE) {
        echo "Insert data berhasil";
    } else {
        echo "Insert data  gagal";
    }
    if($koneksi->query($sql_work) === TRUE) {
        echo "Insert data berhasil";
    } else {
        echo "Insert data  gagal";
    }
    if($koneksi->query($sql_kategori) === TRUE) {
        echo "Insert data berhasil";
    } else {
        echo "Insert data gagal";
    }

    // $koneksi->query($sql_name);
    // $koneksi->query($sql_work);
    // $koneksi->query($sql_kategori);
?>