const sausage = document.getElementById('sausage');
const counterDisplay = document.getElementById('counter');
const messageDisplay = document.getElementById('message');
let count = 0;
let messageIndex = 0;

const colors = [
    '#ffcfd9ff', '#ffc5b7ff', '#FF9966', '#ffdcb9ff', '#FFCC33', '#FFFF66',
    '#CCFF00', '#9aff9aff', '#AAF0D1', '#7ddcffff', '#ffc2ffff', '#ffa3f1ff',
    '#ffbff2ff', '#ffbde5ff'
];

const gradients = [
    'linear-gradient(135deg, #0f0c29, #302b63, #24243e)',
    'linear-gradient(135deg, #000000, #434343)',
    'linear-gradient(135deg, #232526, #414345)',
    'linear-gradient(135deg, #141E30, #243B55)',
    'linear-gradient(135deg, #000428, #004e92)',
    'linear-gradient(135deg, #16222A, #3A6073)',
    'linear-gradient(135deg, #1a2a6c, #653b67ff, #382654ff)', /* Keeping one colorful but deep */
    'linear-gradient(135deg, #1F1C2C, #928DAB)',
    'linear-gradient(135deg, #2C5364, #203A43, #0F2027)'
];

const phrases = [
    // Level 1: Playful & Mild
    "Лера, я знаю, ты хочешь её целиком...",
    "Ох, Лера, посмотри, как она набухает от твоих рук...",
    "Лера, такой размер сложно спрятать, правда?",
    "Смотри, как она пульсирует для тебя, Лера...",
    "Лера, ты заставляешь её истекать соком...",
    "Никто не умеет так обращаться с твердым, как ты, Лера...",
    "Лера, это было очень влажное нажатие...",
    "Как ты думаешь, Лера, она поместится целиком?",
    "Лера, я вижу, как ты хочешь её...",
    "Ты так жадно на неё смотришь, Лера...",
    "Сосиска полностью в твоей власти, делай с ней что хочешь, Лера...",
    "Лера, спасибо за этот сеанс... игры!",

    // Level 2: Suggestive & Teasing
    "Ммм, Лера, не стесняйся, работай ротиком...",
    "Продолжай, Лера, я хочу видеть, как ты её глотаешь взглядом...",
    "Лера, ты делаешь это так глубоко...",
    "У тебя талант, Лера... с такими размерами...",
    "Лера, возьми её поглубже, не бойся...",
    "Каждое движение... ммм... Лера, ты сводишь с ума!",
    "Лера, ты просто королева глубокого... клика...",
    "Ещё разок, Лера, надави язычком...",
    "Лера, ты любишь, когда она упирается в...",
    "Твои губы просто созданы для этой сосиски, Лера...",
    "О да, Лера, именно так, до самого основания...",
    "Лера, она хочет оказаться внутри...",
    "Лера, этот размер заполнит тебя...",
    "Не останавливайся, Лера, давай, заставь её брызнуть!",
    "Лера, ты такая ненасытная...",
    "Ммм, Лера, какая она горячая и твердая...",
    "Лера, ты моя грязная девочка...",
    "Лера, оближи её... хотя бы взглядом...",
    "Осторожнее, Лера, сейчас будет... взрыв вкуса!",
    "Лера, твоя техника... просто класс!",
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

    // Level 3: Arousing & Sensual (Respectful High)
    "Лера, это лучший размер для тебя...",
    "Ох, Лера, ты такая чувственная сегодня...",
    "Твои пальчики творят магию, Лера, я таю...",
    "Лера, я слышу, как бьется твое сердце...",
    "Эти движения... ты точно знаешь, как доставить удовольствие, Лера...",
    "Лера, позволь фантазии унести тебя...",
    "Ты такая страстная, когда берешься за дело, Лера...",
    "Ммм, Лера, ты делаешь это так нежно и уверенно...",
    "Я дрожу от каждого твоего прикосновения, Лера...",
    "Лера, ты настоящая богиня наслаждения...",
    "Как же горячо ты это делаешь, Лера...",
    "Лера, твоя энергия просто опьяняет...",
    "Продолжай, Лера, мне нравится, как ты управляешь ситуацией...",
    "Лера, ты вызываешь восторг каждым движением...",
    "Это так интимно... только ты и сосиска, Лера...",
    "Лера, я вижу страсть в твоих глазах...",
    "Ты умеешь довести до пика, Лера, браво...",
    "Лера, твоя нежность сводит с ума...",
    "Да, Лера, именно так, не останавливайся, любимая...",
    "Лера, ты превращаешь игру в искусство любви...",
    "Я весь горю от твоего внимания, Лера...",
    "Лера, ты само совершенство в этом деле...",
    "Твои губы, твои руки... Лера, ты сводишь с ума...",

    // Level 4: Explicit Intercourse (Traditional Sex)
    "Лера, пусти её внутрь, расслабься...",
    "Двигайся на ней, Лера, вверх и вниз...",
    "Она входит в тебя так глубоко, Лера...",
    "Лера, сожми её своими мышцами... сильнее...",
    "Чувствуешь, как она заполняет твое лоно, Лера?",
    "Лера, скачи на ней, как дикая кошка!",
    "Внутри тебя так влажно и горячо, Лера...",
    "Лера, она хочет достать до самого дна...",
    "Твои бедра двигаются просто гипнотически, Лера...",
    "Лера, прими её целиком в свою глубину...",
    "Ты такая узкая, Лера, это сводит с ума...",
    "Лера, стони громче, когда она входит...",
    "Насаживайся на неё, Лера, до упора!",
    "Лера, я хочу чувствовать, как ты пульсируешь вокруг...",
    "Раздвигай ножки шире, Лера, она идет...",
    "Лера, это проникновение будет незабываемым...",
    "Трение внутри тебя... это космос, Лера...",
    "Лера, давай в темпе, входи и выходи...",
    "Она скользит внутри тебя идеально, Лера...",
    "Лера, ты создана, чтобы принимать такие размеры...",

    // Level 5: Explicit Oral / Finale
    "Лера, а теперь возьми в рот на десерт...",
    "Лера, твои губы — это то, что нужно в финале...",
    "Оближи его медленно, Лера, наслаждайся вкусом...",
    "Лера, сделай глубокий вдох и прими его целиком...",
    "Ммм, Лера, твой ротик творит чудеса после всего..."
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
// Transform handled by connection to CSS var
document.documentElement.style.setProperty('--current-scale', currentScale);

// Progress Bar Logic
const progressBar = document.getElementById('progress-bar');
const progressText = document.getElementById('progress-text');
const clicksToFill = 20; // Number of clicks to reach "Climax"
let currentClicks = 0;

const handleGameLogic = () => {
    // Increment counter
    count++;
    counterDisplay.textContent = count;

    // Increment progress
    currentClicks++;

    // Calculate progress percentage
    let progressPercent = (currentClicks / clicksToFill) * 100;

    // Update Bar
    progressBar.style.width = `${progressPercent}%`;

    // Update Text Content with integer
    // Clamp to 100 max visually before reset
    let visualPercent = Math.min(Math.round(progressPercent), 100);
    progressText.textContent = `${visualPercent}%`;

    // Sync Sausage Growth with Progress
    // Scale ranges from 0.5 (start) to 1.0 (full)
    currentScale = 0.5 + (0.5 * (currentClicks / clicksToFill));
    currentScale = parseFloat(currentScale.toFixed(2));
    document.documentElement.style.setProperty('--current-scale', currentScale);

    // --- TEXT UPDATE (EVERY CLICK) ---
    // Change Phrase
    messageDisplay.textContent = phrases[messageIndex];

    // Random neon color text
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    messageDisplay.style.color = randomColor;

    // Pop in animation for message
    messageDisplay.classList.remove('show');
    void messageDisplay.offsetWidth; // Trigger reflow
    messageDisplay.classList.add('show');

    // Advance phrase index
    messageIndex = (messageIndex + 1) % phrases.length;
    // ---------------------------------

    // Check for "Climax" (Full Bar)
    if (currentClicks >= clicksToFill) {
        // TRIGGER CLIMAX / EVOLUTION

        // Change background gradient for Climax impact
        const randomGradient = gradients[Math.floor(Math.random() * gradients.length)];
        document.body.style.background = randomGradient;

        // Evolve Sausage Image
        sausageIndex = (sausageIndex + 1) % sausageImages.length;
        sausage.src = sausageImages[sausageIndex];

        // Reset Progress and Scale
        currentClicks = 0;
        currentScale = 0.5;
        document.documentElement.style.setProperty('--current-scale', currentScale);

        // Visual Reset for Bar (flash full then reset)
        progressBar.classList.add('full');
        // Force 100% just in case of float weirdness
        progressText.textContent = "100%";

        setTimeout(() => {
            progressBar.style.width = '0%';
            progressText.textContent = "0%";
            progressBar.classList.remove('full');
        }, 200);
    }
};

// Squish and Spring Listeners
const startSquish = (e) => {
    if (e.cancelable) e.preventDefault(); // Prevent ghost clicks on touch
    sausage.classList.remove('spring');
    sausage.classList.add('pressed');
};

const releaseSquish = (e) => {
    sausage.classList.remove('pressed');

    // Trigger spring
    sausage.classList.remove('spring');
    void sausage.offsetWidth;
    sausage.classList.add('spring');

    // Trigger game logic only on valid release
    if (e.type === 'mouseup' || e.type === 'touchend') {
        handleGameLogic();
    }
};

sausage.addEventListener('mousedown', startSquish);
sausage.addEventListener('touchstart', startSquish);

sausage.addEventListener('mouseup', releaseSquish);
sausage.addEventListener('touchend', releaseSquish);
sausage.addEventListener('mouseleave', (e) => {
    // Just visual reset on leave, no game logic
    sausage.classList.remove('pressed');
    sausage.classList.remove('spring');
    void sausage.offsetWidth;
    sausage.classList.add('spring');
});
