<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "test";
$webname= $_GET['n'];
$code= $_GET['c'];

if (!preg_match("/^[a-zA-Z0-9]{6,12}$/i", $code)) {
    print(0);
} else {
    echo "A match was found.";
}
try {
    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    
    $sql = "SELECT webname FROM friend WHERE webname='$webname' LIMIT 1";
    $result = $conn->query($sql);

    $e='';
    foreach ($result as $rij) {$e=$rij[0];}
    if ($e){print(1);} 
    else {$sql = "INSERT INTO friend (webname,code,dayIn) VALUES ('$webname','$code',now())";
    $conn->exec($sql);print(2);}
    }

catch(PDOException $e){echo $sql . "<br>" . $e->getMessage();}

$conn = null;