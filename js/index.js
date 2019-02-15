document.addEventListener("DOMContentLoaded", () => {
  const tabs = Array.from(document.querySelectorAll(".tab"));
  tabs.forEach(tab => {
    //on click
    tab.addEventListener("click", e => {
      e.preventDefault();
      const eHolder = e.target;

      if (!eHolder.classList.contains("active")) {
        //loop through the list to remove class active
        tabs.forEach(value => {
          //remove active class from all
          if (value.classList.contains("active")) {
            document
              .querySelector(value.getAttribute("href"))
              .classList.remove("active");
            value.classList.remove("active");
          }
        });
        //add active class to clicked
        eHolder.classList.add("active");

        //grab id of content
        const contentTabId = document.querySelector(
          eHolder.getAttribute("href")
        );
        //add class active to tabcontent
        contentTabId.classList.add("active");
      }
    });
  });
});
