const LANG_STORAGE_KEY = "deda-lang";

const state = {
  lang: "tr",
  activeCategory: "",
  query: "",
};

const UI_TEXT = {
  tr: {
    common: {
      language: "Dil",
    },
    landing: {
      openBadge: "7/24 Açık",
      heroTitle: "Deda's Coffee and Sandwich",
      heroCopy: "Bahçeşehir'de günün her saati kahve, kruvasan ve taze sandviç keyfi.",
      viewMenu: "Menüyü Aç",
      callNow: "Hemen Ara",
      service1Title: "Mekanda Servis",
      service1Desc: "Rahat ve sakin oturma alanı.",
      service2Title: "Drive-through",
      service2Desc: "Aracınızdan inmeden hızlı teslim.",
      service3Title: "Teslimat",
      service3Desc: "No-contact delivery seçeneği mevcut.",
      addressTitle: "Adres",
      openMap: "Haritada Aç",
      contactTitle: "İletişim",
    },
    menu: {
      title: "Deda's Coffee and Sandwich",
      subtitle: "Kategoriler arasında kaydır, ara ve hızlıca seçim yap.",
      callButton: "Ara",
      whatsappButton: "WhatsApp",
      searchLabel: "Menüde Ara",
      searchPlaceholder: "Menüde ara...",
      noResults: "Arama sonucu bulunamadı.",
    },
  },
  en: {
    common: {
      language: "Language",
    },
    landing: {
      openBadge: "Open 24/7",
      heroTitle: "Deda's Coffee and Sandwich",
      heroCopy: "Fresh coffee, croissants and sandwiches in Bahcesehir all day and night.",
      viewMenu: "Open Menu",
      callNow: "Call Now",
      service1Title: "Dine-in",
      service1Desc: "Comfortable and calm seating area.",
      service2Title: "Drive-through",
      service2Desc: "Fast pickup without leaving your car.",
      service3Title: "Delivery",
      service3Desc: "No-contact delivery is available.",
      addressTitle: "Address",
      openMap: "Open in Maps",
      contactTitle: "Contact",
    },
    menu: {
      title: "Deda's Coffee and Sandwich",
      subtitle: "Swipe categories, search fast, and pick your order.",
      callButton: "Call",
      whatsappButton: "WhatsApp",
      searchLabel: "Search Menu",
      searchPlaceholder: "Search in menu...",
      noResults: "No results for your search.",
    },
  },
  ar: {
    common: {
      language: "اللغة",
    },
    landing: {
      openBadge: "مفتوح 24/7",
      heroTitle: "Deda's Coffee and Sandwich",
      heroCopy: "قهوة طازجة وكرواسون وسندويشات طوال اليوم في بهجة شهير.",
      viewMenu: "افتح القائمة",
      callNow: "اتصل الآن",
      service1Title: "تناول داخل المكان",
      service1Desc: "جلسات مريحة وهادئة.",
      service2Title: "خدمة السيارة",
      service2Desc: "استلام سريع بدون النزول من السيارة.",
      service3Title: "توصيل",
      service3Desc: "يتوفر توصيل بدون تلامس.",
      addressTitle: "العنوان",
      openMap: "افتح الخريطة",
      contactTitle: "التواصل",
    },
    menu: {
      title: "Deda's Coffee and Sandwich",
      subtitle: "تنقّل بين الأقسام وابحث بسرعة.",
      callButton: "اتصال",
      whatsappButton: "واتساب",
      searchLabel: "ابحث في القائمة",
      searchPlaceholder: "ابحث في القائمة...",
      noResults: "لا توجد نتائج للبحث.",
    },
  },
};

const COMMON_DESC_TRANSLATIONS = {
  "Sıcak servis edilir.": {
    en: "Served hot.",
    ar: "يُقدّم ساخناً.",
  },
  "Soğuk servis edilir.": {
    en: "Served cold.",
    ar: "يُقدّم بارداً.",
  },
  "Adet olarak servis edilir.": {
    en: "Served per piece.",
    ar: "يُقدّم بالحبة.",
  },
  "Dilim olarak servis edilir.": {
    en: "Served by slice.",
    ar: "يُقدّم بالشريحة.",
  },
  "Cam şişe": {
    en: "Glass bottle.",
    ar: "زجاجة زجاجية.",
  },
  "Kutu içecek": {
    en: "Can drink.",
    ar: "مشروب معلب.",
  },
  "Meyve suyu": {
    en: "Fruit juice.",
    ar: "عصير فواكه.",
  },
};

