window.addEventListener('scroll', function() {
    const nav = document.querySelector('.fixed-nav');
    const areaWord = document.querySelector('.area-word');
    const navItems = document.querySelectorAll('.nav-item a');

    if (window.scrollY > 100) {
        nav.classList.add('scrolled');
        areaWord.style.fontSize = '1.8rem';
        navItems.forEach(item => { 
            item.style.fontSize = '0.85rem'; 
            item.style.padding = '10px 20px'; 
        });
    } else {
        nav.classList.remove('scrolled');
        areaWord.style.fontSize = '';
        navItems.forEach(item => { 
            item.style.fontSize = ''; 
            item.style.padding = ''; 
        });
    }
});

document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', function(e) {
        e.preventDefault();
        
        document.querySelectorAll('.nav-item').forEach(i => {
            i.classList.remove('active');
        });
        
        this.classList.add('active');
        
        const link = this.querySelector('a').getAttribute('href');
        if (link && link !== '#') {
            setTimeout(() => {
                const targetElement = document.querySelector(link);
                if (targetElement) {
                    const headerHeight = document.querySelector('.fixed-nav').offsetHeight;
                    const targetPosition = targetElement.offsetTop - headerHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }, 300);
        }
    });
});

document.querySelector('.learn-more-btn').addEventListener('click', function() {
    window.open('#benefits', '_self');
    this.style.transform = 'scale(0.95)';
    setTimeout(() => { 
        this.style.transform = ''; 
    }, 200);
});

const mobileBtn = document.querySelector('.mobile-menu-btn');
const navCenter = document.querySelector('.nav-center');

if (mobileBtn && navCenter) {
    mobileBtn.addEventListener('click', function() {
        if (navCenter.style.display === 'flex') { 
            navCenter.style.display = 'none'; 
            mobileBtn.innerHTML = '<i class="fas fa-bars"></i>'; 
        } else {
            navCenter.style.display = 'flex';
            navCenter.style.position = 'absolute';
            navCenter.style.top = '100%';
            navCenter.style.right = '0';
            navCenter.style.left = '0';
            navCenter.style.background = 'white';
            navCenter.style.flexDirection = 'column';
            navCenter.style.gap = '10px';
            navCenter.style.padding = '20px';
            navCenter.style.borderRadius = '0 0 20px 20px';
            navCenter.style.boxShadow = '0 20px 40px rgba(0,0,0,0.15)';
            navCenter.style.zIndex = '1001';
            mobileBtn.innerHTML = '<i class="fas fa-times"></i>';
        }
    });

    document.addEventListener('click', function(event) {
        if (!navCenter.contains(event.target) && !mobileBtn.contains(event.target)) {
            navCenter.style.display = 'none';
            mobileBtn.innerHTML = '<i class="fas fa-bars"></i>';
        }
    });
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        
        if (href !== '#') {
            e.preventDefault();
            
            const targetElement = document.querySelector(href);
            if (targetElement) {
                const headerHeight = document.querySelector('.fixed-nav').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        }
    });
});

const fadeElements = document.querySelectorAll('.main-section section, .benefits-full-image img');

function handleFadeIn() {
    const triggerBottom = window.innerHeight * 0.85;

    fadeElements.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;

        if (elementTop < triggerBottom) {
            el.classList.add('active');
        } else {
            el.classList.remove('active');
        }
    });
}

window.addEventListener('scroll', handleFadeIn);
window.addEventListener('load', handleFadeIn);