
    document.addEventListener('DOMContentLoaded', () => {
    // 1. Phone Number Masking
    const phoneInput = document.getElementById('phone-number');
    if (phoneInput) {
        phoneInput.addEventListener('input', (e) => {
            let input = e.target.value.replace(/\D/g, '');
            let size = input.length;
            if (size > 0) { input = "(" + input; }
            if (size > 3) { input = input.slice(0, 4) + ") " + input.slice(4); }
            if (size > 6) { input = input.slice(0, 9) + "-" + input.slice(9, 13); }
            e.target.value = input;
        });
    }

    // 2. Copyright Year
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) yearSpan.textContent = new Date().getFullYear();

    // 3. Mobile Menu Logic
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.page-links');
    const bars = document.querySelectorAll('.bar');
    const backdrop = document.querySelector('.menu-backdrop');
    const servicesList = document.querySelector('.services');
    const serviceBtn = document.querySelector('.service-btn'); // Defined it here!

    function closeMenu() {
        navLinks.classList.remove('active');
        if (backdrop) backdrop.classList.remove('active');
        bars.forEach(bar => {
            bar.classList.remove('rotate-down', 'fade-out', 'rotate-up');
        });
    }

    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            if (backdrop) backdrop.classList.toggle('active');
            bars[0].classList.toggle('rotate-down');
            bars[1].classList.toggle('fade-out');
            bars[2].classList.toggle('rotate-up');
        });
    }

    if (backdrop) backdrop.addEventListener('click', closeMenu);

    // 4. FAQ Logic (The new part)
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            // Close others
            faqItems.forEach(otherItem => {
                if (otherItem !== item) otherItem.classList.remove('active');
            });
            // Toggle current
            item.classList.toggle('active');
        });
    });

    // 5. Handle Services Dropdown on Mobile
    if (serviceBtn) {
        serviceBtn.addEventListener('click', (e) => {
            if (window.innerWidth <= 900) {
                e.preventDefault();
                servicesList.classList.toggle('show');
                serviceBtn.classList.toggle('arrow-rotate');
            }
        });
    }
});









// const phoneInput = document.getElementById('phone-number');

// phoneInput.addEventListener('input', (e) => {
//     let input = e.target.value.replace(/\D/g, ''); // Remove all non-digits
//     let size = input.length;

//     if (size > 0) { input = "(" + input; }
//     if (size > 3) { input = input.slice(0, 4) + ") " + input.slice(4); }
//     if (size > 6) { input = input.slice(0, 9) + "-" + input.slice(9, 13); }
    
//     e.target.value = input;
// });

// // Automatically update the copyright year
// const yearSpan = document.getElementById('current-year');
// yearSpan.textContent = new Date().getFullYear();


// // The Menu
// // const menuToggle = document.querySelector('.menu-toggle');
// // const navLinks = document.querySelector('.page-links');
// // const bars = document.querySelectorAll('.bar');

// // menuToggle.addEventListener('click', () => {
// //     navLinks.classList.toggle('active');
    
// //     // Animate the hamburger into an "X"
// //     const bars = document.querySelectorAll('.bar');
// //     bars[0].classList.toggle('rotate-down');
// //     bars[1].classList.toggle('fade-out');
// //     bars[2].classList.toggle('rotate-up');
// // });

// // // Close the menu when any link inside it is clicked
// // const navItems = document.querySelectorAll('.nav-link');

// // navItems.forEach(link => {
// //     link.addEventListener('click', () => {
// //         if (navLinks.classList.contains('active')) {
// //             navLinks.classList.remove('active');
            
// //             // Reset the hamburger bars to white/original state
// //             bars[0].classList.remove('rotate-down');
// //             bars[1].classList.remove('fade-out');
// //             bars[2].classList.remove('rotate-up');
// //         }
// //     });
// // });


// // The New Menu
// const menuToggle = document.querySelector('.menu-toggle');
// const navLinks = document.querySelector('.page-links');
// const bars = document.querySelectorAll('.bar');
// const backdrop = document.querySelector('.menu-backdrop'); // Select the backdrop

// // Function to close the menu
// function closeMenu() {
//     navLinks.classList.remove('active');
//     backdrop.classList.remove('active'); // Hide backdrop
    
//     // Reset hamburger icon
//     bars[0].classList.remove('rotate-down');
//     bars[1].classList.remove('fade-out');
//     bars[2].classList.remove('rotate-up');
// }

// // Function to toggle the menu open/closed
// function toggleMenu() {
//     navLinks.classList.toggle('active');
//     backdrop.classList.toggle('active'); // Toggle backdrop
    
//     // Toggle hamburger icon
//     bars[0].classList.toggle('rotate-down');
//     bars[1].classList.toggle('fade-out');
//     bars[2].classList.toggle('rotate-up');
// }

// // Event Listeners
// menuToggle.addEventListener('click', toggleMenu);
// backdrop.addEventListener('click', closeMenu); // Close when clicking outside

// // Close menu when a link is clicked (optional but recommended)
// // const navItems = document.querySelectorAll('.nav-link');
// // navItems.forEach(link => {
// //     link.addEventListener('click', closeMenu);
// // });
// // const serviceBtn = document.querySelector('.service-btn');
// // const servicesList = document.querySelector('.services');


// // Close menu when a link is clicked, BUT ignore the Services toggle on mobile
// // const navItems = document.querySelectorAll('.nav-link');

// // navItems.forEach(link => {
// //     link.addEventListener('click', (e) => {
// //         // Check if the clicked link is the Services button AND we are on mobile
// //         const isServicesToggle = link.classList.contains('service-btn');
// //         const isMobile = window.innerWidth <= 900;

// //         if (isServicesToggle && isMobile) {
// //             // Do nothing here! Let the other "serviceBtn" listener handle it
// //             return; 
// //         }

// //         // For all other links (Home, About, or the actual Service pages), close the menu
// //         closeMenu();
// //     });
// // });

// const navItems = document.querySelectorAll('.nav-link');
// const servicesList = document.querySelector('.services');

// navItems.forEach(link => {
//     link.addEventListener('click', (e) => {
//         const isServicesButton = link.classList.contains('service-btn');
//         const isMobile = window.innerWidth <= 900;

//         if (isMobile && isServicesButton) {
//             e.preventDefault(); // Stop page from jumping
//             servicesList.classList.toggle('show'); // Slide the list down
//             link.classList.toggle('arrow-rotate'); // Optional: rotate arrow
//             return; // Don't close the menu!
//         }

//         // For all other links, close the menu
//         closeMenu();
//     });
// });

// serviceBtn.addEventListener('click', (e) => {
//     // Only run this logic if we are on mobile (less than 900px)
//     if (window.innerWidth <= 900) {
//         e.preventDefault(); // Stop the "#" link from jumping the page
//         servicesList.classList.toggle('show');
        
//         // Optional: Rotate the arrow if you want to get fancy
//         serviceBtn.classList.toggle('arrow-rotate');
//     }
// });

// const faqItems = document.querySelectorAll('.faq-item');

// faqItems.forEach(item => {
//     const question = item.querySelector('.faq-question');
    
//     question.addEventListener('click', () => {
//         // Optional: Close other open FAQ items
//         faqItems.forEach(otherItem => {
//             if (otherItem !== item) {
//                 otherItem.classList.remove('active');
//             }
//         });

//         // Toggle the clicked item
//         item.classList.toggle('active');
//     });
// });
