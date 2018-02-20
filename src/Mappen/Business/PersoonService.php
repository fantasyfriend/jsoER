<?php 
//src/Mappen/Business/PersoonService.php 
namespace Mappen\Business;

use Mappen\Data\PersoonDao;

class PersoonService { 
    
    public function getPersoonOverzicht($d) { 
        $persoonDAO = new PersoonDAO(); 
        $lijst = $persoonDAO->getAll($d); 
        return $lijst; 
    }
    public function registerPersoon($vnaam, $anaam, $email, $zetelnr, $ticketnr, $data_id) {
            $dao = new PersoonDAO();
            $dao->createPersoon($vnaam, $anaam, $email, $zetelnr, $ticketnr, $data_id);
    }
}