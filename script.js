// script.js

// Array of messages for the "No" button
const noButtonMessages = [
    "You sure?",
    "Why are you clicking this?",
    "I'm gonna cri...",
    "Please say yes!",
    "Don't break my heart 💔"
];

let messageIndex = 0;

// Function to handle button click events
function selectOption(option) {
    if (option === 'yes') {
        showLoading();
        // Hide the question text
        document.getElementById('question').style.display = 'none';
        setTimeout(function() {
            displayCatHeart();
            triggerConfetti();
            showMessage();
        }, 1000);
    } else if (option === 'no') {
        // Get the "No" button
        var noButton = document.getElementById('no-button');
        // Update the button text with the next message in the cycle
        noButton.innerText = noButtonMessages[messageIndex];
        // Move the "No" button to a random position
        noButton.style.position = 'absolute';
        noButton.style.left = Math.random() * (window.innerWidth - 100) + 'px';
        noButton.style.top = Math.random() * (window.innerHeight - 50) + 'px';
        // Increase font size of "Yes" button
        var yesButton = document.getElementById('yes-button');
        var currentFontSize = window.getComputedStyle(yesButton).getPropertyValue('font-size');
        var newSize = parseFloat(currentFontSize) * 1.2;
        yesButton.style.fontSize = newSize + 'px';
        // Update the message index for the next click
        messageIndex = (messageIndex + 1) % noButtonMessages.length;
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
    catHeartImage.src = 'cat-heart.gif';
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
    message.innerHTML = 'Yaaay, you\'re my Valentine!<br>Thank you for being with me and for everything in our relationship.<br>I hope we continue to grow stronger and happier together~ 🥰💝';
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
