<?php 
//src/Mappen/Business/DataService.php 
namespace Mappen\Business;

use Mappen\Data\DataDAO;

class DataService { 
    
    public function getDataOverzicht($d) { 
        $dataDAO = new DataDAO(); 
        $lijst = $dataDAO->getAll($d); 
        return $lijst; 
    }
}