const MENU_DATA = [
  {
    id: "bagel",
    name: {
      tr: "Bagel Sandviçler",
      en: "Bagel Sandwiches",
      ar: "سندويشات البيجل",
    },
    image:
      "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=900&q=80",
    items: [
      {
        name: "Üç Peynirli Bagel Sandviç",
        name_en: "Three Cheese Bagel Sandwich",
        name_ar: "بيجل ثلاث أجبان",
        desc: "Cheddar peyniri, kaşar peyniri, parmesan peyniri",
        price: 320,
      },
      {
        name: "Hindi Fümeli Bagel Sandviç",
        name_en: "Smoked Turkey Bagel Sandwich",
        name_ar: "بيجل ديك رومي مدخن",
        desc: "Hindi füme, ezine peyniri, marul, domates",
        price: 355,
      },
    ],
  },
  {
    id: "croissant",
    name: {
      tr: "Kruvasanlar",
      en: "Croissants",
      ar: "كرواسون",
    },
    image:
      "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=900&q=80",
    items: [
      { name: "Çilekli Çikolatalı Kruvasan", desc: "Belçika sütlü çikolata, çilek", price: 495 },
      { name: "Muzlu Nutellalı Kruvasan", desc: "Muz ve nutella dolgulu.", price: 495 },
      { name: "Çilek Reçelli Kruvasan", desc: "Çilek reçeli dolgulu", price: 450 },
      {
        name: "Dana Jambonlu Kruvasan",
        desc: "Labne peyniri, krem peynir, dana jambon, kaşar peyniri, marul, domates",
        price: 475,
      },
      { name: "Beyaz Çikolatalı Kruvasan", desc: "Adet olarak servis edilir.", price: 480 },
      { name: "Beyaz Çikolatalı Roll Kruvasan", desc: "Adet olarak servis edilir.", price: 480 },
      { name: "Muzlu Beyaz Çikolatalı Kruvasan", desc: "Muz ve beyaz çikolata dolgulu", price: 495 },
      { name: "Muzlu Belçika Çikolatalı Kruvasan", desc: "Muz ve Belçika çikolatası", price: 495 },
      { name: "Sade Kruvasan", desc: "Adet olarak servis edilir.", price: 410 },
      {
        name: "Ezine Peynirli Kruvasan",
        desc: "Labne peyniri, krem peyniri, ezine peyniri, kaşar peyniri, marul, domates",
        price: 475,
      },
      { name: "Fındık Kremalı Kruvasan", desc: "Fındık kreması", price: 480 },
      { name: "Hindi Fümeli Kruvasan", desc: "Adet olarak servis edilir.", price: 475 },
      { name: "Belçika Çikolatalı Roll Kruvasan", desc: "Belçika çikolatası", price: 480 },
      { name: "Nutellalı Kruvasan", desc: "Adet olarak servis edilir.", price: 490 },
    ],
  },
  {
    id: "sandwich",
    name: {
      tr: "Sandviçler",
      en: "Sandwiches",
      ar: "السندويشات",
    },
    image:
      "https://images.unsplash.com/photo-1539252554935-80c6f67b0f5c?auto=format&fit=crop&w=900&q=80",
    items: [
      {
        name: "Ton Balıklı Soğuk Sandviç",
        desc: "Ciabatta ekmeğine; ton balığı, kaşar peyniri, domates, marul, mısır",
        price: 475,
      },
      {
        name: "Acuka Soslu & Çeçil Peynirli Soğuk Sandviç",
        desc: "Çeçil peyniri, marul, domates, sızma zeytinyağı, acı sos",
        price: 450,
      },
      {
        name: "Pestolu & Mozzarellalı Soğuk Sandviç",
        desc: "Ciabatta ekmeğine; pesto sos, roka, mozzarella peyniri, domates, sızma zeytinyağı",
        price: 480,
      },
      {
        name: "Yumurtalı Soğuk Sandviç",
        desc: "Labne, krem peynir, haşlanmış yumurta, ezine peyniri, salatalık, sızma zeytinyağı",
        price: 450,
      },
      {
        name: "Dana Jambonlu Soğuk Sandviç",
        desc: "Ciabatta ekmeği arasına; dana jambon, kaşar peyniri, marul, domates, labne krem peynir, sızma zeytinyağı",
        price: 460,
      },
      {
        name: "Avokado Soslu Hindili Soğuk Sandviç",
        desc: "Ciabatta ekmeğine; avokado sos, marul, eski kaşar peyniri, kuru domates, sızma zeytinyağı",
        price: 480,
      },
      {
        name: "Pestolu Hindi Fümeli Soğuk Sandviç",
        desc: "Ciabatta ekmeğinde pesto sos, marul, kaşar peyniri, hindi füme, domates ve sızma zeytinyağı",
        price: 480,
      },
      {
        name: "Hindi Fümeli Soğuk Sandviç",
        desc: "Ciabatta ekmeği arasına; hindi füme, roka, kaşar peyniri, domates, labne, krem peynir, sızma zeytinyağı",
        price: 450,
      },
      {
        name: "Pastırmalı Sıcak Sandviç",
        desc: "Labne, krem peynir, cheddar peyniri, kaşar peyniri, pastırma, kuru domates, zeytinyağı",
        price: 500,
      },
      {
        name: "Kulüp Sandviç",
        desc: "Dana jambon, hindi füme, kaşar peyniri, domates, marul, labne peyniri, krem peynir, sızma zeytinyağı",
        price: 485,
      },
      {
        name: "Ezine Peynirli Soğuk Sandviç",
        desc: "Ezine peyniri, domates, salatalık, zeytin ezmesi, yeşil biber, kekik, sızma zeytinyağı",
        price: 430,
      },
    ],
  },
  {
    id: "toast",
    name: {
      tr: "Tostlar",
      en: "Toasts",
      ar: "توست",
    },
    image:
      "https://images.unsplash.com/photo-1481070414801-51fd732d7184?auto=format&fit=crop&w=900&q=80",
    items: [
      { name: "Karışık Tost", desc: "Dana sucuk, kaşar peyniri", price: 270 },
      { name: "Karışık Kruvasan Tost", desc: "Sucuk, kaşar peyniri, kruvasan", price: 350 },
      { name: "Kaşarlı Tost", desc: "Kaşar peyniri", price: 250 },
      { name: "Kaşarlı Kruvasan Tost", desc: "Kaşar peyniri, kruvasan", price: 320 },
    ],
  },
  {
    id: "breakfast",
    name: {
      tr: "Kahvaltılıklar",
      en: "Breakfast",
      ar: "إفطار",
    },
    image:
      "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=900&q=80",
    items: [
      {
        name: "Mini Kahvaltı Tabağı",
        desc: "Simit, kaşar peyniri, haşlanmış yumurta, zeytin, kahvaltılık sos, domates, labne",
        price: 450,
      },
      {
        name: "Dedas Kahvaltı Tabağı",
        desc: "Beyaz peynir, siyah zeytin, yeşil zeytin, labne, kahvaltılık sos, domates, salatalık, dereotu, kaşar peyniri, haşlanmış yumurta, nutella, ekmek, jambon, hindi füme",
        price: 675,
      },
    ],
  },
  {
    id: "hot-coffee",
    name: {
      tr: "Sıcak Kahveler",
      en: "Hot Coffees",
      ar: "قهوة ساخنة",
    },
    image:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=80",
    items: [
      { name: "Mocha", desc: "Sıcak servis edilir.", price: 310 },
      { name: "Spanish Latte", desc: "Sıcak servis edilir.", price: 315 },
      { name: "Americano", desc: "Sıcak servis edilir.", price: 265 },
      { name: "Cappuccino", desc: "Sıcak servis edilir.", price: 280 },
      { name: "Cortado", desc: "Sıcak servis edilir.", price: 280 },
      { name: "Latte", desc: "Sıcak servis edilir.", price: 280 },
      { name: "Flat White", desc: "Sıcak servis edilir.", price: 280 },
      { name: "Filtre Kahve", desc: "Sıcak servis edilir.", price: 265 },
      { name: "Espresso", desc: "Sıcak servis edilir.", price: 210 },
      { name: "Caramel Latte", desc: "Sıcak servis edilir.", price: 290 },
      { name: "White Mocha", desc: "Sıcak servis edilir.", price: 315 },
    ],
  },
  {
    id: "cold-coffee",
    name: {
      tr: "Soğuk Kahveler",
      en: "Iced Coffees",
      ar: "قهوة باردة",
    },
    image:
      "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=900&q=80",
    items: [
      { name: "Iced White Mocha", desc: "Soğuk servis edilir.", price: 320 },
      { name: "Iced Latte", desc: "Soğuk servis edilir.", price: 280 },
      { name: "Iced Americano", desc: "Soğuk servis edilir.", price: 275 },
      { name: "Iced Mocha", desc: "Soğuk servis edilir.", price: 320 },
      { name: "Deda's Cold Drip Coffee (50 Cl.)", desc: "Soğuk servis edilir.", price: 415 },
      { name: "Iced Orange Americano", desc: "Americano, buz, portakal", price: 320 },
      { name: "Iced Filtre Kahve", desc: "Soğuk servis edilir.", price: 275 },
    ],
  },
  {
    id: "cold-drinks",
    name: {
      tr: "Soğuk İçecekler",
      en: "Cold Drinks",
      ar: "مشروبات باردة",
    },
    image:
      "https://images.unsplash.com/photo-1497534446932-c925b458314e?auto=format&fit=crop&w=900&q=80",
    items: [
      {
        name: "Deda's Detox Suyu (33 Cl.)",
        desc: "Taze sıkım salatalık, limon, kivi, nane, maydanoz",
        price: 350,
      },
      { name: "Çilekli Mint", desc: "Soğuk servis edilir.", price: 300 },
      { name: "Yeşil Elmalı Mint", desc: "Soğuk servis edilir.", price: 300 },
      { name: "Berry Hibiscus", desc: "Soğuk servis edilir.", price: 300 },
      { name: "Cool Lime", desc: "Soğuk servis edilir.", price: 300 },
      { name: "Orman Meyveli Mint", desc: "Soğuk servis edilir.", price: 300 },
      { name: "Portakal Suyu (33 Cl.)", desc: "Cam şişe", price: 325 },
      { name: "Nar & Portakal Suyu (33 Cl.)", desc: "Nar, portakal", price: 325 },
      { name: "Deda's Smoothie (50 Cl.)", desc: "Çilek, portakal, muz", price: 385 },
    ],
  },
  {
    id: "soft-drinks",
    name: {
      tr: "İçecekler",
      en: "Soft Drinks",
      ar: "مشروبات",
    },
    image:
      "https://images.unsplash.com/photo-1527960471264-932f39eb5846?auto=format&fit=crop&w=900&q=80",
    items: [
      { name: "Uludağ Limonata (33 Cl.)", desc: "Pet şişe", price: 130 },
      { name: "San Pellegrino (25 Cl.)", desc: "Cam şişe", price: 160 },
      { name: "Coca-Cola (33 Cl.)", desc: "Kutu içecek", price: 120 },
      { name: "Coca-Cola Zero Sugar (33 Cl.)", desc: "Kutu içecek", price: 120 },
      { name: "Soda (20 Cl.)", desc: "Cam şişe", price: 55 },
      { name: "Fanta (33 Cl.)", desc: "Kutu içecek", price: 120 },
      { name: "Lipton Ice Tea (33 Cl.)", desc: "Kutu içecek", price: 95 },
      { name: "Capri-Sun (20 Cl.)", desc: "Meyve suyu", price: 60 },
      {
        name: "Red Bull (25 Cl.)",
        desc: "18 yaş altına önerilmez. Kafeine hassas kişiler için uygun değildir.",
        price: 135,
      },
      {
        name: "Red Bull Zero Sugar (25 Cl.)",
        desc: "18 yaş altına önerilmez. Kafeine hassas kişiler için uygun değildir.",
        price: 135,
      },
    ],
  },
  {
    id: "desserts",
    name: {
      tr: "Tatlılar",
      en: "Desserts",
      ar: "حلويات",
    },
    image:
      "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=900&q=80",
    items: [
      { name: "Bask Cheesecake", desc: "Dilim olarak servis edilir.", price: 450 },
      { name: "Karışık Meyveli Waffle", desc: "Muz, çilek, beyaz Belçika çikolatası", price: 495 },
      { name: "Beyaz Çikolatalı Brownie", desc: "Dilim olarak servis edilir.", price: 650 },
      { name: "Frambuazlı Cheesecake", desc: "Dilim olarak servis edilir.", price: 410 },
      { name: "Tiramisu", desc: "Dilim olarak servis edilir.", price: 400 },
      { name: "Çikolatalı Muffin", desc: "Adet olarak servis edilir.", price: 265 },
    ],
  },
  {
    id: "packaged",
    name: {
      tr: "Paketli Ürünler",
      en: "Packaged Products",
      ar: "منتجات معبأة",
    },
    image:
      "https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=900&q=80",
    items: [
      {
        name: "Kavrulmuş Çekirdek Kahve (1 Kg.)",
        desc: "Guatemala - Colombia - Etiyopya karışımı, espresso medium-dark, 7/10 sertlik.",
        price: 3450,
      },
    ],
  },
];

