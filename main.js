const wizards = [
  {
    id: 1,
    name: "Gon",
    house: "Hufflepuff",
    specialSkill: "Is nice to the point where it gets annoying.",
    imageUrl: "https://www.diamondartclub.com/cdn/shop/files/the-wizard-diamond-art-painting-34075470299329.jpg?v=1684143620&width=3000",
  },
  {
    id: 2,
    name: "Achenlogia",
    house: "Slytherin",
    specialSkill: "Has a large dark, dragon like aura exuding at all times.",
    imageUrl: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/eeba25a9-9ec6-40ad-8de3-cd92204aaa20/d5d1i0h-709bc847-e586-4fd7-a8af-8a6671e92dd6.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2VlYmEyNWE5LTllYzYtNDBhZC04ZGUzLWNkOTIyMDRhYWEyMFwvZDVkMWkwaC03MDliYzg0Ny1lNTg2LTRmZDctYThhZi04YTY2NzFlOTJkZDYuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.pPxSo4GM2Pomb__381X4FLPFiun2XtS77FJK8XmDfZw",
  },
  {
    id: 3,
    name: "Albert",
    house: "Gryffindor",
    specialSkill: "If he's not is school, he's buried in a book somewhere.",
    imageUrl: "https://static.wikia.nocookie.net/amsnorth/images/f/fe/Wizard.jpg/revision/latest?cb=20140821233401",
  },
  {
    id: 4,
    name: "Clorph",
    house: "Ravenclaw",
    specialSkill: "Has crab-like claws he can magically create on both his arms.",
    imageUrl: "https://oldschool.runescape.wiki/images/Wizard.png?26c42",
  },
  {
    id: 5,
    name: "Killua",
    house: "Slytherin",
    specialSkill: "Was trained to assassinate as a child, but decided to be a wizard.",
    imageUrl: "https://st4.depositphotos.com/24858852/25917/i/450/depositphotos_259171110-stock-photo-photo-manipulation-magic-spell-wizard.jpg",
  },
  {
    id: 6,
    name: "Natsu",
    house: "Hufflepuff",
    specialSkill: "Get's fired up every time someone wants to fight him. He's never lost.",
    imageUrl: "https://static.wikia.nocookie.net/p__/images/a/ad/AAA767AC-9A40-42B9-8AB2-93A59843A18D.png/revision/latest/scale-to-width/360?cb=20191115025221&path-prefix=protagonist",
  }
];

const banished = [];

// Sets renderToDom, which is needed to render the array in the first place.
const renderToDom = (divId, htmlToRender) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = htmlToRender;
};

