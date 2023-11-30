let shinobiWorld = [
  {
    name: "Naruto",
    clan: "Uzumaki",
    gender: "Male",
    rang: "Genin",
    vallage: "Leafy Village",
    image:
      "https://static.wikia.nocookie.net/naruto/images/f/f7/Naruto_transforming.png/revision/latest?cb=20170304133400&path-prefix=ru",
  },
  {
    name: "Saske",
    clan: "Uchiha",
    gender: "Male",
    rang: "Genin",
    vallage: "Leafy Village",
    image:
      "https://static.wikia.nocookie.net/naruto/images/9/9f/Sasuke_Part_2.jpg/revision/latest?cb=20210404192345&path-prefix=ru",
  },
  {
    name: "Sakura",
    clan: "Haruno",
    gender: "Female",
    rang: "Jonin",
    vallage: "Leafy Village",
    image:
      "https://static.wikia.nocookie.net/naruto/images/f/f7/Sakura_Boruto.png/revision/latest?cb=20210224210410&path-prefix=ru",
  },
  {
    name: "Kakashi",
    clan: "hatake",
    gender: "Male",
    rang: "Sennin",
    vallage: "Leafy Village",
    image:
      "https://minecraftch.ru/uploads/posts/2018-03/1521238840_kakashihatake.jpg",
  },
  {
    name: "Orochimaru",
    clan: "",
    gender: "Male",
    rang: "Sanin",
    vallage: "Leafy Village",
    image:
      "https://static.wikia.nocookie.net/naruto/images/1/14/Orochimaru_Infobox.png/revision/latest?cb=20151017160235&path-prefix=ru",
  },
  {
    name: "Madara",
    clan: "Uchiha",
    gender: "Male",
    rang: "dancer(died)",
    vallage: "Leafy Village",
    image:
      "https://sun9-56.userapi.com/impf/c850124/v850124490/cbafc/pqpDEyxae-Y.jpg?size=807x533&quality=96&sign=925f8a5abd5f8f0cd885e09ce61f7323&type=album",
  },
  {
    name: "Gaara",
    clan: "",
    gender: "Male",
    rang: "Kazekage",
    vallage: "Sand Village",
    image:
      "https://static.wikia.nocookie.net/naruto/images/0/0f/Gaara_Part_II.png/revision/latest?cb=20170507172824&path-prefix=ru",
  },
  {
    name: "Yamato",
    clan: "",
    gender: "Male",
    rang: "Jonin",
    vallage: "Leafy Village",
    image:
      "https://static.wikia.nocookie.net/naruto/images/f/f7/Yamato_newshot.png/revision/latest?cb=20190202094154&path-prefix=ru",
  },
  {
    name: "Jiraya",
    clan: "",
    gender: "Male",
    rang: "Sanin (died)",
    vallage: "Leafy Village",
    image:
      "https://static.wikia.nocookie.net/naruto/images/2/21/Profile_Jiraiya.PNG/revision/latest?cb=20170818131513&path-prefix=ru",
  },
  {
    name: "Gay",
    clan: "Maito",
    gender: "Male",
    rang: "Jonin",
    vallage: "Leafy Village",
    image:
      "https://static.wikia.nocookie.net/naruto/images/4/40/MightGuy.png/revision/latest?cb=20150423135435&path-prefix=ru",
  },
  {
    name: "Sunade",
    clan: "Senju",
    gender: "Female",
    rang: "Sanin",
    vallage: "Leafy Village",
    image:
      "https://staticg.sportskeeda.com/editor/2022/07/118e8-16581424056750.png?w=840",
  },
  {
    name: "Hirusen",
    clan: "Sarutobi",
    gender: "Male",
    rang: "Hockage (died)",
    vallage: "Leafy Village",
    image:
      "https://static.wikia.nocookie.net/naruto/images/e/e4/Hiruzen_Sarutobi.png/revision/latest?cb=20170930091606&path-prefix=ru",
  },
  {
    name: "Tobirama",
    clan: "Senju",
    gender: "Male",
    rang: "Hockage (died)",
    vallage: "Leafy Village",
    image:
      "https://listasnerds.com.br/wp-content/uploads/2022/06/Tobirama-Senju_CAPA_IMAGEM-DESTACADA.png",
  },
  {
    name: "Killer",
    clan: "Be",
    gender: "Male",
    rang: "Jinchuriki",
    vallage: "Clouds Village",
    image:
      "https://static.wikia.nocookie.net/character-power/images/f/fa/%D0%9A%D0%B8%D0%BB%D0%BB%D0%B5%D1%80_%D0%91%D0%B81.png/revision/latest?cb=20140326105611&path-prefix=ru",
  },
  {
    name: "Minato",
    clan: "Namikaze",
    gender: "Male",
    rang: "Hockage(died)",
    vallage: "Leafy Village",
    image:
      "https://i.pinimg.com/originals/d7/8e/55/d78e55c87762231b61877be5c93d03fb.jpg",
  },
];
const container = document.querySelector(".cardContainer");
const nameShinobi = document.querySelector(".nameShinobi"); // input
const clanShinobi = document.querySelector(".clanShinobi"); // input
const rangShinobi = document.querySelector(".rangShinobi"); // input
const villageShinobi = document.querySelector(".villageShinobi");
const modalContainer = document.querySelector(".modal");

