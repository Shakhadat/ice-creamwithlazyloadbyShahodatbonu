// tablarni yasash:
const groupbtn = document.querySelector(".operations__tab-container");
const tabcontent = document.querySelectorAll(".operations__content");
const tabbtns = document.querySelectorAll(".operations__tab");

groupbtn.addEventListener("click", function (e) {
  e.preventDefault();

  tabbtns.forEach(function (i) {
    if (i.classList.contains("operations__tab--active")) {
      i.classList.remove("operations__tab--active");
    }
  });
  tabcontent.forEach(function (i) {
    if (i.classList.contains("operations__content--active")) {
      i.classList.remove("operations__content--active");
    }
  });

  let number = e.target.dataset.tab;
  console.log(number);
  e.target.classList.add("operations__tab--active");
  document
    .querySelector(`.operations__content--${number}`)
    .classList.add("operations__content--active");
});
// tab end;

// modal chiqarish:

const openmdl = document.querySelectorAll(".buy_now");
const modal = document.querySelector(".modal");
const opas = document.querySelector(".overlay");
const closemdl = document.querySelectorAll(".btn--close-modal");

openmdl.forEach(function (i) {
  i.addEventListener("click", function (e) {
    e.preventDefault();
    modal.classList.remove("hidden");
    opas.classList.remove("hidden");
  });
});

closemdl.forEach(function (i) {
  i.addEventListener("click", function (e) {
    modal.classList.add("hidden");
    opas.classList.add("hidden");
  });
});

// navbarmenular bilan ishlash:

const navmenu = document.querySelector("#navmenu");

function add(id) {
  const section = document.querySelector(`.${id}`);
  const sectioncoord = section.getBoundingClientRect();

  window.scrollTo({
    top: sectioncoord.top + window.pageYOffset,
    behavior: "smooth",
  });
}

navmenu.addEventListener("click", function (e) {
  e.preventDefault();
  if (e.target.closest("#gohome")) {
    add("section--1");
  } else if (e.target.closest("#goproduct")) {
    add("section--4");
  } else if (e.target.closest("#gopricing")) {
    add("section--5");
  } else if (e.target.closest("#goTestimonals")) {
    add("testimon");
  }
});

// navbarni stycy qilish:
const nav = document.querySelector("#navbar");
const navHeight = nav.getBoundingClientRect().height;
const header = document.querySelector(".header");

let option = {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
};

function styckyNav(entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) {
    nav.classList.add("sticky");
  } else {
    nav.classList.remove("sticky");
  }
}

const headObserver = new IntersectionObserver(styckyNav, option);

headObserver.observe(header);

// sectionlarga scroll qilib sekin tushish:reveal-oshkor qilish;

const AllSections = document.querySelectorAll(".section");
function revealnSection(entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.classList.remove("section--hidden");
  observer.unobsorve(entry.target);
  console.log(entry);
}

const sectionObserver = new IntersectionObserver(revealnSection, {
  root: null,
  threshold: 0.15,
});

AllSections.forEach((section) => {
  sectionObserver.observe(section);
  section.classList.add("section--hidden");
});
