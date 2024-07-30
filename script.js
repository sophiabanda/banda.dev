document.addEventListener('DOMContentLoaded', function () {
  const collapseButtons = document.querySelectorAll('.collapse');
  collapseButtons.forEach((button) => {
    button.addEventListener('click', function () {
      this.classList.toggle('active');
      let content = this.nextElementSibling;
      if (content.classList.contains('expanded')) {
        content.classList.remove('expanded');
      } else {
        content.classList.add('expanded');
      }
    });
  });
});
