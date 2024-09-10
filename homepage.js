let galleries = document.querySelectorAll(".gallery");
let backButtons = document.querySelectorAll(".backbuttn");
let nextButtons = document.querySelectorAll(".nextbuttn");
    
for (let i = 0; i < galleries.length; i++) {
    const gallery = galleries[i];
      const backButton = backButtons[i];
      const nextButton = nextButtons[i];
    
      backButton.addEventListener("click", () => {
        gallery.style.scrollBehavior = "smooth";
        gallery.scrollLeft -= 1200;
      });
    
      nextButton.addEventListener("click", () => {
        gallery.style.scrollBehavior = "smooth";
        gallery.scrollLeft += 1200;
      });
    }
    function autoScrollTopGallery() {
        const topGallery = document.querySelector('.topgallery');
        const images = topGallery.querySelectorAll('img');
        const imageWidth = images[0].clientWidth; 
        const scrollAmount = imageWidth + 50; 
        let scrollDirection = 1; 
  
        topGallery.style.scrollBehavior = "smooth";
  
        function scroll() {
          topGallery.scrollLeft += scrollAmount * scrollDirection;
  
          if (topGallery.scrollLeft >= topGallery.scrollWidth - topGallery.clientWidth) {
            
            scrollDirection = -1;
          } else if (topGallery.scrollLeft <= 0) {
            
            scrollDirection = 1;
          }
  
          setTimeout(scroll, 5000); 
        }
  
        scroll(); 
      }
  
      
  
      autoScrollTopGallery(); 