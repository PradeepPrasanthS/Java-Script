var object = {
    prop: this, //points the window object
    method: function(){ return this; }
}

var array = [
    this, //points the window object
    function(){ return this; }
]

console.log(object.method.call(array));//replaces the this keyword containing window in method by an array


function global(){
    return this; //points the window object
}

global.call(object); //assigning the arguments value for global function

new global(); //window object is replaced by the blank object