if (chrome != undefined) {browser = chrome;}


const keys = {
   "greeting": "Heil Peter Van Den Heuvel"
};


browser.storage.local.get(Object.keys(keys), (config) => {
   for (let [key, default_val] of Object.entries(keys)) {
      if (config[key] == undefined) {
         console.log("initializing ", key, " to default val ", default_val);
         config[key] = default_val;
      }

      document.getElementById(key).value = config[key];

      browser.storage.local.set(config);

      document.getElementById(key).addEventListener('input', (event) => {
         let set_dir = {}; set_dir[event.target.id] = event.target.value;
         browser.storage.local.set(set_dir);
      })
   }
});
