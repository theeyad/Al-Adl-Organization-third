// Contact form functionality
document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.querySelector("#contact-form form");

  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      // Get form data
      const formData = {
        name: document.querySelector("#name").value,
        email: document.querySelector("#email").value,
        message: document.querySelector("#message").value,
      };

      // Validate form data
      if (!formData.name || !formData.email || !formData.message) {
        alert("يرجى ملء جميع الحقول المطلوبة");
        return;
      }

      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        alert("يرجى إدخال بريد إلكتروني صحيح");
        return;
      }

      // Show loading state
      const submitButton = contactForm.querySelector(".submit-button");
      const originalText = submitButton.textContent;
      submitButton.textContent = "جاري الإرسال...";
      submitButton.disabled = true;

      // Here you would integrate with web3forms
      // For now, we'll simulate the submission
      setTimeout(() => {
        // Simulate successful submission
        console.log("Form submitted:", formData);

        // Show success message
        alert("تم إرسال رسالتك بنجاح. سنتواصل معك قريباً.");

        // Reset form
        contactForm.reset();

        // Reset button
        submitButton.textContent = originalText;
        submitButton.disabled = false;
      }, 2000);
    });
  }

  // Form input animations
  const formInputs = document.querySelectorAll(".form-input, .form-textarea");
  formInputs.forEach((input) => {
    input.addEventListener("focus", function () {
      this.parentElement.classList.add("focused");
    });

    input.addEventListener("blur", function () {
      if (!this.value) {
        this.parentElement.classList.remove("focused");
      }
    });
  });

  // Phone number formatting removed as phone field is removed

  // Contact info hover effects
  const contactLinks = document.querySelectorAll(".info-item a");
  contactLinks.forEach((link) => {
    link.addEventListener("mouseenter", function () {
      this.style.transform = "translateX(-5px)";
      this.style.color = "var(--color-primary)";
    });

    link.addEventListener("mouseleave", function () {
      this.style.transform = "translateX(0)";
      this.style.color = "";
    });
  });

  // Map interaction
  const mapContainer = document.querySelector(".map-container");
  if (mapContainer) {
    mapContainer.addEventListener("mouseenter", function () {
      this.style.transform = "scale(1.02)";
      this.style.transition = "transform 0.3s ease";
    });

    mapContainer.addEventListener("mouseleave", function () {
      this.style.transform = "scale(1)";
    });
  }
});

// Web3Forms integration function (to be implemented)
function submitToWeb3Forms(formData) {
  // This function will be implemented when you set up web3forms
  // For now, it's a placeholder
  return new Promise((resolve, reject) => {
    // Simulate API call
    setTimeout(() => {
      console.log("Submitting to web3forms:", formData);
      resolve({ success: true });
    }, 1000);
  });
}

// Form validation helper functions
function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Phone validation removed as phone field is removed

function validateName(name) {
  return name.trim().length >= 2;
}

function validateMessage(message) {
  return message.trim().length >= 10;
}

// Utility function to show form errors
function showFormError(message) {
  // Create error element if it doesn't exist
  let errorElement = document.querySelector(".form-error");
  if (!errorElement) {
    errorElement = document.createElement("div");
    errorElement.className = "form-error";
    errorElement.style.cssText = `
      color: #dc2626;
      font-size: 0.875rem;
      margin-top: 0.5rem;
      text-align: right;
    `;
    document.querySelector(".form-group:last-child").appendChild(errorElement);
  }
  errorElement.textContent = message;
}

// Utility function to clear form errors
function clearFormErrors() {
  const errorElement = document.querySelector(".form-error");
  if (errorElement) {
    errorElement.remove();
  }
}
