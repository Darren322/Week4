function calculate() {

    // YOUR CODE GOES HERE
    var number1 = parseInt(document.getElementById("number1").value);
    var number2 = parseInt(document.getElementById("number2").value);

    var sum = 0;
    
    for(i=number1; i<= number2; i++) {
        sum += i;
    }

    console.log(sum);
    document.getElementById("result").innerHTML = sum;
    
}