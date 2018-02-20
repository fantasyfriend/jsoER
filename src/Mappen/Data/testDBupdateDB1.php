<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "test";

try {
    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    
    //set the PDO error mode to exception
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    //$conn = new mysqli($servername, $username, $password, $dbname);
    $sql = $_GET['update'];
    
    // Prepare statement
    $result = $conn->query($sql);

    // execute the query
    
    foreach($result as $rij){
        
        echo "<p>".$rij["id"].":".$rij["firstname"]." ".$rij["lastname"]."</p>";
    }
    
    }

        
    

    
catch(PDOException $e){echo $sql . "<br>" . $e->getMessage();}

$conn = null;
