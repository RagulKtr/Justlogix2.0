
        // Smooth Scroll and Update Active Link
        document.addEventListener('DOMContentLoaded', function () {
            const navLinks = document.querySelectorAll('.nav-link');
            const sections = document.querySelectorAll('.section');

            // Intersection Observer callback
            const observerCallback = (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const id = entry.target.id;

                        navLinks.forEach(link => {
                            // Check if the link is not "Contact Us"
                            if (link.getAttribute('href') === `#${id}` && !link.classList.contains('contect-us-nav')) {
                                link.classList.add('active');
                            } else if (link.classList.contains('contect-us-nav')) {
                                // Keep "Contact Us" link active if it's currently active
                                link.classList.remove('active');
                            } else {
                                link.classList.remove('active');
                            }
                        });
                    }
                });
            };

            // Creating Intersection Observer
            const observer = new IntersectionObserver(observerCallback, {
                root: null,
                threshold: 0.5, // Trigger when 50% of the section is in view
            });

            // Observe each section
            sections.forEach(section => {
                observer.observe(section);
            });

            // Update active class on link click
            navLinks.forEach(link => {
                link.addEventListener('click', function () {
                    // Remove active class from all links
                    navLinks.forEach(nav => nav.classList.remove('active'));
                    // Add active class to the clicked link
                    this.classList.add('active');
                });
            });
        });
