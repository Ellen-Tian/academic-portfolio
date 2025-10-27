// ===== Modal logic for project gallery =====

// Open modal with image + caption
function openModal(imgSrc, captionHtml) {
  const modal = document.getElementById("imgModal");
  const modalImg = document.getElementById("modalImg");
  const modalCaption = document.getElementById("modalCaption");
  modal.style.display = "block";
  modalImg.src = imgSrc;
  modalCaption.innerHTML = captionHtml;
}

// Close modal when clicking outside or on "×"
function closeModal(event) {
  const modal = document.getElementById("imgModal");
  if (
    event.target.classList.contains("modal") ||
    event.target.classList.contains("close-modal")
  ) {
    modal.style.display = "none";
  }
}

// Make all figure elements clickable to open modal
document.addEventListener("DOMContentLoaded", () => {
  const figures = document.querySelectorAll("figure");
  figures.forEach((fig) => {
    const img = fig.querySelector("img");
    const caption = fig.querySelector("figcaption");
    fig.addEventListener("click", () => {
      openModal(img.src, caption.innerHTML);
    });
  });
});
