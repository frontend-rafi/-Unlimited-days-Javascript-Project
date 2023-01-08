const option1 = document.getElementById("op1");
const option2 = document.getElementById("op2");
const option3 = document.getElementById("op3");
var Answer=0;



function generatEquation(){
    var num1= Math.floor(Math.random()*13);
    var num2= Math.floor(Math.random()*13);
    var ramndomAnswer1=  Math.floor(Math.random()*13);  
    var ramndomAnswer2=  Math.floor(Math.random()*13);  
    var switchAnswer=[];
    var allAnswers=[];
    
     Answer= num1 - num2; 

  document.getElementById("num1").innerHTML=  num1; 
 document.getElementById("num2").innerHTML=  num2;
   
 allAnswers= [Answer,ramndomAnswer1,ramndomAnswer2];
 for(i = allAnswers.length;i--;){
 switchAnswer.push(allAnswers.splice(Math.floor(Math.random()*(i+1)),1)[0]);
 }

    
    option1.innerHTML=switchAnswer[0];
    option2.innerHTML=switchAnswer[1];
    option3.innerHTML=switchAnswer[2];
    
}
generatEquation();




option1.addEventListener("click", ()=>{

    if(option1.innerHTML==Answer){
        generatEquation()
    }else{

    }
})
option2.addEventListener("click", ()=>{

    if(option2.innerHTML==Answer){
        generatEquation()
    }else{

    }
})
option3.addEventListener("click", ()=>{

    if(option3.innerHTML==Answer){
        generatEquation()
    }else{

    }
})
