document.addEventListener('DOMContentLoaded', () => {
    // Находим все элементы с классом fade-in
    const elements = document.querySelectorAll('.fade-in');

    // Создаем наблюдатель (Intersection Observer)
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Анимируем только один раз
            }
        });
    }, { threshold: 0.1 });

    // Начинаем наблюдение
    elements.forEach(el => observer.observe(el));
    
    console.log("Сайт успешно загружен и анимации активны!");
});