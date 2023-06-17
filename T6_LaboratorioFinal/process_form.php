<?php

// PHP files with connection details and db functions:
try {
    require_once "db_connection.php";
} catch (Exception $e) {
    echo("<b>Error " . $e->getCode() . ":</b><br><br>" . $e->getMessage());
    die;
}

require_once "db_functions.php";

if($_POST) {
    global $conn;   
// Start session to store error/success in session var
    session_start();

// Turn all inputs posted into variables and set $variables array:
    setVariables();

// Check if any of the inputs was empty, throw error and stop execution:
    isAnyVarLength0($variables);

// Create array to store error messages:
    $messages = array();

// Validate inputs:
    $isFirstnameValid = (preg_match('/^.{1,30}$/', $firstname)) ? true : false;
    $isSurname1Valid = (preg_match('/^.{1,30}$/', $surname1)) ? true : false;
    $isSurname2Valid = (preg_match('/^.{1,30}$/', $surname2)) ? true : false;
    $sanitizedEmail = (filter_var($email, FILTER_SANITIZE_EMAIL));
    $isEmailValid = (filter_var($sanitizedEmail, FILTER_VALIDATE_EMAIL)) ? true : false;
    if (valueAlreadyExists("email", $sanitizedEmail)) {
        $isEmailAvailable = false;
        addMsg("El email introducido ya está en la base de datos.", $messages);
    } else {
        $isEmailAvailable = true;
    }
    $isLoginIDValid = (preg_match('/^[a-zA-Z0-9_]{6,30}$/', $loginID)) ? true : false;
    if (valueAlreadyExists("username", $loginID)) {
        $isLoginIDAvailable = false;
        addMsg("El usuario introducido ya está en la base de datos.", $messages);
    } else {
        $isLoginIDAvailable = true;
    }
    $isPasswdValid = (preg_match('/^.{4,8}$/', $passwd1)) ? true : false;

// Check if all input valid at the same time
    if ($isFirstnameValid && $isSurname1Valid && $isSurname2Valid && $isEmailValid && $isEmailAvailable && $isLoginIDValid && $isLoginIDAvailable && $isPasswdValid) {
        $inputsValid = true;
    } else {
        $inputsValid = false;
        echo formatIntoList("ul", $messages);
        echo displayInDangerAlert("Compruebe que ha introducido los datos correctamente.");
        exit;
    }

    // If valid then insert form values into db
    if ($inputsValid === true) {
        try {
            $sql = "INSERT INTO usuarios(nombre, apellido1, apellido2, email, username, passwd)
        VALUES ('$firstname', '$surname1', '$surname2', '$email', '$loginID',  '$passwd1')";
            // Check if successfully inserted
            if ($conn->query($sql) === true) {
                echo "Registro completado con éxito.";
                exit();
            } else {
                echo "Error, por favor inténtelo de nuevo.";
            }
        } catch (Exception $e) {
            $errorCode = $e->getCode();
            $errorMsg = $e->getMessage();
            echo "<b>Error " . $errorCode . ":</b><br><br>" . $errorMsg;
        }
    }

    $conn->close();
}
?>