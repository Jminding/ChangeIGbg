// ==UserScript==
// @name         Change Background Message Color
// @author       Jaymin Ding
// @version      1.0
// @description  Changes the background message color
// @match        https://www.instagram.com/direct/t/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function modifyWebpage() {
        if (window.location.href.includes('?theme=light')) {
        // Get all elements with class name "x1g8br2z" and "x1tlxs6b"
            const elements = document.querySelectorAll('.x1g8br2z, .x1tlxs6b');

            // Loop through the elements and set their background color to transparent
            elements.forEach(element => {
                element.style.backgroundColor = 'transparent';
            });

            // Log a message to the browser console
            console.log('Transparent background set for elements with class names "x1g8br2z" and "x1tlxs6b"');

            // Change the color of elements with class name "x6prxxf" to black
            const blackElements = document.querySelectorAll('.x6prxxf');
            blackElements.forEach(element => {
                element.style.color = 'black';
            });

            // Hide elements with class name "x1rg5ohu"
            const hiddenElements = document.querySelectorAll('.x1rg5ohu');
            hiddenElements.forEach(element => {
                element.style.display = 'none';
            });

            // Log a message indicating the theme change and style modification
            console.log('Webpage theme set to light, and elements with class name "x6prxxf" changed to black.');
        }
    }

    // Attach a click event listener to the document
    document.addEventListener('click', modifyWebpage);

    // Attach a keydown event listener to the document to check for Enter key (key code 13)
    document.addEventListener('keydown', function(event) {
        if (event.keyCode === 13) {
            modifyWebpage();
            setTimeout(modifyWebpage, 300); // Wait for 0.5 seconds (500 milliseconds)
        }
    });
})();