// Gets the cards on the DOM and sets cardOnDom for many future uses.
const cardsOnDom = (array) => {
  let domString = "";
  for (const wizard of array) {

    // Changes footer class of card depending on pet.type string.
    const wizardFooter =
    // ? tests if first part of statement is true, if so then changes footer class to new id.
    wizard.house === "Hufflepuff" ? "hufflepuffFooter" :
    wizard.house === "Slytherin" ? "slytherinFooter" :
    wizard.house === "Gryffindor" ? "gryffindorFooter" :
    wizard.house === "Ravenclaw" ? "ravenclawFooter" :
    wizard.house === "Banished" ? "banishedFooter" :
    "";

    // Adds to domString varible.
    domString += 
      `<div class="card" style="width: 18rem;">
        <h5 class="card-title">${wizard.name}</h5>
        <img src="${wizard.imageUrl}" class="img-thumbnail" id = "imgMain" alt="...">
        <h6 class="card-body1">${wizard.specialSkill}</h6>
        <div class="card-footer ${wizardFooter}" id="footer" dataType="${wizard.house}">${wizard.house}</div>
      <button class="btn btn-danger" id="delete--${wizard.id}">Expel</button>
      </div>`;
  }
  renderToDom("#app", domString);
};
  
  // Sets filter for filter pet buttons at bottom of page.
  const filter = (array, typeString) => {

    // Creates new array with conditions that the filter follows.
    const wizardArray = [];
  
    // Sets functionality for the filter.
    for (const wizard of array) {
      // Tests for if pet.type === to conditioned typeString.
      if (wizard.house === typeString) {
        // Pushes specified pets to wizardArray.
        wizardArray.push(wizard);
      }
    }
  
    // Utility to finalzie petArray, here for if needed anywhere else, must have this at the bottom of all filters.
    return wizardArray;
  };

  // Get all the cards to render on the DOM.
  cardsOnDom(wizards);

  const form = document.querySelector("form");

  // Creates new pet varialbe and creates an event inside.
  const createWizard = (e) => {

    // Needed for every form.
    e.preventDefault();

    // Declares what will be part of created pet.
    const newWizardObj = {
      id: wizards.length + 1,
      name: document.querySelector("#name").value,
      imageUrl: document.querySelector("#image").value,
      type: document.querySelector("#house").value,
      specialSkill: document.querySelector("#specialSkill").value
    }

    // Pushes created pet to "new" array.
    wizards.push(newWizardObj);

    // Pushes "new" array to DOM.
    cardsOnDom(wizards);
    closeModal();

    // Must have when changing form on-site.
    form.reset();
  }

  // Adds functionality to the create pet button.
  form.addEventListener('submit', createWizard);
  
  // Creates app variable and assigns it to #app div. ??
  const app = document.querySelector('#app');

  // When delete button is clicked, and (e), the event, occurs, this code runs.
  app.addEventListener('click', (e) => {
    // Tests for if targeted delete button has delete in the domString, (all cards should).
    if (e.target.id.includes('delete')) {
      
      // , is needed to be the starting position, id is your end poistion.
      // split("--") = calls on your -- in the domString to target where the event occurs.
      const [, id] = e.target.id.split('--');
      
      // Finding clicked button's index. || Taking string and converting to number.
      const index = wizards.findIndex((e) => e.id === Number(id));
      
      // const cardex = wizards.findIndex((e));

      // Deletes index of card selected. || , 1 = how many items in array you want to splice.
      // banished.push((e));
      wizards.splice(index, 1);
      // banished.push(e);
      banished.push(cardex);

      // Reapplys cards with "new" array to DOM. 
      cardsOnDom(wizards);  
    }
  });
  

   // Creates variable that targets the filter pet buttons on the DOM.
   const showHufflepuffButton = document.querySelector("#hufflepuff");
   const showSlytherinButton = document.querySelector("#slytherin");
   const showGryffindorButton = document.querySelector("#gryffindor");
   const showRavenclawButton = document.querySelector("#ravenclaw"); 
   const showBanishedButton = document.querySelector("#banished");
   const showAllButton = document.querySelector("#resetbtn");
   
   // Adds all pets button to show all "pets" in the array.
   showAllButton.addEventListener("click", () => {
     cardsOnDom(wizards);
   });

  // Adds funtion to "hufflepuff" button to filter only hufflepuff on the array.
  showHufflepuffButton.addEventListener("click", () => {
    // Creates array that contains filtered wizards with typeString === to "Hufflepuff".
    const hufflepuff = filter(wizards, "Hufflepuff");
    // Displays new filtered array on the DOM.
    cardsOnDom(hufflepuff);
  });
  
  // Adds funtion to "Slytherin" button to filter only slytherin on the array.
  showSlytherinButton.addEventListener("click", () => {
    const slytherin = filter(wizards, "Slytherin");
    cardsOnDom(slytherin);
  });

  // Adds funtion to "Gryffindor" button to filter only gryffindors on the array.
  showGryffindorButton.addEventListener("click", () => {
    const gryffindor = filter(wizards, "Gryffindor");
    cardsOnDom(gryffindor);
  });

  // Adds funtion to "Ravenclaw" button to filter only ravenclaws on the array.
  showRavenclawButton.addEventListener("click", () => {
    const ravenclaw = filter(wizards, "Ravenclaw");
    cardsOnDom(ravenclaw);
  });
  
  showBanishedButton.addEventListener("click", () => {
    cardsOnDom(banished);
  });
  
const targetModal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const openModalBtn = document.querySelector(".addWizard");
const closeModalBtn = document.querySelector(".closeBtn");
  
// Creates variable for opening modal.
const openModal = () => {
  targetModal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

openModalBtn.addEventListener("click", openModal);

// Creates variable for closing modal.
const closeModal = () => {
  targetModal.classList.add("hidden");
  overlay.classList.add("hidden");
};
