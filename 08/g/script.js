function toggleButton(selector) {
        const button = document.querySelector(selector);
        if (!document.querySelector("active")) {
          turnOFFAll();
          button.classList.add("active");
        } else {
          button.classList.remove("active");
        }
      }

      function turnOFFAll() {
        const previousButton = document.querySelector(".active");
        if (previousButton) {
          previousButton.classList.remove("active");
        }
      }
