const btn1 = document.querySelector(".normal-button");
const welcomeScreen = document.querySelector("#welcome-button");
const inputForm = document.querySelector("#input-form");
const phoneNumberInput = document.querySelector("#phone-number");
const deliveryCodeInput = document.querySelector("#delivery-code");
const form = document.querySelector(".check-order");
const search = document.querySelector("#search");
const noDelivery = document.querySelector(".no-delivery");
const refresh = document.querySelector("i");
const pickUp = document.querySelector(".pick-up");

// to utils
const numericInputUpdate = (input, alertMessage) => {
  input.addEventListener("input", (event) => {
    const value = event.target.value;
    if (isNaN(value)) {
      alert(alertMessage);
      phoneNumberInput.value = "";
    }
  });
};


function checkOrder() {
  btn1.addEventListener("click", (_) => {
    welcomeScreen.style.display = "none";
    inputForm.style.display = "flex";
  });

  numericInputUpdate(phoneNumberInput, "phoneAlert");
  numericInputUpdate(deliveryCodeInput, "deliveryAlert");


  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const condition = dataSource.clients.find(
      (client) =>
        client.number === parseInt(phoneNumberInput.value) &&
        client.code === parseInt(deliveryCodeInput.value)
    );

    if(!condition === true){
      noDelivery.style.display = "flex"
    }
  });
};

function refreshElements () {

  refresh.addEventListener("click", (_) => {
   // event.preventDefault();
    
      welcomeScreen.style.display = "flex";
      inputForm.style.display = "none";
      noDelivery.style.display = "none"
    

});
};

function pickUpDelivery () {
  
console.log()
}

checkOrder();
refreshElements();
pickUpDelivery();