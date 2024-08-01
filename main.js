// Sets array for all wizards currently in school.
const wizards = [
  {
    id: 1,
    name: "Gon",
    house: "Hufflepuff",
    specialSkill: "Specializes in physical enhancement magic, and gets extremely powerful when angered.",
    imageUrl: "https://www.pumpheadgear.com/cdn/shop/products/hunter-x-hunter-t-shirt-gon_lr_eg22013_2.jpg?v=1659053886",
  },
  {
    id: 2,
    name: "Ranga",
    house: "Ravenclaw",
    specialSkill: "Commands wind and lightning magic during combat. He is also the only dog student.",
    imageUrl: "https://pbs.twimg.com/media/D3dSlgQV4AAjpgl.jpg",
  },
  {
    id: 3,
    name: "Noelle",
    house: "Ravenclaw",
    specialSkill: "Uses water magic to cover her body in armor and move quickly around battles in a way similar to dancing.",
    imageUrl: "https://pbs.twimg.com/media/GNDcctJXgAE0Qfi.jpg:large",
  },
  {
    id: 4,
    
    name: "Asta",
    house: "Hufflepuff",
    specialSkill: "Commands two special anti-magic swords that destroy almost all magic sliced through.",
    imageUrl: "https://static.tvtropes.org/pmwiki/pub/images/natsu_ft_2018.png",
  },
  {
    id: 5,
    name: "Killua",
    house: "Slytherin",
    specialSkill: "Was trained to assassinate as a child, but decided to become a wizard wiht his friend.",
    imageUrl: "https://m.media-amazon.com/images/I/41hICtzkz+L._AC_UF894,1000_QL80_.jpg",
  },
  {
    id: 6,
    name: "Yami",
    house: "Ravenclaw",
    specialSkill: "Specializes in dark magic, and uses it to reinforce his katana and use various moves this way.",
    imageUrl: "https://cdn.gameleap.com/images/articles/art_wXy8FJ4HQc/art-img_X7i_JcYVM/1x.webp",
  },
  {
    id: 7,
    name: "All Might",
    house: "Hufflepuff",
    specialSkill: 'Yells "I AM HERE!" when he arrives anywhere.',
    imageUrl: "https://ultrarumble.com/assets/Character/Ch012/GUI/FaceIcon/T_ui_Ch012_CharaImage.png",
  },
  {
    id: 8,
    name: "Sasori",
    house: "Slytherin",
    specialSkill: "Specializes in puppet magic, and creates his own puppets by hand.",
    imageUrl: "https://i.pinimg.com/736x/f9/dd/b2/f9ddb2aa85b441e26315c6eecafdd496.jpg",
  },
  {
    id: 9,
    name: "Sakura F",
    house: "Gryffindor",
    specialSkill: "Specializes in healing magic, but has trained her physical abilities to the max.",
    imageUrl: "https://www.nicepng.com/png/detail/304-3044665_view-fullsize-haruno-sakura-image-naruto-shippuden-older.png",
  },
  {
    id: 10,
    name: "Lucy",
    house: "Hufflepuff",
    specialSkill: "Uses magic to summon spirits to fight for her, and can borrow their power.",
    imageUrl: "https://preview.redd.it/discussion-which-one-of-lucys-outfits-from-the-3-arcs-is-v0-21e8h3zehbs81.jpg?width=350&format=pjpg&auto=webp&s=399582856d04b4f00e0b650d1c0b3f5261f4c885",
  },
  {
    id: 11,
    name: "Rimaru",
    house: "Ravenclaw",
    specialSkill: "Master of many magics, but goes to school because he missed the opportunity.",
    imageUrl: "https://a.storyblok.com/f/178900/660x920/fecc56d478/slime-full-cast-1.png/m/filters:quality(95)format(webp)",
  },
  {
    id: 12,
    name: "Dahlia",
    house: "Gryffindor",
    specialSkill: "Specializes in making magical tools and often falls asleep while working late.",
    imageUrl: "https://i0.wp.com/www.animefeminist.com/wp-content/uploads/2024/07/Dahlia-1.jpg?fit=810%2C606&ssl=1",
  },
  {
    id: 13,
    name: "Rudy",
    house: "Ravenclaw",
    specialSkill: "Specializes in water and earth magics, and has two wives even though he's still in school.",
    imageUrl: "https://s1.zerochan.net/Rudeus.Greyrat.600.4003848.jpg",
  },
  {
    id: 14,
    name: "Sakura M",
    house: "Slytherin",
    specialSkill: "Has no ability to use magic, but has an innate talent for hand-to-hand combat.",
    imageUrl: "https://s1.zerochan.net/Sakura.Haruka.600.4079008.jpg",
  },
  {
    id: 15,
    name: "Iwatani",
    house: "Ravenclaw",
    specialSkill: "Specializes in defensive magic, but has extremely powerful offenses that come at a cost.",
    imageUrl: "https://i.redd.it/k9l4bm4dx7f81.png",
  },
  {
    id: 16,
    name: "Usato",
    house: "Hufflepuff",
    specialSkill: "Uses healing magic to instantly regenerate and power his physical abilities during combat.",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqEK8Op7vqBGvDIrW3DvxZyi6MgzbCsAA4SA&s",
  },
  {
    id: 17,
    name: "Sylphie",
    house: "Gryffindor",
    specialSkill: "Specializes in water magic, and happens to be one of Rudy's wives.",
    imageUrl: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c99a3687-97c4-4470-907e-7e275f0522d8/dga4ud4-9c8e3ef5-12c8-4245-8382-2ad46c4db43f.png/v1/fill/w_1280,h_1830,q_80,strp/sylphiette_by_takoongyi_dga4ud4-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTgzMCIsInBhdGgiOiJcL2ZcL2M5OWEzNjg3LTk3YzQtNDQ3MC05MDdlLTdlMjc1ZjA1MjJkOFwvZGdhNHVkNC05YzhlM2VmNS0xMmM4LTQyNDUtODM4Mi0yYWQ0NmM0ZGI0M2YucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.6FwOFmPxde8g5YJ99G3-OlY_2PsNRfJFkIYW8aWc-K4",
  },
  {
    id: 18,
    name: "Mashle",
    house: "Hufflepuff",
    specialSkill: "Can't use magic, but physically is unmatched. Also he loves cream puffs.",
    imageUrl: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/4b5ef41a-c35f-4380-b4b9-b6c879c9386d/dg51h2o-2f8f72e8-6fe6-4097-b68a-ecd0b7080c4a.png/v1/fill/w_932,h_858/mash_burnedead_render_by_bykuya_dg51h2o-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9Mzc0OCIsInBhdGgiOiJcL2ZcLzRiNWVmNDFhLWMzNWYtNDM4MC1iNGI5LWI2Yzg3OWM5Mzg2ZFwvZGc1MWgyby0yZjhmNzJlOC02ZmU2LTQwOTctYjY4YS1lY2QwYjcwODBjNGEucG5nIiwid2lkdGgiOiI8PTQwNzIifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.DrhhiNaSn2aCjbscfI-imVIfMSXeVmEK2aHBH4XeznQ",
  },
  {
    id: 19,
    name: "Rick",
    house: "Ravenclaw",
    specialSkill: "Can only use beginner-tier magic, but he's refined it to become stronger than most high-tier magic. He's also 30.",
    imageUrl: "https://pbs.twimg.com/media/GRib5yTaEAA6g2h.jpg:large",
  },
  {
    id: 20,
    name: "Naruto",
    house: "Hufflepuff",
    specialSkill: "Creates vast duplicates of himself during combat, and can concentrate powerful energy into a weapon.",
    imageUrl: "https://naruto-official.com/index/char_naruto.webp",
  },
  {
    id: 21,
    name: "Sasuke",
    house: "Slytherin",
    specialSkill: "Specializes in lightning magic, and uses his powerful eyes in vast destructive ways.",
    imageUrl: "https://s3.aminoapps.com/image/26wvt7kg56su6a2vqu7n7lyn6qbcmxja_00.jpg",
  },
  {
    id: 22,
    name: "Izuku",
    house: "Gryffindor",
    specialSkill: "Was granted strong power from All Might, and is training it to become more powerful than ever before.",
    imageUrl: "https://w0.peakpx.com/wallpaper/648/914/HD-wallpaper-deku-seinen-boku-no-hero-academia-izuku-midoriya.jpg",
  },
  {
    id: 23,
    name: "Yuno",
    house: "Ravenclaw",
    specialSkill: "Specializes in wind magic, and was granted powerful by a powerufl pixie wind-spirit.",
    imageUrl: "https://cdn.gameleap.com/images/articles/art_GCwKGrTE3S/art-img_EanX5fxgP/1x.webp",
  },
  {
    id: 24,
    name: "Roxie",
    house: "Gryffindor",
    specialSkill: "Extremely powerful water mage, and happens to be the other of Rudy's wives.",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShehg-bFTjnwgkiMY8972vFeVYMP6YgGA3Ww&s",
  },
  {
    id: 25,
    name: "Gray",
    house: "Ravenclaw",
    specialSkill: "Specializes in ice magic, and somehow his clother constantly are disappearing from him body.",
    imageUrl: "https://pm1.aminoapps.com/6132/d2e7ee408f8ced0ff5869e8dd0d356d74ce57666_hq.jpg",
  }
];

