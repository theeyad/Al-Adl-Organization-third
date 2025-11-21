// Dashboard Page JavaScript

// Logout Function
function logout() {
  window.location.href = "../login_page/login.html";
}

const defaultConfig = {
  firm_name: "مكتب المحاماة",
  add_case_button: "+ إضافة قضية جديدة",
  export_button: "تصدير Excel",
  background_color: "#000000",
  surface_color: "#1f2937",
  text_color: "#f3f4f6",
  primary_action_color: "#f3c623",
  secondary_action_color: "#059669",
  font_family: "Cairo",
  font_size: 16,
};

let allCards = [];
let currentPage = "home";
let currentModalPage = "";
let currentModalSection = "";
let isDarkMode = true;

// Clock
function updateClock() {
  const now = new Date();
  const timeString = now.toLocaleTimeString("ar-EG", {
    hour: "2-digit",
    minute: "2-digit",
  });
  document.getElementById("clock").textContent = timeString;
}
updateClock();
setInterval(updateClock, 1000);

// Navigation
document.querySelectorAll(".nav-item").forEach((item) => {
  item.addEventListener("click", (e) => {
    e.preventDefault();
    const page = item.dataset.page;
    switchPage(page);
  });
});

function switchPage(page) {
  currentPage = page;
  document.querySelectorAll(".nav-item").forEach((item) => {
    item.classList.remove("active");
  });
  document.querySelector(`[data-page="${page}"]`).classList.add("active");

  document.querySelectorAll(".page-content").forEach((content) => {
    content.classList.add("page-hidden");
  });
  document.getElementById(`${page}-page`).classList.remove("page-hidden");
}

// Modal Functions
function showAddCardModal(page, section) {
  currentModalPage = page;
  currentModalSection = section;

  // Determine which modal to show based on section
  let modalId = "add-card-modal-services"; // default
  if (section === "header2") {
    modalId = "add-card-modal-publications";
  } else if (section === "header3") {
    modalId = "add-card-modal-testimonials";
  }

  document.getElementById(modalId).classList.remove("modal-hidden");

  // Reset the appropriate form
  const formId = modalId.replace("modal", "form");
  const form = document.getElementById(formId);
  if (form) form.reset();
}

function closeAddCardModal(type = "services") {
  const modalId = `add-card-modal-${type}`;
  document.getElementById(modalId).classList.add("modal-hidden");
}

function showEditCardModal(card, type = "services") {
  const modalId = `edit-card-modal-${type}`;
  const modal = document.getElementById(modalId);

  if (type === "services") {
    document.getElementById("edit-card-id-services").value = card.__backendId;
    document.getElementById("edit-card-title-services").value = card.title;
    document.getElementById("edit-card-icon-services").value = card.icon;
  } else if (type === "publications") {
    document.getElementById("edit-card-id-publications").value =
      card.__backendId;
    document.getElementById("edit-card-title-publications").value = card.title;
    document.getElementById("edit-card-excerpt-publications").value =
      card.description || "";
  } else if (type === "testimonials") {
    document.getElementById("edit-card-id-testimonials").value =
      card.__backendId;
    document.getElementById("edit-card-text-testimonials").value =
      card.description || "";
    document.getElementById("edit-card-name-testimonials").value = card.title;
  }

  modal.classList.remove("modal-hidden");
}

function closeEditCardModal(type = "services") {
  const modalId = `edit-card-modal-${type}`;
  document.getElementById(modalId).classList.add("modal-hidden");
}

// Setup click-outside listeners for all modals
document.addEventListener("DOMContentLoaded", () => {
  const modalTypes = ["services", "publications", "testimonials"];

  modalTypes.forEach((type) => {
    // Add modal click listeners
    const addModal = document.getElementById(`add-card-modal-${type}`);
    if (addModal) {
      addModal.addEventListener("click", (e) => {
        if (e.target === addModal) {
          closeAddCardModal(type);
        }
      });
    }

    // Edit modal click listeners
    const editModal = document.getElementById(`edit-card-modal-${type}`);
    if (editModal) {
      editModal.addEventListener("click", (e) => {
        if (e.target === editModal) {
          closeEditCardModal(type);
        }
      });
    }
  });

  // Delete confirmation modal listeners
  const deleteConfirmModal = document.getElementById("delete-confirm-modal");
  if (deleteConfirmModal) {
    // Click outside to close
    deleteConfirmModal.addEventListener("click", (e) => {
      if (e.target === deleteConfirmModal) {
        closeDeleteConfirmModal();
      }
    });
  }

  // Confirm delete button
  const confirmDeleteBtn = document.getElementById("confirm-delete-btn");
  if (confirmDeleteBtn) {
    confirmDeleteBtn.addEventListener("click", confirmDelete);
  }

  // Cancel delete button
  const cancelDeleteBtn = document.getElementById("cancel-delete-btn");
  if (cancelDeleteBtn) {
    cancelDeleteBtn.addEventListener("click", closeDeleteConfirmModal);
  }
});

