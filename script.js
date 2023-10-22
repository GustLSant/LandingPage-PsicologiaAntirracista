const idContainerCardInformacoesProfessores = 'container-card-informacoes-professores'
const idNomeProfessor = 'card-informacoes-professores__nome'
const idCurriculoProfessor = 'card-informacoes-professores__curriculo'

const curriculos = {
    ellias: 'Possui graduação em Psicologia (2016) pela Universidade Federal do Recôncavo da Bahia (UFRB). Mestre em Ciências da Saúde e Biológicas (2019) pela Universidade Federal do Vale do São Francisco (PPGCSB-UNIVASF). Doutorando em Psicologia pela Universidade Federal de Sergipe (PPGPSI-UFS). Especialista em Saúde Coletiva com Habilitação em Sanitarismo (FAMAM-2016) e Especialista em Desenvolvimento Infantil (UNIVASF-2019). Atualmente é Professor e Coordenador do curso de psicologia da UNIBRAS e membro do Grupo do Grupo de Estudos e de Pesquisas em Envelhecimento Humano. Tem experiência na área de Psicologia atuando principalmente nos seguintes temas: Psicologia do Desenvolvimento, Envelhecimento e Psicologia Prisional.',
    henio: 'Psicólogo, professor e pesquisador. Graduado, Mestre e doutorando em Psicologia pela Universidade Federal de Sergipe (UFS), com período sanduíche no Programa de Pós Graduação em Psicologia da Universidade Federal da Paraíba (UFPB). Membro do Grupo de Estudo e Pesquisa sobre Sexualidade Humana (SEXUS - UFS). Tem experiência em Psicologia Clínica e Organizacional e do Trabalho; se interessa pelos temas intrínsecos a Psicologia Social, Relações Interétnicas e Sexualidade Humana.',
    ana: 'Psicóloga, graduada e mestre pela Pontifícia Universidade Católica de São Paulo e doutoranda (bolsista FUNDASP), pela mesma instituição, em Psicologia Experimental. Pesquisas realizadas na área de análise do comportamento, questões raciais, psicologia do desenvolvimento, pessoas com deficiência, idosos e avaliação de projeto. Atuação acadêmica e clínica (psicoterapia e supervisão clínica em Análise do Comportamento). Coordenadora de grupo de estudos de Conceitos Básicos de Análise do Comportamento.',
    paulo: 'Pós-doutorado pela Universidade de Paris - René Descartes. Professor associado do curso de Psicologia e da Secretaria de Educação a Distância da Universidade Federal do Rio Grande. Graduação em psicologia com formação clínica em Análise do comportamento, terapia cognitiva/comportamental, e Terapias de Terceira geração (ACT, DBT, FAP e RFT). Doutor em informática na educação na UFRGS. Especialização em psicometria (avaliação e medidas em psicologia) e em psicologia do desenvolvimento (ambas na UnB), em Educação a Distância (SENAC-RS) e em mídias na educação (UFRGS). Coordena atualmente o CePsiCo - Centro de Psicologia Contextual. Coordena a formação em Terapia de Aceitação e Compromisso do Instituto Brasiliense de Análise do Comportamento. Tenho interesse nas áreas de processos criativos, tecnologias digitais (avaliação psicológica mediada por computador e Internet, educação a distância, comunicação mediada por computador, terapia online, jogos eletrônicos e desenvolvimento infantil, virtualidade e subjetividade, comunidades virtuais, redes sociais mediadas por tecnologias digitais, serviços de saúde a distância), análise do comportamento e terapias contextuais de terceira geração (Terapia de Aceitação e Compromisso, Terapia Dialética Comportamental, Psicoterapia Funcional Analítica, Terapia Focada na Compaixão, Terapia de Ativação Comportamental, Terapia Integrativa de Casais, Mindfulness).',
    carolyne: 'Psicóloga formada pela Universidade Federal do Rio de Janeiro (UFRJ). Formação em: Terapia Cognitivo-Comportamental (Central TCC), Terapia Cognitivo-Comportamental Infanto-juvenil (Psineuroclínica) e Terapia do Esquema (Wainer Psicologia). Tem experiência de pesquisa e clínica na área de Terapia Cognitivo-Comportamental, estudando questões relativas ao racismo, saúde mental da população negra, estresse de minorias, Transtorno do estresse pós-traumático (TEPT) e Terapia do Esquema. Coordenadora e professora da formação em Terapia Cognitivo-Comportamental para Minorias (TCC Para Minorias), Professora convidada em cursos de formação e especialização em TCC e Terapia do Esquema (PUC Rio, Unisuam, CAAESM, Ação Cognitiva, Insere Psicologia).',
    damiao: 'Graduado em Direito pela Universidade de Fortaleza (2015). Graduado em Psicologia pela Universidade Federal do Ceará (2022). Mestre em Psicologia pela Universidade Federal do Ceará (2019), com mobilidade acadêmica na Universidade Federal do Rio Grande do Sul (UFRGS) e na Pontifícia Universidade Católica do Rio Grande do Sul (PUCRS). Atualmente, doutorando em Psicologia na UFRGS, com período como pesquisador visitante na Universidade do Porto. Membro do "Inclusion, Diversity, Equity, and Access Committee" da Society for the Improvement of Psychological Science (SIPS). Membro do GT "Relações Intergrupais: Preconceito e Exclusão Social" da Associação Nacional de Pesquisa e Pós-graduação em Psicologia (ANPEPP). Membro do Núcleo de Estudos e Intervenção Psicossocial à Diversidade (NEPsiD/UFRGS) e do grupo Preconceito, Vulnerabilidade e Processos Psicossociais (PVPP/PUCRS). Colaborador do Laboratório Cearense de Psicometria (LACEP/UFC), da Rede de Estudos e Afrontamentos das Pobrezas, Discriminações e Resistências (reaPODERE/Unilab) e do Grupo de Pesquisas e Intervenções sobre Violências e Produção de Subjetividades (VIESES/UFC). Tem experiência na área de interface Psicologia/Direito, ao longo dos anos vem desenvolvendo pesquisas em Psicologia Social, Psicometria e Métodos de pesquisa, principalmente relacionadas aos temas de cognição social, preconceito, discriminação e psicologia social do julgamento.',
    carlos: 'Possui Licenciatura em História pela Universidade Federal da Bahia (2006) e Bacharelado em História pela mesma universidade (2007). É mestre em História Social, também pela Universidade Federal da Bahia (2011), doutor pelo Wilberforce Institute for the study of Slavery and Emancipation (WISE) da University of Hull, Reino Unido (bolsista EUROTAST) (2021) e doutorado em andamento pela Universidade Federal da Bahia. Em 2010 foi Exchange Student no Harriet Tubman Institute for Research on the Global Migrations of African Peoples, na York University, Toronto, Canadá. Tem experiência na área de História, com ênfase em História do Brasil Colônia, atuando principalmente nos seguintes temas: escravidão, diáspora africana, história da Bahia, século XVIII. Suas principais áreas de interesse são a diáspora africana e a construção de identidades étnicas na Bahia do século XVIII. Tem pesquisado e publicado extensamente sobre a história da África, com ênfase na Costa da Mina (atuais Togo, Benim e Nigéria) nos séculos XVII-XIX. Atua como Professor Assistente na Universidade Estadual de Feira de Santana desde 2018. É um dos fundadores do site Salvador Escravista e foi presidente da Associação Brasileira de Estudos Africanos (ABEÁfrica, 2021-2022). Atualmente faz parte da gestão da ABEÁfrica (2023-2024)',
    lia: 'Doutora em Psicologia Social pela Universidade de São Paulo com estágio de Doutoramento no Centro de Novos Estudos Raciais pela Universidade da Califórnia. Professora do Departamento e do Programa de Pós-Graduação em Psicologia, da Universidade Federal de Santa Catarina (UFSC). Membro do Núcleo de Práticas Sociais, Estética e Política (https://nupra.paginas.ufsc.br/) pesquisadora de Psicologia e Relações Étnico-Raciais. Atualmente, compõe a diretoria da Associação Brasileira de Psicologia Social (ABRAPSO), no biênio (2022-2024). Autora dos livros “Entre o Encardido, o Branco e o Branquíssimo: Branquitude, Hierarquia e Poder na Cidade de São Paulo” (Veneta, 2020) e “Famílias Interraciais: tensões entre cor e amor” (EDUFBA, 2018)',
    glicia: 'Pós-graduada em Terapia Cognitivo Comportamental pela Unyleya. Psicóloga graduada pela Universidade de Brasília (UnB/2019). Licencianda em Psicologia pela UnB. Conselheira do Conselho Regional de Psicologia do DF (2022-2025). Atuou como psicóloga-estagiária no Projeto de Acolhimento Psicológico para estudantes negros/as da Universidade de Brasília de Ressignificação de Vivências Raciais (ReViRa). Atuou como psicóloga-estagiária em atendimentos com casais e famílias de baixa-renda com uso da abordagem sistêmica (2018). Possui especial interesse nos Estudos sobre relações étnico-raciais, mulheres, violência e sofrimento psíquico e suas implicações na prática clínica. Interesse nas terapias contextuais de terceira geração (Terapia de Aceitação e Compromisso - ACT, Terapia Comportamental Dialética -DBT e Psicoterapia Funcional Analítica- FAP), psicologias decoloniais, psicologia preta, atenção plena e saúde integral.',
    ueliton: 'Possui graduação em Psicologia (UniAGES - 2018). É Mestre (2020) e Doutorando em Psicologia pela Universidade Federal de Sergipe, na linha de Psicologia Cognitiva e Psicologia Social. É membro da Comissão de Direitos Humanos e do Grupo de Trabalho Psicologia e Relações Interétnicas do Conselho Regional de Psicologia de Sergipe. É pesquisador na área da Psicologia Social e do Desenvolvimento, realizando estudos sobre racismo na infância, processos de socialização étnico-racial e construção da identidade étnico-racial das crianças.',
    barbara: 'Possui graduação em Psicologia (UniAGES - 2019). Mestra (2022) e doutoranda em Psicologia pela Universidade Federal de Sergipe, na linha de Psicologia Cognitiva e Psicologia Social. É membro da Comissão de Relações Étnico-raciais do Conselho Regional de Psicologia de Sergipe. É pesquisadora do Observatório Permanente dos Preconceitos em Escolas de Sergipe.',
    vitor: 'Atualmente é mestrando na linha de Ética e Filosofia Política na Universidade Federal de Minas Gerais. Graduado em Filosofia (UFOP). Pesquisador no Núcleo de Investigações em Psicologia Baseada em Evidências. Diretor de Operações da Associação Brasileira de Psicologia Baseada em Evidências. Formação em Psicoterapia Baseada em Evidências (InPBE). Divulgador científico no YouTube e dono do canal Implicações Filosóficas. Professor de Filosofia para o ensino básico e para pós-graduação. Pesquisa as noções de "causalidade" e "evidência" presentes na Prática Baseada em Evidências e sua fundamentação ética. Tem experiência na área de filosofia, com ênfase em ética da crença, filosofia da psicologia e filosofia da ciência.'
}

function handleClickCardProfessor(_nomeCompleto, _professor){
    document.getElementById(idNomeProfessor).textContent = _nomeCompleto
    
    if(curriculos[_professor]){
        document.getElementById(idCurriculoProfessor).textContent = curriculos[_professor] //+ curriculos[_professor] + curriculos[_professor]
    }

    document.getElementById(idContainerCardInformacoesProfessores).classList.add('ativo')
}

function handleClickCardInformacoes(){
    document.getElementById(idCurriculoProfessor).textContent = ''
    document.getElementById(idCurriculoProfessor).scrollTop = 0

    document.getElementById(idContainerCardInformacoesProfessores).classList.remove('ativo')
}


function handleClickCTA(){
    window.open('https://pay.kiwify.com.br/x2R84IT', '_blank')
}


function onClickFaleConosco(){
    window.open('https://wa.me/5579991218675', '_blank')
}


function handleClickPergunta(_id){
    document.getElementById(_id).classList.toggle('ativo')
}


