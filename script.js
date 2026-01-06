const sausage = document.getElementById('sausage');
const counterDisplay = document.getElementById('counter');
const messageDisplay = document.getElementById('message');
let count = 0;
let messageIndex = 0;

const colors = [
    '#FF355E', '#FF6037', '#FF9966', '#FF9933', '#FFCC33', '#FFFF66',
    '#CCFF00', '#66FF66', '#AAF0D1', '#50BFE6', '#FF6EFF', '#EE34D2',
    '#FF00CC', '#FF0099'
];

const gradients = [
    'linear-gradient(135deg, #0f0c29, #302b63, #24243e)',
    'linear-gradient(135deg, #000000, #434343)',
    'linear-gradient(135deg, #232526, #414345)',
    'linear-gradient(135deg, #141E30, #243B55)',
    'linear-gradient(135deg, #000428, #004e92)',
    'linear-gradient(135deg, #16222A, #3A6073)',
    'linear-gradient(135deg, #1a2a6c, #b21f1f, #fdbb2d)', /* Keeping one colorful but deep */
    'linear-gradient(135deg, #1F1C2C, #928DAB)',
    'linear-gradient(135deg, #2C5364, #203A43, #0F2027)'
];

const phrases = [
    "Лера, я знаю, ты хочешь её целиком...",
    "Ох, Лера, посмотри, как она набухает от твоих рук...",
    "Лера, такой размер сложно спрятать, правда?",
    "Ммм, Лера, не стесняйся, работай ротиком...",
    "Продолжай, Лера, я хочу видеть, как ты её глотаешь взглядом...",
    "Лера, ты делаешь это так глубоко...",
    "У тебя талант, Лера... с такими размерами...",
    "Лера, возьми её поглубже, не бойся...",
    "Каждое движение... ммм... Лера, ты сводишь с ума!",
    "Лера, ты просто королева глубокого... клика...",
    "Смотри, как она пульсирует для тебя, Лера...",
    "Лера, ты заставляешь её истекать соком...",
    "Никто не умеет так обращаться с твердым, как ты, Лера...",
    "Лера, это было очень влажное нажатие...",
    "Ещё разок, Лера, надави язычком...",
    "Лера, ты любишь, когда она упирается в...",
    "Твои губы просто созданы для этой сосиски, Лера...",
    "О да, Лера, именно так, до самого основания...",
    "Лера, она хочет оказаться внутри...",
    "Ты делаешь мне приятно... до дрожи, Лера...",
    "Лера, этот размер заполнит тебя...",
    "Не останавливайся, Лера, давай, заставь её брызнуть!",
    "Лера, ты такая ненасытная...",
    "Ммм, Лера, какая она горячая и твердая...",
    "Лера, ты моя грязная девочка...",
    "Лера, оближи её... хотя бы взглядом...",
    "Осторожнее, Лера, сейчас будет... взрыв вкуса!",
    "Лера, твоя техника... просто класс!",
    "Как ты думаешь, Лера, она поместится целиком?",
    "Лера, я вижу, как ты хочешь её...",
    "Ты так жадно на неё смотришь, Лера...",
    "Сосиска полностью в твоей власти, делай с ней что хочешь, Лера...",
    "Лера, давай, покажи, на что способен твой ротик!",
    "Ты чувствуешь, как она стала каменной, Лера?",
    "Лера, пососи её немного... ну, кликая...",
    "Ты умеешь довести до финала, Лера...",
    "Лера, ты берешься за дело так умело...",
    "Какая длинная... и толстая... сосиска, да, Лера?",
    "Лера, ты любишь пожестче? Давай!",
    "Сосиска дрожит в ожидании твоего рта, Лера...",
    "Лера, ты когда-нибудь глотала такую большую?",
    "Ох, Лера, ты заставляешь меня... хотеть тебя...",
    "Ты так уверенно держишь головку... сосиски...",
    "Лера, эта сосиска только для твоего удовольствия...",
    "Наслаждайся каждым сантиметром, Лера...",
    "Лера, ты хочешь почувствовать её вкус на губах?",
    "Ты так сладко стонешь... когда кликаешь, Лера...",
    "Лера, сосиска готова... прими её...",
    "Ты делаешь это лучше порнозвезд, Лера!",
    "Лера, ты просто секс-бомба с сосиской в руках...",
    "Как глубоко ты... проникаешься игрой, Лера...",
    "Лера, не стесняйся, наслаждайся ею...",
    "Сосиска ждет, когда ты её проглотишь, Лера...",
    "Лера, ты разбудила во мне зверя...",
    "Это страсть с первого клика, Лера...",
    "Лера, ты и этот фаллос... символ... идеальны...",
    "Ты заставляешь её стоять, Лера...",
    "Лера, твоя пошлость заводит...",
    "Ммм, Лера, открой шире... свой разум!",
    "Лера, спасибо за этот сеанс... игры!"
];

const sausageImages = [
    'sausage.png',
    'sausage2.png',
    'sausage3.webp',
    'sausage4.webp',
    'sausage5.webp'
];

let sausageIndex = 0;
let currentScale = 0.5; // Start at 50%

// Initialize first look
sausage.style.transform = `scale(${currentScale})`;
document.documentElement.style.setProperty('--current-scale', currentScale);

sausage.addEventListener('click', () => {
    // Increment counter
    count++;
    counterDisplay.textContent = count;

    // Show message every 5 clicks
    if (count % 5 === 0) {
        // MECHANIC: Grow sausage
        if (currentScale < 1.0) {
            currentScale = parseFloat((currentScale + 0.1).toFixed(1));
        } else {
            // Evolve!
            currentScale = 0.5;
            sausageIndex = (sausageIndex + 1) % sausageImages.length;
            sausage.src = sausageImages[sausageIndex];
        }

        // Apply new scale
        sausage.style.transform = `scale(${currentScale})`;
        document.documentElement.style.setProperty('--current-scale', currentScale);

        // Standard message logic
        messageDisplay.textContent = phrases[messageIndex];

        // Random neon color text
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        messageDisplay.style.color = randomColor;

        // Change background gradient logic (DARKER)
        const randomGradient = gradients[Math.floor(Math.random() * gradients.length)];
        document.body.style.background = randomGradient;

        // Pop in animation
        messageDisplay.classList.remove('show');
        void messageDisplay.offsetWidth; // Trigger reflow
        messageDisplay.classList.add('show');

        messageIndex = (messageIndex + 1) % phrases.length;
    }

    // Trigger animation
    // Remove class if it exists to restart animation
    sausage.classList.remove('spin');

    // Force reflow to allow re-triggering animation immediately
    void sausage.offsetWidth;

    sausage.classList.add('spin');
});