// Handle Add Card
async function handleAddCard(event) {
  event.preventDefault();

  const submitBtn = document.getElementById("submit-card-btn");
  const originalText = submitBtn.textContent;
  submitBtn.disabled = true;
  submitBtn.innerHTML = '<div class="loading-spinner"></div>';

  if (allCards.length >= 999) {
    showToast(
      "تم الوصول للحد الأقصى (999 بطاقة). يرجى حذف بعض البطاقات أولاً.",
      "error"
    );
    submitBtn.disabled = false;
    submitBtn.textContent = originalText;
    return;
  }

  const title = document.getElementById("card-title").value;
  const description = document.getElementById("card-description").value;
  const icon = document.getElementById("card-icon").value;
  const value = document.getElementById("card-value").value;

  const newCard = {
    id: Date.now().toString(),
    type: currentModalSection,
    title: title,
    description: description,
    icon: icon,
    value: value,
    page: currentModalPage,
    order: allCards.filter(
      (c) => c.page === currentModalPage && c.type === currentModalSection
    ).length,
    createdAt: new Date().toISOString(),
  };

  const result = await window.dataSdk.create(newCard);

  if (result.isOk) {
    closeAddCardModal();
    showToast("تم إضافة البطاقة بنجاح", "success");
  } else {
    showToast("حدث خطأ أثناء إضافة البطاقة", "error");
  }

  submitBtn.disabled = false;
  submitBtn.textContent = originalText;
}

// Handle Edit Card
async function handleEditCard(event) {
  event.preventDefault();

  const updateBtn = document.getElementById("update-card-btn");
  const originalText = updateBtn.textContent;
  updateBtn.disabled = true;
  updateBtn.innerHTML = '<div class="loading-spinner"></div>';

  const cardId = document.getElementById("edit-card-id").value;
  const card = allCards.find((c) => c.__backendId === cardId);

  if (!card) {
    showToast("البطاقة غير موجودة", "error");
    updateBtn.disabled = false;
    updateBtn.textContent = originalText;
    return;
  }

  card.title = document.getElementById("edit-card-title").value;
  card.description = document.getElementById("edit-card-description").value;
  card.icon = document.getElementById("edit-card-icon").value;
  card.value = document.getElementById("edit-card-value").value;

  const result = await window.dataSdk.update(card);

  if (result.isOk) {
    closeEditCardModal();
    showToast("تم تحديث البطاقة بنجاح", "success");
  } else {
    showToast("حدث خطأ أثناء تحديث البطاقة", "error");
  }

  updateBtn.disabled = false;
  updateBtn.textContent = originalText;
}

// Store card data for deletion
let cardToDelete = null;
let deleteButtonElement = null;

// Delete Card - Show confirmation modal
function deleteCard(card, deleteBtn) {
  cardToDelete = card;
  deleteButtonElement = deleteBtn;

  // Show delete confirmation modal
  document
    .getElementById("delete-confirm-modal")
    .classList.remove("modal-hidden");
}

