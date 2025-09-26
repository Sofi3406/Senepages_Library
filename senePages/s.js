
    // Switch Pages
    function showPage(pageId) {
      const sections = document.querySelectorAll("section");
      sections.forEach(section => section.classList.remove("active"));
      document.getElementById(pageId).classList.add("active");
      stopReading();
    }

    // Read Text with chosen language
    function readText(elementId, selectId) {
      stopReading(); 
      const element = document.getElementById(elementId);
      const voiceSelect = document.getElementById(selectId);
      if (element && voiceSelect) {
        const text = element.innerText;
        const speech = new SpeechSynthesisUtterance(text);
        speech.lang = voiceSelect.value;
        speech.rate = 1;
        window.speechSynthesis.speak(speech);
      }
    }

    // Stop Reading
    function stopReading() {
      window.speechSynthesis.cancel();
    }

    // Contact form handler
    const form = document.getElementById("contactForm");
    const formMessage = document.getElementById("formMessage");

    form.addEventListener("submit", function(event) {
      event.preventDefault(); 

      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();

      if (name && email && message) {
        formMessage.style.color = "green";
        formMessage.textContent = "✅ Thank you, " + name + "! Your message has been sent.";
        form.reset();
        stopReading();
        readText("formMessage", "contactVoice");
      } else {
        formMessage.style.color = "red";
        formMessage.textContent = "⚠️ Please fill in all fields.";
        stopReading();
        readText("formMessage", "contactVoice");
      }
    });
    const translations = {
      en: {
        title: "Welcome to Sene Pages Library",
        description: "Our library is a hub of knowledge, offering a wide collection of books, journals and digital resources."
      },
      am: {
        title: "እንኳን ወደ ሴኔ ገጾች ቤተ መጽሐፍት በደህና መጡ",
        description: "ቤተ መጽሐፍት ሴኔ ገጾች የእውቀት ማዕከል ነው፣ መጽሐፍት፣ ጋዜጦች እና ዲጂታል ሀብቶችን በማቅረብ የተሞላ።"
      }
    };

    function translatePage() {
      let lang = document.getElementById("lang").value;
      document.getElementById("title").innerText = translations[lang].title;
      document.getElementById("description").innerText = translations[lang].description};
