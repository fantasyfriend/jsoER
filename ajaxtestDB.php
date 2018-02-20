<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "test";

try {
    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    //set the PDO error mode to exception
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    
    $keuze = $_GET['keuze'];
    $data1 = $_GET['data1'];
    $data2 = $_GET['data2'];
    $data3 = $_GET['data3'];
    if ($keuze=="showt") {
        $sql = 'SHOW TABLES FROM '.$dbname.'';
        $result = $conn->query($sql);
        // execute the query
        foreach ($result as $rij) {
        echo'<button class="tabel" value="'.$rij[0].'">'.$rij[0].'</button>';
        }
    }
    elseif ($keuze=="showf") {
        $sql = 'SHOW FIELDS FROM '.$data1.'';
        $result = $conn->query($sql);
        // execute the query
        echo'<form><table>';
        echo'<tr>';
        foreach ($result as $rij) {
        if ($rij[0]==='id') {echo'<td>';}
        else {echo'<td><input type="checkbox" class="field" value="'.$rij[0].'" checked>'.$rij[0].'</input>';}
        }
        $result = $conn->query($sql);
        echo'<tr>';
        foreach ($result as $rij) {
        if ($rij[0]==='id') {echo'<td>';}
        else {if (strstr($rij[1],'enum(')) {$keuze=substr($rij[1],5,-1);
        $a = explode(',',$keuze);echo'<td><select class="input" name="'.$rij[0].'">';foreach ($a as $x){
        echo'<option value="'.trim($x,"'").'">'.trim($x,"'").'</option>';}echo'</select>';}
        else if (strstr($rij[1],'set(')) {$keuze=substr($rij[1],5,-1);
        $a = explode(',',$keuze);echo'<td><select class="input set" name="'.$rij[0].'" multiple size="1">';foreach ($a as $x){
        echo'<option class="setkeuze" value="'.trim($x,"'").'">'.trim($x,"'").'</option>';}echo'</select>';}
        else {echo'<td><input type="text" class="input" name="'.$rij[0].'"></input>';}
        }}
        echo'</table></form><button id="show">show checked fields</button><button id="input">input</button>';
    }
    elseif ($keuze=="select") {
        if ($data2=='') {echo'<p>geen optie</p>';}
        else {$sql = 'SELECT '.$data2.' FROM '.$data1.'';
        $a = explode(',',$data2);
        $result = $conn->query($sql);
        // execute the query
        echo "<table>";
        echo "<tr class='kop'>";foreach ($a as $x){echo "<td>".$x;}
        foreach ($result as $rij) {echo "<tr>";foreach ($a as $x){
        echo "<td>".$rij[$x];
        }}
        echo "</table>";}
    }
    elseif ($keuze=="input") {
        if ($data3=='') {echo'<p>geen optie</p>';}
        else {$sql = 'INSERT INTO '.$data1.' ('.$data2.') VALUES ('.$data3.')';
        $conn->exec($sql);
        // execute the query
        echo "<p>invoer gelukt<p>";}
    }
    else {
        echo'<p>verkeerde optie</p>';
    };
    
    }

catch(PDOException $e){echo $sql . "<br>" . $e->getMessage();}

$conn = null;
