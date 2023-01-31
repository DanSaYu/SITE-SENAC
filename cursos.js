var alunos = ["Pedro", "Luiz Felipe", "Giovanni", "Arthur", "Vanderlei", "João Vitor", "Cecília", "Maria Eduarda", "João"]
var idade = [26, 16, 17, 17, 16, 16, 17, 16, 17]


var programacao = {
    img: "https://idocode.com.br/wp-content/uploads/2021/07/code-1839406_1920-1-1024x683.jpg.webp",
    titulo: "Programação",
    descrição: "Curso para quem tem interesse de ingressar na área de programação.",
    topicos: ["Tecnologia", "Design UI/UX", "Desenvolvimento Web"]
}

var administracao = {
    img: "file:///C:/Users/961589/Documents/GitHub/SITE-SENAC/img/administracao.jpg",
    titulo: "Administração",
    descrição: "Direcionado para quem quer trabalhar no setor administrativo e com finanças.",
    topicos: ["Administração", "Marketing", "Finanças e Comtabilidade"]
}

var enfermagem = {
    img: "file:///C:/Users/961589/Documents/GitHub/SITE-SENAC/img/enfermagem.jpg",
    titulo: "Enfermagem",
    descrição: "Para você que gostaria de ingressar na área da saúde.",
    topicos: ["Biosegurança", "Primeiros socorros", "Ministração de medicamentos"]
}

var thewitcher = {
    img:"file:///C:/Users/961589/Desktop/Yoru%20no%20senshi.png",
    titulo:"The Witcher 3: Wild Hunt",
    descrição:"The Witcher 3: Wild Hunt é um jogo eletrônico de RPG de ação em mundo aberto desenvolvido pela CD Projekt RED e lançado no dia 19 de maio de 2015 para as plataformas Microsoft Windows, PlayStation 4, Xbox One e em outubro de 2019 para o Nintendo Switch, sendo o terceiro título da série de jogos The Witcher.",
    generos:["Mundo aberto", "RPG eletrônico de ação"],
    desenvolvedores: ["CD Projekt RED", "CD Projekt"],
    plataformas: ["PlayStation 5", "PlayStation 4", "Nintendo Switch", "Xbox One", "Xbox Series X e Series S", "Microsoft Windows"],
    signosPersonagem:["Áries — Cahir", "Touro — Geralt", "Gêmeos — Cirila", "Câncer — Istredd", "Leão — Geralt", "Virgem — Tissaia"],
}

var cursos = [programacao, administracao, enfermagem];

cursos.forEach(curso => console.log(curso.titulo + ": " + curso.topicos))