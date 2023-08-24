<?php
    // TRADUZIONE DA FILE JSON AD ARRAY PHP
    $file_json = file_get_contents('dischi.json');
    $vinyls = json_decode($file_json, true);
    
    // MANIPOLAZIONE ARRAY IN VARIABILE PHP

    // TRADUZIONE DA ARRAY PHP A FILE JSON
    header('Content-Type: application/json');
    echo json_encode($vinyls);
?>