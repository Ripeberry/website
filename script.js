// Select all columns
const columns = document.querySelectorAll('.hero-column');

// Add scroll listener for parallax effect
window.addEventListener('scroll', () => {
    columns.forEach((column, index) => {
        const speed = 0.5 + index * 0.2; // Adjust speed per column
        column.style.transform = `translateY(${window.scrollY * speed}px)`;
    });
});