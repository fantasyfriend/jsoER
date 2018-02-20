<!DOCTYPE HTML> 
<!-- src/Mappen/Presentation/info_film.php --> 
<html> 
<head> 
    <meta charset=utf-8> <title>informatie film</title>
    <style>
    body  {background-color:beige;color:grey;font:Arial, Helvetica, sans-serif; width:100%;margin:0;padding:0;font-size:20px;}
    .poster {width:300px;height:450px;border:15px solid grey;float:left;}
    header {border-width:4px 0px;border-style:solid;border-color:green beige crimson;height:20px;margin:30px;}
    h1 {font-size:50px;font-style:italic;text-shadow:5px 5px 4px grey;color:black;}
    h2 {position:absolute;left:20px;top:-35px;font-size:45px;font-style:italic;}
    h3 {position:absolute;left:98px;top:8px;font-size:30px;font-style:italic;}
    .green {background:radial-gradient(lightgreen,beige);color:green;}
    .red {background:radial-gradient(lightpink,beige);color:crimson;}
    .blue {float:right;background:radial-gradient(skyblue,beige);color:blue;text-decoration:none;font-size:30px;font-style:italic;}
    td {max-width:500px;}
    </style>
</head> 
<body>

    <header> 
        <a class="blue" href="film.php"><img src="images/Arrow Left.png">-Film keuze-</a>
        <h2 class="green">Fan </h2><h3 class="red">Film </h3>    
    
    </header>
     
    <h1>Film informatie</h1>
        
    <section>
        <img class="poster" src="images/<?php print($titel); ?>.jpg">
        <table>
        <tr><th><?php print($titel); ?>
        <tr><td>speelduur: <?php print($duur); ?>
        <tr><td>__________
        <tr><td><?php print($info); ?>
        <tr><td>__________
        </table>
    </section>
               
    <footer>
    </footer>
    
</body> 
</html>