var form = document.querySelector('form');

//get Data 
    var firstname =  document.getElementById('firstname');
    var lastname =  document.getElementById('lastname');
    var address = document.getElementById('address');
    var pincode = document.getElementById('pincode');
    var gender = document.getElementById('gender');
    var food =  document.getElementById('food');
    var state =  document.getElementById('state');
    var country = document.getElementById('country');

// Add Row


function insert_Row(){
      var table = document.getElementById("storeList").getElementsByTagName('tbody')[0].insertRow(0);
      var cell1 = table.insertCell(0);
         cell1.innerHTML = firstname.value;
      var cell2 = table.insertCell(1);
         cell2.innerHTML =lastname.value;
      var cell3 = table.insertCell(2);
         cell3.innerHTML =address.value;
      var cell4 = table.insertCell(3);
         cell4.innerHTML =pincode.value;
      var cell5 = table.insertCell(4);
         cell5.innerHTML = gender.value;
      var cell6 = table.insertCell(5);
         cell6.innerHTML =food.value;
      var cell7 = table.insertCell(6);
         cell7.innerHTML = state.value;
      var cell8 = table.insertCell(7);
         cell8.innerHTML = country.value;
    
      form.reset();   
      }
    