// Confirm delete
async function confirmDelete() {
  if (!cardToDelete || !deleteButtonElement) return;

  const cardElement = deleteButtonElement.closest(".service-card");
  const originalHTML = deleteButtonElement.innerHTML;
  deleteButtonElement.disabled = true;
  deleteButtonElement.innerHTML = '<div class="loading-spinner"></div>';

  try {
    // Try to delete via SDK if it has a valid backend ID
    if (
      cardToDelete.__backendId &&
      cardToDelete.__backendId !== cardToDelete.title
    ) {
      const result = await window.dataSdk.delete(cardToDelete);
      if (!result || !result.isOk) {
        throw new Error("Backend delete failed");
      }
    }

    // Remove the card from DOM
    if (cardElement) {
      cardElement.remove();
    }

    showToast("تم حذف البطاقة بنجاح", "success");
    closeDeleteConfirmModal();
  } catch (error) {
    console.error("Delete error:", error);
    showToast("حدث خطأ أثناء حذف البطاقة", "error");
    deleteButtonElement.disabled = false;
    deleteButtonElement.innerHTML = originalHTML;
  }

  cardToDelete = null;
  deleteButtonElement = null;
}

// Close delete confirmation modal
function closeDeleteConfirmModal() {
  document.getElementById("delete-confirm-modal").classList.add("modal-hidden");
  cardToDelete = null;
  deleteButtonElement = null;
}

// Render Service Cards (for "ما نقوم به" section - matches home page style)
function renderServiceCards() {
  const container = document.getElementById("service-cards-section");
  if (!container) return;

  const config = window.elementSdk?.config || defaultConfig;
  const primaryColor =
    config.primary_action_color || defaultConfig.primary_action_color;

  const services = [
    {
      title: "خدمات الشركات",
      icon: "business_center",
    },
    {
      title: "خدمات المستثمرين والأجانب",
      icon: "monetization_on",
    },
    {
      title: "خدمات القطاع الصناعي",
      icon: "factory",
    },
  ];

  container.innerHTML = services
    .map(
      (service) => `
    <div class="service-card" data-service-title="${service.title}">
      <div class="card-actions">
        <button class="card-action-btn edit-btn" style="background: #756a41;" title="تعديل">
          <i class="fas fa-edit"></i>
        </button>
        <button class="card-action-btn card-action-delete delete-btn" title="حذف">
          <i class="fas fa-trash"></i>
        </button>
      </div>
      <span class="material-symbols-outlined service-icon">${service.icon}</span>
      <h3 class="service-title">${service.title}</h3>
    </div>
  `
    )
    .join("");

  // Add event listeners to edit and delete buttons
  container.querySelectorAll(".edit-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const card = btn.closest(".service-card");
      const title = card.dataset.serviceTitle;
      const mockCard = {
        __backendId: title,
        title: title,
        description: "",
        icon: "business_center",
        value: "",
      };
      showEditCardModal(mockCard, "services");
    });
  });

  container.querySelectorAll(".delete-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const card = btn.closest(".service-card");
      const title = card.dataset.serviceTitle;
      const mockCard = {
        __backendId: title,
        title: title,
        description: "",
        icon: "business_center",
        value: "",
      };
      deleteCard(mockCard, btn);
    });
  });
}

