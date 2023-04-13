function register(ev) {
    console.log(ev)

    //elemento que aciona o elemento (currentTarget) e pega o pai (parentNode)
    const sectionElement = ev.currentTarget.parentNode

    // Pega o valor do username localizado como filho da sectionElement
    const username = sectionElement.children.username.value

    // Pega o valor do password localizado como filho da sectionElement
    const password = sectionElement.children.password.value

    // Pega o valor do passwordConfirmation localizado como filho da sectionElement
    const passwordConfirmation = sectionElement.children.passwordConfirmation.value
  
    if (password === passwordConfirmation) {
      alert("Usuário " + username + " registrado!")
    } else {
      alert("As senhas não conferem")
    }
  }
  
  function removeEvent() {
    button.removeEventListener("click", register)
    alert("Event Removed")
  }
  
  const button = document.getElementById("register-button")
  
  button.addEventListener("click", register)
  
  button.addEventListener("mouseover", function (ev) {
    console.log(ev)
  })