// Отримуємо посилання на кнопку "Biography"
const biographyLink = document.querySelector('nav ul li:nth-child(1) a');

// Отримуємо посилання на блок біографії
const biographyBlock = document.getElementById('biography');

// Додаємо обробник події для кліку на кнопку "Biography"
biographyLink.addEventListener('click', function (event) {
    event.preventDefault(); // Забороняємо дійсність посилання

    // Прокручуємо сторінку до блоку біографії за допомогою scrollIntoView()
    biographyBlock.scrollIntoView({ behavior: 'smooth' });
});
