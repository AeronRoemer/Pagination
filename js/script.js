/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/


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

//creates HTML to append page buttons and link based on 10-item pages

function appendPageLinks(list){
   //variables used in the function
   let div = document.createElement('div');
   div.className = 'pagination';
   document.querySelector('.page').appendChild(div);
   let ul = document.createElement('ul');
   div.appendChild(ul);
   let pages = list.length/10
   
   //for loop iterates over pages and creates link anchors
   for (let i = 0; i < pages; i++){
     let listLink = document.createElement('li');
     let link = document.createElement('a')
     link.href = '#';
     link.textContent = i+1;
     ul.appendChild(listLink).appendChild(link);
   }
   let links = document.getElementsByTagName('a');
   links[0].className = 'active'
   
   //adds event listeners to links to display 'active' page
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

//calls above function and passes it a list of students accessed via a DOM reference. 
appendPageLinks(studentList);
