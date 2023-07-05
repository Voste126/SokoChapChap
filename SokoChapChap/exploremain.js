const data = [
    {
      id: 1,
      name: "Casio G-shop",
      img: "/SokoChapChap/img/casual/CasioG-Shock.jpg",
      price: 500,
      cat: "casual",
    },
    {
        id: 2,
        name: "Citizen Eco-Drive",
        img: "/SokoChapChap/img/casual/CitizenEco-Drive.jpg",
        price: 1000,
        cat: "casual",
      },
      {
        id: 3,
        name: "Seiko 5-sport",
        img: "/SokoChapChap/img/casual/CitizenEco-Drive.jpg",
        price: 2000,
        cat: "casual",
      },
      {
        id: 4,
        name: "Timex Weekender",
        img: "/SokoChapChap/img/casual/TimexWeekender.jpg",
        price: 5000,
        cat: "casual",
      },
      {
        id: 5,
        name: "Tissot Everytime",
        img: "/SokoChapChap/img/casual/TissotEverytime.jpg",
        price: 8000,
        cat: "casual",
      },
      {
        id: 6,
        name: "Audemars Piguet Royal Oak",
        img:"/SokoChapChap/img/classicsimg/AudemarsPiguetRoyalOak.jpg",
        price: 10000,
        cat: "classics",
      },
      {
        id: 7,
        name: "hulbot",
        img: "/SokoChapChap/img/classicsimg/hublot.webp",
        price: 12000,
        cat: "classics",
      },
      {
        id: 8,
        name: "Hublot Big Bang Diamonds",
        img: "/SokoChapChap/img/classicsimg/HublotBigBangDiamonds.webp",
        price: 15000,
        cat: "classics",
      },
      {
        id: 9,
        name: "Iwc",
        img: "/SokoChapChap/img/classicsimg/iwf.webp",
        price: 20000,
        cat: "classics",
      },
      {
        id: 10,
        name: "Luois Moinet",
        img: "/SokoChapChap/img/classicsimg/LuoisMoinet.webp",
        price: 25000,
        cat: "classics",
      },
      {
        id: 11,
        name: "navitimer",
        img: "/SokoChapChap/img/classicsimg/navitimer.jpg",
        price: 25000,
        cat: "classics",
      },
      {
        id: 12,
        name: "Offshore",
        img: "/SokoChapChap/img/classicsimg/offshore.webp",
        price: 28000,
        cat: "classics",
      },
      {
        id: 13,
        name: "patek philip",
        img: "/SokoChapChap/img/classicsimg/patekphilip.jpg",
        price: 30000,
        cat: "classics",
      },
      {
        id: 14,
        name: "Paul Newman Rolex Daytona",
        img: "/SokoChapChap/img/classicsimg/PaulNewmanRolexDaytona.jpg",
        price: 32000,
        cat: "classics",
      },
      {
        id: 15,
        name: "Propex",
        img: "/SokoChapChap/img/classicsimg/propex.webp",
        price: 37000,
        cat: "classics",
      },
      {
        id: 16,
        name: "Omega SeaMaster",
        img: "/SokoChapChap/img/classicsimg/seamasteromega.webp",
        price: 56000,
        cat: "classics",
      },
      {
        id: 17,
        name: "Submarine",
        img: "/SokoChapChap/img/classicsimg/submarine.webp",
        price: 58000,
        cat: "classics",
      },
      {
        id: 18,
        name: "TAGHuer",
        img: "/SokoChapChap/img/classicsimg/taghuer.png",
        price: 62000,
        cat: "classics",
      },
      {
        id: 19,
        name: "Tank",
        img: "/SokoChapChap/img/classicsimg/tank.webp",
        price: 65000,
        cat: "classics",
      },
      {
        id: 20,
        name: "Cartier Tank Solo",
        img: "/SokoChapChap/img/Dress/CartierTankSolo.webp",
        price: 69000,
        cat: "Dress",
      },
      {
        id: 21,
        name: "IWC Portugieser Automatic",
        img: "/SokoChapChap/img/Dress/IWCPortugieserAutomatic.webp",
        price: 72000,
        cat: "Dress",
      },
      {
        id: 22,
        name: "Jaeger-LeCoultreMaster Ultra-Thin",
        img: "/SokoChapChap/img/Dress/Jaeger-LeCoultreMasterUltraThin.jpg",
        price: 76000,
        cat: "Dress",
      },
      {
        id: 23,
        name: "Patek Philippe Calatrava",
        img: "/SokoChapChap/img/Dress/PatekPhilippeCalatrava2.jpg",
        price: 80000,
        cat: "Dress",
      },
      {
        id: 24,
        name: "Rolex Datejust",
        img: "/SokoChapChap/img/Dress/RolexDatejust.jpeg",
        price: 82000,
        cat: "Dress",
      },
      {
        id: 25,
        name: "Breguet Marie-Antonia",
        img: "/SokoChapChap/img/exclusiveimg/BreguetMarie-Antonia.jpg",
        price: 84000,
        cat: "exclusive",
      },
      {
        id: 26,
        name: "Graff Diamond Hallucination",
        img: "/SokoChapChap/img/exclusiveimg/GraffDiamondHallucination.jpg",
        price: 86000,
        cat: "exclusive",
      },
      {
        id: 27,
        name: "Patek Philippe supercomplication",
        img: "/SokoChapChap/img/exclusiveimg/PatekPhilippesupercomplication.jpg",
        price: 90000,
        cat: "exclusive",
      },
      {
        id: 28,
        name: "Richard Mille RM-54",
        img: "/SokoChapChap/img/exclusiveimg/richardMilleRM24.webp",
        price: 100000,
        cat: "exclusive",
      },
      {
        id: 29,
        name: "Rolex GMT",
        img: "/SokoChapChap/img/exclusiveimg/RolexGMT.webp",
        price: 150000,
        cat: "exclusive",
      },
      {
        id: 30,
        name: "Vacheron constantin",
        img: "/SokoChapChap/img/exclusiveimg/Vacheronconstantin.jpg",
        price: 300000,
        cat: "exclusive",
      },
      {
        id: 31,
        name: "Audemars Piguet RoyalOak Offshore",
        img: "/SokoChapChap/img/sport/AudemarsPiguetRoyalOakOffshore.png",
        price: 350000,
        cat: "sport",
      },
      {
        id: 32,
        name: "Breitling Superocean Heritage II",
        img: "/SokoChapChap/img/sport/BreitlingSuperoceanHeritageII.png",
        price: 400000,
        cat: "sport",
      },
      {
        id: 33,
        name: "Omega Seamaster PlanetOcean",
        img: "/SokoChapChap/img/sport/OmegaSeamasterPlanetOcean.webp",
        price: 500000,
        cat: "sport",
      },
      {
        id: 34,
        name: "Rolex Daytona",
        img: "/SokoChapChap/img/sport/RolexDaytona.png",
        price: 550000,
        cat: "sport",
      },
      {
        id: 35,
        name: "TAGHeuer Carrera Calibre16",
        img: "/SokoChapChap/img/sport/TAGHeuerCarreraCalibre16.webp",
        price: 600000,
        cat: "sport",
      },
      {
        id: 36,
        name: "Audemars Piguet RoyalOakConcept",
        img: "/SokoChapChap/img/popularimg/AudemarsPiguetRoyalOakConcept.jpg",
        price: 650000,
        cat: "sport",
      },
      {
        id: 37,
        name: "Breitling Avenge",
        img: "/SokoChapChap/img/popularimg/BreitlingAvenger.png",
        price: 680000,
        cat: "popular",
      },
      {
        id: 38,
        name: "Breitling Superocean",
        img: "/SokoChapChap/img/popularimg/BreitlingSuperocean:.png",
        price: 700000,
        cat: "popular",
      },
      {
        id: 39,
        name: "Cartier Ballon Bleu",
        img: "/SokoChapChap/img/popularimg/CartierBallonBleu.webp",
        price: 800000,
        cat: "popular",
      },
      {
        id: 40,
        name: "Cartier Santos",
        img: "/SokoChapChap/img/popularimg/CartierSantos.webp",
        price: 900000,
        cat: "popular",
      },
      {
        id: 41,
        name: "Hublot Classic Fusion",
        img: "/SokoChapChap/img/popularimg/HublotClassicFusion.png",
        price: 2000000,
        cat: "popular",
      },
      {
        id: 42,
        name: "Hublot Spirit of BigBang",
        img: "/SokoChapChap/img/popularimg/HublotSpiritofBigBang.png",
        price: 2000,
        cat: "popular",
      },
      {
        id: 43,
        name: "Iwc Aquatimer",
        img: "/SokoChapChap/img/popularimg/IWC Aquatimer.jpg",
        price: 20000,
        cat: "popular",
      },
      {
        id: 44,
        name: "IWC Portugieser",
        img: "/SokoChapChap/img/popularimg/IWCPortugieser.webp",
        price: 20000,
        cat: "popular",
      },
      {
        id: 45,
        name: "TAGHeuer Carrera Calibre16",
        img: "/SokoChapChap/img/sport/TAGHeuerCarreraCalibre16.webp",
        price: 20000,
        cat: "sport",
      },
      {
        id: 46,
        name: "Omega Constellation",
        img: "/SokoChapChap/img/popularimg/OmegaConstellation.png",
        price: 20000,
        cat: "popular",
      },
      {
        id: 47,
        name: "Omega Speedmaster",
        img: "/SokoChapChap/img/popularimg/OmegaSpeedmaster.png",
        price: 20000,
        cat: "popular",
      },
      {
        id: 48,
        name: "Patek Philippe Aquanaut",
        img: "/SokoChapChap/img/popularimg/PatekPhilippeAquanaut.jpg",
        price: 20000,
        cat: "popular",
      },
      {
        id: 49,
        name: "Patek Philippe Calatrava",
        img: "/SokoChapChap/img/popularimg/PatekPhilippeCalatrava.jpg",
        price: 20000,
        cat: "popular",
      },
      {
        id: 50,
        name: "Rolex Datejust",
        img: "/SokoChapChap/img/popularimg/RolexDatejust.jpg",
        price: 20000,
        cat: "popular",
      },
      {
        id: 51,
        name: "Rolex Daytona",
        img: "/SokoChapChap/img/popularimg/RolexDaytona.jpeg",
        price: 20000,
        cat: "popular",
      },
      {
        id: 53,
        name: "Seiko Astron",
        img: "/SokoChapChap/img/popularimg/SeikoAstron.jpg",
        price: 20000,
        cat: "popular",
      },
  ];
  
  const productsContainer = document.querySelector(".products");
  const searchInput = document.querySelector(".search");
  const categoriesContainer = document.querySelector(".cats");
  const priceRange = document.querySelector(".priceRange");
  const priceValue = document.querySelector(".priceValue");
  
  const displayProducts = (filteredProducts) => {
    productsContainer.innerHTML = filteredProducts
      .map(
        (product) =>
          `
         <div class="product">
            <img
            src=${product.img}
            alt=""
            />
            <span class="name">${product.name}</span>
            <span class="priceText">$${product.price}</span>
          </div>
      `
      )
      .join("");
  };
  
  displayProducts(data);
  
  searchInput.addEventListener("keyup", (e) => {
    const value = e.target.value.toLowerCase();
  
    if (value) {
      displayProducts(
        data.filter((item) => item.name.toLowerCase().indexOf(value) !== -1)
      );
    } else {
      displayProducts(data);
    }
  });
  
  const setCategories = () => {
    const allCats = data.map((item) => item.cat);
    const categories = [
      "All",
      ...allCats.filter((item, i) => {
        return allCats.indexOf(item) === i;
      }),
    ];
  
    categoriesContainer.innerHTML = categories
      .map(
        (cat) =>
          `
        <span class="cat">${cat}</span>
      `
      )
      .join("");
  
    categoriesContainer.addEventListener("click", (e) => {
      const selectedCat = e.target.textContent;
  
      selectedCat === "All"
        ? displayProducts(data)
        : displayProducts(data.filter((item) => item.cat === selectedCat));
    });
  };
  
  const setPrices = () => {
    const priceList = data.map((item) => item.price);
    const minPrice = Math.min(...priceList);
    const maxPrice = Math.max(...priceList);
  
    priceRange.min = minPrice;
    priceRange.max = maxPrice;
    priceRange.value = maxPrice;
    priceValue.textContent = "$" + maxPrice;
  
    priceRange.addEventListener("input", (e) => {
      priceValue.textContent = "$" + e.target.value;
      displayProducts(data.filter((item) => item.price <= e.target.value));
    });
  };
  
  setCategories();
  setPrices();