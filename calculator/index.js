const Input = document.getElementById("input");
        
        
             function calculator(num){
   let screen = Input.value += num;
 
}
   
        function clearMe(){
    Input.value = "";
}
 


function answarMe(){
    let ans = Input.value;
    Input.value = eval(ans );

}
function backMe(){
    let back = Input.value.slice(0, -1);
  Input.value = back;
}


