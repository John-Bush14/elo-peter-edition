if (chrome != undefined) {browser = chrome;}


const selections = {
   "open-actions": [
      "do not",
      "new window",
      "new tab",
      "redirect"
   ]
}

const keys = {
   "ch-titles": false,
   "greeting": "Goodmornin",
   "mijn-startpagina": "God does not exist",
   "mijn-cursussen": "Heil Peter Van Den Heuvel",
   "startpagina": "Wa you doin here",

   "dashboard": false,
   "titel": "Is god real?",
   "e-mail": "nah",
   "agenda": "elo-agenda",
   "account": "Free Vbucks!",
   "krantenarchief": "Girly gall what?",
   "portfolio": "Wrm is dit hier?",

   "dashboard-open-actions": true,
   "e-mail-oa": "new tab",
   "agenda-oa": "new tab",
   "account-oa": "new tab",
   "krantenarchief-oa": "new tab",
   "portfolio-oa": "new tab",
};


for (let select of document.querySelectorAll('select')) {

   for (let option of selections[select.getAttribute('selection')]) {
      let option_tag = document.createElement('option');
      
      option_tag.value = option; option_tag.textContent = option;

      if (option == "new tab") {
         option_tag.selected = true;
      }

      select.appendChild(option_tag);
   }
}


browser.storage.local.get(Object.keys(keys), (config) => {
   for (let [key, default_val] of Object.entries(keys)) {
      if (config[key] == undefined) {
         console.log("initializing ", key, " to default val ", default_val);
         config[key] = default_val;
      }

      document.getElementById(key).value = config[key];

      if (document.getElementById(key).type == "checkbox") {
         document.getElementById(key).checked = config[key] == true || config[key] == "true"
      }

      browser.storage.local.set(config);

      document.getElementById(key).addEventListener('input', (event) => {
         if (event.target.type == "checkbox") {event.target.value = event.target.checked;}

         let set_dir = {}; set_dir[event.target.id] = event.target.value;
         browser.storage.local.set(set_dir);
      })
   }
});
