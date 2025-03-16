// Get all elements with the class 'portfolio-card'
const portfolioCards = document.querySelectorAll('.portfolio-card');

// Loop through each portfolio card and attach event listeners
portfolioCards.forEach((portfolioCard) => {
  const portfolioImage = portfolioCard.querySelector('.portfolio-img');
  const portfolioTitle = portfolioCard.querySelector('.portfolio-title');
  const portfolioText = portfolioCard.querySelector('.portfolio-text');
  const portfolioLink = portfolioCard.querySelector('.portfolio-link');

  portfolioCard.addEventListener('mouseenter', function() {
    portfolioImage.style.transform = 'translateZ(60px)';
    // portfolioImage.style.setProperty("-webkit-filter", "drop-shadow(2px 2px 1px #202020)");
    portfolioTitle.style.transform = 'translateZ(30px)';
    portfolioText.style.transform = 'translateZ(24px)';
    portfolioLink.style.transform = 'translateZ(30px)';
  });

  portfolioCard.addEventListener('mouseleave', function() {
    portfolioImage.style.transform = 'translateZ(0px)';
    // portfolioImage.style.setProperty("-webkit-filter", "drop-shadow(0px 0px 0px #222)");
    portfolioTitle.style.transform = 'translateZ(0px)';
    portfolioText.style.transform = 'translateZ(0px)';
    portfolioLink.style.transform = 'translateZ(0px)';
  });
});
