window.addEventListener('scroll', function () {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    var windowHeight = window.innerHeight;
    var imageContainer = document.querySelector('.image-container');
    var images = imageContainer.querySelectorAll('img');

    images.forEach(function (image, index) {
        var imageOffset = image.offsetTop;
        var imageHeight = image.offsetHeight;

        if (scrollTop > imageOffset - windowHeight && scrollTop < imageOffset + imageHeight) {
            image.style.opacity = 1;
        } else {
            image.style.opacity = 0;
        }
    });
});
