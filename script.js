// Array holding cat breed information
const catDescriptions = [
        "Persian cats are known for their long hair, flat faces, and calm personality. They originated in Iran (Persia) and are popular worldwide, especially in the United States and Europe.",
        "Maine Coons are large, friendly cats with tufted ears and thick fur. They originated in the United States, specifically the state of Maine, and are especially popular across North America.",
        "Ragdolls are affectionate and often go limp when held, hence the name. This breed was developed in California, USA, and is now beloved across the United States, UK, and Australia.",
        "Bengals are energetic, with a wild appearance and striking spotted coat. They were first bred in the United States and are now common in the US, UK, and parts of Asia such as Japan, South Korea, and Thailand.",
        "Scottish Folds have unique folded ears and a sweet, gentle temperament. They originated in Scotland and are popular in the UK, Japan, and the United States."
      ];
      
  
  // DOM Elements
  const infoBox = document.getElementById("infoBox");
  const infoHeading = document.getElementById("infoHeading");
  const infoText = document.getElementById("infoText");
  const closeLink = document.getElementById("closeLink");
  
  // Variable for close text
  const closeText = "Close";
  
  // Add click listener to each description bar
  document.querySelectorAll(".description").forEach((desc) => {
    desc.addEventListener("click", () => {
      const index = parseInt(desc.getAttribute("data-index"));
      const caption = desc.previousElementSibling.textContent;
  
      infoHeading.innerHTML = caption;
      infoText.innerHTML = catDescriptions[index];
      closeLink.innerHTML = closeText;
  
      infoBox.style.visibility = "visible";
    });
  });
  
  // Close info box when "Close" link is clicked
  closeLink.addEventListener("click", (e) => {
    e.preventDefault();
    infoBox.style.visibility = "hidden";
  });
  