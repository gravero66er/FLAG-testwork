ymaps.ready(init);

const belData = [
  {
    city: "Офис МИНСК",
    cityId: 1,
    address: "Скрыганова 4Б",
    cordinates: [53.90993875, 27.51939353],
    ceo: "Петров Антон Сергеевич",
    phone1: "+9 (458) 908-65-76",
    phone2: "+9 (458) 987-76-45",
    email: "aloalo@mail.ru",
  },
  {
    city: "Офис МИНСК",
    cityId: 1,
    address: "Клумова 35",
    cordinates: [53.89151736, 27.60404335],
    ceo: "Петров Иван Сергеевич",
    phone1: "+9 (458) 904-65-77",
    phone2: "+9 (458) 903-56-40",
    email: "aloalo@mail.ru",
  },
  {
    city: "Офис БОБРУЙСК",
    cityId: 2,
    address: "Островского 43",
    cordinates: [53.14907912, 29.22477859],
    ceo: "Сидоров Андрей Сагидович",
    phone1: "+9 (489) 990-45-06",
    phone2: "+9 (489) 992-46-36",
    email: "aloalo@mail.ru",
  },
  {
    city: "Офис БОБРУЙСК",
    cityId: 2,
    address: "Марии Бобровой 7",
    cordinates: [53.12842112, 29.20681467],
    ceo: "Иванов Павел Сергеевич",
    phone1: "+9 (489) 992-75-46",
    phone2: "+9 (489) 992-86-13",
    email: "aloalo@mail.ru",
  },
  {
    city: "Офис МОГИЛЁВ",
    cityId: 3,
    address: "Лазаренки 31",
    cordinates: [53.90086722, 30.32896509],
    ceo: "Антонов Антон Потапович",
    phone1: "+9 (490) 168-55-76",
    phone2: "+9 (490) 167-76-12",
    email: "aloalo@mail.ru",
  },
  {
    city: "Офис ВИТЕБСК",
    cityId: 4,
    address: "Жескова 19",
    cordinates: [55.18340042, 30.20992554],
    ceo: "Петров Павел Сергеевич",
    phone1: "+9 (480) 745-65-76",
    phone2: "+9 (480) 909-73-95",
    email: "aloalo@mail.ru",
  },
  {
    city: "Офис ГОМЕЛЬ",
    cityId: 5,
    address: "Победы 15",
    cordinates: [52.43394445, 31.0010368],
    ceo: "Сидоров Геннадий Сергеевич",
    phone1: "+9 (870) 687-14-05",
    phone2: "+9 (870) 687-78-35",
    email: "aloalo@mail.ru",
  },
  {
    city: "Офис ГОМЕЛЬ",
    cityId: 5,
    address: "Владимирова 4",
    cordinates: [52.43490809, 30.95121998],
    ceo: "Чаплин Антон Иванович",
    phone1: "+9 (765) 065-15-36",
    phone2: "+9 (765) 065-76-41",
    email: "aloalo@mail.ru",
  },
];

