export const projectquickview = (prev,next, image, item, contents) => { // Create a projectquickview function
    /* Project Quick View slider*/
    const prevbtn = document.querySelector('.prev-btn'); // Get the previous button
    const nextbtn = document.querySelector('.next-btn'); // Get the next button
    const images = document.querySelector('.images'); // Get the image container
    const projects = document.querySelectorAll('.images .pro'); // Get all projects 
    const contentItems = document.querySelectorAll('.content .items');  // Get all contents
    
    let rotate = 0; // Set the initial rotation angle to 0
    let active = 0; // Set the initial active index to 0
    let countItem = projects.length; // Get the total number of projects
    let rotateAngle = 360 / countItem; // Calculate the rotation angle for each project

    function displayItem(){ // Create a function to display the active item
        images.style.setProperty('--rotate', `${rotate}deg`); // Set the rotation angle as a CSS variable 
        contentItems.forEach((content, index) => { // Loop through each content and check if the index is equal to the active index
            if(index === active){ // If the index of the content is equal to the active index
                content.classList.add('active'); // Add the active class to the content
            }else{
                content.classList.remove('active'); // Remove the active class from the content
            }
        });
    }

    function prevItem(){ // Create a function to show the previous item
        active = (active - 1) < 0 ? countItem -1 : active - 1; // Decrement the active index and check if it is less than 0, if so set it to the last index
        rotate = rotate - rotateAngle; // Decrement the rotation angle
        displayItem(); // Call the displayItem function to update the content
    }

    function nextItem(){ // Create a function to show the next item
        active = (active + 1) > countItem -1 ? 0 : active + 1; // Increment the active index and check if it is greater than the last index, if so set it to 0
        rotate = rotate + rotateAngle; // Increment the rotation angle
        displayItem(); // Call the displayItem function to update the content
    }

    prevbtn.onclick = prevItem; // Add an event listener to the prev button to call the prevItem function when clicked
    nextbtn.onclick = nextItem; // Add an event listener to the next button to call the nextItem function when clicked
    
    /* Auto slide */
    const autoSlide = setInterval(nextItem, 5000); // Set an interval to call the nextItem function every 5 seconds
    return () => clearInterval(autoSlide); // Return a cleanup function to clear the interval when the component is unmounted
};