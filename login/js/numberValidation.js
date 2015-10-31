var specialKeys = new Array();  
  
    specialKeys.push(8); //Backspace  
  
    function numericOnly(elementRef) {  
  
    var keyCodeEntered = (event.which) ? event.which : (window.event.keyCode) ?    window.event.keyCode : -1;  
  
    if ((keyCodeEntered >= 48) && (keyCodeEntered <= 57)) {  
  
    return true;  
  
}  
  
// '.' decimal point...  
  
else if (keyCodeEntered == 46) {  
  
// Allow only 1 decimal point ('.')...  
  
if ((elementRef.value) && (elementRef.value.indexOf('.') >= 0))  
  
    return false;  
  
else  
  
    return true;  
  
}  
  
    return false;  
  
}  