// Array for expelled students.
const banished = [
  {
    id: 1,
      name: "All For One",
      house: "Banished",
      specialSkill: "Steals magics from others, and can give them to others as well. He wants to rule the world.",
      imageUrl: "https://static.wikia.nocookie.net/my-hero-academia-ones-justice/images/5/5a/All_For_One_Character_Model_One%27s_Justice.jpg",
  },
  {
    id: 2,
      name: "Madara",
      house: "Banished",
      specialSkill: "Uses his powerful eyes in combat, and seeks to raise a powerful 10-tailed beast to destroy the world.",
      imageUrl: "https://static.wikia.nocookie.net/boruto/images/2/27/Madara-Uchiha.webp",
  },
  {
    id: 3,
    name: "Achnologia",
    house: "Banished",
    specialSkill: "Has a large, dark dragon-like aura exuding at all times, and when he appears, destruction follows.",
    imageUrl: "https://static.wikia.nocookie.net/villains/images/7/75/BlackDragon.png",
  },
  {
    id: 4,
    name: "Tomura",
    house: "Banished",
    specialSkill: "Was implanted with All For One's powers and altered his body to be insanely powerful.",
    imageUrl: "https://static.wikia.nocookie.net/bokunoheroacademia/images/0/01/Post-War_Tomura_Shigaraki.png",
  },
  {
    id: 5,
    name: "Clayman",
    house: "Banished",
    specialSkill: "Controls people by stealing their hearts and replacing them with one he can control and detonate.",
    imageUrl: "https://static.wikia.nocookie.net/villains/images/1/1b/Clayman_Anime.png",
  }
];

