const stripeLinks = document.querySelectorAll("[data-stripe-placeholder='true']");
const serviceSelect = document.querySelector("#serviceSelect");
const bookingForm = document.querySelector("#bookingForm");
const formStatus = document.querySelector("#formStatus");
const uploadInput = document.querySelector("#certificateUpload");
const certificateGrid = document.querySelector("#certificateGrid");

stripeLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    if (link.href.includes("replace-")) {
      event.preventDefault();
      const card = link.closest(".service-card");
      serviceSelect.value = card.dataset.service;
      document.querySelector("#booking").scrollIntoView({ behavior: "smooth" });
      formStatus.textContent = "Stripe-ссылка пока не подключена. Выбранная услуга добавлена в заявку.";
    }
  });
});

document.querySelectorAll(".service-card").forEach((card) => {
  card.addEventListener("click", (event) => {
    if (event.target.closest("a")) return;
    serviceSelect.value = card.dataset.service;
  });
});

bookingForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(bookingForm);
  const subject = encodeURIComponent(`Запись на консультацию: ${data.get("service")}`);
  const body = encodeURIComponent(
    `Имя: ${data.get("name")}\nEmail: ${data.get("email")}\nУслуга: ${data.get("service")}\n\nКомментарий:\n${data.get("message") || ""}`
  );

  formStatus.textContent = "Открываю письмо для отправки заявки.";
  window.location.href = `mailto:igor@example.com?subject=${subject}&body=${body}`;
});

uploadInput.addEventListener("change", () => {
  const files = Array.from(uploadInput.files || []);
  files.forEach((file) => {
    const card = document.createElement("article");
    card.className = "certificate-card";

    const type = document.createElement("p");
    type.textContent = file.type.includes("pdf") ? "PDF" : "Файл";

    const title = document.createElement("h3");
    title.textContent = file.name.replace(/\.[^/.]+$/, "");

    const meta = document.createElement("span");
    meta.textContent = `${Math.max(1, Math.round(file.size / 1024))} KB`;

    card.append(type, title, meta);
    certificateGrid.prepend(card);
  });
});
