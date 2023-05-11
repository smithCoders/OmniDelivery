//  make the humburger menu work.
const navBtn = document.querySelector(".btn-mobile-nav");
const header = document.querySelector(".header");
navBtn.addEventListener("click", () => {
  header.classList.toggle("nav-open");
});
// //  smooth scrolling.
// const links = document.querySelectorAll("a:link");
// links.forEach((e) => {
//   e.addEventListener("click", (link) => {
//     link.preventDefault();
//
//     // scrool back to  top.
//     if (href === "#") {
//       window.scrollTo({
//         top: 0,
//         behavior: "smooth",
//       });
//     }
//     // scroll to  links
//     if (href !== "#" && href.startsWith("#")) {
//       const sectionEl = document.querySelector(href);
//       sectionEl.scrollIntoView({ behavior: "smooth" });
//     }
//     // close mobile nav.
//     if (e.classList.contains("main-nav-link"))
//       header.classList.toggle("nav-open");
//   });
// });

//  EVENT  DELIGATION FOR SCROLL SMOTH
document
  .querySelector(".main-nav-list")
  .addEventListener("click", function (e) {
    e.preventDefault();
    // matching strategy
    if (e.target.classList.contains("main-nav-link")) {
      const href = e.target.getAttribute("href");
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
      console.log(href);
    }
  });

//  sticky navbigation.
const sectionHero = document.querySelector(".section-hero");
const obs = new IntersectionObserver(
  (entries) => {
    const ent = entries[0];

    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    }
    if (ent.isIntersecting === true) {
      document.body.classList.remove("sticky");
    }
  },
  { root: null, threshold: 0, rootMargin: "80px" }
);
obs.observe(sectionHero);
//  section-reveal.
const allSection = document.querySelectorAll(".section");

const reaveal = function (entries, observer) {
  const [entry] = entries;
  console.log(entry);
  if (!entry.isIntersecting) return;
  entry.target.classList.remove("section-hidden");
  observer.unobserve(entry.target);
};
const sectionObserver = new IntersectionObserver(reaveal, {
  root: null,
  threshold: 0.15,
});
allSection.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add("section-hidden");
});