function showCards(arr) {
  const cards = arr
    .map((item) => {
      return `
      <div class="cards" aria-label="${item.name}">
          <div class="shinobiPhoto" style="background: url('${item.image}')center/cover no-repeat;"></div>
          <div class="shinobiInfo">
              <ul class="shinobiParameters">
                  <li>Name:${item.name}</li>
                  <li>Clan:${item.clan}</li>
                  <li>Gender:${item.gender}</li>
                  <li>Rang:${item.rang}</li>
                  <li>Village:${item.vallage}</li>
              </ul>
          </div>
          <button onclick='useModal("${item.name}")' class="btn">
            узнать больше
          </button>
      </div>
      `;
    })
    .join("");

  container.innerHTML = cards; // inner html добавляет && заменяет
}

window.addEventListener("load", showCards(shinobiWorld)); // load - это когда страница загрузилась

// search by name
nameShinobi.addEventListener("input", (e) => {
  const value = e.target.value.toUpperCase();

  const filteredArr = shinobiWorld.filter(({ name }) =>
    name.toUpperCase().includes(value)
  );
  showCards(filteredArr);
});

clanShinobi.addEventListener("input", (e) => {
  const value = e.target.value.toUpperCase();

  const filteredClans = shinobiWorld.filter(({ clan }) =>
    clan.toUpperCase().includes(value)
  );

  showCards(filteredClans);
});

rangShinobi.addEventListener("input", (e) => {
  const value = e.target.value.toUpperCase();

  const filteredClans = shinobiWorld.filter(({ rang }) =>
    rang.toUpperCase().includes(value)
  );

  showCards(filteredClans);
});

villageShinobi.addEventListener("input", (e) => {
  const value = e.target.value.toUpperCase();

  const filteredClans = shinobiWorld.filter(({ vallage }) =>
    vallage.toUpperCase().includes(value)
  );

  showCards(filteredClans);
});

function useModal(name) {
  modalContainer.classList.add("modalOpen");
  const modalContent = document.querySelector(".modalContent");
  const modalData = shinobiWorld.filter((item) => item.name === name);
  console.log(modalData);
  const modalContentLayout = `
    <div>${modalData[0].name}</div>
    <div>${modalData[0].clan}</div>
  `;
  modalContent.innerHTML = modalContentLayout;
}

modalContainer.addEventListener("click", (e) => {
  modalContainer.classList.remove("modalOpen");
});
