/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/



/*
For assistance:
   Check out the "Project Resources" section of the Instructions tab: https://teamtreehouse.com/projects/data-pagination-and-filtering#instructions
   Reach out in your Slack community: https://treehouse-fsjs-102.slack.com/app_redirect?channel=unit-2
*/



/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/

const showPage = (list, page) => {
   //display 9 students
   const startIndex = (page * 9) - 9;
   const endIndex = page * 9;

   const studentList = document.querySelector('.student-list');
   //empty student list
   studentList.innerHTML = '';

   //looping through visible students who are on page

   for(let i = 0; i < list.length; i+= 1){
      if(i >= startIndex && i < endIndex){
      const student = list[i];

      const li = document.createElement('li');
      li.className = 'student-item cf';
         // adds innerHTML to li element with all of student information
      li.innerHTML = `
         <div class="student-details">
            <img class="avatar" src="${student.picture.large}" alt="Profile Picture">
            <h3>${student.name.first} ${student.name.last}</h3>
            <span class="email">${student.email}</span>
            </div>
         <div class="joined-details">
            <span class="date">Joined ${student.registered.date}</span>
         </div>
      `;
      studentList.appendChild(li);
      }

   }





}
/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/

const addPagination = (list) => { 
   // button for students 
   const numberOfButtons = Math.ceil(list.length / 9);
   const pageLinkList = document.querySelector('.link-list');
   // link list empty before creating
   pageLinkList.innerHTML = " ";
//creating button 
// i starts at 1 because of page numbering 
   for(let i = 1; i <= numberOfButtons; i+= 1){
      const li = document.createElement('li');
      const button = document.createElement('button');

      button.type = 'button';
      button.textContent = i;
      //nest button inside its li container
      li.appendChild(button);
      //add new completed button into li 
      pageLinkList.appendChild(li);
   }

   //first button appears active once loaded
   pageLinkList.querySelector('button').className = 'active';

   //Click handler made specific to button clicked
   pageLinkList.addEventListener('click', (e) => {
      if(e.target.tagName !== 'BUTTON'){
         return;
      }
      //find the button thats currently active 
      const activeButton = pageLinkList.querySelector('.active');
      if(activeButton){
         activeButton.className = '';
      }
      //new button clicked becomes 'active' and showPage is called with the page number
      e.target.className = 'active';
      showPage(list, e.target.textContent);
   });

}


//call both showPage and AddPagination
showPage(data, 1)
addPagination(data);


