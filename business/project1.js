
                                           /* Part - 1  :   Set Items*/ 
                                                 /*  start  */       

let ind=-1;
 let itemsArray=[];    //contain name of set items
 let rateArray=[];     //contain rate of set items



 let itemName = document.querySelector("#Dinput1");
 let rate = document.querySelector("#Dinput2");
 let avlItem = document.querySelector("#Dinput3");
 let alert1 = document.querySelector("#Dinput4");



let addButton = document.querySelector("#Button1");
let popButton = document.querySelector("#Button2");
let clearButton = document.querySelector("#Button3");
// console.log("clearButton= ",clearButton);

let tbody1= document.querySelector(".tbody1");
 console.log("tbody1 = ",tbody1)

function searching(str){
   let i;
   for( i=0;i<itemsArray.length;i++)
   {
      if(itemsArray[i]==str)
         break;
      else
        continue;
   }
   return i;
}

addButton.addEventListener("click",()=>{

   if(itemName.value=="" || rate.value=="" || avlItem.value=="" || alert1.value==""  ){
      // console.log(itemName.value);
      alert("Warnin: You are doing any mistake !")
   }
   else{
      str=itemName.value;
     let index = searching(str);

      if(itemsArray[index]==str){
         
         alert("Item already avaliable in list !");

      }
      else{
      ind++;
     let tr= document.createElement("tr");
     let td1 = document.createElement("td");
     let td2 = document.createElement("td");
     let td3 = document.createElement("td");
     let td4 = document.createElement("td");
     td1.innerText = itemName.value;
     td2.innerText = rate.value;
     td3.innerText = avlItem.value;
     td4.innerText = alert1.value;

     tbody1.append(tr);
     tr.append(td1);
     tr.append(td2);
     tr.append(td3);
     tr.append(td4);

     itemsArray[ind]=itemName.value;
     rateArray[ind]=rate.value;
   //   console.log(itemsArray);
   //   console.log(rateArray);

     let select1 = document.querySelector(".select");
     //console.log("select=" ,select1);
     let option1=document.createElement("option");
     option1.value=itemsArray[ind];
     option1.innerText=itemsArray[ind];
     select1.append(option1);

     
     
     {
     itemName.value="";
     rate.value="";
     avlItem.value="";
     alert1.value="";
     }
   }
   }
});


popButton.addEventListener("click",()=>{
   
let tr1 = document.querySelectorAll(".tbody1 tr")
   if(ind>=0){
   tr1[(tr1.length)-1].remove();

   ind--;
   itemsArray.pop();
   rateArray.pop();
   // console.log(itemsArray);
   // console.log(rateArray);

   let option = document.querySelectorAll(".select option");
   option[(option.length)-1].remove();

   }else{
      alert("Items are not available !");
   }
});

clearButton.addEventListener("click",()=>{
 
   let rows = document.querySelectorAll(".tbody1 tr");
   // console.log(rows)
   let option = document.querySelectorAll(".select option");

if(rows[0])
{
   for(let i=0;i<rows.length;i++)
   {
      rows[i].remove();
      itemsArray.pop();
      rateArray.pop();
      ind--;
      console.log(itemsArray);
      console.log(rateArray);

      option[i].remove();

   }
}
   else{
      alert("Items are not available !");
   }

});

                                                            /* Part - 1  :   Set Items*/ 
                                                                    /*  End  */   
                                                 
                                                 

/*-------------------------------------------------------------------------------------------------------------------------------------------------------------*/
                                                           /* Part - 2  :   Upload scanner*/ 
                                                                     /*  End  */    
let nav1 = document.querySelector("#nav1");
let box1 = document.querySelector(".box1");

let nav4 = document.querySelector("#nav4 img");

let upload = document.querySelector(".changeImage");
let inputFile = document.querySelector("#file")

console.log(inputFile);

nav1.addEventListener("click",()=>{
   box1.style.transform= "translate(35vw)";
   nav1.addEventListener("click",()=>{
      box1.style.transform= "translate(0px)";
   
   });
});


