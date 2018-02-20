<!DOCTYPE HTML> 
<!-- src/Mappen/Presentation/eind_keuze.php --> 
<html> 
<head> 
    <meta charset=utf-8> <title>eind keuze</title>
    <style>
    body  {background-color:beige;color:grey;font:Arial, Helvetica, sans-serif; width:100%;margin:0;padding:0;font-size:16px;}
    .poster {width:100%;height:100px;border:1px solid black;float:left;}
    .line {border:15px solid beige;width:100%;}
    .frame {background-color:white;width:573px;height:85px;border:15px solid white;padding:10px;}
    header {border-width:4px 0px;border-style:solid;border-color:green beige crimson;height:20px;margin:30px;}
    h1 {font-size:50px;font-style:italic;text-shadow:5px 5px 4px grey;color:black;}
    h2 {position:absolute;left:20px;top:-35px;font-size:45px;font-style:italic;}
    h3 {position:absolute;left:98px;top:8px;font-size:30px;font-style:italic;}
    .green {background:radial-gradient(lightgreen,beige);color:green;}
    .red {background:radial-gradient(lightpink,beige);color:crimson;}
    .blue {float:right;background:radial-gradient(skyblue,beige);color:blue;text-decoration:none;font-size:30px;font-style:italic;}
     td, th {border-width:20px 0 0 10px;border-style:solid;border-color:white;font-size:24px;}
    section {background-color:white;color:Black;box-shadow:black 10px 10px 10px 10px;width:630px;margin:50px;}
    
    /*clearfix hack*/
    .cf:before, .cf:after {content: " "; display: table;}
    .cf:after {clear:both;}
    /* IE6/7 */
    .cf {*zoom: 1;}
    </style>
</head> 
<body>

    <header> 
        <a class="blue" href="film.php"><img src="images/Arrow Left.png">-Film keuze-</a>
        <h2 class="green">Fan </h2><h3 class="red">Film </h3>    
    </header>
     
    <h1>Uw Film-Ticket</h1>
   
    <section>
        <table>
            <tr><td>Naam: <th colspan="4"><?php print($vnaam." ".$anaam); ?>
            <tr><td>Film: <td><?php print($titel); ?>
            <td><td>Duur: <td><?php print($duur); ?>
            <tr><td>Datum: <td><?php print($datum); ?>
            <td><td>tijd: <td><?php print($tijd); ?>
            <tr><td>Zaal: <td><?php print($nr); ?>
            <td><td>Zetel: <td><?php print($zitplaats); ?>
            <tr><td colspan="2">Ticket code: 
        </table>
    <iframe class="frame" src="http://www.vdabantwerpen.be/php/barcode/generate.php?code=<?php print($code); ?>">ticket code</iframe>
    </section>
    
    <footer>
        <p>Dank voor uw bestelling.</p>
    </footer>
    
</body> 
</html>