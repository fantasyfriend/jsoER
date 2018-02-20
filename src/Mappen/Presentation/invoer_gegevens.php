<!DOCTYPE HTML> 
<!-- src/Mappen/Presentation/invoer_gegevens.php --> 
<html> 
<head> 
    <meta charset=utf-8> <title>invoer gegevens</title>
    <style>
    body  {background-color:beige;color:grey;font:Arial, Helvetica, sans-serif; width:100%;margin:0;padding:0;font-size:16px;}
    .poster {width:100%;height:225px;border:1px solid black;float:left;}
    td {text-align: center}
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
    
    <?php if ($_SESSION["inlog"]=="ok" and $_SESSION["melding"]=="") {?>
    <h1>Bevestig uw ticket</h1>
    <?php } ?>
    
    <section>
        <table>
            <tr><td colspan="<?php print(($_SESSION["zetel"][$a][$b])) ?>"><img class="poster" src="images/<?php print($_SESSION["titel"][$a]); ?>.jpg">
        <?php $t=0; for ($x=0;$x<$_SESSION["rij"][$a][$b];$x++) { ?> 
            <tr>
            <?php for ($y=0;$y<$_SESSION["zetel"][$a][$b];$y++) { 
                if (($x*$_SESSION["zetel"][$a][$b])+$y==$zetel) { ?>
                <td class="green"><img src="images/chair-green.png"></td>
                <?php $t++;} else { ?>
                <td><img src="images/chair-black.png"></td>
        <?php }}} ?> 
        </table>
    </section>
    
    <section>
        <?php if ($_SESSION["inlog"]=="ok" and $_SESSION["melding"]=="") {?>
        <br><p>Welkom: <?php print($_SESSION["vnaam"]." ".$_SESSION["anaam"]); ?></p>
        <a class="blue" href="eind.php">-Druk uw ticket hier af-<img src="images/Arrow Right.png"></a>
        <?php } else { ?>
        <h1>Klantgegevens</h1>
        <p>Vul hier uw gegevens in voor uw ticket.</p>
        <?php print("<font color='red'>".$_SESSION["melding"]."</font>")?>
        <form method="get" action="invoer.php">
            <table>
            <tr><td>voornaam: <td><input type="text" name="vnaam" value="<?php print($_SESSION["vnaam"]) ?>" required>
            <tr><td>achternaam: <td><input type="text" name="anaam" value="<?php print($_SESSION["anaam"]) ?>" required>
            <tr><td>email adres: <td><input type="email" name="email" value="<?php print($_SESSION["email"]) ?>"required>
            <tr><td><td><input class="green" type="submit" name="zend" value="Bestelling bevestigen"><br><br>
            </table>
        </form>
        <?php } ?>
    </section>
            
    <footer>
    </footer>
    
</body> 
</html>  