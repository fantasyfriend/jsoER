<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = $_GET['db'];

try {
    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    
    //set the PDO error mode to exception
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    
    $sql = $_GET['update'];
        
    // Prepare statement
    $result = $conn->query($sql);

    // execute the query
    
    echo'<form>';
    foreach ($result as $rij) {
        echo'<input type="checkbox" class="tabel" value="'.$rij[0].'">'.$rij[0].'</input>';
    }
    echo'</form>';
    
    }

catch(PDOException $e){echo $sql . "<br>" . $e->getMessage();}

$conn = null;
