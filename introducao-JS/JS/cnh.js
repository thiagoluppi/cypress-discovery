function verificaIdade() {
  var nome = document.querySelector('input[name=nome]')
  var idade = document.querySelector('input[name=idade]')

  if (idade.value.length == 0) {
    alert('Campo Idade não preenchido!')
    return
  }

  var idadeNum = parseInt(idade.value)

  if (idadeNum >= 18) {
    alert('Você pode tirar sua carteira de motorista!')
  } else if (idadeNum > 4) {
    alert('Você é menor de idade, melhor andar de bicicleta!')
  } else {
    alert('Melhor você andar de motoca!')
  }
}