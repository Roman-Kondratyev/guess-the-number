const num = Math.floor(Math.random() * 100);
alert('угадайте загаданное число');
let count = 0;
function searchNum(num) {
    for (let i = 0; i <= num; i++) {
        count++;
        let search = prompt('введите число');
        if (num == search) {
            alert(`Поздравляем, вы угадали число с ${count++} попытки`);
            break;
        } else if (search > num) {
            alert(`Попробуйте число меньше чем значение ${search}`);
        } else if (search < num) {
            alert(`Попробуйте число больше чем  ${search}`);
        }
    }
}
let result = searchNum(num);
console.log(result);