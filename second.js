const snake = 'JaimitoTeniaUnPalitoBonito';
console.log(snake.charAt(0).toLowerCase(0) + snake.slice(1));




const camel = 'JaimitoTeniaUnPalitoBonito';
const x = camel.split(/(?=[A-Z])/).join('_').toLowerCase();
console.log(x);
