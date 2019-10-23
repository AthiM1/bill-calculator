// object of five drinks with values as price 
var drinks ={ 
	monster	   : 12, 
	coke       : 25,
	shake      : 40,
	juice	   : 20,
	beer	   : 32


};
// function to open prompt box and alow user to enter option
function myDrink() {
  var txt1;
  var price =  0;
  var drink = prompt("Please enter your drink:", "monster,coke,shake,juice,beer,");
    if (drink =="monster" ){
    txt = drink +" R"+  drinks.monster ;
    price =  drinks.monster;
    }


    else if (drink =="coke" ){
    txt1 = drink +" R"+ drinks.coke ;

    price =drinks.coke;
    }
    else if (drink =="shake" ){
      txt1 = drink + " R"+ drinks.shake ;
      price =drinks.shake;
    }
    else if (drink =="juice" ){
      txt1 = drink +" R"+  drinks.juice;
      price =drinks.shake;
    }
    else if (drink =="beer" ){
      txt1 = drink +" R"+  drinks.beer ;
       price =drinks.beer;
    } 
   else {
    txt1 = "Order cancelled.";
   }

 alert(txt1);



  // Check browser support
  if (typeof(Storage) !== "undefined") {
    localStorage.setItem("price_drink", price);
    localStorage.setItem("drink_item", txt1);  

    // Retrieve
    document.getElementById("result").innerHTML = localStorage.getItem("drink_item");
   
  } else {
    document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
  }
 

}

// object of  five food with values as price 
var foods ={ 
	burger	: 120, 
	chicken : 158,
	fish    : 80,
	fries	: 44,
	beef	: 232


};
// function to open prompt box and alow user to enter option
function myFood() {
  var txt2;
  var price2 = 0;
  var food = prompt("Please enter your drink:", "burger,chicken,fish,fries,beef,");
    if (food =="burger" ){
      txt2 = food +" R"+  foods.burger ;
      price2 = foods.burger;
    }


    else if (food =="chicken" ){
      txt2 = food +" R"+ foods.chicken ;
      price2 = foods.chicken;
    }
    else if (food =="fish" ){
      txt2 = drink + " R"+ foods.fish ;
      price2 = foods.fish;
    }
    else if (food =="fries" ){
      txt2 = drink +" R"+  foods.fries;
      price2 = foods.fries;
    }
    else if (food =="beef" ){
      txt2 = food +" R"+  foods.beef;
      price2 = foods.beef;
    } 
   else {
   txt2 = "Order cancelled.";
   }
  alert(txt2);

    // Check browser support
    if (typeof(Storage) !== "undefined") {
      // Store
      localStorage.setItem("price_food", price2);
      localStorage.setItem("food_item", txt2);
      // Retrieve
      document.getElementById("result2").innerHTML = localStorage.getItem("food_item");
    } else {
      document.getElementById("result2").innerHTML = "Sorry, your browser does not support Web Storage...";
    }
}




// function to store prices in localStorage
function myTip() {
  var tip;
  var txt3;
  var tip = prompt("Please enter your the amount you would like to tip:", "");
  var food = localStorage.getItem("price_food");
  var food_item = localStorage.getItem("food_item");
  var drink = localStorage.getItem("price_drink");

  if (tip > 0 ){
    txt ="your tip "+ " R" + tip;
    // food stored local
    // drink stored loacal
    var bill = parseInt(food) + parseInt(drink) + parseInt(tip);
    txt3 = " your total amount is"

    alert( "Total bill is R "+ bill);

    // Check browser support
    if (typeof(Storage) !== "undefined") {
      localStorage.setItem("tip", tip);    
      localStorage.setItem("bill", bill);    
      // Retrieve
      document.getElementById("result3").innerHTML = localStorage.getItem("tip");
      document.getElementById("result4").innerHTML = localStorage.getItem("bill");
     
    } else {
      document.getElementById("result3").innerHTML = "Sorry, your browser does not support Web Storage...";
    }
  }
   
}
// this should write the values stored in the local storage to page  
document.getElementById("result").innerHTML = localStorage.getItem("drink_item");
document.getElementById("result2").innerHTML = localStorage.getItem("food_item");
document.getElementById("result3").innerHTML = localStorage.getItem("tip");
document.getElementById("result4").innerHTML = localStorage.getItem("bill");
