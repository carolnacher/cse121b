
  document.addEventListener("DOMContentLoaded", function () {
    const instruments = [
        {
          name: "Cello",
          image: "images/cello1.jpg",
          price: 800,
          description: "A beautiful cello for professional musicians.",
        },
        {
          name: "Guitar",
          image: "images/blackgit.jpg",
          price: 350,
          description: "Yamaha CG142S",
        },
        {
          name: "Guitar",
          image: "images/gityel.jpg",
          price: 300,
          description: "Folk Yamaha F310",
        },
        {
          name: "Guitar",
          image: "images/gitbla.jpg",
          price: 420,
          description: "Clásica Aranjuez SC040A",
        },
        {
          name: "Guitar",
          image: "images/gitstart.jpg",
          price: 500,
          description: "Guitarra eléctrica FENDER Squier Affinity Stratocaster BLK",
        },
        {
          name: "Violin",
          image: "images/violin1.jpg",
          price: 480,
          description: "Violin JINQU JVN01 1/2",
        },
        {
          name: "Violin",
          image: "images/violin3.jpg",
          price: 370,
          description: "Violin JINQU JVN01 3/4",
        },
        {
          name: "Violin",
          image: "images/violinpink.jpg",
          price: 322,
          description: "Violin JINQU JVN01 4/4",
        },
        {
          name: "Violin",
          image: "images/violin4.jpg",
          price: 600,
          description: "Violin JINQU JVN01A 1/4",
        },
        {
          name: "Violin",
          image: "images/violin5.jpg",
          price: 300,
          description: "Violin JINQU JVN01A 3/4",
        },
        {
          name: "Violin",
          image: "images/violin4.jpg",
          price: 320,
          description: "Violin JINQU JVN01 4/4",
        },
        {
          name: "Piano",
          image: "images/piano.jpg",
          price: 400,
          description: "Piano Casio AP470BK",
        },
        {
          name: "Piano",
          image: "images/pianofront.jpg",
          price: 1200,
          description: "Piano Digital Yamaha Arius YDP105R",
        },
        {
          name: "clasis Viola",
          image: "images/bateriablack.jpg",
          price: 346,
          description: "An elegant black acoustic guitar for all levels.",
        },
        {
          name: "Drums",
          image: "images/batcolors.jpg",
          price: 1300,
          description: "5 Body Drum Kit with 22 Pdp Spectrum Bass Drum without Hardware",
        },
        {
          name: "Drums",
          image: "images/bateria.jpg",
          price: 1150,
          description: "5 Body Drum Kit with 20 Pdp Spectrum Bass Drum without Hardware - AVAILABLE in BLUE",
        },
      ];
  
      const instrumentScroll = document.getElementById("instrument-scroll");

      instruments.forEach((instrument, index) => {
        const instrumentElement = document.createElement("div");
        
        instrumentElement.setAttribute("data-index", index);
        instrumentElement.classList.add('instrument');
    
        const instrumentImage = document.createElement('img');
        instrumentImage.src = instrument.image;
        instrumentImage.alt = instrument.name;
    
        // Establece un ancho y una altura fijos en las imágenes
        instrumentImage.style.width = '245px'; // Ajusta el ancho según tus preferencias
        instrumentImage.style.height = '270px'; // Ajusta la altura según tus preferencias
    
        const instrumentName = document.createElement('h2');
        instrumentName.textContent = instrument.name;
    
        const instrumentPrice = document.createElement('p');
        instrumentPrice.textContent = `Price: $${instrument.price}`;
    
        const instrumentDescription = document.createElement('p');
        instrumentDescription.textContent = instrument.description;
    
        instrumentElement.appendChild(instrumentImage);
        instrumentElement.appendChild(instrumentName);
        instrumentElement.appendChild(instrumentPrice);
        instrumentElement.appendChild(instrumentDescription);
    
        instrumentScroll.appendChild(instrumentElement);
      });
    
      
      const instrumentCategorySelect = document.getElementById("instrument-category");
      const clearFilterButton = document.getElementById("clear-filter");


      filterInstruments("all");
    
      instrumentCategorySelect.addEventListener("change", function () {
        const selectedCategory = instrumentCategorySelect.value.toLowerCase();
        filterInstruments(selectedCategory);
      });
    
    
      clearFilterButton.addEventListener("click", function () {
        clearFilters();
      });
    
      // Función para filtrar instrumentos por categoría
      function filterInstruments(category) {
        const allInstrumentElements = document.querySelectorAll(".instrument");
        allInstrumentElements.forEach((element) => {
          const instrumentCategory = instruments[element.getAttribute("data-index")].name.toLowerCase();
          if (category === "all" || instrumentCategory.includes(category)) {
            element.style.display = "block";
          } else {
            element.style.display = "none";
          }
        });
      }
    
  
    });
    // Función para abrir las URL al hacer clic en los enlaces
function openExternalURL(url) {
  window.open(url, "_blank");
}

// Agrega un evento de clic al enlace external-data-link1
document.getElementById("external-data-link1").addEventListener("click", () => {
  openExternalURL("https://cursa.app/cursos-online-sonidos-y-instrumentos-musicales-gratis");
});

// Agrega un evento de clic al enlace external-data-link2
document.getElementById("external-data-link2").addEventListener("click", () => {
  openExternalURL("https://www.amazon.com/s?k=musical+instruments&crid=3V84AF651J46A&sprefix=musica%2Caps%2C215&ref=nb_sb_ss_ts-doa-p_1_6");
});

// Agrega un evento de clic al enlace external-data-link3
document.getElementById("external-data-link3").addEventListener("click", () => {
  openExternalURL("https://www.youtube.com/watch?v=pAGiqbdXYIo");
});
