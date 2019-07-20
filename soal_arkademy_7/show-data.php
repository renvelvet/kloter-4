<?php 
    include "koneksi.php";

    $show_data = "SELECT `e`.`name`, `w`.`name`, `kategori`.`salary`
                  FROM `nama` AS `e`, `work` AS `w`, `kategori`
                  WHERE (`e`.`id_work` = `w`.`id`) AND (`w`.`id_salary` = `kategori`.`id`)";

    $result = $koneksi-> query($show_data);

    // echo $result;
    foreach($result as $res) {
        $name = $res["name"];
        $work = $res["name"];
        $salary = $res["salary"];

        echo "Name: ".$name."\n".
              "Work: ".$work."\n".
              "Salary".$salary."\n";
    }
?>