function upDate(previewPic) {
    console.log("Image activated:", previewPic.src); 
    
    const display = document.getElementById('image');
    display.style.backgroundImage = `url(${previewPic.src})`;

    display.innerHTML = previewPic.alt;
}

function undo() {
    console.log("Image deactivated");
    const display = document.getElementById('image');
    display.style.backgroundImage = "url('')"; 
    display.innerHTML = "Hover over or focus on an image below to display here.";
}

function setupGallery() {
    console.log("Window loaded: Starting gallery setup."); 
    var images = document.querySelectorAll('#gallery .preview');
    for (var i = 0; i < images.length; i++) {
        images[i].setAttribute('tabindex', '0'); 
        console.log("Tabindex added to:", images[i].id); 
    }
}