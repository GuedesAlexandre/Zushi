<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "test";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT
    *, aliments.nom as nom_aliment
FROM
    commande,
    avoir,
    box,
    contient,
    aliments
WHERE
    commande.panier_id = avoir.panier_id AND
    avoir.box_id = box.box_id AND
    contient.box_id = box.box_id AND
    contient.aliment_id = aliments.aliment_id
    ";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    $json = array();
    while ($row = $result->fetch_assoc()) {
        $saveur = array(
            $row["saveurs"]
        );
        $aliments =
            array(array(
                "nom" => $row["nom_aliment"],
                "quantite" => $row["quantite"],
            ));

        $data = array(
            "id" => $row["commande_id"],
            "nom" => $row["nom"],
            "pieces" => $row["pieces"],
            "prix" => $row["prix"],
            "image" => $row["image"],
            "aliments" => $aliments,
            "saveurs" => $saveur

        );
        array_push($json, $data);
    }
    json_encode($json);
} else {
    echo "0 results";
}
$conn->close();