// Array for random house when adding new wizards.
const houses = ["Hufflepuff", "Slytherin", "Gryffindor", "Ravenclaw"];

// Sets renderToDom, this is how you render the domString into the html with the card attributes.
const renderToDom = (divId, htmlToRender) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = htmlToRender;
};

// Decides which cards you want on the dom when using this command. (According to filter and selected div)
const cardsOnDom = (array, divId) => {
  let domString = array.map(wizard => {

    // Changes footer class of card depending on wizard.house string.
    const wizardFooter =
    // ? tests if first part of statement is true, if so then changes footer class to new id.
    wizard.house === "Hufflepuff" ? "hufflepuffFooter" :
    wizard.house === "Slytherin" ? "slytherinFooter" :
    wizard.house === "Gryffindor" ? "gryffindorFooter" :
    wizard.house === "Ravenclaw" ? "ravenclawFooter" :
    wizard.house === "Banished" ? "banishedFooter" :
    "";

    // Returns the domString variable to give the result of what to renderToDom using the cardsOnDom object.
    return `
      <div class="card" style="width: 18rem;">
        <h5 class="card-title">${wizard.name}</h5>
        <img src="${wizard.imageUrl}" class="img-thumbnail" id = "imgMain" alt="...">
        <h6 class="card-body1">${wizard.specialSkill}</h6>
        <div class="card-footer ${wizardFooter}" id="footer">${wizard.house}</div>
        <button class="btn btn-danger" id="delete--${wizard.id}">Expel</button>
      </div>`;
  });
  renderToDom(divId, domString);
};


// Sets variable for the .btn-close class in html.
const startDOM = document.querySelector(".btn-close");

// Adds click event to when close button is clicked on start modal.
startDOM.addEventListener("click", () => {
  // Renders domString into #app and displays wizard array.  
  cardsOnDom(wizards,"#app");
});

