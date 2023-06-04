<?php
if($_POST) {
    $name = $_POST["name"];
    $surname = $_POST["surname"];
    $email = $_POST["email"];
    
    // Connection variables:
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "cursosql";
    
    // Create connection:
    $conn = new mysqli($servername, $username, $password, $dbname);
    
    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }
    
    // Insert form values into db
    $sql = "INSERT INTO usuarios(nombre, apellido, email)
    VALUES ('$name', '$surname', '$email')";

    // Check if successfully inserted
    if ($conn->query($sql) === TRUE) {
        echo "New record created successfully";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }

    $conn->close();

}
?>