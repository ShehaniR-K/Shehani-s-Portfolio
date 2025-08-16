const buttons = document.querySelectorAll('.skill-btn');

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      btn.classList.add('clicked');

      setTimeout(() => {
        btn.classList.remove('clicked');
      }, 200); // match duration of animation
    });
  });

  document.querySelectorAll('.skill-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    btn.classList.add('clicked');
    setTimeout(() => btn.classList.remove('clicked'), 200);
  });
});

document.querySelector('.certificate-img')?.addEventListener('click', function () {
  this.classList.add('clicked');
  setTimeout(() => this.classList.remove('clicked'), 200);
});

document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault(); // prevent form reload
  document.getElementById("confirmation").style.display = "block";

  // Optional: clear form fields
  event.target.reset();
});