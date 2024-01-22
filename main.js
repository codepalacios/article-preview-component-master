// Vars
const shareArticleBtn = document.getElementById("articleShare");
const shareSocialBtn = document.getElementById("socialShare");

// Events
shareArticleBtn.addEventListener("click", () => {
  shareArticleBtn.classList.toggle("active");
  const articleSocial = document.getElementById("articleSocial");
  articleSocial.classList.toggle("hidden");
  const articleTriangle = document.getElementById("articleTriangle");
  articleTriangle.classList.toggle("hidden");
});
shareSocialBtn.addEventListener("click", () => {
  shareArticleBtn.classList.toggle("active");
  const articleSocial = document.getElementById("articleSocial");
  articleSocial.classList.toggle("hidden");
  const articleTriangle = document.getElementById("articleTriangle");
  articleTriangle.classList.toggle("hidden");
});