const CATEGORY_STOCK_TAGS = {
  bagel: "bagel,sandwich,bakery",
  croissant: "croissant,pastry,bakery",
  sandwich: "sandwich,deli,food",
  toast: "toast,breakfast,sandwich",
  breakfast: "breakfast,plate,food",
  "hot-coffee": "coffee,espresso,cafe",
  "cold-coffee": "iced-coffee,cold-brew,coffee",
  "cold-drinks": "juice,mocktail,drink",
  "soft-drinks": "soda,beverage,drink",
  desserts: "dessert,cake,sweet",
  packaged: "coffee-beans,coffee,packaging",
};

function hashSeed(input) {
  let hash = 0;
  for (let i = 0; i < input.length; i += 1) {
    hash = (hash << 5) - hash + input.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
}

function buildStockImage(categoryId, itemName, index) {
  const tags = CATEGORY_STOCK_TAGS[categoryId] ?? "coffee,food,drink";
  const lock = hashSeed(`${categoryId}-${itemName}-${index}`) % 100000;
  return `https://loremflickr.com/420/420/${tags}?lock=${lock}`;
}

function deepRead(obj, path) {
  return path.split(".").reduce((acc, part) => (acc ? acc[part] : undefined), obj);
}

function translate(key) {
  return deepRead(UI_TEXT[state.lang], key) ?? deepRead(UI_TEXT.tr, key) ?? "";
}

function localizeValue(value) {
  if (value == null) {
    return "";
  }
  if (typeof value === "string") {
    return value;
  }
  return value[state.lang] ?? value.tr ?? Object.values(value)[0] ?? "";
}

function getItemField(item, baseField) {
  const localizedField = `${baseField}_${state.lang}`;
  if (item[localizedField]) {
    return item[localizedField];
  }
  return item[baseField] ?? "";
}

function localizeDescription(desc) {
  if (!desc || state.lang === "tr") {
    return desc;
  }

  if (COMMON_DESC_TRANSLATIONS[desc]) {
    return COMMON_DESC_TRANSLATIONS[desc][state.lang] ?? desc;
  }

  return desc;
}

function formatPrice(value) {
  const locale = state.lang === "ar" ? "ar-EG" : state.lang === "en" ? "en-US" : "tr-TR";
  const number = new Intl.NumberFormat(locale, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);

  return `TRY ${number}`;
}

function normalizeText(value) {
  return (value || "")
    .toString()
    .toLocaleLowerCase("tr-TR")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function applyStaticText() {
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n;
    const text = translate(key);
    if (text) {
      el.textContent = text;
    }
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.dataset.i18nPlaceholder;
    const text = translate(key);
    if (text) {
      el.setAttribute("placeholder", text);
    }
  });
}

