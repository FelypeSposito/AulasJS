let produto = 100
let numero = prompt(`digite um cupom para ${produto}`)

let desconto1 = 0.05
let desconto2 = 0.10
let desconto3 = 0.15
let desconto4 = 0.20
let desconto5 = 0.25

switch (numero) {
    case 'DESC1' && 'desc1':
        alert((produto * desconto1 - produto) * -1);
        break;

    case 'DESC2' && 'desc2':
        alert((produto * desconto2 - produto) * -1);
        break;

    case 'DESC3' && 'desc3':
        alert((produto * desconto3 - produto) * -1);
        break;

    case 'DESC4' && 'desc4':
        alert((produto * desconto4 - produto) * -1);
        break;

    case 'DESC5' && 'desc5':
        alert((produto * desconto5 - produto) * -1);
        break;


    default:
        alert(`Cupom inválido`); 
        break;
} 