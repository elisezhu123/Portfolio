export const blog = () => { // Create a function called blog
    const filterItems = document.querySelectorAll('.filter-item');  // Get all filter items
    const blogPosts = document.querySelectorAll('.post'); // Get all blog posts

    if (!filterItems.length || !blogPosts.length) { // Check if filter items or blog posts not found
        console.warn('Filter items or blog posts not found. Check DOM structure.'); // Log warning message
        return () => {}; // Return an empty function to prevent further execution
    }

    const handleFilter = (event) => { // Create a function to handle filter
        const filter = event.target.getAttribute('data-filter'); // Get filter value from data-filter attribute

        // Update active filter button styling
        filterItems.forEach((item) => item.classList.remove('active')); // Remove active class from all filter items
        event.target.classList.add('active'); // Add active class to clicked filter item

        // Show/hide posts based on filter
        blogPosts.forEach((post) => { // Loop through each blog post
            const category = post.querySelector('.category').textContent.toLowerCase(); // Get post category
            if (filter === 'all' || category === filter) { // Check if filter is 'all' or matches post category
                post.style.display = 'block'; // Show post
            } else {
                post.style.display = 'none'; // Hide post
            }
        });
    };

    // Add click event listeners to filter items
    filterItems.forEach((item) => { // Loop through each filter item
        item.addEventListener('click', handleFilter); // Add click event listener to filter item
    });

    // Cleanup function to remove listeners
    return () => {
        filterItems.forEach((item) => { // Loop through each filter item
            item.removeEventListener('click', handleFilter); // Remove click event listener from filter item
        });
    };
};