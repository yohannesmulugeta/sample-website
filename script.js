(() => {
  "use strict";

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const menuButton = document.querySelector(".menu-button");
  const mobileMenu = document.querySelector(".mobile-menu");
  const mobileLinks = document.querySelectorAll(".mobile-menu a");
  const year = document.querySelector(".current-year");

  if (year) year.textContent = new Date().getFullYear();

  const setMenu = (open) => {
    if (!menuButton || !mobileMenu) return;
    menuButton.setAttribute("aria-expanded", String(open));
    mobileMenu.setAttribute("aria-hidden", String(!open));
    mobileMenu.classList.toggle("is-open", open);
    document.body.classList.toggle("menu-open", open);

    const bars = menuButton.querySelectorAll("span:not(.sr-only)");
    if (bars.length === 2) {
      bars[0].style.transform = open ? "translateY(3.5px) rotate(45deg)" : "";
      bars[1].style.transform = open ? "translateY(-3.5px) rotate(-45deg)" : "";
    }
  };

  menuButton?.addEventListener("click", () => {
    const open = menuButton.getAttribute("aria-expanded") !== "true";
    setMenu(open);
  });

  mobileLinks.forEach((link) => link.addEventListener("click", () => setMenu(false)));
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") setMenu(false);
  });

  if (prefersReducedMotion || !window.gsap || !window.ScrollTrigger) {
    document.querySelector(".loader")?.remove();
    document.querySelectorAll(".manifesto__title span").forEach((word) => word.classList.add("is-active"));
    return;
  }

  gsap.registerPlugin(ScrollTrigger);

  const loader = document.querySelector(".loader");
  const counter = document.querySelector(".loader__count");
  const loadingState = { value: 0 };

  const loaderTimeline = gsap.timeline({
    defaults: { ease: "power3.out" },
    onComplete: () => loader?.remove(),
  });

  loaderTimeline
    .to(loadingState, {
      value: 100,
      duration: 1.1,
      ease: "power2.inOut",
      onUpdate: () => {
        if (counter) counter.textContent = String(Math.round(loadingState.value)).padStart(2, "0");
      },
    })
    .to(".loader__bar span", { width: "100%", duration: 1.1, ease: "power2.inOut" }, 0)
    .from(".loader__word", { yPercent: 120, rotation: 4, duration: 0.8 }, 0.15)
    .to(".loader__word", { yPercent: -120, rotation: -4, duration: 0.65, ease: "power3.in" }, "+=0.1")
    .to(loader, { yPercent: -100, duration: 0.85, ease: "power4.inOut" }, "-=0.15")
    .from(".hero__line > span", {
      yPercent: 115,
      rotation: 3,
      stagger: 0.09,
      duration: 1,
      ease: "power4.out",
    }, "-=0.3")
    .from(".reveal-up", { y: 26, opacity: 0, stagger: 0.1, duration: 0.7 }, "-=0.7");

  gsap.to(".hero__orb--one", {
    yPercent: 40,
    xPercent: -10,
    scale: 1.18,
    ease: "none",
    scrollTrigger: {
      trigger: ".hero",
      start: "top top",
      end: "bottom top",
      scrub: true,
    },
  });

  gsap.to(".hero__orb--two", {
    yPercent: -55,
    rotation: 90,
    ease: "none",
    scrollTrigger: {
      trigger: ".hero",
      start: "top top",
      end: "bottom top",
      scrub: true,
    },
  });

  gsap.to(".hero__title", {
    yPercent: -16,
    scale: 0.94,
    transformOrigin: "center center",
    ease: "none",
    scrollTrigger: {
      trigger: ".hero",
      start: "top top",
      end: "bottom top",
      scrub: true,
    },
  });

  const manifestoWords = [...document.querySelectorAll(".manifesto__title span")];
  const manifestoProgress = document.querySelector(".manifesto__progress span");

  ScrollTrigger.create({
    trigger: ".manifesto",
    start: "top top",
    end: "bottom bottom",
    onUpdate: (self) => {
      const activeCount = Math.max(1, Math.ceil(self.progress * manifestoWords.length));
      manifestoWords.forEach((word, index) => word.classList.toggle("is-active", index < activeCount));
      if (manifestoProgress) gsap.set(manifestoProgress, { scaleX: self.progress });
    },
  });

  gsap.fromTo(
    ".manifesto__title",
    { scale: 0.92, y: 60 },
    {
      scale: 1,
      y: 0,
      ease: "none",
      scrollTrigger: {
        trigger: ".manifesto",
        start: "top top",
        end: "45% top",
        scrub: true,
      },
    }
  );

  gsap.utils.toArray(".project-card").forEach((card, index) => {
    const nextCard = card.nextElementSibling;

    gsap.from(card, {
      y: 90,
      scale: 0.94,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: card,
        start: "top 88%",
        toggleActions: "play none none reverse",
      },
    });

    if (nextCard) {
      gsap.to(card, {
        scale: 0.94 - index * 0.01,
        filter: "brightness(0.55)",
        ease: "none",
        scrollTrigger: {
          trigger: nextCard,
          start: "top 88%",
          end: "top 16%",
          scrub: true,
        },
      });
    }
  });

  gsap.to(".phone--left", {
    xPercent: -18,
    rotation: -19,
    ease: "none",
    scrollTrigger: {
      trigger: ".project-card--orange",
      start: "top bottom",
      end: "bottom top",
      scrub: true,
    },
  });

  gsap.to(".phone--right", {
    xPercent: 18,
    rotation: 19,
    ease: "none",
    scrollTrigger: {
      trigger: ".project-card--orange",
      start: "top bottom",
      end: "bottom top",
      scrub: true,
    },
  });

  gsap.to(".project-card__visual--type span:nth-child(odd)", {
    xPercent: -9,
    ease: "none",
    scrollTrigger: {
      trigger: ".project-card--green",
      start: "top bottom",
      end: "bottom top",
      scrub: true,
    },
  });

  gsap.to(".project-card__visual--type span:nth-child(even)", {
    xPercent: 9,
    ease: "none",
    scrollTrigger: {
      trigger: ".project-card--green",
      start: "top bottom",
      end: "bottom top",
      scrub: true,
    },
  });

  gsap.to(".project-card__visual--rings span", {
    rotation: 120,
    scale: (index) => 1 + index * 0.08,
    stagger: 0.03,
    ease: "none",
    scrollTrigger: {
      trigger: ".project-card--violet",
      start: "top bottom",
      end: "bottom top",
      scrub: true,
    },
  });

  const mediaQuery = gsap.matchMedia();

  mediaQuery.add("(min-width: 901px)", () => {
    const track = document.querySelector(".horizontal__track");
    const viewport = document.querySelector(".horizontal__viewport");
    const current = document.querySelector(".horizontal__current");

    if (!track || !viewport) return;

    const calculateDistance = () => Math.max(0, track.scrollWidth - viewport.clientWidth + window.innerWidth * 0.08);

    const horizontalTween = gsap.to(track, {
      x: () => -calculateDistance(),
      ease: "none",
      scrollTrigger: {
        trigger: ".horizontal",
        start: "top top",
        end: "bottom bottom",
        scrub: 0.6,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          if (!current) return;
          const item = Math.min(4, Math.floor(self.progress * 4) + 1);
          current.textContent = String(item).padStart(2, "0");
        },
      },
    });

    return () => {
      horizontalTween.scrollTrigger?.kill();
      horizontalTween.kill();
    };
  });

  gsap.from(".about__top h2", {
    yPercent: 30,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".about__top",
      start: "top 80%",
    },
  });

  gsap.to(".about__shape", {
    borderRadius: "10% 10% 50% 50%",
    rotation: 4,
    ease: "none",
    scrollTrigger: {
      trigger: ".about__body",
      start: "top bottom",
      end: "bottom top",
      scrub: true,
    },
  });

  gsap.to(".about__shape span", {
    rotation: -18,
    scale: 1.12,
    ease: "none",
    scrollTrigger: {
      trigger: ".about__body",
      start: "top bottom",
      end: "bottom top",
      scrub: true,
    },
  });

  gsap.utils.toArray(".service-list article").forEach((item) => {
    gsap.from(item.querySelectorAll("span, h3, p"), {
      y: 35,
      opacity: 0,
      stagger: 0.08,
      duration: 0.75,
      ease: "power3.out",
      scrollTrigger: {
        trigger: item,
        start: "top 86%",
      },
    });
  });

  gsap.to(".contact__background", {
    xPercent: -35,
    ease: "none",
    scrollTrigger: {
      trigger: ".contact",
      start: "top bottom",
      end: "bottom top",
      scrub: true,
    },
  });

  gsap.from(".contact h2 span", {
    xPercent: -25,
    opacity: 0,
    ease: "none",
    scrollTrigger: {
      trigger: ".contact",
      start: "top 70%",
      end: "top 20%",
      scrub: true,
    },
  });

  let lastScrollY = window.scrollY;
  const marqueeTrack = document.querySelector(".marquee__track");

  window.addEventListener(
    "scroll",
    () => {
      if (!marqueeTrack) return;
      const direction = window.scrollY > lastScrollY ? "normal" : "reverse";
      marqueeTrack.style.animationDirection = direction;
      lastScrollY = window.scrollY;
    },
    { passive: true }
  );

  window.addEventListener("load", () => ScrollTrigger.refresh());
})();
