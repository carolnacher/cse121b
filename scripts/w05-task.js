/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.getElementById("temples");
let templeList= [];

const displayTemples = (temples) => {

    temples.forEach((temple) => {

        temples.sort((a, b) => a.templeName.localeCompare(b.templeName));
        
        const articule = document.createElement("article");
        const h3 = document.createElement("h3");
        h3.textContent = temple.templeName;
        const img= document.createElement("img")
        img.src = temple.imageUrl;
        img.alt = temple.location;
        

        articule.appendChild(h3);
        articule.appendChild(img);

        templesElement.appendChild(articule);
        
    });

}

/* async displayTemples Function */

const getTemples = async () => {
  const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");

  templeList = await response.json();
  displayTemples(templeList);
  console.log(templeList);

}




/* async getTemples Function using fetch()*/


/* reset Function */


const reset = () => {
    const articles = templesElement.querySelectorAll('article');
    articles.forEach((article) => {
      templesElement.removeChild(article);
    });
  };

/* sortBy Function */

const sortBy = (temples) => {
    reset();
  
    const filter = document.getElementById("sortBy").value;
    let filteredTemples;
  
    switch (filter) {
      case "utah":
        filteredTemples = temples.filter((temple) => temple.location.includes("Utah"));
        break;
      case "notutah":
        filteredTemples = temples.filter((temple) => !temple.location.includes("Utah"));
        break;
      case "older":
        filteredTemples = temples.filter((temple) => new Date(temple.dedicated) < new Date(1950, 0, 1));
        break;
      case "all":
      default:
        filteredTemples = temples;
        break;
    }
  
    displayTemples(filteredTemples);
  };
  
document.querySelector("#sortBy").addEventListener("change" , () => { sortBy (templeList)});
getTemples();

/* Event Listener */