const rusData = [
  {
    city: "Офис МОСКВА",
    cityId: 6,
    address: "Малый Васильевский 6",
    cordinates: [55.74612977, 37.59355084],
    ceo: "Павлов Сергей Иванович",
    phone1: "+9 (495) 263-63-66",
    phone2: "+9 (495) 298-15-11",
    email: "aloalo@mail.ru",
  },
  {
    city: "Офис МОСКВА",
    cityId: 6,
    address: "Радио 6",
    cordinates: [55.76382801, 37.67518035],
    ceo: "Павлов Иван Артемович",
    phone1: "+9 (495) 904-65-77",
    phone2: "+9 (458) 903-56-40",
    email: "aloalo@mail.ru",
  },
  {
    city: "Офис САНКТ-ПЕТЕРБУРГ",
    cityId: 7,
    address: "Черняховского 3",
    cordinates: [59.91552987, 30.35619628],
    ceo: "Потапов Андрей Артемович",
    phone1: "+9 (812) 990-45-06",
    phone2: "+9 (812) 992-46-36",
    email: "aloalo@mail.ru",
  },
  {
    city: "Офис САНКТ-ПЕТЕРБУРГ",
    cityId: 7,
    address: "Митрофановское Шоссе 10",
    cordinates: [59.89912055, 30.30004704],
    ceo: "Степанов Павел Сергеевич",
    phone1: "+9 (812) 992-75-46",
    phone2: "+9 (812) 992-86-13",
    email: "aloalo@mail.ru",
  },
  {
    city: "Офис ЕКАТЕРИНБУРГ",
    cityId: 8,
    address: "Шевченко 15",
    cordinates: [56.84899294, 60.61563326],
    ceo: "Перминов Антон Потапович",
    phone1: "+9 (812) 992-75-46",
    phone2: "+9 (812) 992-86-13",
    email: "aloalo@mail.ru",
  },
  {
    city: "Офис СОЧИ",
    cityId: 9,
    address: "Комсомольская 22",
    cordinates: [43.57647633, 39.73419742],
    ceo: "Антонов Павел Сергеевич",
    phone1: "+9 (258) 745-65-76",
    phone2: "+9 (258) 909-73-95",
    email: "aloalo@mail.ru",
  },
  {
    city: "Офис ГРОЗНЫЙ",
    cityId: 10,
    address: "Сайханова 17",
    cordinates: [43.29796592, 45.70604134],
    ceo: "Сидоров Павел Сергеевич",
    phone1: "+9 (813) 687-14-05",
    phone2: "+9 (813) 687-78-35",
    email: "aloalo@mail.ru",
  },
  {
    city: "Офис ГРОЗНЫЙ",
    cityId: 10,
    address: "Гойгова 27",
    cordinates: [43.30035202, 45.72504503],
    ceo: "Чаплин Антон Иванович",
    phone1: "+9 (765) 065-15-36",
    phone2: "+9 (765) 065-76-41",
    email: "aloalo@mail.ru",
  },
];

let myMap = null;

let geoObjectsBel = null;
let geoObjectsRus = null;

function createPlacemark({
  city,
  address,
  cordinates,
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
      iconOffset: [0, 20],
    }
  );
}

function init() {
  myMap = new ymaps.Map("map", {
    center: [54.13029421, 40.86440743],
    zoom: 4,
    controls: [],
  });

  geoObjectsBel = new ymaps.GeoObjectCollection({}, {});
  geoObjectsRus = new ymaps.GeoObjectCollection({}, {});

  belData.forEach((data) => {
    geoObjectsBel.add(createPlacemark(data));
  });
  rusData.forEach((data) => {
    geoObjectsRus.add(createPlacemark(data));
  });

  const clusterer = new ymaps.Clusterer({
    clusterIconLayout: ymaps.templateLayoutFactory.createClass(
      '<div class="clusterIcon">{{ properties.geoObjects.length }}</div>'
    ),
    offset: [-25, -25],
    clusterIconShape: {
      type: "Rectangle",
      coordinates: [
        [0, 0],
        [20, 20],
      ],
    },
    clusterDisableClickZoom: false,
  });

  clusterer.add([...geoObjectsBel.toArray(), ...geoObjectsRus.toArray()]);
  myMap.geoObjects.add(clusterer);
  myMap.geoObjects.add(geoObjectsBel);
  myMap.geoObjects.add(geoObjectsRus);
}

function tab() {
  let tabNav = document.querySelectorAll(".tabs__item"),
    tabContent = document.querySelectorAll(".tabs__block");

  tabNav.forEach((item) => {
    item.addEventListener("click", selectTabNav);
  });

  function selectTabNav() {
    const tabName = this.getAttribute("data-tab-name");
    console.log(myMap, myMap.geoObjects);

    if (tabName === "bel") {
      myMap.setBounds(geoObjectsBel.getBounds());
    } else if (tabName === "rus") {
      myMap.setBounds(geoObjectsRus.getBounds());
    }

    tabNav.forEach((item) => {
      item.classList.remove("is-active");
    });
    this.classList.add("is-active");
    selectTabContent(tabName);
  }

  function selectTabContent(tabName) {
    tabContent.forEach((item) => {
      item.getAttribute("data-parent-tab") === tabName
        ? item.classList.add("is-active")
        : item.classList.remove("is-active");
    });
  }
}

tab();

function drop() {
  return document.querySelectorAll(".info__city").forEach((item) => {
    item.addEventListener("click", (e) => {
      const cityId = parseInt(e.target.getAttribute("data-city-id"));
      const city = rusData.find((data) => data.cityId === cityId);
      myMap.setCenter(city.cordinates, 12);
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
