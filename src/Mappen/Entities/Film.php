<?php 
//src/Mappen/Entities/Film.php
namespace Mappen\Entities;

class Film { 
    
    private $id; 
    private $titel; 
    private $duur;
    private $info; 
  
    public function __construct($id, $titel, $duur, $info) { 
        $this->id = $id; 
        $this->titel = $titel; 
        $this->duur = $duur;
        $this->info = $info; }
        
         
    public function getId() { return $this->id; } 
    public function getTitel() { return $this->titel; } 
    public function getDuur() { return $this->duur; }
    public function getInfo() { return $this->info; } 
        
    public function setTitel($titel) { $this->titel = $titel; } 
    public function setDuur($duur) { $this->duur = $duur; } 
    public function setInfo($info) { $this->info = $info; } 
}