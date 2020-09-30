

const btn = document.querySelector(".btn");
const count = document.querySelector(".count");
const addTable = document.querySelector(".add-table");
const input = document.querySelector(".input");
const button = document.querySelector(".button");
const wishName = document.querySelector(".wish-name");
const clearWish = document.querySelector(".clear-wish");
const countWish = document.querySelector(".count-wish");
const tableRow = document.querySelector(".table-row");

btn.addEventListener("click", countData);
addTable.addEventListener("click", addTable);
button.addEventListener("click",dataSave);
clearWish.addEventListener("click", clearWishData);



function dataSave(){
  const newData = input.value;
  
  if(newData === ""){
    wishName.innerHTML = `napin aq`;
  }
  else{
    let wish;
    if(localStorage.getItem("dua") === null){
     wish = ""; 
    }
    else{
      wish = localStorage.getItem("dua");
      input.value = "";
    }
    wish = newData;
    localStorage.setItem("dua",wish);
    wishName.innerHTML = `${localStorage.getItem("dua")}`;
    input.value = "";
  }
}


var counter;


function countData(){ 

  if(localStorage.getItem("dua") === null){
    count.innerHTML = `Önce dua adı giriniz`;
  }
  else{
    if(localStorage.getItem("counter") === null){
      counter = 0;
      localStorage.setItem("counter",counter);
    }
    else if(localStorage.getItem("counter")){
          
        count.innerHTML = `Tıklanma sayısı : ${localStorage.getItem("counter")}` ;
        counter += 1 ;
        localStorage.setItem("counter",counter);
    }
    else{
      counter += 1 ;
      localStorage.setItem("counter",counter);
    }
    let say = localStorage.getItem("counter");
    count.innerHTML = `Tıklanma sayısı : ${say}`;
  }
  
}

function addTable() {


  if(localStorage.getItem("dua") !== null && localStorage.getItem("counter") !== null){
    tableRow.innerHTML += `
      <tr>
        <td>${localStorage.getItem('dua')}</td>
        <td>${localStorage.getItem('counter')}</td>
      </tr> `;
    if(localStorage.getItem('data') == null){
      
    }
  }
  else{
    wishName.innerHTML = `Boş bırakılamaz!`;
  }
  
  
  tableData(localStorage.getItem('dua'),localStorage.getItem('counter'));
  
  localStorage.removeItem("dua");
  localStorage.removeItem("counter");
  count.innerHTML = ``;
  wishName.innerHTML = ``;
  input.value = "";
    
}
function tableData(key,value) {
  let table;

  if(localStorage.getItem("table") === null){
    table = {};
  }
  else{
    table = JSON.stringify(localStorage.setItem("table"));
  }
  table.key = "value";
}
function clearWishData() {
  localStorage.clear();
  count.innerHTML = ``;
  
}

