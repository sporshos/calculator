function Delete(){
    document.getElementById("MyResult").value = ""
}

function calculator(NewValue){
    document.getElementById("MyResult").value += NewValue;
}

function Answer(){
    var a = document.getElementById("MyResult").value;
    var b = eval(a);
    document.getElementById("MyResult").value = b;
}
document.getElementById("MyResult").addEventListener("keydown", (event) => {
    if (event.key === 'Enter') {
        var a = document.getElementById("MyResult").value;
        var b = eval(a);
        document.getElementById("MyResult").value = b;
    }
});

