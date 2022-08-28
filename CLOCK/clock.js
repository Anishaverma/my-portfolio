// let tim=new Date().toLocaleTimeString();
// document.getElementById('box').innerHTML=tim;

// let interval= setInterval(()=>{
//     let tim=new Date().toLocaleTimeString();
// document.getElementById('box').innerHTML=tim;
// },1000)


setInterval(()=>{


    let seconds= new Date().getSeconds();
    console.log(seconds)
    let minute=new Date().getMinutes();
    console.log(minute)
    let hours= new Date().getHours();
    console.log(hours);
    
    let secdeg=seconds*6; // seconds*6 =seconds*360/60 // it insticates rotation of second hand in 1 sec
    let mindeg= minute*6 + ((seconds*360)/60)/60;
    let hourdeg= hours*30 + ((minute*360)/60)/12;
    
    document.getElementById('hourhand').style.transform=`rotate(${hourdeg}deg)`;
    document.getElementById('sechand').style.transform=`rotate(${secdeg}deg)`;
    document.getElementById('minhand').style.transform=`rotate(${mindeg}deg)`;
},1000)