// Render Cases Table
function renderCasesTable() {
  const container = document.getElementById("cases-table-container");
  if (!container) return;

  const config = window.elementSdk?.config || defaultConfig;
  const bgColor = config.background_color || defaultConfig.background_color;
  const surfaceColor = config.surface_color || defaultConfig.surface_color;
  const textColor = config.text_color || defaultConfig.text_color;
  const primaryColor =
    config.primary_action_color || defaultConfig.primary_action_color;
  const secondaryColor =
    config.secondary_action_color || defaultConfig.secondary_action_color;

  container.innerHTML = `
    <div class="cases-table-wrapper" style="background-color: ${surfaceColor}; color: ${textColor};">
      <div class="cases-table-header" style="background: linear-gradient(135deg, ${surfaceColor} 0%, ${bgColor} 100%);">
        <div class="cases-table-title">
          <div class="cases-table-icon" style="background: ${primaryColor};">
            <i class="fas fa-gavel" style="color: ${bgColor};"></i>
          </div>
          <div>
            <h3 style="color: ${primaryColor};">جدول القضايا</h3>
            <p>إدارة ومتابعة جميع القضايا</p>
          </div>
        </div>
      </div>
      
      <div class="cases-table-controls">
        <div class="cases-table-buttons">
          <button class="btn-primary" style="background: ${primaryColor}; color: ${bgColor};">
            <i class="fas fa-plus"></i>
            <span>إضافة قضية جديدة</span>
          </button>
          <button class="btn-secondary" style="background: ${secondaryColor}; color: white;">
            <i class="fas fa-file-excel"></i>
            <span>تصدير Excel</span>
          </button>
        </div>
        <div class="cases-table-search">
          <input type="text" placeholder="بحث في القضايا..." 
                 class="search-input" 
                 style="border: 1px solid ${primaryColor}40;">
          <i class="fas fa-search"></i>
          <button class="filter-btn">
            <i class="fas fa-filter"></i>
          </button>
        </div>
      </div>
      
      <div class="cases-table-scroll">
        <table class="cases-table">
          <thead>
            <tr style="border-color: ${primaryColor}40; background: ${bgColor};">
              <th style="color: ${primaryColor};">
                <div>
                  <i class="fas fa-user"></i>
                  <span>اسم العميل</span>
                </div>
              </th>
              <th style="color: ${primaryColor};">
                <div>
                  <i class="fas fa-hashtag"></i>
                  <span>رقم القضية</span>
                </div>
              </th>
              <th style="color: ${primaryColor};">
                <div>
                  <i class="fas fa-calendar"></i>
                  <span>تاريخ الجلسة</span>
                </div>
              </th>
              <th style="color: ${primaryColor};">
                <div>
                  <i class="fas fa-cog"></i>
                  <span>الحالة</span>
                </div>
              </th>
              <th style="color: ${primaryColor};">
                <div>
                  <i class="fas fa-tools"></i>
                  <span>الإجراءات</span>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="table-row">
              <td>
                <div class="table-cell-user">
                  <div class="user-avatar-small" style="background: ${primaryColor}30; color: ${primaryColor};">أم</div>
                  <div>
                    <div class="user-name-small">أحمد محمد السعيد</div>
                    <div class="user-email-small">ahmed@example.com</div>
                  </div>
                </div>
              </td>
              <td>
                <span class="case-id" style="background: ${primaryColor}20; color: ${primaryColor};">2024-001</span>
              </td>
              <td>
                <div class="table-cell-date">
                  <i class="fas fa-calendar-day"></i>
                  <span>2024-01-15</span>
                </div>
              </td>
              <td>
                <span class="case-status" style="background: ${secondaryColor}; color: white;">
                  <i class="fas fa-check-circle"></i>نشطة
                </span>
              </td>
              <td>
                <div class="table-cell-actions">
                  <button class="action-btn" title="عرض">
                    <i class="fas fa-eye"></i>
                  </button>
                  <button class="action-btn" style="background: ${primaryColor}; color: ${bgColor};" title="تعديل">
                    <i class="fas fa-edit"></i>
                  </button>
                  <button class="action-btn action-btn-delete" title="حذف">
                    <i class="fas fa-trash"></i>
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  `;
}

// Render Cards
function renderCards() {
  const containers = {
    "home-header1": document.getElementById("home-header1-cards"),
    "home-header2": document.getElementById("home-header2-cards"),
    "home-header3": document.getElementById("home-header3-cards"),
    services: document.getElementById("services-cards"),
    posts: document.getElementById("posts-cards"),
  };

  Object.values(containers).forEach((container) => {
    if (container) container.innerHTML = "";
  });
}

// Show Toast Notification
function showToast(message, type = "success") {
  const toast = document.createElement("div");
  toast.style.cssText = `
    position: fixed;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
    padding: 15px 30px;
    border-radius: 8px;
    font-weight: 600;
    z-index: 1000;
    animation: slideDown 0.3s ease;
    background: ${type === "success" ? "#10b981" : "#ef4444"};
    color: white;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  `;
  toast.textContent = message;
  document.body.appendChild(toast);

  setTimeout(() => {
    toast.style.animation = "slideUp 0.3s ease";
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

// Initialize on page load
document.addEventListener("DOMContentLoaded", () => {
  // Initialize theme
  const root = document.documentElement;
  root.setAttribute("data-theme", "dark");
  root.style.setProperty("--color-bg", "#000000");
  root.style.setProperty("--color-primary", "#f3c623");
  root.style.setProperty("--color-primary-sec", "#ffdf6d");
  root.style.setProperty("--color-secondary", "#ffffff");
  root.style.setProperty("--color-icons", "#ffffff");
  root.style.setProperty("--shadows", "0px 0px 15px 1px #f3c623");

  renderServiceCards();
  renderCasesTable();
  renderCards();
});
