const newsletterSubmit = document.querySelector(".botao__footer")
const emailInput = document.querySelector(".footer-container__newsletter input[type='email']")

const verificarEmail = event => {
  event.preventDefault()
  let errorElement = emailInput.parentElement.children[1];

  if (errorElement.style.visibility === "visible") {
    errorElement.style.visibility = "hidden"
    emailInput.style.borderColor = 'transparent'
    console.log("removendo visibilidade")
  }

  if (emailInput.value === "") {
    errorElement.style.visibility = "visible"
    emailInput.style.borderColor = 'hsl(0, 100%, 63%)'
    errorElement.innerHTML = "Email cannot be empty"
  }else {
    if (emailInput.validity.valid === false) {
      errorElement.style.visibility = "visible"
      emailInput.style.borderColor = 'hsl(0, 100%, 63%)'
      errorElement.innerHTML = "Check your email please"
    }
    else {
      alert("Email cadastrado com sucesso!")
      emailInput.value = "";
    }
  }
}

newsletterSubmit.addEventListener("click", verificarEmail)