

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

  }

  checkOrder();