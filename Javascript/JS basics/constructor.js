function Apple( x,y,color,score ){
    this.x = x;
    this.y = y;
    this.color = color;
    this.score = score;
}

Apple.prototype = {
    eat : function(){ return this; },
    throw : function(){ return "throw the apple"; }
};

var apple1 = new Apple( 10,20,"red",200 );
var apple2 = new Apple( 20,30,"green",50 );
var apple3 = new Apple( 50,10,"pink",10 );

