const sausage = document.getElementById('sausage');
const counterDisplay = document.getElementById('counter');
let count = 0;

sausage.addEventListener('click', () => {
    // Increment counter
    count++;
    counterDisplay.textContent = count;

    // Trigger animation
    // Remove class if it exists to restart animation
    sausage.classList.remove('spin');

    // Force reflow to allow re-triggering animation immediately
    void sausage.offsetWidth;

    sausage.classList.add('spin');
});
