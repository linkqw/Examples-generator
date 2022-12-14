let operations = ['∧', '∨', '→', '⇔'];

const getRandomElement = (arr, len) => arr[Math.floor(Math.random() * len)];
const getInversion = () => Math.random() * 2 > 1 ? '!' : ``;
const isExpression = () => Math.random() * 2 > 1;


const main = (dificult, variables) => {
    let res = '';
    for (i = 0; i < dificult; i++) {
        if (isExpression()) {
            res += `(${getInversion() + getRandomElement(variables, variables.length)}`;
            res += ` ${getRandomElement(operations, operations.length)} `;
            res += `${getInversion() + getRandomElement(variables, variables.length)})`;
        } else {
            res += getInversion() + getRandomElement(variables, variables.length);
        }

        if (i > 0 && i < dificult - 1 && isExpression()) {
            res = `(${res})`;
        }

        if (i !== dificult - 1) {
            res += ' ' + getRandomElement(operations, operations.length) + ' ';
        }
    }
    return res;
};

$('.calc').on('click', () => {
    let dificult = Number($('.dificult').val());
    let variables = $('.variables').val().replaceAll(" ", "").split(",");
    $('.res__data').val(main(dificult, variables));
});

