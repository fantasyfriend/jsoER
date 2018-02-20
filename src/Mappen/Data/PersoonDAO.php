<?php 
//src/Mappen/Data/PersoonDAO.php 
namespace Mappen\Data;

use PDO;
use Mappen\Entities\Persoon;

class PersoonDAO { 
    
    public function getAll($d) {
        $sql = "select id, vnaam, anaam, email, zetelnr, ticketnr, data_id from persoon where data_id  = :data_id order by zetelnr";  
        $dbh = new PDO(DBConfig::$DB_CONNSTRING, DBConfig::$DB_USERNAME); 
        $resultSet = $dbh->prepare($sql);
        $resultSet->execute(array(':data_id' => $d));
        $lijst = array(); 
        foreach ($resultSet as $rij) {
            $persoon = new Persoon($rij["id"], $rij["vnaam"], $rij["anaam"], $rij["email"], $rij["zetelnr"], $rij["ticketnr"], $rij["data_id"]);
            array_push($lijst, $persoon); }
        $dbh = null; 
        return $lijst;
    }
    public function createPersoon($vnaam, $anaam, $email, $zetelnr, $ticketnr, $data_id) { 
        $sql = "insert into persoon (vnaam, anaam, email, zetelnr, ticketnr, data_id) values (:vnaam, :anaam, :email, :zetelnr, :ticketnr, :data_id)";
        $dbh = new PDO(DBConfig::$DB_CONNSTRING, DBConfig::$DB_USERNAME); 
        $stmt = $dbh->prepare($sql); 
        $stmt->execute(array(':vnaam' => $vnaam, ':anaam' => $anaam, ':email' => $email, ':zetelnr' => $zetelnr, ':ticketnr' => $ticketnr, ':data_id' => $data_id));
        $dbh = null;
    } 
}