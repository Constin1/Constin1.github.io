        const projectsList = document.querySelector('.projects-list');
        const projectItems = document.querySelectorAll('.project-item');
        let currentIndex = 0;

        // Function to update the displayed project
        function updateProjectDisplay() {
            projectItems.forEach((item, index) => {
                const offset = index - currentIndex;
                item.style.transform = `translateX(${offset * 100}%)`;
            });
        }

        // Handle swipe left
        function swipeLeft() {
            if (currentIndex < projectItems.length - 1) {
                currentIndex++;
                updateProjectDisplay();
            }
        }

        // Handle swipe right
        function swipeRight() {
            if (currentIndex > 0) {
                currentIndex--;
                updateProjectDisplay();
            }
        }

        // Event listeners for swipe gestures
        projectsList.addEventListener('touchstart', (e) => {
            touchStartX = e.touches[0].clientX;
        });

        projectsList.addEventListener('touchmove', (e) => {
            touchEndX = e.touches[0].clientX;
            const swipeDistance = touchEndX - touchStartX;
            if (swipeDistance > 50) {
                swipeRight();
            } else if (swipeDistance < -50) {
                swipeLeft();
            }
        });

        // Initial display
        updateProjectDisplay();
