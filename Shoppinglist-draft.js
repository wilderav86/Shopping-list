var pos = 0 //position of items array index
var items = [];


//Store user item input to 'items' array.
function storeItems() {
  if (document.getElementById('inputItems').value == "") {
    return false; //if no input, dont store empty value
  };
  items[pos] = document.getElementById('inputItems').value; 
  pos++;
  document.getElementById('inputItems').value = "";
  console.log(items);
  displayItems();
  };

//Display 'items' output 
function displayItems() {
  var itemsList = "";
  for (i = 0; i < items.length; i++) {
    itemsList += '<li>' + items[i] + '</li><br/>';
    }
  document.getElementById('itemsOutput').innerHTML = itemsList;
};

//Clears the last value in the 'items' array
function clearLastItem() {
  items.pop();
  pos -= 1;
  console.log(items);
  displayItems();
};

//clear all
function clearAll() {
  items.length = 0;
  pos = 0;
  console.log(items);
  displayItems();
};

//function focus() {
  //document.getElementById("inputItems").focus();
//};

//I shamelessly stole this cuz i couldn't figure out how to stop the enter key from refreshing page
function stopRKey(evt) {
  var evt = (evt) ? evt : ((event) ? event : null);
  var node = (evt.target) ? evt.target : ((evt.srcElement) ? evt.srcElement : null);
  if ((evt.keyCode == 13) && (node.type=="text"))  {return false;}
}

document.onkeypress = stopRKey;  // stops enter key from refreshing page using ^^^

document.getElementById('itemsOutput').addEventListener('click', function() {
  
})


//TODO

// Function that will create groups of items.

//Function that will cross items off when clicked.