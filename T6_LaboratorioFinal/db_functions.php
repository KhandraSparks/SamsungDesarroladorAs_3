<?php
try {
    require_once "db_connection.php";
} catch (Exception $e) {
    echo("<b>Error " . $e->getCode() . ":</b><br><br>" . $e->getMessage());
    die;
}

// Create variables for each input sent, store vars in an array:
function setVariables() {
    $variables = array();
    foreach ($_POST as $key => $value) {
        global ${$key};
        ${$key}= $value;
        global $variables;
        $variables[$key] = $value;
    }
    // return $variables;    
}


// Check if any variable has a length of 0 and stops code execution:
function isAnyVarLength0($variables) {
    foreach ($variables as $key => $value){
        if (strlen($value)== 0){
            echo "Es obligatorio rellenar todos los campos para poder realizar el registro. Por favor, rellene todos los campos.";
            exit;
        }
    }
}


// Function to check if a value already exists in the db in a specific column:
function valueAlreadyExists($column, $value) {
    global $conn;
    try {
        $escapedValue = $conn->real_escape_string($value); //prevent malicious SQL injection
        // Query DB:
        $query = "SELECT COUNT(*) as count FROM usuarios WHERE $column = '$escapedValue'";
        $result = $conn->query($query);
        // Check if the query was successful:
        if ($result) {
            $row = $result->fetch_assoc();
            $count = $row['count'];
            // If count>0 then value exists in column:
            if ($count > 0) {
                return true;
            } else {
                return false;
            }
        }
    } catch (Exception $e) {
        $errorCode = $e->getCode();
        $errorMsg = $e->getMessage();
        echo "<b>Error " . $errorCode . ":</b><br><br>" . $errorMsg;
    }
}

// Function to add message to messages array:
function addMsg($message, $messages) {
    global $messages;
    array_push($messages, $message);
}

// Function to format messages array into <ul>:
function formatIntoList($typeOfList, $messages) {
    $listHTML = "<$typeOfList>";
    foreach($messages as $message){
        $listHTML .= "<li>" . $message . "</li>";
    }
    $listHTML .= "</$typeOfList>";
    return $listHTML;
}

// Function to display text in bootstrap danger alert:
function displayInDangerAlert($string) {
    echo '  <div class="alert alert-warning"><i class="fa-solid fa-triangle-exclamation fa-beat"></i>' . 
    $string .
    '</div>';
}

?>