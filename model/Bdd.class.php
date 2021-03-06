<?php
class Bdd
{
    public $bdd;
    /*
    *Objet de connexion à la base de données
    *Aucun paramètres
    */
    public function __construct()
    {
        $strBddServeur = "localhost";
        $strBddLogin = "root";
        $strBddPassword = "root";
        $strBddBase = "cube";
        
        //Création d'un lien à la base de données de type PDO
        try{
            $this->bdd = new PDO('mysql:host='.$strBddServeur.';dbname='.$strBddBase,$strBddLogin,$strBddPassword,array(PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES utf8'));
            $this->bdd->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_WARNING);
            $this->bdd->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
            //$_SESSION['bdd'] = $this->bdd;
        }
        catch(Exception $e){
            die('Erreur : '.$e->getMessage());
        }
    }
}
?>
