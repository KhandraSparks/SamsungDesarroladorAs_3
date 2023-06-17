//----------------------------------------------------------------------//
//                                                                      
// ====================== VARs, CONSTs, LETs ========================== //
// 
//----------------------------------------------------------------------//

// DOM element constants, etc.:
const passwd1 = document.getElementById("passwd1");
const passwd2 = document.getElementById("passwd2");
const passwdVisibilityToggle1 = document.getElementById("passwdVisibilityToggle1");
const passwdVisibilityToggle2 = document.getElementById("passwdVisibilityToggle2");
const passwdVisibilityToggleIcon1 = document.getElementById("passwdVisibilityToggleIcon1");
const passwdVisibilityToggleIcon2 = document.getElementById("passwdVisibilityToggleIcon2");
const submitButton = document.getElementById("submit");
const consultaButton = document.getElementById("consulta");
const resetButton = document.getElementById("reset");
const registrationForm = document.getElementById("registrationForm");
const resultModal = document.getElementById("resultModal");
var resultModalBody;
var resultModalTitle;

// HtmlCollection of all <input>s:
let inputFields=document.getElementsByTagName('input');

// Get 3 first <button>s:
let buttons=document.getElementsByTagName('button');
var mainFormButtons= Array.from(buttons).slice(0,3);

//----------------------------------------------------------------------//
//                                                                      
// ======================= EVENT LISTENERS ============================ //
// 
//----------------------------------------------------------------------//

// Toggles visibility of password input
    passwdVisibilityToggle1.addEventListener("click", ()=> {toggleVisibility(passwd1, passwdVisibilityToggleIcon1)});
    passwdVisibilityToggle2.addEventListener("click", ()=> {toggleVisibility(passwd2, passwdVisibilityToggleIcon2)});

// Listen for consulta button press and fetch result into div:
    consultaButton.addEventListener("click", (e)=> {populateModal("resultModal", "POST", "./consulta.php", null)});

// Listen for submit button press and fetch result into div:
    submitButton.addEventListener("click", (e)=> {
        e.preventDefault();
        populateModal("resultModal", "POST", "./process_form.php", registrationForm);
    });

// Listen for reset button press and remove form validation visual changes
    resetButton.addEventListener("click",()=>{
        for (const input of inputFields) {
            setValidInvalid(input, reset);
        }
    });

// Listen for input change and trigger onInput function:
    for (input of inputFields) {
        input.addEventListener("input", onInput);
    }

// Animate buttons on hover:
for (const button of mainFormButtons) {
    button.addEventListener("mouseenter", ()=>{buttonIconAnimation(button,"fa-beat","add")});
    button.addEventListener("mouseleave", ()=>{buttonIconAnimation(button,"fa-beat","remove")});
}

// Listen for modal dismissal clear form on registration success and :
    resultModal.addEventListener("hide.bs.modal", (e)=>{onModalDismissal(e)})

//----------------------------------------------------------------------//
//                                                                      
// ========================== FUNCTIONS =============================== //
// 
//----------------------------------------------------------------------//

// Populate modal from request result:
    async function populateModal (resultModalID, method, PHPFile, form){
        const resultModalBS = new bootstrap.Modal(document.getElementById(resultModalID));
        resultModalBody = document.getElementById(resultModalID+"Body");
        resultModalTitle = document.getElementById(resultModalID+"Title");

        try {
			const responseText = await fetchPHPResult(method, PHPFile, form);
            resultModalBody.innerHTML = responseText;
		} catch (error) {
			resultModalBody.innerHTML = error;
		}
        
        switch (form) {
            case null:
                resultModalTitle.innerHTML = "Usuarios registrados:";
                break;
        
            default:
                resultModalTitle.innerHTML= "Mensaje para el usuario:";
                break;
        }
        
        resultModalBS.show();
    }


    function fetchPHPResult(method, PHPFile, form) {
		return new Promise(function (resolve, reject) {
			var request = new XMLHttpRequest();
        // if "form" parameter specified on function call create formData var:
			if (form !== null) {
				var formData = new FormData(form);
			}
        // request the specific php
			request.open(method, PHPFile, true);
			request.onload = function () {
				if (request.status === 200) {
					resolve(request.responseText);
				} else {
					reject("Error: " + request.status);
				}
			};
			request.onerror = function () {
				reject("Error estableciendo comunicación con el servidor");
			};
			request.send(formData);
		});
	}

// Toggle password visibility of an <input> and adjusts eye icon:
    function toggleVisibility (element, icon){
        if (element.type === "password") {
            element.type = "text";
            icon.className = "fa-regular fa-eye";
        } else {
            element.type = "password";
            icon.className = "fa-regular fa-eye-slash";
        }
    };