function renderCategoryTabs() {
  const tabs = document.getElementById("category-tabs");
  if (!tabs) {
    return;
  }

  tabs.innerHTML = MENU_DATA.map((category) => {
    const title = localizeValue(category.name);
    const activeClass = category.id === state.activeCategory ? "is-active" : "";

    return `<button type="button" class="category-tab ${activeClass}" data-category-id="${escapeHtml(
      category.id
    )}">${escapeHtml(title)}</button>`;
  }).join("");
}

function renderMenuList() {
  const container = document.getElementById("menu-list");
  const emptyState = document.getElementById("menu-empty");
  if (!container || !emptyState) {
    return;
  }

  const selectedCategory = MENU_DATA.find((category) => category.id === state.activeCategory) ?? MENU_DATA[0];
  const query = normalizeText(state.query);

  const filteredItems = selectedCategory.items.filter((item) => {
    if (!query) {
      return true;
    }

    const name = getItemField(item, "name");
    const desc = getItemField(item, "desc");

    const haystack = [
      normalizeText(name),
      normalizeText(desc),
      normalizeText(item.name),
      normalizeText(item.desc),
      normalizeText(item.name_en),
      normalizeText(item.name_ar),
    ].join(" ");

    return haystack.includes(query);
  });

  if (!filteredItems.length) {
    container.innerHTML = "";
    emptyState.classList.add("is-visible");
    return;
  }

  emptyState.classList.remove("is-visible");

  container.innerHTML = filteredItems
    .map((item, index) => {
      const itemName = getItemField(item, "name");
      const rawDesc = getItemField(item, "desc");
      const description = localizeDescription(rawDesc);
      const image = item.image || buildStockImage(selectedCategory.id, itemName, index);
      const fallbackImage = selectedCategory.image || "https://picsum.photos/seed/dedas-menu/420/420";

      return `
        <article class="menu-item" style="animation-delay:${index * 0.03}s">
          <img class="menu-thumb" src="${escapeHtml(image)}" data-fallback="${escapeHtml(
            fallbackImage
          )}" onerror="this.onerror=null;this.src=this.dataset.fallback;" alt="${escapeHtml(
            itemName
          )}" loading="lazy" />
          <div class="menu-content">
            <h3>${escapeHtml(itemName)}</h3>
            <p>${escapeHtml(description)}</p>
          </div>
          <p class="menu-price">${escapeHtml(formatPrice(item.price))}</p>
        </article>
      `;
    })
    .join("");
}

