console.log("JavaScript conectado com sucesso!");

import { configurarFormulario } from "./formulario.js";
import { templateProjetos } from "./projetos.js";

const conteudo = document.getElementById("conteudo");

console.log(conteudo);

const linksProjetos = document.querySelectorAll(".link-projetos");
const linkInicio = document.getElementById("link-inicio");
const linkCadastro = document.getElementById("link-cadastro");


// =========================
// SUBMENU PROJETOS
// =========================

const botaoSubmenu = document.getElementById("submenu-botao");
const submenuProjetos = document.getElementById("submenu-projetos");

botaoSubmenu.addEventListener("click", function() {

    const aberto = submenuProjetos.classList.toggle("aberto");

    botaoSubmenu.setAttribute("aria-expanded", aberto);
});

// =========================
// MODO DE ALTO CONTRASTE
// =========================

const botaoContraste = document.getElementById("botao-contraste");

botaoContraste.addEventListener("click", function() {

    const ativado = document.body.classList.toggle("alto-contraste");

    botaoContraste.setAttribute("aria-pressed", ativado);

    if (ativado) {
        botaoContraste.textContent = "Desativar alto contraste";
    } else {
        botaoContraste.textContent = "Alto contraste";
    }
});

// =========================
// TEMPLATE INÍCIO
// =========================

const templateInicio = `
    <section>
        <h2>Sobre Nós</h2>

        <p>
            O Instituto Viver Melhor é uma organização dedicada a promover
            qualidade de vida e novas oportunidades para a comunidade por
            meio de projetos nas áreas de esportes, educação, meio ambiente
            e alimentação. Nosso objetivo é contribuir para o desenvolvimento
            social, incentivando a inclusão, o aprendizado, a sustentabilidade
            e o acesso a uma alimentação de qualidade.
        </p>

        <picture>
            <source srcset="../imagens/ong.webp" type="image/webp">
            <img
                src="../imagens/ong.jpg"
                alt="Voluntários reunidos durante uma ação comunitária do Instituto Viver Melhor"
            >
        </picture>
    </section>

    <section>
        <h2>Contato</h2>

        <p>Telefone: (14) 3842-4220</p>
        <p>Email: institutoviverm@gmail.com</p>
        <p>Endereço: Alameda das Papoulas, Número 351, Ilha Comprida - SP</p>
    </section>
`;


// =========================
// TEMPLATE CADASTRO
// =========================

const templateCadastro = `
    <form>
        <fieldset>
            <legend>Dados Pessoais</legend>

            <label for="nome">Nome completo:</label>
            <input
                id="nome"
                name="nome"
                type="text"
                required
            >

            <label for="email">Email:</label>
            <input
                id="email"
                name="email"
                type="email"
                required
            >

            <label for="nascimento">Data de Nascimento:</label>
            <input
                id="nascimento"
                name="nascimento"
                type="date"
                required
            >

            <label for="cpf">CPF:</label>
            <span id="ajuda-cpf">
                Digite no formato 000.000.000-00
            </span>

            <input
                id="cpf"
                name="cpf"
                type="text"
                pattern="[0-9]{3}\\.[0-9]{3}\\.[0-9]{3}-[0-9]{2}"
                placeholder="000.000.000-00"
                aria-describedby="ajuda-cpf"
                required
            >

            <label for="telefone">Telefone:</label>
            <span id="ajuda-telefone">
                Digite no formato (00) 00000-0000
            </span>

            <input
                id="telefone"
                name="telefone"
                type="tel"
                pattern="\\([0-9]{2}\\) [0-9]{5}-[0-9]{4}"
                placeholder="(00) 00000-0000"
                aria-describedby="ajuda-telefone"
                required
            >
        </fieldset>

        <fieldset>
            <legend>Endereço</legend>

            <label for="endereco">Endereço:</label>
            <input
                id="endereco"
                name="endereco"
                type="text"
                required
            >

            <label for="cidade">Cidade:</label>
            <input
                id="cidade"
                name="cidade"
                type="text"
                required
            >

            <label for="estado">Estado:</label>
            <input
                id="estado"
                name="estado"
                type="text"
                required
            >

            <label for="cep">CEP:</label>
            <span id="ajuda-cep">
                Digite no formato 00000-000
            </span>

            <input
                id="cep"
                name="cep"
                type="text"
                pattern="[0-9]{5}-[0-9]{3}"
                placeholder="00000-000"
                aria-describedby="ajuda-cep"
                required
            >
        </fieldset>

        <button type="submit">Cadastrar</button>
    </form>
`;


// =========================
// NAVEGAÇÃO - PROJETOS
// =========================

linksProjetos.forEach(function(link) {

    link.addEventListener("click", function(event) {
        event.preventDefault();

        conteudo.className = "container";
        conteudo.innerHTML = templateProjetos;

        const linkQueroVoluntario = document.getElementById("link-quero-voluntario");

        linkQueroVoluntario.addEventListener("click", function(event) {
            event.preventDefault();

            conteudo.className = "";
            conteudo.innerHTML = templateCadastro;

            configurarFormulario();
        });
    });

});


// =========================
// NAVEGAÇÃO - INÍCIO
// =========================

linkInicio.addEventListener("click", function(event) {
    event.preventDefault();

    conteudo.className = "";
    conteudo.innerHTML = templateInicio;
});


// =========================
// NAVEGAÇÃO - CADASTRO
// =========================

linkCadastro.addEventListener("click", function(event) {
    event.preventDefault();

    conteudo.className = "";
    conteudo.innerHTML = templateCadastro;

    configurarFormulario();
});