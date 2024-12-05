
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('popupModal');
    const openModalButton = document.getElementById('openModal');
    const closeModalButton = document.querySelector('.close-btn');
  
    openModalButton.addEventListener('click', () => {
      modal.style.display = 'flex';
    });
  
    closeModalButton.addEventListener('click', () => {
      modal.style.display = 'none';
    });
  
    window.addEventListener('click', (event) => {
      if (event.target == modal) {
        modal.style.display = 'none';
      }
    });
  });
  
  
  const accordionButtons = document.querySelectorAll('.accordion-button');
  
  accordionButtons.forEach(button => {
    button.addEventListener('click', () => {
      button.classList.toggle('active');
      const content = button.nextElementSibling;
  
      if (button.classList.contains('active')) {
        content.style.display = 'block';
      } else {
        content.style.display = 'none';
      }
    });
  });
  