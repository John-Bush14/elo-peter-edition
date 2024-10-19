if (chrome != undefined) {browser = chrome;}


browser.storage.local.get(["greeting"], (config) => {
   document.querySelector("h1").textContent = config.greeting;
});
