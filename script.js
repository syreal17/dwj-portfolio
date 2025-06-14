// Fade in/out text blocks
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
    } else {
      entry.target.classList.remove('active');
    }
  });
}, {
  threshold: 0.5 // Adjust to trigger when the image is roughly centered
});

document.querySelectorAll('.reveal-container').forEach(container => {
  observer.observe(container);
});

// PDF Modal
const modal = document.getElementById("pdfModal");
const iframe = document.getElementById("pdfFrame");
const closeButton = document.querySelector(".close-button");

// Handle cover click
document.querySelectorAll(".book-cover").forEach(cover => {
  cover.addEventListener("click", () => {
    const pdfSrc = cover.dataset.pdf;
    iframe.src = pdfSrc
    modal.style.display = "flex";
  });
});

// Close button
closeButton.addEventListener("click", () => {
  modal.style.display = "none";
  iframe.src = ""; // Optional: clear PDF to stop memory use
});

// Optional: click outside modal content to close
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
    iframe.src = "";
  }
});

