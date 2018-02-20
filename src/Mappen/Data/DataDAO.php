<?php 
//src/Mappen/Data/DataDAO.php 
namespace Mappen\Data;

use PDO;
use Mappen\Entities\Data;
use Mappen\Entities\Film;
use Mappen\Entities\Zaal;

class DataDAO { 
    
    public function getAll($datum) {
        $sql = "select film.id as film_nr, titel, duur, info, nr, rij, zetel, data.id, datum, zaal_nr, tijd, film_id from film, zaal, data where film_id = film.id and zaal_nr = zaal.nr and datum = :datum order by film_id, tijd";  
        $dbh = new PDO(DBConfig::$DB_CONNSTRING, DBConfig::$DB_USERNAME); 
        $resultSet = $dbh->prepare($sql);
        $resultSet->execute(array(':datum' => $datum));
        $lijst = array(); 
        foreach ($resultSet as $rij) {
            $film = new Film($rij["film_nr"], $rij["titel"], $rij["duur"], $rij["info"]);
            $zaal = new Zaal($rij["nr"], $rij["rij"], $rij["zetel"]);
            $data = new Data($rij["id"], $rij["datum"], $rij["zaal_nr"], $rij["tijd"], $rij["film_id"]);
            array_push($lijst, $data, $zaal, $film); }
        $dbh = null; 
        //if (!$lijst) {throw new NoDataException();}
        return $lijst;
    } 
}