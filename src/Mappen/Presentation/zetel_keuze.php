<!DOCTYPE HTML> 
<!-- src/Mappen/Presentation/zetel_keuze.php --> 
<html> 
<head> 
    <meta charset=utf-8> <title>zetel keuze</title>
    <style>
    body  {background-color:beige;color:grey;font:Arial, Helvetica, sans-serif; width:100%;margin:0;padding:0;font-size:16px;}
    .poster {width:100%;height:225px;border:0 solid black;float:left;margin:0 0 40px 0;}
    header {border-width:4px 0px;border-style:solid;border-color:green beige crimson;height:20px;margin:30px;}
    h1 {font-size:50px;font-style:italic;text-shadow:5px 5px 4px grey;color:black;}
    h2 {position:absolute;left:20px;top:-35px;font-size:45px;font-style:italic;}
    h3 {position:absolute;left:98px;top:8px;font-size:30px;font-style:italic;}
    .green {background:radial-gradient(lightgreen,beige);color:green;}
    .red {background:radial-gradient(lightpink,beige);color:crimson;}
    .blue {float:right;background:radial-gradient(skyblue,beige);color:blue;text-decoration:none;font-size:30px;font-style:italic;}
    </style>
</head> 
<body>

    <header> 
        <a class="blue" href="film.php"><img src="images/Arrow Left.png">-Film keuze-</a>
        <h2 class="green">Fan </h2><h3 class="red">Film </h3>    
    </header>
     
    <h1>Kies uw zetel</h1>
            
    <section>
        <table>
            <tr><td><td colspan="<?php print(($_SESSION["zetel"][$a][$b])) ?>">
                <img class="poster" src="images/<?php print($_SESSION["titel"][$a]); ?>.jpg">
        <?php $t=0; for ($x=0;$x<$_SESSION["rij"][$a][$b];$x++) { ?> 
            <tr><td>zetel
            <?php for ($y=0;$y<$_SESSION["zetel"][$a][$b];$y++) { 
                if (($x*$_SESSION["zetel"][$a][$b])+$y==$bezet[$t]) { ?>
                <td class="red"><?php print(chr($x+65).$y); ?>
                    <img src="images/Button Remove.png"></td>
                <?php $t++;} else { ?>
                <td class="green"><?php print(chr($x+65).$y); ?>
                    <a href="invoer.php?zetel=<?php print(($x*$_SESSION["zetel"][$a][$b])+$y);?>">
                    <img src="images/Button Add.png"></a></td>
        <?php }}} ?> 
        </table>
    </section>
            
    <footer>
    </footer>
    
</body> 
</html>