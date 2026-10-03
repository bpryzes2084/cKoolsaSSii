// Customer contact email shown on the policy pages.
// Set it once here and every page that has <span class="contact-email"></span> picks it up.
// Leave it empty until the mailbox exists.
const CONTACT_EMAIL = "";

document.querySelectorAll(".contact-email").forEach((el) => {
  if (CONTACT_EMAIL) {
    const a = document.createElement("a");
    a.href = "mailto:" + CONTACT_EMAIL;
    a.textContent = CONTACT_EMAIL;
    el.replaceChildren(a);
  } else {
    el.textContent = "our customer service email (coming soon)";
  }
});
document.querySelectorAll(".year").forEach((el) => { el.textContent = new Date().getFullYear(); });
