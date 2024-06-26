document.getElementById("toggleButton").addEventListener("click", function() {
    const images = document.querySelectorAll(".image");
    images.forEach(image => {
        if (image.style.animation) {
            image.style.animation = "";
        } else {
            image.style.animation = "spin 2s infinite linear";
        }
    });
});


