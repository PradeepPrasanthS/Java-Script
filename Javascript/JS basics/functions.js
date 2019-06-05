function name(fullname){
    
    return fullname.firstname + " " + fullname.lastname;
}

console.log(
    name({firstname:"Pradeep", lastname:"Prasanth"})
);

function fname(){
    
    var fullname = "Pradeep Prasanth";
    
    function concat(name){
        return "Mr. " + name;
    }
    
    return concat(fullname);
}

console.log(
    fname()
);

function lname(fullname){
    return fullname();
}

console.log(
    lname(function(){return "Pradeep"})
);

console.log(myName,printname());//function can be used before it is being initiated but in case of variables we cannot do so.

var myName = "Pradeep";

function printname(){
    return "Pradeep";
}