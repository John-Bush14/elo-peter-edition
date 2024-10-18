if (chrome != undefined) {browser = chrome;}


const keys = {
   "greeting": "Heil Peter Van Den Heuvel"
};


browser.storage.local.get(keys, (config) => {
   for (let [key, default_val] of Object.entries(keys)) {
      if (config[key] == undefined) {
         console.log("initializing ", key, " to default val ", default_val);
         config[key] = default_val;
      }

      document.getElementById(key).value = config[key];

      browser.storage.local.set(config);
   }
});
