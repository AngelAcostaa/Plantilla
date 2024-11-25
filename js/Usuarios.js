$(document).ready( function () {
    $('#usuario').DataTable();
} );

const form =getElementById(registerform);

form.addEventListener("submit", function(event){
    let registerform = new FormData(form);
    
   
    
    

 let usuario = document.getElementById("usuario");
 newTransactionRow = usuario.insertRow(-1);

 let newTransactionCell = newTransactionRow.insertCell(0);
 newTransactionCell.textContent= registerform.get("name");

 newTransactionCell = newTransactionRow.insertCell(1);
 newTransactionCell.textContent=  registerform.get("email");

 newTransactionCell = newTransactionRow.insertCell(2);
 newTransactionCell.textContent= registerform.get("pass");

 newTransactionCell = newTransactionRow.insertCell(3);
 newTransactionCell.textContent= registerform.get("re_pass");

 

})
