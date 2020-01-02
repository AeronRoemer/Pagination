/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   
// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing


/*** 
   Add your global variables that store the DOM elements you will 
   need to reference and/or manipulate. 
   
   But be mindful of which variables should be global and which 
   should be locally scoped to one of the two main functions you're 
   going to create. A good general rule of thumb is if the variable 
   will only be used inside of a function, then it can be locally 
   scoped to that function.
***/

const studentList = document.getElementsByClassName('student-item');

// functions to create pages. Accepts a list to be paginated and a page number.  

function showPage(list, page){
   let startIndex = (page * 10) - 10;
   let endIndex = page * 10;
   for (let i = 0; i < list.length; i++){
      if (i >= startIndex && i < endIndex){
         list[i].style.display = '';
      } else {
         list[i].style.display = 'none';
      };
   }
};

showPage(studentList, 1);

/*** 
   Create the `appendPageLinks function` to generate, append, and add 
   functionality to the pagination buttons.
***/

function appendPageLinks(list){
   let div = document.createElement('div');
   div.className = 'pagination';
   document.querySelector('.page').appendChild(div);
   let ul = document.createElement('ul');
   div.appendChild(ul);
   let pages = list.length/10
   for (let i = 0; i < pages; i++){
     let listLink = document.createElement('li');
     let link = document.createElement('a')
     link.href = '#';
     link.textContent = i+1;
     ul.appendChild(listLink).appendChild(link);
   }
   let links = document.getElementsByTagName('a');
   links[0].className = 'active'

   for (let i = 0; i < links.length; i++){
      links[i].addEventListener('click', (e) => {
         for (let j = 0; j < links.length; j++){
            links[j].classList.remove('active');
         }
         e.target.className = 'active';
         showPage(studentList, (i+1));
      })
   };
};



appendPageLinks(studentList);

// Remember to delete the comments that came with this file, and replace them with your own code comments.