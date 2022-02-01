

  const btn1 = document.querySelector(".normal-button");
  const welcomeScreen =  document.querySelector("#welcome-button");
  const inputForm =  document.querySelector("#input-form");
  const phoneNumberInput =  document.querySelector("#phone-number");
  
  let phoneNumberValue = "";


  function checkOrder(){
    btn1.addEventListener('click', _ => {
      welcomeScreen.style.display = "none";
      inputForm.style.display ="block"
    })
    
    phoneNumberInput.addEventListener("input", event => {
      const value = event.target.value;
      if(isNaN(value)){
        alert("Tylko liczby w zakresie od 0 do 9!");
        phoneNumberInput.value = ""
      }

      console.log(phoneNumberValue)
      phoneNumberValue = value;
    })

    console.log(dataSource.clients.numbers[1])

    if(phoneNumberValue === dataSource.clients.numbers[0]){
      alert('da')
    }
    

  }




  const dataSource = {};

dataSource.clients = {
  numbers: [12345678, 98765432, 45635789, 14785269],
  code: [1234, 7894, 4567, 5648],
};


  checkOrder();
