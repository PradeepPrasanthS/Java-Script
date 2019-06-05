var select = document.getElementsByName("cars")[0];

select.onclick = function( event ){
    console.log(event);
}

select.addEventListener('click', function(event){
    console.log("select from dropdown");
});

function clickCallBack(event){
    console.log("select from dropdown 2");
};

select.addEventListener('click', clickCallBack);

select.removeEventListener('click', clickCallBack);