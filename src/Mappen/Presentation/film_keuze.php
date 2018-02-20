<!DOCTYPE HTML> 
<!-- src/Mappen/Presentation/film_keuze.php --> 
<html> 
<head> 
    <meta charset=utf-8> <title>film keuze</title>
    <style>
    body  {background-color:beige;color:grey;font:Arial, Helvetica, sans-serif; width:100%;margin:0;padding:0;font-size:16px;}
    .poster {width:150px;height:225px;border:15px solid grey;float:left;}
    .line {border:15px solid beige;width:100%;}
    header {border-width:4px 0px;border-style:solid;border-color:green beige crimson;height:20px;margin:30px;}
    h1 {font-size:50px;font-style:italic;text-shadow:5px 5px 4px grey;color:black;}
    h2 {position:absolute;left:20px;top:-35px;font-size:45px;font-style:italic;}
    h3 {position:absolute;left:98px;top:8px;font-size:30px;font-style:italic;}
    .green {background:radial-gradient(lightgreen,beige);color:green;}
    .red {background:radial-gradient(lightpink,beige);color:crimson;}
    .blue {float:right;background:radial-gradient(skyblue,beige);color:blue;text-decoration:none;font-size:30px;font-style:italic;}
    .blok {display:inline-block;height:300px;width:400px;}
    
    /*clearfix hack*/
    .cf:before, .cf:after {content: " "; display: table;}
    .cf:after {clear:both;}
    /* IE6/7 */
    .cf {*zoom: 1;}
    </style>
</head> 
<body>

    <header> 
        <a class="blue" href="datum.php"><img src="images/Arrow Left.png">-Datum keuze-</a>
        <h2 class="green">Fan </h2><h3 class="red">Film </h3>    
    </header>
     
    <h1>Kies uw Film</h1>
        
    <section>
    <?php foreach ($_SESSION["a"] as $a) { ?>
        <div class="blok">
        <div class="line cf"></div>
        <img class="poster" src="images/<?php print($_SESSION["titel"][$a]); ?>.jpg">
        <table>
            <tr><th colspan="2"><?php print($_SESSION["titel"][$a]); ?><td rowspan="2">
            <a href="info.php?ida=<?php print($a);?>"><img src="images/Button Info.png"></a>
        <tr><td>speelduur: <td><?php print($_SESSION["duur"][$a]); ?>
        <tr><td>__________
        <?php foreach ($_SESSION["b"][$a] as $b) { ?>
        <tr><td>aanvang: <td><?php print($_SESSION["tijd"][$a][$b]); ?><td rowspan="2">
            <?php if (($_SESSION["datum"]!=date("Y-m-d")) or ($_SESSION["tijd"][$a][$b]>date("H:i:s",strtotime("+1 Hours")))) { ?>
            <a href="zetel.php?ida=<?php print($a);?>&idb=<?php print($b);?>"><img src="images/Button Add.png"></a>
            <?php } else { ?>
            <img src="images/Button Remove.png"></a>
            <?php } ?>
        <tr><td>zaal: <td><?php print($_SESSION["nr"][$a][$b]); ?>
        <tr><td>__________
        <?php } ?>
        </table>
        </div>
    <?php } ?>
    </section>
               
    <footer>
    </footer>
    
</body> 
</html>