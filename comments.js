// const renderCards = (array) => {
  //   let refStuff = "";
  
  //   array.forEach((wizard) => {
  //     refStuff += domString(wizard);
  //   });
    
  //   renderToDom("#app", refStuff);
  // }

  // const search = (event) => {
  //   const eventLC = event.target.value.toLowerCase();
  //   const searchResult = wizards.filter(wizard =>
  //     wizard.name.toLowerCase().includes(eventLC) ||
  //     wizard.specialSkill.toLowerCase().includes(eventLC) ||
  //     wizard.house.toLowerCase().includes(eventLC)
  //   );
  //   renderCards(searchResult);
  // }





  // When delete button is clicked, and (e), the event, occurs, this code runs.
  // app.addEventListener('click', (e) => {
  //   // Tests for if targeted delete button has delete in the domString, (all cards should).
  //   if (e.target.id.includes('delete')) {
      
  //     // , is needed to be the starting position, id is your end poistion.
  //     // split("--") = calls on your -- in the domString to target where the event occurs.
  //     const [, id] = e.target.id.split('--');
      
  //     // Finding clicked button's index. || Taking string and converting to number.
  //     const index = wizards.findIndex((e) => e.id === Number(id));
      
  //     // const cardex = wizards.findIndex(e);

  //     // Deletes index of card selected. || , 1 = how many items in array you want to splice.
  //     // wizards.splice(index, 1);
      

  //     // Reapplys cards with "new" array to DOM. 
  //     cardsOnDom(wizards);  
  //   }
  // });


  // showFormButton.addEventListener("click", () => {
  //   cardsOnDom(formMain);
  // });


  


// const targetModal = document.querySelector(".modal");
// const overlay = document.querySelector(".overlay");
// const openModalBtn = document.querySelector(".addWizard");
// const closeModalBtn = document.querySelector(".closeBtn");
  
// // Creates variable for opening modal.
// const openModal = () => {
//   targetModal.classList.remove("hidden");
//   overlay.classList.remove("hidden");
//   console.log("working");
// };

// openModalBtn.addEventListener("click", openModal);

// // Creates variable for closing modal.
// const closeModal = () => {
//   targetModal.classList.add("hidden");
//   overlay.classList.add("hidden");
// };





// const cardsOnDom2 = (event) => {
//   let domString2 = "";
//   for (const wizard of event) {

    
//     // Adds to domString varible.
//     domString2 += 
//       `<div class = "formMain">
//         <form>
//           <div class="form-floating mb-3">
//             <label for="floatingInput">Wizard Name</label>
//             <input type="text" class="form-control" id="name" placeholder="Name" required>
//           </div>

//           <div class="form-floating mb-3">
//             <label for="floatingInput">Wizard Image</label>
//             <input type="url" class="form-control" id="image" placeholder="image" required>
//           </div>

//           <div class="form-floating mb-3">
//             <label for="floatingInput">Special Skill</label>
//             <input type="text" class="form-control" id="specialSkill" placeholder="Skill" required>
//           </div>

//           <div class="form-floating mb-3">
//             <label for="floatingInput">House</label>
//             <input type="text" class="form-control" id="house" placeholder="House" required>
//           </div>
//           <button type="submit" class="btn btn-success" id="form-submit">Add Wizard</button>
//         </form>
//       </div>`;
//   }
//   renderToDom("#formBtn", domString2);
// };

// showFormButton.addEventListener("click", () => {
//   cardsOnDom(form);
// });





// const createStudent = (e) => { e.preventDefault(); // Prevents page from reloading prior to changes being made const 
//   selectedRadioButton = document.querySelector('input[name="flexRadioDefault"]:checked'); const newPreferToDo = document.querySelector(label[for="${selectedRadioButton.id}"]).innerText; const newStudentObj = {  
//     // Creating variable to use to create new pet card object
//       id: students.length +1,
//         firstName: document.querySelector("#exampleFirstName").value,
//         lastName: document.querySelector("#exampleLastName").value,
//         const newPreferToDo = document.querySelector(label[for="${selectedRadioButton.id}"]).innerText;
//         students.push(newStudentObj);   
//         // Pushes new student card object to end of existing petCards array 
//         cardsOnDom(students);  
//         // Repaints DOM with new array 
//         form.reset();  // Resets form 
//         } 
        
//         form.addEventListener("submit", createStudent);

    // const dropValue = drop.value;
    // document.querySelector('.dropdownOutput').textContent = dropValue;





    // const dropValue = drop.value;
    // document.querySelector('.dropdownOutput').textContent = dropValue;
