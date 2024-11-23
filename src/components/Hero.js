export const hero = () => { // Create a hero function
    /* Hero Slider */
    const items = document.querySelectorAll('.hero .list .item'); // Get all items
    const slider = document.querySelector('.hero'); // Get the slider container
    const prevBtn = document.querySelector('.prev'); // Get the previous button
    const nextBtn = document.querySelector('.next'); // Get the next button

    if (!slider || !prevBtn || !nextBtn) { // Check if elements are found
        console.warn("Slider or navigation buttons not found in the DOM."); // Log a warning if elements are not found
        return () => {}; // Return an empty cleanup function if elements are not found
    }

    let lastPosition = items.length - 1;// Get the last position
    let firstPosition = 0;// Get the first position
    let active = 0; // Set the active item to the first item

    const setSlider = () => { // Create a function to set the slider
        const oldActive = document.querySelector('.hero .item.active');// Get the old active item
        if (oldActive) oldActive.classList.remove('active');// Remove the active class from the old active item

        if (active >= 0 && active < items.length) { // Check if the active item is within the range
            items[active].classList.add('active'); // Add the active class to the new active item
        }

        nextBtn.classList.toggle('d-none', active === lastPosition); // Hide the next button if the active item is the last item
        prevBtn.classList.toggle('d-none', active === firstPosition); // Hide the previous button if the active item is the first item
    };

    nextBtn.onclick = () => { // Add an event listener to the next button
        if (active < lastPosition) {    // Check if the active item is not the last item
            active += 1; // Increment the active item
            setSlider(); // Call the setSlider function to update the slider
        }
    };

    prevBtn.onclick = () => { // Add an event listener to the previous button
        if (active > firstPosition) { // Check if the active item is not the first item
            active -= 1; // Decrement the active item
            setSlider(); // Call the setSlider function to update the slider
        }
    };

    const setDiameter = () => {
        if (slider) {   // Check if the slider element exists
            const widthSlider = slider.offsetWidth; // Get the width of the slider element
            const heightSlider = slider.offsetHeight; // Get the height of the slider element
            const diameter = Math.sqrt(Math.pow(widthSlider, 2) + Math.pow(heightSlider, 2)); // Calculate the diameter of the slider
            document.documentElement.style.setProperty('--diameter', `${diameter}px`); // Set the diameter as a CSS variable
        }
    };

    setSlider(); // Call the setSlider function to set the initial slider
    setDiameter(); // Call the setDiameter function to set the initial diameter

    let resizeTimeout; // Declare a variable to store the resize timeout
    const onResize = () => {
        clearTimeout(resizeTimeout); // Clear the resize timeout
        resizeTimeout = setTimeout(setDiameter, 100); // Set a timeout to call the setDiameter function
    };
    window.addEventListener('resize', onResize); // Add an event listener to the window resize event

    // Cleanup function for useEffect
    return () => {
        window.removeEventListener('resize', onResize); // Remove the resize event listener 
    };
};
