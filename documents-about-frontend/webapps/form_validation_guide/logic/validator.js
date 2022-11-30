function Validator(options){
    var formElement = document.querySelector(options.form);
    console.log(options.rules);
}

Validator.isRequired = function(){
    return 1;
}

Validator.isEmail = function(){

}