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
        
    // use exec() because no results are returned
    $conn->exec($sql);
    
    echo "<p>Database created successfully, last id=".$conn->lastInsertId()."</p>";
    }

catch(PDOException $e){echo $sql . "<br>" . $e->getMessage();}

$conn = null;