// Extracts the element that triggered the event and passes it to the validateInputs function:
    function onInput(e) {
        var input = e.target;
        validateInputs(e.target);
    }
    //TODO: figure out why autocomplete doesn't create the success checkmark

// Handles input validation logic with switch cases for every type of input:
function validateInputs(input) {
    input.innerHTML = input.innerHTML;
	var errMsg = "";
	var tooltip = "";
    switch (input.id) {
		case "firstname":
        case "surname1":
        case "surname2":			
            const nombreRegEx = /^(?=.{2,30}$)[A-Za-zÀ-ü][A-Za-zÀ-ü ]*[A-Za-zÀ-ü]$/;
			errMsg = "Introduzca de 2 a 30 caracteres.";
			tooltip =
				"Debe empezar y terminar con una letra. No se admiten números y caracteres especiales.";
			validateRegEx(nombreRegEx, input, errMsg, tooltip);
			break;
		case "email":
			const emailRegEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
			if (input.value.includes("@"&&".")) {
				errMsg = "La dirección '" + input.value + "' no es válida.";
			} else {
				errMsg = "Debe incluir un signo '@' y '.'";
			}
			validateRegEx(emailRegEx, input, errMsg, tooltip);
			break;
        case "loginID":
            const loginIDRegEx = /^[a-zA-Z0-9_]{6,30}$/;
            errMsg = "Debe tener entre 6 y 30 caracteres alfanuméricos o barra baja."
            validateRegEx(loginIDRegEx, input, errMsg, tooltip);
            break;
		case "passwd1":
			const passw1RegEx = /^.{4,8}$/;
			errMsg = "Debe tener entre 4 y 8 caracteres";
			validateRegEx(passw1RegEx, input, errMsg, tooltip);
			validateInputs(passwd2);
			break;
		case "passwd2":
			if (
				input.value === passwd1.value &&
				input.value.length > 0
			) {
				setValidInvalid(input, "valid");
				addErrorMsg("", input);
			} else {
				setValidInvalid(input, "invalid");
				errMsg = "Las contraseñas no coinciden";
				addErrorMsg(errMsg, input);
			}
			break;
		default:
			break;
	}
}

// Receives RegEx and checks input is filled and valid, then applies bootstrap classes to show error/success
function validateRegEx(regExPattern, input, errMsg, tooltip) {
    let isValid = regExPattern.test(input.value);
    let isFilled = input.value.length!==0;
    if (isFilled && isValid) {
        setValidInvalid(input, "valid");
        errMsg = "";
        addErrorMsg(errMsg, input);
        input.title ="";
    }
    else {
        setValidInvalid(input, "invalid");
        addErrorMsg(errMsg, input);
        input.title = tooltip;
    }
}

// Inserts error message errMsg for <input> input:
function addErrorMsg(errMsg, input) {
	const errMsgEle = document.getElementById(input.id + "ErrMsg");
	if (errMsgEle !== null) {
		errMsgEle.innerHTML = errMsg;
	} else {
		const errMsgEle = document.createElement("p");
		errMsgEle.id = input.id + "ErrMsg";
		errMsgEle.innerHTML = errMsg;
        errMsgEle.className = "invalid-feedback position-absolute";
        input.parentElement.after(errMsgEle);
	}
}

// Sets valid or invalid bootstrap classes for an <input> element and its parent, 
// or removes them completely, depending on value of validationStatus:
function setValidInvalid(input, validationStatus){
    if (validationStatus === "valid") {
        input.classList.add("is-valid");
        input.parentElement.classList.add("is-valid");
        input.classList.remove("is-invalid");
        input.parentElement.classList.remove("is-invalid");
    }
    if (validationStatus === "invalid") {
        input.classList.add("is-invalid");
        input.parentElement.classList.add("is-invalid");
        input.classList.remove("is-valid");
        input.parentElement.classList.remove("is-valid");
    }
    if (validationStatus !== "valid" && validationStatus !== "invalid") {
        input.classList.remove("is-invalid");
        input.parentElement.classList.remove("is-invalid");
        input.classList.remove("is-valid");
        input.parentElement.classList.remove("is-valid");
    }
}

// Add animation class to button icons
function buttonIconAnimation (button, animationType, addOrRemove) {
    if(addOrRemove === "add"){button.firstChild.classList.add(animationType);}
    if(addOrRemove === "remove"){button.firstChild.classList.remove(animationType);}
}

//
function onModalDismissal(e){
    if (resultModalBody.innerHTML==="Registro completado con éxito."){
        resetButton.click();
    }
}
