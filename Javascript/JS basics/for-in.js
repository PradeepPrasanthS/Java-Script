var classR = ["Pradeep", "Mukesh", "Subash"];

for(let index in classR){
    
    let variable = true;//let keyword is used to scope the variable within the braces
    
    var room = 10;//variable created in the window object globaly accessible
    
    const room1 = "Pradeep";//const keyword is also respect the scope
    
    console.log(classR[index]);
}
