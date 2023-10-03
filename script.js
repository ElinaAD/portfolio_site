// Define these variables outside of any function to make them global
window.onload = function() {
    document.body.offsetHeight; // force a reflow by accessing offsetHeight
};

let texts = ["Elina Adams Drake", "Front-end developer"];
let index = 0;
let charIndex = 0;

document.addEventListener('DOMContentLoaded', function() {
    

    // Start typewriter effect after a delay
    const typewriter = document.getElementById('typewriter');
    const subHeader = document.getElementById('sub-header');
    setTimeout(() => type(typewriter, texts, charIndex, index), 200);

    // Initialize skills image animation after a delay
    let initialDelay = 4000;
    setTimeout(initializeSkillsAnimation, initialDelay);
});

// Navigation Section Display
function displaySection(sectionId) {
   
    let sections = ['content_home', 'content_about', 'content_portfolio', 'content_contact'];
    
    sections.forEach(id => {
        document.getElementById(id).style.display = 'none';
    });
    
    if(sectionId !== 'content_home') {
        document.getElementById('content_home').style.display = 'none';
    }

    document.getElementById(sectionId).style.display = 'flex';
}


function type(element, texts, charIndex, index) {
    if (charIndex < texts[index].length) {
        element.textContent += texts[index].charAt(charIndex);
        charIndex++;
        setTimeout(() => type(element, texts, charIndex, index), 100);
    } else if (index < texts.length - 1) {
        let nextElement = element;
        let delayBeforeNextText = 1500;
        if(index === 0) {
            typewriter.classList.add('remove-cursor');
            nextElement = document.getElementById('sub-header');
            delayBeforeNextText = 1500;
        }
        index++;
        charIndex = 0;
        setTimeout(() => type(nextElement, texts, charIndex, index), delayBeforeNextText);
    }
}

function initializeSkillsAnimation() {
    const images = document.querySelectorAll('.skills img');
    let delay = 600;
    images.forEach((img, index) => {
        let li = img.closest('li');
        setTimeout(() => {
            img.setAttribute('src', img.getAttribute('data-hover'));
            li.classList.add('hover-effect');
            setTimeout(() => {
                img.setAttribute('src', img.getAttribute('data-src'));
                li.classList.remove('hover-effect');
            }, 600);
        }, index * delay);
    });
    setTimeout(() => {
        images.forEach(img => {
            let li = img.closest('li');
            img.addEventListener('mouseover', function() {
                this.setAttribute('src', this.getAttribute('data-hover'));
                li.classList.add('hover-effect');
            });
            img.addEventListener('mouseout', function() {
                this.setAttribute('src', this.getAttribute('data-src'));
                li.classList.remove('hover-effect');
            });
        });
    }, images.length * delay);
}


// Display of Project description

document.addEventListener('DOMContentLoaded', function() {
    var headers = document.querySelectorAll('#content_portfolio #project_box h3');

    headers.forEach(function(header) {
        header.addEventListener('click', function() {
            var description = this.nextElementSibling;
            
            if (description.style.display === 'none' || description.style.display === '') {
                description.style.display = 'block';
            } else {
                description.style.display = 'none';
            }
        });
    });
});