// Adds event to expel button when clicked.
document.querySelector("#app").addEventListener("click", (e) => {
  // Tests if wizard.id has delete in it, which they all do.
  if (e.target.id.includes("delete")) {
    // , is needed to be the starting position, id is your end poistion.
    // split("--") = calls on your -- in the domString to target where the event occurs.
    const [, id] = e.target.id.split("--");
    // Finds the soon to be expelled wizard's id and converts it to a number.
    const index = wizards.findIndex(wizard => wizard.id === Number(id));

    //Tests if the id of the soon to be expelled wizard's id is not equal to -1, which they all will not be.
    if (index !== -1) {
      // Sets a variable for the soon to be expelled wizards information and deletes them.
      const banishedWizard = wizards.splice(index, 1)[0];
      // Changes the banishedWizard's house to "Banished" for further styling.
      banishedWizard.house = "Banished";
      // Pushes the banishedWizard to the banished array.
      banished.push(banishedWizard);
      // Redisplays array after removing wizards.
      cardsOnDom(wizards, "#app");
      // cardsOnDom(banished, "app2nd");
    }
  }
});
  
  // Sets filter for filter wizard buttons.
  const filter = (array, typeString) => {

    // Creates new array.
    const wizardArray = [];
  
    // Sets functionality for the filter.
    for (const wizard of array) {
      // Tests for if wizard.house === to conditioned typeString.
      if (wizard.house === typeString) {
        // Pushes specified wizards to wizardArray.
        wizardArray.push(wizard);
      }
    }
  
    // Utility to finalzie wizardArray, here for if needed anywhere else, must have this at the bottom of all filters.
    return wizardArray;
  };

  // Sets variable form to link to the .form div.
  const form = document.querySelector("form");

  

  // Creates new wizard variable and creates an event inside.
  const createWizard = (e) => {

    // Gives a random number between 0 and 3, due to the houses.length being 4. It then sets a variable for that. (Math.floor rounds)
    const randomNumber = Math.floor(Math.random() * houses.length);
    // Sets a variable for a randomly selected house from the houses array.
    const randomHouse = houses[randomNumber];

    // Needed for every form.
    e.preventDefault();

    // Declares what will be part of created wizard.
    const newWizardObj = {
      // Gives new wizard and id 1 higher than the final wizard in the wizards array.
      id: wizards.length + 1,
      name: document.querySelector("#name").value,
      imageUrl: document.querySelector("#image").value,
      // Declares that the house on a new wizard will be completely random.
      house: randomHouse,
      specialSkill: document.querySelector("#specialSkill").value
    }

    // Pushes created wizard to array.
    wizards.push(newWizardObj);

    // Pushes array to DOM.
    cardsOnDom(wizards, "#app");

    // Must have when changing form on-site. (Resets form DUH)
    form.reset();
  }

  // Adds functionality to the create wizard button.
  form.addEventListener('submit', createWizard);
  
  // Creates app variable and assigns it to #app div.
  const app = document.querySelector('#app');

   // Creates variable that targets the filtered wizard buttons on the DOM.
   const showHufflepuffButton = document.querySelector("#hufflepuff");
   const showSlytherinButton = document.querySelector("#slytherin");
   const showGryffindorButton = document.querySelector("#gryffindor");
   const showRavenclawButton = document.querySelector("#ravenclaw"); 
   const showBanishedButton = document.querySelector("#banished");
   const showAllButton = document.querySelector("#resetBtn");
   
   // Gives funcitonality to "Show All Wizards" button by showing the wizards array on the DOM when clicked.
   showAllButton.addEventListener("click", () => {
     cardsOnDom(wizards, "#app");
   });

  // Adds funtionality to "hufflepuff" button to filter only hufflepuff on the array.
  showHufflepuffButton.addEventListener("click", () => {
    // Creates array that contains filtered wizards with typeString === to "Hufflepuff".
    const hufflepuff = filter(wizards, "Hufflepuff");
    // Displays new filtered array on the DOM.
    cardsOnDom(hufflepuff, "#app");
  });
  
  // Adds funtionality to "Slytherin" button to filter only slytherin on the array.
  showSlytherinButton.addEventListener("click", () => {
    const slytherin = filter(wizards, "Slytherin");
    cardsOnDom(slytherin, "#app");
  });

  // Adds funtionality to "Gryffindor" button to filter only gryffindors on the array.
  showGryffindorButton.addEventListener("click", () => {
    const gryffindor = filter(wizards, "Gryffindor");
    cardsOnDom(gryffindor, "#app");
  });

  // Adds funtionality to "Ravenclaw" button to filter only ravenclaws on the array.
  showRavenclawButton.addEventListener("click", () => {
    const ravenclaw = filter(wizards, "Ravenclaw");
    cardsOnDom(ravenclaw, "#app");
  });
  
  // Adds functionality to "Banished" button to filter only expelled wizards, by displaying the banished array.
  showBanishedButton.addEventListener("click", () => {
    cardsOnDom(banished, "#app");
  });
  
  


  