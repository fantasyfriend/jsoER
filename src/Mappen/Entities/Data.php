<?php 
//src/Mappen/Entities/Data.php
namespace Mappen\Entities;

class Data { 
    
    private $id; 
    private $datum; 
    private $zaal_nr;
    private $tijd; 
    private $film_id; 
    
    public function __construct($id, $datum, $zaal_nr, $tijd, $film_id) { 
        $this->id = $id; 
        $this->datum = $datum; 
        $this->zaal_nr = $zaal_nr;
        $this->tijd = $tijd; 
        $this->film_id = $film_id; }
        
         
    public function getId() { return $this->id; } 
    public function getDatum() { return $this->datum; } 
    public function getZaal_nr() { return $this->zaal_nr; }
    public function getTijd() { return $this->tijd; } 
    public function getFilm_id() { return $this->film_id; }
    
    public function setDatum($datum) { $this->datum = $datum; } 
    public function setZaal_nr($zaal_nr) { $this->zaal_nr = $zaal_nr; } 
    public function setTijd($tijd) { $this->tijd = $tijd; } 
    public function setFilm_id($film_id) { $this->film_id = $film_id; }
}