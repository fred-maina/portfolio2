const measurementId = "G-0KEFVWQ33N";

function initializeAnalytics() {
  window.dataLayer = window.dataLayer || [];
  window.gtag = (...args) => window.dataLayer.push(args);
  window.gtag("js", new Date());
  window.gtag("config", measurementId, { send_page_view: true });

  let loaded = false;
  const loadGoogleTag = () => {
    if (loaded) return;
    loaded = true;
    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
    document.head.append(script);
  };
  ["pointerdown", "keydown", "touchstart"].forEach((eventName) =>
    window.addEventListener(eventName, loadGoogleTag, {
      once: true,
      passive: true,
    }),
  );
  window.setTimeout(loadGoogleTag, 5000);
}

initializeAnalytics();

document.querySelectorAll("[data-analytics-event]").forEach((element) => {
  element.addEventListener("click", () => {
    const parameters = JSON.parse(element.dataset.analyticsParams || "{}");
    window.gtag?.("event", element.dataset.analyticsEvent, parameters);
  });
});

const menuButton = document.querySelector(".menu-button");
const navigation = document.querySelector("#primary-navigation");
menuButton?.addEventListener("click", () => {
  const open = navigation.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(open));
  menuButton.setAttribute("aria-label", open ? "Close menu" : "Open menu");
});
navigation?.querySelectorAll("a").forEach((link) =>
  link.addEventListener("click", () => {
    navigation.classList.remove("open");
    menuButton?.setAttribute("aria-expanded", "false");
    menuButton?.setAttribute("aria-label", "Open menu");
  }),
);

const revealElements = document.querySelectorAll(".reveal");
if (
  "IntersectionObserver" in window &&
  !window.matchMedia("(prefers-reduced-motion: reduce)").matches
) {
  const observer = new IntersectionObserver(
    (entries) =>
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      }),
    { threshold: 0.12 },
  );
  revealElements.forEach((element) => observer.observe(element));
} else {
  revealElements.forEach((element) => element.classList.add("is-visible"));
}

document.querySelectorAll(".project-shot img, .portrait img").forEach((image) =>
  image.addEventListener("error", () => {
    image.closest("figure")?.classList.add("shot-empty");
    image.remove();
  }),
);

const bookingFrame = document.querySelector("#booking-calendar");
const bookingQuery = window.matchMedia("(min-width: 801px)");
const updateBookingFrame = () => {
  if (
    bookingQuery.matches &&
    bookingFrame &&
    !bookingFrame.getAttribute("src")
  ) {
    bookingFrame.src = bookingFrame.dataset.src;
  }
};
updateBookingFrame();
bookingQuery.addEventListener("change", updateBookingFrame);
