if (chrome != undefined) {browser = chrome;}


let submit_button = document.querySelector("#submit_button");

submit_button.type = "";

let form = submit_button.parentElement.parentElement;


browser.storage.local.get(['username', 'password'], function(config) {
   if (config.username == undefined || config.password == undefined || config.username == "" || config.password == "") {
      async function wait_for_submit() {await new Promise((resolve) => {submit_button.addEventListener('click', () => {resolve();});})};
      wait_for_submit();
   
      config.username = form.children[0].children[1].value;
      config.password = form.children[1].children[1].value;

      browser.storage.local.set(config);

      return;
   }


   form.children[0].children[1].value = config.username;
   form.children[1].children[1].value = config.password;

   form.submit();
});
