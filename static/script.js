const slides = [
      '/static/images/sis.jpg',
      '/static/images/sis2.jpg',
      '/static/images/sis3.jpg',
      '/static/images/sis4.jpg',
      '/static/images/sis5.jpg',
      '/static/images/sis6.jpg',
      '/static/images/sis7.jpg'
    ];
    let index = 0;
    const img = document.getElementById('slideImg');

    function changeSlide(newIndex) {
        img.style.opacity = 0;
        setTimeout(() => {
            index = (newIndex + slides.length) % slides.length;
            img.src = slides[index];
            img.style.opacity = 1;
        }, 500);
    }

    document.getElementById('prevSlide').onclick = () => {
        changeSlide(index - 1);
    };

    document.getElementById('nextSlide').onclick = () => {
        changeSlide(index + 1);
    };