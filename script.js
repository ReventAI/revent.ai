const menuToggle = document.querySelector('.menu-toggle');
const menuList = document.querySelector('.menu-list');
const dropdowns = document.querySelectorAll('.dropdown');

menuToggle.addEventListener('click', () => {
  menuList.classList.toggle('active');
});

dropdowns.forEach((dropdown) => {
  const toggle = dropdown.querySelector('a');
  const dropdownContent = dropdown.querySelector('.dropdown-content');

  toggle.addEventListener('click', (e) => {
    e.preventDefault();
    dropdownContent.classList.toggle('active');
  });

  dropdown.addEventListener('mouseleave', () => {
    dropdownContent.classList.remove('active');
  });
});

// Function to close dropdowns when screen size is increased
function closeDropdowns() {
  if (window.innerWidth > 768) {
    dropdowns.forEach((dropdown) => {
      const dropdownContent = dropdown.querySelector('.dropdown-content');
      dropdownContent.classList.remove('active');
    });

    menuList.classList.remove('active'); // Close the menu as well
  }
}

// Event listener for window resize
window.addEventListener('resize', closeDropdowns);





const box1 = document.getElementById('box1');
const box2 = document.getElementById('box2');

box1.addEventListener('dragstart', (event) => {
  event.dataTransfer.setData('text/plain', 'image1');
});

box2.addEventListener('dragover', (event) => {
  event.preventDefault();
});

box2.addEventListener('drop', (event) => {
  event.preventDefault();
  const data = event.dataTransfer.getData('text/plain');
  if (data === 'image1') {
    box2.innerHTML = '<img src="images/image2.jpg" alt="Image 2">';
  }
});





