let diaDaSemana = Number(1)

switch (diaDaSemana) {
    case 1:
        console.log(`Hoje é Domingo`);
        break;

    case 2:
        console.log(`Hoje é Segunda`);
        break;
    case 3:
        console.log(`Hoje é Terça`);
        break;

    case 4:
        console.log(`Hoje é Quarta`);
        break;

    case 5:
        console.log(`Hoje é Quinta`);
        break;

    case 6:
        console.log(`Hoje é Sexta`);
        break;

    case 7:
        console.log(`Hoje é Sabado`);
    default:
        console.log(`Dia da semana não definido`);
        break;
}

let tiposDeAnimais = 'A1'

switch (tiposDeAnimais) {
 
    case 'A1':
        console.log(`Animais Vertebrados`);
        break;

    case 'A2':
        console.log(`Animais Invertebrados`);
        break;

    case 'A3':
        console.log(`Animais Onívoros`);
        break;

    case 'A4':
        console.log(`Animais Ovíparos`);
        break;

    case 'A5':
        console.log(`Animais Herbívoros`);
        break;

    default:
        console.log(`Nenhum tipo de animal foi definido.`);
        break;
}