nav4.addEventListener("click",()=>{
  
  upload.style.display="flex";

  //nav4.style.width= "150px";
  //nav4.style.height= "200px";
  //nav4.style.borderRadius = "0%";
  //upload.style.transform= "translate(-130px)";
  nav4.addEventListener("click",()=>{
   // console.log("Body is clicked")
  // nav4.style.width= "200px";
  // nav4.style.height= "200px";
   //nav4.style.borderRadius = "50%";
  // upload.style.transform= "translate(0px)";
   upload.style.display="none";

});
});


inputFile.onchange = function(){
   nav4.src = URL.createObjectURL(inputFile.files[0]);
  }


                                             /* Part - 2  :   Upload Image*/ 
                                                     /*  End  */    


/*---------------------------------------------------------------------------------------------------------------------------------------------------------*/
                                              /* Part - 3  :   Create bill*/ 
                                                   /*  start  */    

 let totalArray=[];
let select = document.querySelector("#shiva");
console.log("select = ",select);

let addB2 = document.querySelector(".add1");
console.log(addB2);
let removeB2 = document.querySelector(".remove1");
let clearB2 = document.querySelector(".clear1");

                                            //for add button in create bill
 let billItemsArray=[];
 let billIndex=-1;

addB2.addEventListener("click",()=>{
   
   
   let select = document.querySelector(".select");
   let i = select.selectedIndex;
   let tbody2=document.querySelector(".tbody2");
   let NoI = document.querySelector(".NoI");

   if(i==-1 || NoI.value==""){
      alert("You are doing some mistake !")
   }
   else 
   {
   let tr = document.createElement("tr");
   let td1 = document.createElement("td");
   let td2 = document.createElement("td");
   let td3 = document.createElement("td");
   let td4 = document.createElement("td");

   td1.innerText = itemsArray[i];
   {
   billIndex++;
   billItemsArray[billIndex]=itemsArray[i];
   }
   td2.innerText = rateArray[i];
   td3.innerText = NoI.value;
   td4.innerText = Number(td2.innerText) * Number(td3.innerText);
   totalArray.push(Number(td4.innerText));

   tbody2.append(tr);
   tr.append(td1);
   tr.append(td2);
   tr.append(td3);
   tr.append(td4);
   }
});

                                           //for search button in create bill

let searchButton = document.querySelector(".searchButton");
// console.log("search button =",searchButton);
let search = document.querySelector(".search");



searchButton.addEventListener("click",()=>{
    let str = search.value;
   //  console.log("search value : " ,str);
   let index=searching(str);
   // console.log("insex value : " ,index);    
   if(itemsArray[index]==str)
   {
      select.selectedIndex=index;
   }
   else{
      alert("This Item is not avaliable in the list!")
   }

});

                                           //for remove button in create bill

removeB2.addEventListener("click",()=>{
    
   let select = document.querySelector(".select");
   let i = select.selectedIndex;
   let j;
   let str = itemsArray[i];
   body2 = document.querySelectorAll(".tbody2 tr");
   console.log(body2);
   for(j=0;j<billItemsArray.length;j++)
      if(billItemsArray[j]==str)
         break;

   if(billItemsArray[j]==str)
   {
      body2[j].remove();
      billItemsArray.splice(j,1);
      totalArray.splice(j,1);
      billIndex--;
   }
   else{
      alert("Items not avaliable!")
   }

});


clearB2.addEventListener("click",()=>{
   body2 = document.querySelectorAll(".tbody2 tr");
   for(let i=0;i<body2.length;i++)
   {
      body2[i].remove();
      billItemsArray.pop();
      totalArray.pop();
   }
   billIndex=-1;
})

let createBill = document.querySelector(".createBill");
let flex1 = document.querySelector(".flex");
createBill.addEventListener("click",()=>{
   // console.log("create bill");
    flex1.style.position="absolute";
    flex1.style.display="flex";
    createBill.style.transform="translateX(350px)";
    createBill.innerText = "Close Bill";
    createBill.style.backgroundColor = "blue";
    createBill.style.borderColor = "black";

    createBill.addEventListener("click",()=>{
      flex1.style.position="static";
      flex1.style.display="none";
    createBill.style.transform="translateX(0)";
    createBill.innerText = "Create Bill";
    createBill.style.backgroundColor= "black";
    createBill.style.borderColor = "white";
    })
})