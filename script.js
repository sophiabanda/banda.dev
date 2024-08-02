document.addEventListener('DOMContentLoaded', function () {
  const modal = document.getElementById('modal');
  const modalBody = document.getElementById('modal-body');
  const buttons = document.querySelectorAll('button[data-target]');
  const closeBtn = document.getElementsByClassName('close')[0];

  buttons.forEach((button) => {
    button.addEventListener('click', function () {
      const targetId = this.getAttribute('data-target');
      const targetContent = document.getElementById(targetId).innerHTML;

      // Clear the modal body before appending new content
      modalBody.innerHTML = '';

      // Load the targeted content into the modal body
      modalBody.innerHTML = targetContent;

      // Apply styles to the work section if it exists
      if (targetId === 'work') {
        modalBody.classList.add('scrollable-section');
      } else {
        modalBody.classList.remove('scrollable-section');
      }

      // Only show the modal if there is content to display
      if (modalBody.innerHTML.trim() !== '') {
        modal.style.display = 'flex';
      }
    });
  });

  closeBtn.addEventListener('click', function () {
    modal.style.display = 'none';
  });

  window.addEventListener('click', function (event) {
    if (event.target == modal) {
      modal.style.display = 'none';
    }
  });
});

// window.addEventListener(
//   'mousemove',
//   function (e) {
//     const arr = [1, 0.9, 0.8, 0.5, 0.2];

//     arr.forEach(function (i) {
//       var x = (1 - i) * 75;
//       var star = document.createElement('div');

//       star.className = 'star';
//       star.style.top = e.pageY + Math.round(Math.random() * x - x / 2) + 'px';
//       star.style.left = e.pageX + Math.round(Math.random() * x - x / 2) + 'px';

//       document.body.appendChild(star);

//       window.setTimeout(function () {
//         document.body.removeChild(star);
//       }, Math.round(Math.random() * i * 600));
//     });
//   },
//   false
// );