function setLanguage(nextLang) {
  const chosen = UI_TEXT[nextLang] ? nextLang : "tr";
  state.lang = chosen;

  document.documentElement.lang = chosen;
  document.documentElement.dir = chosen === "ar" ? "rtl" : "ltr";

  document.querySelectorAll("[data-lang-select]").forEach((select) => {
    if (select.value !== chosen) {
      select.value = chosen;
    }
  });

  localStorage.setItem(LANG_STORAGE_KEY, chosen);
  applyStaticText();

  if (document.body.dataset.page === "menu") {
    renderCategoryTabs();
    renderMenuList();
  }
}

function bindLanguageSelects() {
  document.querySelectorAll("[data-lang-select]").forEach((select) => {
    select.addEventListener("change", (event) => {
      setLanguage(event.target.value);
    });
  });
}

function initMenuPage() {
  state.activeCategory = MENU_DATA[0].id;

  const tabs = document.getElementById("category-tabs");
  const searchInput = document.getElementById("menu-search");

  if (tabs) {
    tabs.addEventListener("click", (event) => {
      const button = event.target.closest("button[data-category-id]");
      if (!button) {
        return;
      }

      state.activeCategory = button.dataset.categoryId;
      renderCategoryTabs();
      renderMenuList();
    });
  }

  if (searchInput) {
    searchInput.addEventListener("input", (event) => {
      state.query = event.target.value.trim();
      renderMenuList();
    });
  }

  renderCategoryTabs();
  renderMenuList();
}

