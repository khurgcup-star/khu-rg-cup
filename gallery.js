(() => {
  "use strict";

  const galleryItems = [
  {
    "src": "assets/gallery/gallery-01.jpg",
    "title": "2025 대회 참가자와 관계자 단체 사진",
    "alt": "2025 경희 라이온스컵 참가자와 관계자들이 함께 촬영한 단체 사진"
  },
  {
    "src": "assets/gallery/gallery-02.jpg",
    "title": "후프 종목 경기 장면",
    "alt": "리듬체조 선수가 후프 종목 연기를 펼치는 경기 장면"
  },
  {
    "src": "assets/gallery/gallery-03.jpg",
    "title": "시상식 메달 수여",
    "alt": "대회 시상식에서 선수들이 메달을 수여받는 장면"
  },
  {
    "src": "assets/gallery/gallery-04.jpg",
    "title": "리본 종목 경기 장면",
    "alt": "리듬체조 선수가 리본 종목 연기를 펼치는 경기 장면"
  },
  {
    "src": "assets/gallery/gallery-05.jpg",
    "title": "경기 중 도약 동작",
    "alt": "리듬체조 선수가 경기 중 도약과 유연성 동작을 수행하는 장면"
  },
  {
    "src": "assets/gallery/gallery-06.jpg",
    "title": "경기 중 밸런스 동작",
    "alt": "리듬체조 선수가 경기 중 고난도 밸런스 동작을 수행하는 장면"
  },
  {
    "src": "assets/gallery/gallery-07.jpg",
    "title": "대회 참가자 전체 단체 사진",
    "alt": "경기장에서 참가자들이 함께 촬영한 전체 단체 사진"
  },
  {
    "src": "assets/gallery/gallery-08.jpg",
    "title": "대회 개회식 축사",
    "alt": "경기장 단상에서 진행된 대회 개회식 축사 장면"
  },
  {
    "src": "assets/gallery/gallery-09.jpg",
    "title": "선수 메달 수여 장면",
    "alt": "시상자가 선수에게 메달을 수여하는 장면"
  },
  {
    "src": "assets/gallery/gallery-10.jpg",
    "title": "선수 메달 수여 장면",
    "alt": "시상자가 선수에게 메달을 수여하는 장면"
  },
  {
    "src": "assets/gallery/gallery-11.jpg",
    "title": "선수 메달 수여 장면",
    "alt": "시상식에서 선수에게 메달을 걸어주는 장면"
  },
  {
    "src": "assets/gallery/gallery-12.jpg",
    "title": "시상식 후 격려 장면",
    "alt": "시상식 후 관계자가 선수와 인사를 나누며 격려하는 장면"
  },
  {
    "src": "assets/gallery/gallery-13.jpg",
    "title": "대회 운영진 표창",
    "alt": "대회 운영진이 단상에서 표창을 받는 장면"
  },
  {
    "src": "assets/gallery/gallery-14.jpg",
    "title": "대회 운영진 표창",
    "alt": "대회 운영진이 단상에서 표창을 받는 장면"
  },
  {
    "src": "assets/gallery/gallery-15.jpg",
    "title": "경기장 운영 현장",
    "alt": "경기장에 참가자와 지도자 및 운영진이 함께 서 있는 장면"
  },
  {
    "src": "assets/gallery/gallery-16.jpg",
    "title": "대회 관계자 단체 사진",
    "alt": "대회 관계자와 운영진이 함께 촬영한 단체 사진"
  },
  {
    "src": "assets/gallery/gallery-17.jpg",
    "title": "시상용 메달과 트로피",
    "alt": "대회 시상을 위해 준비된 메달과 트로피"
  },
  {
    "src": "assets/gallery/gallery-18.jpg",
    "title": "대회 트로피",
    "alt": "경희대학교 문장이 새겨진 대회 트로피"
  },
  {
    "src": "assets/gallery/gallery-19.jpg",
    "title": "대회 운영 준비 현장",
    "alt": "운영진이 메달과 시상품을 정리하는 대회 준비 현장"
  },
  {
    "src": "assets/gallery/gallery-20.jpg",
    "title": "경희대학교 대회장 전경",
    "alt": "경희대학교 체육관 내부의 대회 현수막과 시설 전경"
  },
  {
    "src": "assets/gallery/gallery-21.jpg",
    "title": "2025 대회 현수막",
    "alt": "2025 경희 라이온스컵 전국 리듬체조 대회 현수막"
  },
  {
    "src": "assets/gallery/gallery-22.jpg",
    "title": "참가자 전체 단체 사진",
    "alt": "경기장에서 참가자들이 함께 촬영한 전체 단체 사진"
  }
];
  const modal = document.querySelector("[data-gallery-lightbox]");
  const modalImage = document.querySelector("[data-gallery-image]");
  const modalTitle = document.querySelector("[data-gallery-title]");
  const modalCounter = document.querySelector("[data-gallery-counter]");
  const closeButton = document.querySelector("[data-gallery-close]");
  const previousButton = document.querySelector("[data-gallery-prev]");
  const nextButton = document.querySelector("[data-gallery-next]");
  const triggers = Array.from(document.querySelectorAll("[data-gallery-index]"));

  if (!modal || !modalImage || !modalTitle || !modalCounter || !closeButton || !previousButton || !nextButton || !triggers.length) {
    return;
  }

  let currentIndex = 0;
  let lastFocusedElement = null;

  const normalizeIndex = (index) => (index + galleryItems.length) % galleryItems.length;

  const preloadAdjacentImages = () => {
    [-1, 1].forEach((offset) => {
      const adjacent = galleryItems[normalizeIndex(currentIndex + offset)];
      const image = new Image();
      image.src = adjacent.src;
    });
  };

  const render = (index) => {
    currentIndex = normalizeIndex(index);
    const item = galleryItems[currentIndex];
    modalImage.src = item.src;
    modalImage.alt = item.alt;
    modalTitle.textContent = item.title;
    modalCounter.textContent = `${currentIndex + 1} / ${galleryItems.length}`;
    preloadAdjacentImages();
  };

  const openGallery = (index, trigger) => {
    lastFocusedElement = trigger || document.activeElement;
    render(index);
    modal.hidden = false;
    modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("gallery-lightbox-open");
    window.requestAnimationFrame(() => closeButton.focus());
  };

  const closeGallery = () => {
    modal.hidden = true;
    modal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("gallery-lightbox-open");
    modalImage.removeAttribute("src");
    if (lastFocusedElement && typeof lastFocusedElement.focus === "function") {
      lastFocusedElement.focus();
    }
  };

  triggers.forEach((trigger) => {
    const index = Number(trigger.dataset.galleryIndex || 0);
    trigger.addEventListener("click", () => openGallery(index, trigger));
    trigger.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openGallery(index, trigger);
      }
    });
  });

  closeButton.addEventListener("click", closeGallery);
  previousButton.addEventListener("click", () => render(currentIndex - 1));
  nextButton.addEventListener("click", () => render(currentIndex + 1));

  modal.addEventListener("click", (event) => {
    if (event.target === modal) closeGallery();
  });

  document.addEventListener("keydown", (event) => {
    if (modal.hidden) return;
    if (event.key === "Escape") closeGallery();
    if (event.key === "ArrowLeft") render(currentIndex - 1);
    if (event.key === "ArrowRight") render(currentIndex + 1);
  });

  let touchStartX = null;
  modal.addEventListener("touchstart", (event) => {
    touchStartX = event.changedTouches[0]?.clientX ?? null;
  }, { passive: true });
  modal.addEventListener("touchend", (event) => {
    if (touchStartX === null) return;
    const touchEndX = event.changedTouches[0]?.clientX ?? touchStartX;
    const distance = touchEndX - touchStartX;
    touchStartX = null;
    if (Math.abs(distance) < 48) return;
    render(currentIndex + (distance < 0 ? 1 : -1));
  }, { passive: true });
})();
