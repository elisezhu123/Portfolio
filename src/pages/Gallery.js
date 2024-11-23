export const gallery = () => { // Create a gallery function
    const videoList = document.querySelectorAll('.video-list .vid'); // Get all video items
    const mainVideo = document.querySelector('.main-video .video video'); // Get the main video element
    const videoTitle = document.querySelector('.main-video .video h3'); // Get the video title element

    if (!videoList.length || !mainVideo || !videoTitle) { // Check if elements are found
        console.warn('Gallery elements not found. Check DOM structure.'); // Log a warning if elements are not found
        return () => {}; // Return an empty cleanup function
    }

    const handleClick = (event) => { // Handle click event on video items
        // Remove 'active' class from all videos
        videoList.forEach((vid) => vid.classList.remove('active')); // Remove the active class from all video items

        // Add 'active' class to the clicked video
        const video = event.currentTarget; // Get the clicked video item
        video.classList.add('active'); // Add the active class to the clicked video item

        // Update main video source and title
        const videoSrc = video.querySelector('video').getAttribute('src'); // Get the source of the clicked video
        const videoText = video.querySelector('.video-title').textContent; // Get the title of the clicked video

        mainVideo.src = videoSrc; // Set the source of the main video
        videoTitle.textContent = videoText; // Set the title of the main video
    };

    // Add click event listeners
    videoList.forEach((video) => { // Add event listeners to all video items
        video.addEventListener('click', handleClick); // Add a click event listener to each video item
    });

    // Cleanup function to remove listeners when the component unmounts
    return () => {
        videoList.forEach((video) => { // Remove event listeners from all video items
            video.removeEventListener('click', handleClick); // Remove the click event listener from each video item
        });
    };
};