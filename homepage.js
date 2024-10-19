if (chrome != undefined) {browser = chrome;}


browser.storage.local.get([
   "ch-titles",
   "greeting",
   "mijn-startpagina", 
   "startpagina",
   "mijn-cursussen",
   
   "dashboard",
   "titel",
   "e-mail",
   "agenda",
   "account",
   "krantenarchief",
   "portfolio"
], (config) => {
   if (config["ch-titles"]) {  
      let title_tag = document.querySelector("h1");
      let title = title_tag.textContent;

      if (title == "Mijn startpagina") {
         title_tag.textContent = config["mijn-startpagina"];
      } else if (title == "Mijn cursussen") {
         title_tag.textContent = config["mijn-cursussen"];
      } else if (title == "ELO Sint-Rita campus College") {
         title_tag.textContent = config["startpagina"];
      } else {
         title_tag.textContent = config["greeting"]
      }
   }

   if (config["dashboard"] && document.querySelectorAll("h3")[1].textContent == "Sint-Rita") {
      let title_tag = document.querySelectorAll("h3")[1];

      title_tag.textContent = config["titel"]

      let links = title_tag.parentElement.children[1].children;

      for (let link of links) {
         let text = link.textContent;

         if (text == "Mijn e-mail") {link.text = config["e-mail"];}
         if (text == "Agenda vandaag") {link.text = config["agenda"];}
         if (text == "Portfolio Nederlands") {link.text = config["portfolio"];}
         if (text == "Mijn account") {link.text = config["account"];}
         if (text == "Krantenarchief") {link.text = config["krantenarchief"]}
      }
   }
});
