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
    'linear-gradient(135deg, #1a2a6c, #b21f1f, #fdbb2d)',
    'linear-gradient(135deg, #20002c, #cbb4d4)',
    'linear-gradient(135deg, #cc2b5e, #753a88)',
    'linear-gradient(135deg, #42275a, #734b6d)',
    'linear-gradient(135deg, #614385, #516395)',
    'linear-gradient(135deg, #0f2027, #203a43, #2c5364)',
    'linear-gradient(135deg, #3a1c71, #d76d77, #ffaf7b)',
    'linear-gradient(135deg, #1f4037, #99f2c8)',
    'linear-gradient(135deg, #8360c3, #2ebf91)',
    'linear-gradient(135deg, #f7797d, #FBD786, #C6FFDD)'
];

const phrases = [
    "Лера, ты так нежно трогаешь сосиску...",
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
    "Лера, ты любительница сосисок...",
    "Лера, ты так аппетитно на неё смотришь...",
    "Осторожнее, Лера, она может брызнуть... соком!",
    "Лера, твоя техника клика просто безупречна...",
    "Как ты думаешь, Лера, размер имеет значение?",
    "Лера, я вижу, как у тебя горят глаза при виде сосиски...",
    "Ты так страстно кликаешь, Лера...",
    "Сосиска полностью в твоей власти, Лера...",
    "Лера, давай ещё быстрее!",
    "Ты чувствуешь, как она напряглась, Лера?",
    "Лера, это лучший массаж для сосиски...",
    "Ты умеешь довести сосиску до кипения, Лера...",
    "Лера, ты берешься за дело двумя руками?",
    "Какая упругая... сосиска, да, Лера?",
    "Лера, ты любишь пожестче или помягче? Кликать...",
    "Сосиска трепещет от твоих касаний, Лера...",
    "Лера, ты когда-нибудь видела такую красивую сосиску?",
    "Ох, Лера, ты заставляешь меня краснеть...",
    "Ты так уверенно держишь ритм, Лера...",
    "Лера, эта сосиска только для тебя...",
    "Наслаждайся каждым моментом с этой сосиской, Лера...",
    "Лера, ты хочешь попробовать её на вкус?",
    "Ты так сладко улыбаешься, когда кликаешь, Лера...",
    "Лера, сосиска готова отдаться тебе полностью...",
    "Ты делаешь это лучше всех, Лера!",
    "Лера, ты просто богиня сосисочного мира...",
    "Как глубоко ты чувствуешь... этот клик, Лера...",
    "Лера, не стесняйся, трогай её везде...",
    "Сосиска ждет твоих команд, Лера...",
    "Лера, ты разбудила в сосиске зверя...",
    "Это любовь с первого клика, Лера...",
    "Лера, ты и сосиска — идеальная пара...",
    "Ты заставляешь её летать, Лера...",
    "Лера, твоя страсть к сосискам заразительна...",
    "Ох, Лера, ещё чуть-чуть...",
    "Лера, спасибо, что ты с нами и с этой сосиской!"
];

sausage.addEventListener('click', () => {
    // Increment counter
    count++;
    counterDisplay.textContent = count;

    // Show message every 5 clicks
    if (count % 5 === 0) {
        messageDisplay.textContent = phrases[messageIndex];

        // Random neon color text
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        messageDisplay.style.color = randomColor;

        // Change background gradient logic
        const randomGradient = gradients[Math.floor(Math.random() * gradients.length)];
        document.body.style.background = randomGradient;
        document.body.style.backgroundSize = "400% 400%";
        document.body.style.animation = "gradientBG 15s ease infinite";

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
