let messages = [];
function writeCards(name, event) {
    for (let i = 0; i < name.length; i++) {
        const message = `Thank you, ${name[i]}, for the wonderful ${event} gift!`;
    messages.push(message); 
}
    return messages;
}

function countDown(number) {
    while (number > 0) {
        console.log(number);
        number--;
        }
        console.log(number);
    }

countDown(10);

