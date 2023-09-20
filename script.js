document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('.nav_bar_list li a');
  let currentContent = null; // Keep track of the currently shown content section
  // Show the "about_me" div and "profile_img" on page load
  const aboutMeSection = document.getElementById('content_home');
  aboutMeSection.classList.add('show');

  Array.from(links).forEach(link => {
    link.addEventListener('click', event => {
      event.preventDefault();

      // Get the ID of the content section that corresponds to the clicked link
      const contentId = link.dataset.target;

      // Hide the previously shown content section, if there is one
      if (currentContent) {
        currentContent.classList.remove('show');
      }

      // Hide all other content sections
      const allContent = document.querySelectorAll('.nav_bar_content');
      Array.from(allContent).forEach(content => {
        if (content !== currentContent) {
          content.classList.remove('show');
        }
      });

      // Hide the "about_me" div and "profile_img" if they're not shown
      if (contentId) {
        aboutMeSection.classList.remove('show');
        const contentHomeSection = document.getElementById('content_home');
        contentHomeSection.classList.remove('show');
      }

      // Show the content section that corresponds to the clicked link
      const contentToShow = document.querySelector(contentId);
      contentToShow.classList.add('show');
      currentContent = contentToShow; // Update the currently shown content section

      // Log a message to the console to verify that the code is working as expected
      console.log(`Clicked link with data-target ${contentId}.`);
    });
  });
  const navBarToggle = document.querySelector('.nav_bar_toggle');
  const navBarList = document.querySelector('.nav_bar_list');

    navBarToggle.addEventListener('click', function() {
    navBarList.classList.toggle('show');
  });
});
