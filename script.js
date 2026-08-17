// ===== Mobile nav toggle =====
const toggle = document.querySelector(".nav__toggle");
const menu = document.querySelector(".nav__menu");

if (toggle && menu) {
  toggle.addEventListener("click", () => {
    const open = menu.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(open));
  });
  menu.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => {
      menu.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    })
  );
}

// ===== Gallery lightbox =====
const lightbox = document.getElementById("lightbox");
const lightboxImg = lightbox.querySelector(".lightbox__img");
const lightboxCap = lightbox.querySelector(".lightbox__caption");
const lightboxClose = lightbox.querySelector(".lightbox__close");

function openLightbox(src, caption) {
  lightboxImg.src = src;
  lightboxImg.alt = caption || "";
  lightboxCap.textContent = caption || "";
  lightbox.classList.add("is-open");
  lightbox.setAttribute("aria-hidden", "false");
}
function closeLightbox() {
  lightbox.classList.remove("is-open");
  lightbox.setAttribute("aria-hidden", "true");
  lightboxImg.src = "";
}

document.querySelectorAll(".tile").forEach((tile) => {
  tile.addEventListener("click", () => {
    const img = tile.querySelector("img");
    const cap = tile.querySelector("figcaption");
    if (img) openLightbox(img.src, cap ? cap.textContent : "");
  });
});

lightboxClose.addEventListener("click", closeLightbox);
lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) closeLightbox();
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeLightbox();
});
