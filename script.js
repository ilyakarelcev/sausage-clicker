
const sausage = document.getElementById('sausage');
const counterDisplay = document.getElementById('counter');
const messageDisplay = document.getElementById('message');
let count = 0;
let messageIndex = 0;

const phrases = [
    "Лера, ты так нежно трогаешь мою сосиску...",
    "Ох, Лера, твои руки знают, что делать с колбасой...",
    "Лера, как же ловко ты управляешься с этим размером...",
    "Ммм, Лера, сосиске нравится, когда ты так делаешь...",
    "Продолжай, Лера, сосиска начинает разогреваться...",
    "Лера, ты делаешь сосиске очень приятно...",
    "У тебя талант трогать сосиски, Лера...",
    "Лера, быстрее! Сосиска хочет больше!",
    "Каждое твое касание заставляет сосиску крутиться...",
    "Лера, ты просто мастер по обращению с длинными предметами...",
    "Смотри, как она рада твоим прикосновениям, Лера...",
    "Лера, ты заставляешь её вертеться от удовольствия...",
    "Никто не трогает сосиску так, как ты, Лера...",
    "Лера, это было очень горячее нажатие...",
    "Ещё разок, Лера, сосиске это нужно...",
    "Лера, ты знаешь толк в колбасных изделиях...",
    "Твои пальчики просто созданы для этой сосиски, Лера...",
    "О да, Лера, именно так, нажимай сильнее...",
    "Лера, сосиска в восторге от тебя...",
    "Ты делаешь сосиску счастливой, Лера...",
    "Лера, этот размер как раз для твоей руки...",
    "Не останавливайся, Лера, давай доведем счетчик до конца...",
    "Лера, ты сводишь эту сосиску с ума...",
    "Ммм, какая большая и вкусная... правда, Лера?",
    "Лера, ты моя любимая любительница сосисок..."
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

