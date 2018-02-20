<?php 
//src/Mappen/Entities/Persoon.php
namespace Mappen\Entities;

class Persoon {

	private static $idMap = array();

	private $id;
        private $vnaam;
	private $anaam;
        private $email;
	private $zetelnr;
        private $ticketnr;
        private $data_id;
		
        public static function create($id, $vnaam, $anaam, $email, $zetelnr, $ticketnr, $data_id) {
		if (!isset(self::$idMap[$id])) {
			self::$idMap[$id] = new Persoon($id, $vnaam, $anaam, $email, $zetelnr, $ticketnr, $data_id);
		}
		return self::$idMap[$id];
	}
        public function __construct($id, $vnaam, $anaam, $email, $zetelnr, $ticketnr, $data_id) {
		$this->id = $id;
                $this->vnaam = $vnaam;
		$this->anaam = $anaam;
                $this->email = $email;
                $this->zetelnr = $zetelnr;
                $this->ticketnr = $ticketnr;
                $this->data_id = $data_id;
        }
        public function getId() {return $this->id;}
	public function getVnaam() {return $this->vnaam;}
	public function getAnaam() {return $this->anaam;}
        public function getEmail() {return $this->email;}
	public function getZetelnr() {return $this->zetelnr;}
        public function getTicketnr() {return $this->ticketnr;}
        public function getData_id() {return $this->data_id;}
	        
        public function setVnaam($vnaam) { $this->vnaam = $vnaam; } 
        public function setAnaam($anaam) { $this->woord = $anaam; }
        public function setEmail($email) { $this->email = $email; }
        public function setZetelnr($zetelnr) { $this->zetelnr = $zetelnr; }
        public function setTicketnr($ticketnr) { $this->ticketnr = $ticketnr; }
        public function setData_id($data_id) { $this->data_id = $data_id; }
}