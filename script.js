// script.js
document.addEventListener('DOMContentLoaded', () => {
  const ingredients = [];
  const ingredientList = document.getElementById('ingredient-list');
  const mixBtn = document.getElementById('mixBtn');
  const bakeBtn = document.getElementById('bakeBtn');
  const timerDisplay = document.getElementById('timer');
  const popup = document.getElementById('popup');
  const overlay = document.getElementById('overlay');
  const closePopup = document.getElementById('closePopup');
  const restartBtn = document.getElementById('restartBtn');

  // Add ingredient to the list
  document.querySelectorAll('.ingredient').forEach(button => {
    button.addEventListener('click', () => {
      const ingredient = button.dataset.ingredient;
      if (!ingredients.includes(ingredient)) {
        ingredients.push(ingredient);
        ingredientList.textContent = ingredients.join(' ');
        mixBtn.classList.remove('hidden');
      }
    });
  });

  // Enable bake button after mixing
  mixBtn.addEventListener('click', () => {
    mixBtn.classList.add('hidden');
    bakeBtn.classList.remove('hidden');
    showMixingAnimation();
  });

  // Start baking with a 30-second timer
  bakeBtn.addEventListener('click', () => {
    let timeLeft = 15;
    const timer = setInterval(() => {
      timerDisplay.textContent = `Baking... ${timeLeft--}s`;
      if (timeLeft < 0) {
        clearInterval(timer);
        showPopup();
      }
    }, 1000);
  });

  // Show popup notification
  function showPopup() {
    overlay.style.display = 'block';
    popup.style.display = 'block';
  }

  // Close popup
  closePopup.addEventListener('click', () => {
    overlay.style.display = 'none';
    popup.style.display = 'none';
  });

  // Restart the game
  restartBtn.addEventListener('click', () => {
    location.reload();
  });

  // Close popup when clicking anywhere outside
  overlay.addEventListener('click', () => {
    overlay.style.display = 'none';
    popup.style.display = 'none';
  });

  // Show mixing animation
  function showMixingAnimation() {
    const bowl = document.getElementById('mixing-bowl');
    bowl.innerHTML = '🥣 Mixing...';
    setTimeout(() => {
      bowl.innerHTML = '✅ Ingredients Mixed';
    }, 5000);
  }
});
