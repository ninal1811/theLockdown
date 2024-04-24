let videos = [
    "6862153058223197445",
    "6883611527698599173",
    "6898079880685047045",
    "6886986476781964549",
    "6891706807287418117",
    "6826981901182471430",
    "6823517995856301317",
    "6827203360823758085",
    "6887317777892347141",
    "6887992672074730758",
    "6834696215796501765",
    "6823517995856301317",
    "6805684184099622150",
    "6792413587685018885",
    "6827454470486510854",
    "6859028770813168902",
    "6864668351155801349",
    "6871605473318112517",
    "6868727587636530438",
    "6865054431352835334",
    "6804959929607146758",
    "6846787050209807621",
    "6781518175889575173",
    "6851002179902246149",
    "6864679887295352069",
    "6873218294329986310",
    "6872835529109441798"
];

function shuffleVideo(videoArray) {
    for (let i = videoArray.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [videoArray[i], videoArray[j]] = [videoArray[j], videoArray[i]];
    }
    return videoArray;
}

videos = shuffleVideo(videos);

let content = document.getElementById("content");

document.addEventListener("DOMContentLoaded", function() {
    let app = document.createElement("div");
    let popup = document.createElement("div");
    let popupContent = document.createElement("p");
    let closePopup = document.createElement("button");

    let icon = document.createElement("button");
    icon.classList.add("openApp");
    let appIcon = document.createElement("img");
    appIcon.src = "tiktok.png";
    app.classList.add("app");

    let left = Math.floor(Math.random() * 70);
    let top = Math.floor(Math.random() * 50);
    icon.style.left = left + "vw";
    icon.style.top = top + "vh";

    icon.appendChild(appIcon);
    app.appendChild(icon);

    popupContent.innerText = "WARNING! THE TIKTOK VIRUS HAS ARRIVED. PLEASE DO NOT CLICK IT.";
    closePopup.innerText = "CLOSE";

    popup.appendChild(popupContent);
    popup.appendChild(closePopup);
    popup.classList.add("popup");

    content.appendChild(app);
    content.appendChild(popup);

    videos.forEach((videoId, index) => {
        preloadVideo(videoId, app, index);
    });

    icon.addEventListener("click", function() {
        popup.style.display = "none";
        
        let pages = app.querySelectorAll('.page');
        pages.forEach((page, index) => {
            setTimeout(() => {
                page.style.display = "block";
            }, index * 4000); 
        });
    });

    closePopup.addEventListener("click", function() {
        popup.style.display = "none";
    });
});

function preloadVideo(videoId, app, index) {
    let embedCode = `<iframe src="https://www.tiktok.com/embed/${videoId}" width="100%" height="100%" frameborder="0" allowfullscreen></iframe>`;
    
    let page = document.createElement("div");
    page.classList.add("page");
    page.style.width = "20vw";
    page.style.height = "85vh";
    page.style.position = "absolute";

    let left = Math.floor(Math.random() * 80);
    let top = Math.floor(Math.random() * 70);
    page.style.left = left + "vw";
    page.style.top = top + "vh";

    page.innerHTML = embedCode;

    app.appendChild(page);
}
