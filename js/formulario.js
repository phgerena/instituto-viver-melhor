export function configurarFormulario() {
    const formulario = document.querySelector("form");
    const campoNome = document.getElementById("nome");
    const cadastroSalvo = localStorage.getItem("cadastro");

   if (cadastroSalvo) {
    const dadosSalvos = JSON.parse(cadastroSalvo);

    console.log(dadosSalvos);
    document.getElementById("nome").value = dadosSalvos.nome;
    document.getElementById("email").value = dadosSalvos.email;
    document.getElementById("nascimento").value = dadosSalvos.nascimento;
    document.getElementById("cpf").value = dadosSalvos.cpf;
    document.getElementById("telefone").value = dadosSalvos.telefone;
    document.getElementById("endereco").value = dadosSalvos.endereco;
    document.getElementById("cidade").value = dadosSalvos.cidade;
    document.getElementById("estado").value = dadosSalvos.estado;
    document.getElementById("cep").value = dadosSalvos.cep;
   }

 formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    if (!formulario.checkValidity()) {
    formulario.reportValidity();
    return;
    }

    const dadosCadastro = {
        nome: document.getElementById("nome").value,
        email: document.getElementById("email").value,
        nascimento: document.getElementById("nascimento").value,
        cpf: document.getElementById("cpf").value,
        telefone: document.getElementById("telefone").value,
        endereco: document.getElementById("endereco").value,
        cidade: document.getElementById("cidade").value,
        estado: document.getElementById("estado").value,
        cep: document.getElementById("cep").value
    };

    localStorage.setItem("cadastro", JSON.stringify(dadosCadastro));

    Swal.fire({
    title: "Cadastro realizado!",
    text: "Seus dados foram salvos com sucesso.",
    icon: "success"
    });

    
    console.log(dadosCadastro);
 });

    campoNome.addEventListener("input", function() {
        console.log(campoNome.value);
    });
}