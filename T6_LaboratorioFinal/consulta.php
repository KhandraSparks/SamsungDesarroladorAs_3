<?php

// PHP files with connection details and db functions:
try {
    require_once "db_connection.php";
} catch (Exception $e) {
    echo("<b>Error " . $e->getCode() . ":</b><br><br>" . $e->getMessage());
    die;
}
require_once "db_functions.php";

try {
    $sql = "SELECT nombre, apellido1, apellido2, email, username, passwd FROM usuarios";
    $result = $conn->query($sql);
    if ($result->num_rows > 0) {
        // output data formatted in a table:
            echo '<div class="table-responsive">';
            echo '<table class="table text-nowrap table-striped table-hover">';
            echo '<thead><tr><th scope="col">Nombre completo</th><th scope="col">Email</th><th scope="col">Usuario</th></tr></thead>';
            echo '<tbody>';
            while ($row = $result->fetch_assoc()) {
                echo '<tr>';
                echo '<td>' . $row["nombre"] . ' ' . $row["apellido1"] . ' ' . $row["apellido2"] . '</td>';
                echo '<td>' . $row["email"] . '</td>';
                echo '<td>' . $row["username"] . '</td>';
                echo '</tr>';
            }
            echo '</tbody>';
            echo '</table>';
            echo '</div>';
        } else {
            echo "No hay registros en la base de datos";
        }
} catch (Exception $e) {
    $errorCode = $e->getCode();
    $errorMsg = $e->getMessage();
    echo "<b>Error " . $errorCode . ":</b><br><br>" . $errorMsg;
}

$conn->close();

?>