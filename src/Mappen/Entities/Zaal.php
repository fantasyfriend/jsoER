<?php 
//src/Mappen/Entities/Zaal.php
namespace Mappen\Entities;

class Zaal { 
    
    private $nr; 
    private $rij; 
    private $zetel;
      
    public function __construct($nr, $rij, $zetel) { 
        $this->nr = $nr; 
        $this->rij = $rij; 
        $this->zetel = $zetel; }
        
         
    public function getNr() { return $this->nr; } 
    public function getRij() { return $this->rij; } 
    public function getZetel() { return $this->zetel; }
}