// Revealing Section when Scroll
const allSection = document.querySelectorAll('.section');

const revealSection = function(entries, observer){
    const [entry] = entries;
    if(!entry.isIntersecting) return;
    entry.target.classList.remove('section--hidden');
    observer.unobserve(entry.target);
}

const sectionObserver = new IntersectionObserver(revealSection, {root:null, threshold: 0.15});

allSection.forEach((section)=>{
    sectionObserver.observe(section);
    section.classList.add('section--hidden');
})