
const sausage = document.getElementById('sausage');
const counterDisplay = document.getElementById('counter');
const messageDisplay = document.getElementById('message');
let count = 0;
let messageIndex = 0;

const phrases = [
    "Ммм, ты делаешь это так уверенно...",
    "Твои пальчики творят чудеса...",
    "Мне нравится, как ты касаешься...",
    "Не останавливайся, это так приятно...",
    "Ты знаешь, как доставить радость...",
    "Ох, как горячо становится...",
    "Ты всё делаешь правильно...",
    "Какой приятный ритм...",
    "Ещё, ещё, не прекращай...",
    "Ты заводишь... счетчик!",
    "У тебя очень нежные руки...",
    "Я чувствую твою энергию...",
    "Так быстро и так ловко...",
    "Продолжай, я смотрю...",
    "Ты попадаешь прямо в цель...",
    "Каждое движение — идеально...",
    "Ты умеешь обращаться с этим...",
    "Это было восхитительно...",
    "Хочу еще твоих кликов...",
    "Ты просто космос, детка..."
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

