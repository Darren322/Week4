// Task 1
// Add an event listner to the button (the user drags his mouse over the button)
const result = document.getElementById("result");
const button = document.getElementById("justin-btn");

button.addEventListener("mouseover",function(){
    
    result.innerHTML = "Welcome to my heart";
    result.style.backgroundColor = "pink";
})
button.addEventListener("mouseout",function(){
    
    result.innerHTML = "Don't leave me please";
    result.style.backgroundColor = "black";
    

})

// Task 2
// Add an event listner to the button (the user drags his mouse out of the button)
