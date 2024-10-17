if (chrome != undefined) {browser = chrome;}


const formData = new URLSearchParams();


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

   formData.append('username', config.username);
   formData.append('password', config.password);


   fetch(window.location.href, {
      method: "POST",
      headers: {'Content-Type': 'application/x-www-form-urlencoded'}, // don't ask me man ask chat-gpt
      body: formData.toString(),
   })
   .then(response => {
      if (response.ok) {console.log('Login response successful')} 
      else {
         console.log('Login response failed', response.status)
      }
   })
   .catch(error => {
      console.error('Error posting login:', error);
   });
});
