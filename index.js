var dob= document.querySelector("#dob");
var luckyno=document.querySelector("#luckyno");
var btn=document.querySelector(".btn");
var opMsg=document.querySelector("#opMsg");
btn.addEventListener('click',checkLuckyOrNot);

function checkLuckyOrNot(){
    var bdayStr= dob.value;
    if(bdayStr!=='')
    {
        var listOfDate=  bdayStr.split('-');
      
            var day =Number(listOfDate[2]);
            var month= Number(listOfDate[1]);
           var  year= Number(listOfDate[0]);

           var sumDate= day+month+year;
         
    }

    if(sumDate%luckyno.value===0){
       opMsg.innerHTML="Hurray!!You are a lucky person! 🤩"
    }
    else{
        opMsg.innerHTML="Oops!!Your birthday is not a lucky number!😅"
    }
}