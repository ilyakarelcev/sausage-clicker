
const sausage = document.getElementById('sausage');
const counterDisplay = document.getElementById('counter');
const messageDisplay = document.getElementById('message');
let count = 0;
let messageIndex = 0;

const phrases = [
    "Да, Лера, кликай сосиски!",
    "У тебя хорошо получается!",
    "Ты хорошо кликаешь по сосискам!",
    "Продолжай в том же духе!",
    "Сосиски тебя любят!",
    "Мастер спорта по сосискам!",
    "Каждый клик - шаг к победе!",
    "Лера, ты супер!",
    "Еще немного!",
    "Кликай, кликай, не останавливайся!",
    "Твои пальцы созданы для этого!",
    "Восхитительная техника!",
    "Сосисочная королева!",
    "Мир должен видеть это!",
    "Вперед, только вперед!",
    "Невероятная скорость!",
    "Ты делаешь этот мир лучше... кликом!",
    "Сосиски крутятся - Лера радуется!",
    "Это просто магия!",
    "Ты - чемпион!"
];

sausage.addEventListener('click', () => {
    // Increment counter
    count++;
    counterDisplay.textContent = count;

    // Show message every 5 clicks
    if (count % 5 === 0) {
        messageDisplay.textContent = phrases[messageIndex];
        messageIndex = (messageIndex + 1) % phrases.length;
    }

    // Trigger animation
    // Remove class if it exists to restart animation
    sausage.classList.remove('spin');

    // Force reflow to allow re-triggering animation immediately
    void sausage.offsetWidth;

    sausage.classList.add('spin');
});

