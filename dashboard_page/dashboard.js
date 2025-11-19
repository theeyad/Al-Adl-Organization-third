// Dashboard Page JavaScript

const defaultConfig = {
  firm_name: "مكتب المحاماة",
  quote_text: "العدل أساس الملك",
  add_case_button: "+ إضافة قضية جديدة",
  export_button: "تصدير Excel",
  background_color: "#111827",
  surface_color: "#1f2937",
  text_color: "#f3f4f6",
  primary_action_color: "#d97706",
  secondary_action_color: "#059669",
  font_family: "Cairo",
  font_size: 16,
};

let allCards = [];
let currentPage = "home";
let currentModalPage = "";
let currentModalSection = "";
let isDarkMode = true;

// Theme Toggle
function toggleTheme() {
  isDarkMode = !isDarkMode;
  const themeIcon = document.getElementById("theme-icon");

  if (isDarkMode) {
    themeIcon.className = "fas fa-sun text-xl text-yellow-500";
    document.body.style.backgroundColor = "#111827";
    document
      .querySelectorAll(".bg-gray-900")
      .forEach((el) => (el.style.backgroundColor = "#111827"));
    document
      .querySelectorAll(".bg-gray-800")
      .forEach((el) => (el.style.backgroundColor = "#1f2937"));
    document
      .querySelectorAll(".bg-gray-700")
      .forEach((el) => (el.style.backgroundColor = "#374151"));
    document.body.style.color = "#f3f4f6";
  } else {
    themeIcon.className = "fas fa-moon text-xl text-yellow-500";
    document.body.style.backgroundColor = "#f3f4f6";
    document
      .querySelectorAll(".bg-gray-900")
      .forEach((el) => (el.style.backgroundColor = "#f3f4f6"));
    document
      .querySelectorAll(".bg-gray-800")
      .forEach((el) => (el.style.backgroundColor = "#ffffff"));
    document
      .querySelectorAll(".bg-gray-700")
      .forEach((el) => (el.style.backgroundColor = "#e5e7eb"));
    document.body.style.color = "#1f2937";
  }

  renderCards();
  renderCasesTable();
  renderServiceCards();
}

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
    content.classList.add("hidden");
  });
  document.getElementById(`${page}-page`).classList.remove("hidden");
}

// Modal Functions
function showAddCardModal(page, section) {
  currentModalPage = page;
  currentModalSection = section;
  document.getElementById("add-card-modal").classList.remove("hidden");
  document.getElementById("add-card-modal").classList.add("flex");
  document.getElementById("add-card-form").reset();
}

function closeAddCardModal() {
  document.getElementById("add-card-modal").classList.add("hidden");
  document.getElementById("add-card-modal").classList.remove("flex");
}

function showEditCardModal(card) {
  document.getElementById("edit-card-id").value = card.__backendId;
  document.getElementById("edit-card-title").value = card.title;
  document.getElementById("edit-card-description").value = card.description;
  document.getElementById("edit-card-icon").value = card.icon;
  document.getElementById("edit-card-value").value = card.value || "";
  document.getElementById("edit-card-modal").classList.remove("hidden");
  document.getElementById("edit-card-modal").classList.add("flex");
}

function closeEditCardModal() {
  document.getElementById("edit-card-modal").classList.add("hidden");
  document.getElementById("edit-card-modal").classList.remove("flex");
}

