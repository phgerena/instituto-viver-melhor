const projetos = [
    {
        titulo: "Voluntariado",
        categoria: "Voluntariado",
        descricao: "Faça parte do Instituto Viver Melhor como voluntário e ajude a transformar vidas. Nossos colaboradores participam de ações esportivas, oficinas de educação, projetos ambientais e campanhas de distribuição de alimentos para famílias em situação de vulnerabilidade.",
        subtitulo: "Como ser voluntário",
        detalhes: "Para participar, o interessado deve realizar seu cadastro no site e informar suas áreas de interesse. Após o cadastro, nossa equipe entrará em contato para apresentar as atividades disponíveis e orientar sobre como participar.",
        voluntariado: true
    },


    {
        titulo: "Campanhas de Doação",
        categoria: "Doações",
        descricao: "As campanhas de doação do Instituto Viver Melhor têm como objetivo arrecadar recursos para a manutenção dos projetos sociais da organização. As contribuições ajudam no desenvolvimento de atividades esportivas e educacionais, ações de preservação ambiental e distribuição de alimentos para famílias em situação de vulnerabilidade.",
        subtitulo: "Como Contribuir",
        detalhes: "Para contribuir com o Instituto Viver Melhor, o interessado pode participar de nossas campanhas de arrecadação de alimentos, materiais escolares e recursos destinados à manutenção dos projetos. As doações recebidas são direcionadas às ações sociais desenvolvidas pela organização."
    }
];

const cardsProjetos = projetos.map(function(projeto) {
    return `
        <section class="projeto">
            <h2>${projeto.titulo}</h2>

            <span class="badge">
                ${projeto.categoria}
            </span>

            <p>
                ${projeto.descricao}
            </p>

            <h3>
                ${projeto.subtitulo}
            </h3>

            <p>
                ${projeto.detalhes}
            </p>

            ${projeto.voluntariado ? `
    <a href="#" id="link-quero-voluntario">Quero ser voluntário</a>

    <input type="checkbox" id="modal-toggle">

    <label for="modal-toggle" class="botao-modal">
        Mais informações
    </label>

    <div class="modal">
        <div class="modal-conteudo">
            <h3>Voluntariado</h3>

            <p>
                Participe das ações do Instituto Viver Melhor e ajude
                no desenvolvimento dos nossos projetos sociais.
            </p>

            <label for="modal-toggle" class="fechar-modal">
                Fechar
            </label>
        </div>
    </div>
` : ""}
        </section>
    `;
}).join("");


export const templateProjetos = `
    <div class="alerta">
        <strong>Atenção:</strong> Estamos com inscrições abertas para novos voluntários.
    </div>

  ${cardsProjetos}

    <input type="checkbox" id="toast-toggle">

    <label for="toast-toggle" class="botao-toast">
        Acompanhar projetos
    </label>

    <div class="toast">
        ✓ Sucesso! Você receberá novidades sobre nossos projetos.
    </div>
`;