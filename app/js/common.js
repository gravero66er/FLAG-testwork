ymaps.ready(init);

getObjects = [];

function init() {
  let myMap = new ymaps.Map("map", {
    center: [53.91, 27.59],
    zoom: 7,
    controls: [],
  });

  let data = [
    {
      city: "Офис МИНСК",
      address: "Скрыганова 4Б",
      cordinates: [53.90993875, 27.51939353],
      ceo: "Петров Антон Сергеевич",
      phone1: "+9 (458) 908-65-76",
      phone2: "+9 (458) 987-76-45",
      email: "aloalo@mail.ru",
    },
    {
      city: "Офис МИНСК",
      address: "Клумова 35",
      cordinates: [53.89151736, 27.60404335],
      ceo: "Петров Иван Сергеевич",
      phone1: "+9 (458) 904-65-77",
      phone2: "+9 (458) 903-56-40",
      email: "aloalo@mail.ru",
    },
  ];

  const createPlacemark = function ({
    city,
    cordinates,
    address,
    ceo,
    phone1,
    phone2,
    email,
  }) {
    return new ymaps.Placemark(
      cordinates,
      {
        hintContent: `<div class="hint__content">${address}</div>`,
        balloonContent: [
          `<div class="balloon__content">
        <div class="balloon__title">${city}</div>
        <div class="balloon__ceo">${ceo}</div>
        <div class="balloon__phone">${phone1}<span>${phone2}</span></div>
        <a href="mailto:aloalo@mail.ru" class="balloon__email">${email}</a>
      </div>`,
        ].join(""),
      },
      {
        iconLayout: "default#image",
        iconImageHref: "../img/mark.png",
        iconImageSize: [30, 30],
      }
    );
  };

  const ps = data.map(createPlacemark);
  ps.forEach((p) => myMap.geoObjects.add(p));
}

let tab = function () {
  let tabNav = document.querySelectorAll(".tabs__item"),
    tabContent = document.querySelectorAll(".tabs__block"),
    tabName;

  tabNav.forEach((item) => {
    item.addEventListener("click", selectTabNav);
  });

  function selectTabNav() {
    tabNav.forEach((item) => {
      item.classList.remove("is-active");
    });
    this.classList.add("is-active");
    tabName = this.getAttribute("data-tab-name");
    selectTabContent(tabName);
  }
  function selectTabContent(tabName) {
    tabContent.forEach((item) => {
      item.classList.contains(tabName)
        ? item.classList.add("is-active")
        : item.classList.remove("is-active");
    });
  }
};

tab();

function drop() {
  return document.querySelectorAll(".info__city").forEach((item) => {
    item.addEventListener("click", () => {
      const parent = item.parentNode;

      parent.classList.contains("is-active")
        ? parent.classList.remove("is-active")
        : document.querySelectorAll(".info__content").forEach((child) => {
            child.classList.remove("is-active");
          });
      parent.classList.add("is-active");
    });
  });
}

drop();