function initHeaderEffects() {
  const header = document.querySelector(".top-header");
  if (!header) {
    return;
  }

  const maxScrollForBlur = 140;
  let isTicking = false;

  const setHeaderProgress = () => {
    const y = window.scrollY || window.pageYOffset || 0;
    const progress = Math.max(0, Math.min(1, y / maxScrollForBlur));
    header.style.setProperty("--header-progress", progress.toFixed(3));
  };

  const updateHeaderOffset = () => {
    const height = Math.ceil(header.getBoundingClientRect().height);
    document.documentElement.style.setProperty("--header-offset", `${height}px`);
  };

  const onScroll = () => {
    if (isTicking) {
      return;
    }
    isTicking = true;
    window.requestAnimationFrame(() => {
      setHeaderProgress();
      isTicking = false;
    });
  };

  const onResize = () => {
    updateHeaderOffset();
    setHeaderProgress();
  };

  updateHeaderOffset();
  setHeaderProgress();

  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onResize);
}

function initApp() {
  initHeaderEffects();
  state.lang = "tr";
  localStorage.setItem(LANG_STORAGE_KEY, "tr");
  applyStaticText();

  if (document.body.dataset.page === "menu") {
    initMenuPage();
  }

  setLanguage("tr");
}

document.addEventListener("DOMContentLoaded", initApp);
