<!DOCTYPE HTML> 
<!-- src/Mappen/Presentation/datum_keuze.php --> 
<html> 
<head> 
    <meta charset=utf-8> <title>datum keuze</title>
    <style>
    body  {background-color:beige;color:grey;font:Arial, Helvetica, sans-serif; width:100%;margin:0;padding:0;font-size:16px;}
    .poster {width:100px;height:150px;border:15px solid grey;float:left;}
    .line {border:15px solid beige;width:100%;}
    header {border-width:4px 0px;border-style:solid;border-color:green beige crimson;height:20px;margin:30px;}
    h1 {font-size:50px;font-style:italic;text-shadow:5px 5px 4px grey;color:black;}
    h2 {position:absolute;left:20px;top:-35px;font-size:45px;font-style:italic;}
    h3 {position:absolute;left:98px;top:8px;font-size:30px;font-style:italic;}
    .green {background:radial-gradient(lightgreen,beige);color:green;}
    .red {background:radial-gradient(lightpink,beige);color:crimson;}
    .blue {float:right;background:radial-gradient(skyblue,beige);color:blue;text-decoration:none;font-size:30px;font-style:italic;}
     
    /*clearfix hack*/
    .cf:before, .cf:after {content: " "; display: table;}
    .cf:after {clear:both;}
    /* IE6/7 */
    .cf {*zoom: 1;}
    </style>
</head> 
<body>

    <header> 
        
        <h2 class="green">Fan </h2><h3 class="red">Film </h3>    
    
    </header>
     
    <h1>Kies uw datum</h1>
    
    <section>
    <table>
        <tr><th>Datum?</th>  
        <?php foreach ($date as $d) { ?> 
            <tr>
            <td><a class="blue" href="film.php?datum=<?php print($d);?>"><?php print($d);?></a></td>
            </tr>
        <?php } ?>
    </table>
    </section>
            
    <footer>
   
    </footer>
    
</body> 
</html>