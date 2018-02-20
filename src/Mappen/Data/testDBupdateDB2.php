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
    $a = explode(',',$_GET['kl']);
    
    // Prepare statement
    $result = $conn->query($sql);

    // execute the query
    
    foreach ($result as $rij) {foreach ($a as $x){
        echo "<p>".$rij[$x]."</p>";
    }}
    }

        
    

    
catch(PDOException $e){echo $sql . "<br>" . $e->getMessage();}

$conn = null;
