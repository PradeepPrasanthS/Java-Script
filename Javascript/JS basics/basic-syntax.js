var car = {
    color : "red",
    speed : 200,
    engine : {
        size : 2.0,
        make : "bmw",
        fuel : "petrol",
        pistons : [{maker: "BMW"},{maker: "Apache"}]
    },
    drive: function(){ return "drive"}
};

var shoppinglist = [
    "Apple",
    "Orange",
    "Pear",
    function(){ return "drive"}
];

car.color = "pink";
car.engine.version = "v60";
//delete car.color;
delete car.engine;
shoppinglist[0] = "new Apple";
shoppinglist.shift();//removes first element
shoppinglist.pop();//removes last element
shoppinglist.unshift("new String", 20, 20.22, function(){});//adds elements at the start
shoppinglist.push(200,300);//adds elememt at the end
shoppinglist.splice(3,2);//deletes 2 elements at & after the index 3
shoppinglist.splice(3,0, "hi", "hey");//inserts the elements inside at index 3 

console.log( car.color );

console.log(shoppinglist["0"]);