// Handle Add Card
async function handleAddCard(event) {
  event.preventDefault();

  const submitBtn = document.getElementById("submit-card-btn");
  const originalText = submitBtn.textContent;
  submitBtn.disabled = true;
  submitBtn.innerHTML = '<div class="loading-spinner mx-auto"></div>';

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
  updateBtn.innerHTML = '<div class="loading-spinner mx-auto"></div>';

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

// Delete Card
async function deleteCard(card) {
  const deleteBtn = event.target.closest("button");
  const originalHTML = deleteBtn.innerHTML;

  deleteBtn.disabled = true;
  deleteBtn.innerHTML = '<div class="loading-spinner mx-auto"></div>';

  const result = await window.dataSdk.delete(card);

  if (result.isOk) {
    showToast("تم حذف البطاقة بنجاح", "success");
  } else {
    showToast("حدث خطأ أثناء حذف البطاقة", "error");
    deleteBtn.disabled = false;
    deleteBtn.innerHTML = originalHTML;
  }
}

// Render Service Cards
function renderServiceCards() {
  const container = document.getElementById("service-cards-section");
  if (!container) return;

  const config = window.elementSdk?.config || defaultConfig;
  const surfaceColor = config.surface_color || defaultConfig.surface_color;
  const textColor = config.text_color || defaultConfig.text_color;
  const primaryColor =
    config.primary_action_color || defaultConfig.primary_action_color;
  const bgColor = config.background_color || defaultConfig.background_color;

  const services = [
    {
      title: "خدمات الشركات",
      icon: "fa-building",
      description:
        "تأسيس الشركات، العقود التجارية، والاستشارات القانونية للشركات",
    },
    {
      title: "خدمات المستثمرين والأجانب",
      icon: "fa-globe",
      description: "تراخيص الاستثمار، الإقامات، والتأشيرات للمستثمرين الأجانب",
    },
    {
      title: "خدمات القطاع الصناعي",
      icon: "fa-industry",
      description: "التراخيص الصناعية، العقود، والاستشارات القانونية الصناعية",
    },
  ];

  container.innerHTML = services
    .map(
      (service) => `
    <div class="rounded-2xl shadow-2xl p-8 card-hover border border-gray-700 text-center relative" style="background-color: ${surfaceColor}; color: ${textColor};">
      <div class="absolute top-4 left-4 flex gap-2">
        <button class="w-8 h-8 rounded-lg transition flex items-center justify-center shadow-md hover:opacity-80" style="background: ${primaryColor}; color: ${bgColor};" title="تعديل">
          <i class="fas fa-edit text-sm"></i>
        </button>
        <button class="w-8 h-8 bg-red-600 hover:bg-red-700 rounded-lg transition flex items-center justify-center shadow-md" title="حذف">
          <i class="fas fa-trash text-sm text-white"></i>
        </button>
      </div>
      <div class="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center shadow-lg" style="background: ${primaryColor};">
        <i class="fas ${service.icon} text-3xl" style="color: ${bgColor};"></i>
      </div>
      <h3 class="text-2xl font-bold" style="color: ${primaryColor};">${service.title}</h3>
      <p class="text-sm mt-2">${service.description}</p>
    </div>
  `
    )
    .join("");
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
    <div class="bg-gray-800 rounded-xl shadow-2xl overflow-hidden border border-gray-700" style="background-color: ${surfaceColor}; color: ${textColor};">
      <div class="p-6 border-b border-gray-700" style="background: linear-gradient(135deg, ${surfaceColor} 0%, ${bgColor} 100%);">
        <div class="flex items-center justify-between mb-4">
          <div class="flex items-center gap-4">
            <div class="w-12 h-12 rounded-xl flex items-center justify-center shadow-lg" style="background: ${primaryColor};">
              <i class="fas fa-gavel text-xl" style="color: ${bgColor};"></i>
            </div>
            <div>
              <h3 class="text-2xl font-bold" style="color: ${primaryColor};">جدول القضايا</h3>
              <p class="text-sm opacity-75 mt-1">إدارة ومتابعة جميع القضايا</p>
            </div>
          </div>
        </div>
      </div>
      
      <div class="p-6 border-b border-gray-700 flex items-center justify-between flex-wrap gap-4">
        <div class="flex gap-3">
          <button class="px-6 py-3 rounded-xl font-semibold transition hover:opacity-90 shadow-lg flex items-center" style="background: ${primaryColor}; color: ${bgColor};">
            <i class="fas fa-plus ml-2"></i>
            <span>إضافة قضية جديدة</span>
          </button>
          <button class="px-6 py-3 rounded-xl font-semibold transition hover:opacity-90 shadow-lg flex items-center" style="background: ${secondaryColor}; color: white;">
            <i class="fas fa-file-excel ml-2"></i>
            <span>تصدير Excel</span>
          </button>
        </div>
        <div class="flex items-center gap-3">
          <div class="relative">
            <input type="text" placeholder="بحث في القضايا..." 
                   class="bg-gray-700 text-gray-100 rounded-lg px-4 py-2 pr-10 focus:outline-none focus:ring-2 transition" 
                   style="border: 1px solid ${primaryColor}40;">
            <i class="fas fa-search absolute right-3 top-3 text-gray-400"></i>
          </div>
          <button class="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition">
            <i class="fas fa-filter"></i>
          </button>
        </div>
      </div>
      
      <div class="overflow-x-auto">
        <table class="w-full">
          <thead>
            <tr class="border-b-2" style="border-color: ${primaryColor}40; background: ${bgColor};">
              <th class="text-right py-4 px-6 font-bold text-sm uppercase tracking-wider" style="color: ${primaryColor};">
                <div class="flex items-center gap-2">
                  <i class="fas fa-user text-xs"></i>
                  <span>اسم العميل</span>
                </div>
              </th>
              <th class="text-right py-4 px-6 font-bold text-sm uppercase tracking-wider" style="color: ${primaryColor};">
                <div class="flex items-center gap-2">
                  <i class="fas fa-hashtag text-xs"></i>
                  <span>رقم القضية</span>
                </div>
              </th>
              <th class="text-right py-4 px-6 font-bold text-sm uppercase tracking-wider" style="color: ${primaryColor};">
                <div class="flex items-center gap-2">
                  <i class="fas fa-calendar text-xs"></i>
                  <span>تاريخ الجلسة</span>
                </div>
              </th>
              <th class="text-right py-4 px-6 font-bold text-sm uppercase tracking-wider" style="color: ${primaryColor};">
                <div class="flex items-center gap-2">
                  <i class="fas fa-cog text-xs"></i>
                  <span>الحالة</span>
                </div>
              </th>
              <th class="text-center py-4 px-6 font-bold text-sm uppercase tracking-wider" style="color: ${primaryColor};">
                <div class="flex items-center justify-center gap-2">
                  <i class="fas fa-tools text-xs"></i>
                  <span>الإجراءات</span>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="table-row border-b border-gray-700 hover:shadow-md transition-all">
              <td class="py-4 px-6">
                <div class="flex items-center gap-3">
                  <div class="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold" style="background: ${primaryColor}30; color: ${primaryColor};">أم</div>
                  <div>
                    <div class="font-semibold">أحمد محمد السعيد</div>
                    <div class="text-xs opacity-60">ahmed@example.com</div>
                  </div>
                </div>
              </td>
              <td class="py-4 px-6">
                <span class="px-3 py-1 rounded-lg font-mono font-semibold text-sm" style="background: ${primaryColor}20; color: ${primaryColor};">2024-001</span>
              </td>
              <td class="py-4 px-6">
                <div class="flex items-center gap-2">
                  <i class="fas fa-calendar-day text-sm opacity-60"></i>
                  <span>2024-01-15</span>
                </div>
              </td>
              <td class="py-4 px-6">
                <span class="px-3 py-1 rounded-full text-xs font-bold" style="background: ${secondaryColor}; color: white;">
                  <i class="fas fa-check-circle ml-1"></i>نشطة
                </span>
              </td>
              <td class="py-4 px-6">
                <div class="flex items-center justify-center gap-2">
                  <button class="w-9 h-9 rounded-lg bg-blue-600 hover:bg-blue-700 transition flex items-center justify-center shadow-md" title="عرض">
                    <i class="fas fa-eye text-sm"></i>
                  </button>
                  <button class="w-9 h-9 rounded-lg transition flex items-center justify-center shadow-md hover:opacity-80" style="background: ${primaryColor}; color: ${bgColor};" title="تعديل">
                    <i class="fas fa-edit text-sm"></i>
                  </button>
                  <button class="w-9 h-9 rounded-lg bg-red-600 hover:bg-red-700 transition flex items-center justify-center shadow-md" title="حذف">
                    <i class="fas fa-trash text-sm"></i>
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
  renderServiceCards();
  renderCasesTable();
  renderCards();
});
