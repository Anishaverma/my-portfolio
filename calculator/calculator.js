

// console.log(btn)

// result function
let result=()=>{
    // let btn=document.getElementById('btn');

    let billamount=document.getElementById('billamount').value;
    let bill=parseInt(billamount);
    
    // console.log(billamount.value);
    // console.log("billamount is :" + bill);
    let tip=document.getElementById('tip').value;
    let tip1=parseInt(tip);
    console.log(tip);
    // window.preventDefault();
    if(bill=="" || tip==""){
        let output=document.getElementById('result');
        let resultdiv=document.getElementById('resultdiv');
        output.innerHTML="Please enter the valid amount first and then Try again";
        resultdiv.style.display="block";
    }
    else{

        let output=document.getElementById('result');
          let resultdiv=document.getElementById('resultdiv');
          console.log(bill, tip);
           let result1=(bill+((bill*tip1)/100)) ;
      
           console.log(result1);
           output.innerHTML="Total amount is :" + result1;
           resultdiv.style.display="block";
           
    }
   

}

// main logic
// result();