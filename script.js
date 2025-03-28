document.addEventListener("DOMContentLoaded", function () {
    const startButton = document.getElementById("start");
    const urlInput = document.getElementById("url");
    const container = document.getElementById("container");

    startButton.addEventListener("click", function () {
        const url = urlInput.value.trim();
        if (url) {
            container.innerHTML = `<iframe id='webpage' src='${url}' style='width: 100%; height: 90vh; border: none;'></iframe>`;
            setTimeout(() => simulateBrowsing(), 3000);
        }
    });

    function simulateBrowsing() {
        const iframe = document.getElementById("webpage");
        if (!iframe) return;

        const doc = iframe.contentDocument || iframe.contentWindow.document;
        if (!doc) return;

        function scrollPage() {
            let scrollInterval = setInterval(() => {
                iframe.contentWindow.scrollBy(0, Math.random() * 200);
                if (Math.random() > 0.7) {
                    iframe.contentWindow.scrollBy(0, -Math.random() * 200);
                }
            }, 2000);
            setTimeout(() => clearInterval(scrollInterval), 15000);
        }

        function clickLinks() {
            setTimeout(() => {
                const links = doc.querySelectorAll("a");
                if (links.length > 0) {
                    const randomLink = links[Math.floor(Math.random() * links.length)];
                    randomLink.click();
                }
            }, 5000);
        }

        scrollPage();
        clickLinks();
    }
});
