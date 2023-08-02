document.addEventListener("DOMContentLoaded", (e) => {
  document
    .querySelectorAll(".project-card")
    .forEach((e) => e.addEventListener("click", ExpandCard));
});

function ExpandCard(e) {
  if (e.target.classList.contains("expandedcard") == false) {
    e.target.classList.add("expandedcard");
    document.querySelectorAll("#cardpicture").forEach((e) => {
      e.classList.add("bigimage");
      document.querySelectorAll("#cardtext").forEach((e) => {
        e.classList.add("bigcardtext");
        document.querySelectorAll(".expandedcardtext").forEach((e) => {
          e.classList.add("expandedcardtextcolor");
        });
      });
    });
    document.querySelectorAll(".project-card").forEach((e) => {
      if (e.classList.contains("expandedcard") == false) {
        e.classList.add("disappearedcard");
      }
    });
  } else if (e.target.classList.contains("expandedcard")) {
    e.target.classList.remove("expandedcard");
    document.querySelectorAll(".project-card").forEach((e) => {
      e.classList.remove("disappearedcard");
    });
    document.querySelectorAll("#cardpicture").forEach((e) => {
      e.classList.remove("bigimage");
      document.querySelectorAll("#cardtext").forEach((e) => {
        e.classList.remove("bigcardtext");
        document.querySelectorAll(".expandedcardtext").forEach((e) => {
          e.classList.remove("expandedcardtextcolor");
        });
      });
    });
  }
}

//"body >*:not(.expandedcard).project-card"
