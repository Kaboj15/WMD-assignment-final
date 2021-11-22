//Function expression to select elelements
const selectElement = (s) => document.querySelector(s);

//Open the menu on click
selectElement('.open').addEventListener('click', () => {
  selectElement('.nav-list').classList.add('active');
	
});
//Close the menu on click
selectElement('.close').addEventListener('click', () =>{
  selectElement('.nav-list').classList.remove('active');
	
});


const portfolioFrenchs = document.querySelectorAll('.portfolio-french')

   
portfolioFrenchs.forEach(portfolioFrench=> {

   portfolioFrench.addEventListener('mouseover', () =>{
	 portfolioFrench.childNodes[1].classList.add('img-darken'); 
   
   })
   
    portfolioFrench.addEventListener('mouseout', () =>{
	 portfolioFrench.childNodes[1].classList.remove('img-darken'); 
   
   })
})