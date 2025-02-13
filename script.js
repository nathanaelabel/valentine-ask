// script.js

// Handle button click events
function selectOption(option) {
    if (option === 'yes') {
        showLoading();
        // Hide the question text
        document.getElementById('question').style.display = 'none';
        // Display cat-heart.gif, trigger confetti, and show message after a short delay
        setTimeout(function() {
            displayCatHeart();
            triggerConfetti();
            showMessage();
        }, 1000);
    } else if (option === 'no') {
        // Make the "No" button play hard to get
        var noButton = document.getElementById('no-button');
        noButton.innerText = 'You sure?';
        // Move the "No" button to a random position
        noButton.style.position = 'absolute';
        noButton.style.left = Math.random() * (window.innerWidth - 100) + 'px';
        noButton.style.top = Math.random() * (window.innerHeight - 50) + 'px';
        // Increase font size of "Yes" button
        var yesButton = document.getElementById('yes-button');
        var currentFontSize = window.getComputedStyle(yesButton).getPropertyValue('font-size');
        var newSize = parseFloat(currentFontSize) * 1.2;
        yesButton.style.fontSize = newSize + 'px';
    }
}

function showLoading() {
    var loading = document.createElement('div');
    loading.id = 'loading';
    loading.innerText = 'Loading...';
    document.getElementById('image-container').appendChild(loading);
}

// Display the lovely heart cat
function displayCatHeart() {
    // Clear existing content in the image container
    document.getElementById('image-container').innerHTML = '';
    // Get the container where the image will be displayed
    var imageContainer = document.getElementById('image-container');
    // Create a new Image element for the cat-heart
    var catHeartImage = new Image();
    // Set the source (file path) for the cat-heart image
    catHeartImage.src = 'cat-heart.gif';
    // Set alternative text for the image (for accessibility)
    catHeartImage.alt = 'Cat Heart';
    // When the cat-heart image is fully loaded, add it to the image container
    catHeartImage.onload = function() {
        imageContainer.appendChild(catHeartImage);
        // Hide the options container
        document.getElementById('options').style.display = 'none';
    };
}

// Trigger confetti animation
function triggerConfetti() {
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
    });
}

// Display a personal message
function showMessage() {
    var message = document.createElement('div');
    message.id = 'message';
    message.innerText = 'Yay! I can\'t wait to spend Valentine\'s Day with you! ❤️';
    document.getElementById('image-container').appendChild(message);
}

// Display the dancing cat initially
displayCat();

// Display dance cat func
function displayCat() {
    var imageContainer = document.getElementById('image-container');
    var catImage = new Image();
    catImage.src = 'cat-dance.gif';
    catImage.alt = 'Cat Dance';
    catImage.onload = function() {
        imageContainer.appendChild(catImage);
    };
}