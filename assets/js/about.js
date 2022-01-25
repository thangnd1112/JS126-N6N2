const root = document.getElementById("root");
// object chứa thông tin bánh, khách hàng feedback
const data = {
  images: {
    img01: {
      src: "../images/img01.jpg",
      alt: "Cream Cake",
    },
  },
  cakes: [
    {
      name: "Heart Cookies",
      price: "15$",
      meta: "(eggs, milk, sugar, vanilla)",
    },
    {
      name: "Macaroons",
      price: "15$",
      meta: "(sugar, vanilla extract, almond flour)",
    },
    {
      name: "White cake",
      price: "27$",
      meta: "(eggs, white sugar, milk)",
    },
    {
      name: "Chocolate Chip cookies",
      price: "27$",
      meta: "(brown sugar, eggs, chocolate)",
    },
    {
      name: "Apple Crumble Cake",
      price: "27$",
      meta: "(medium apples, cinnamon, milk, vanilla)",
    },
  ],
  testimo: [
    {
      feedback: "Maecenas nulla massa sit in. Turpis eu orci nisl ullamcorper consectetur placerat eget urna, cum. Facilisi gravida velit.",
      name: "Cameron Williamson",
    },
    {
      feedback: "Maecenas nulla massa sit in. Turpis eu orci nisl ullamcorper consectetur placerat eget urna, cum. Facilisi gravida velit.",
      name: "Thomas Edition",
    },
    {
      feedback: "Maecenas nulla massa sit in. Turpis eu orci nisl ullamcorper consectetur placerat eget urna, cum. Facilisi gravida velit.",
      name: "Sun System",
    },
  ],
  client: [
    {
      src: "../images/about-img08.jpg",
      alt: "logo client"
    },
    {
      src: "../images/about-img09.jpg",
      alt: "logo client"
    },
    {
      src: "../images/about-img08.jpg",
      alt: "logo client"
    },
    {
      src: "../images/about-img09.jpg",
      alt: "logo client"
    },
    {
      src: "../images/about-img09.jpg",
      alt: "logo client"
    },
    {
      src: "../images/about-img08.jpg",
      alt: "logo client"
    },
  ]
};

function aboutRender() {
  // const about = `<div class="about"></div>`;
  root.innerHTML = header();
  root.innerHTML += sectionAbout();
  root.innerHTML += sectionTeam();
  root.innerHTML += sectionMenu();
  root.innerHTML += sectionTestimo();
  root.innerHTML += sectionMission();
  root.innerHTML += sectionClient();
  root.innerHTML += footer();
  aboutListMenu();
  aboutTestimo();
  aboutClientLogo();
}

function header() {
  return `<div>Header</div>`;
}

function footer() {
  return `<div>Footers</div>`;
}

function sectionAbout() {
  let sectionAbout = `
    <section class="about">
    <div class="container">
        <div class="row">
            <div class="col-6 col-s-6 col-l-5">
                <div class="about-img">
                    <img class="w-100" src="../images/img01.jpg" alt="Cream Cake">
                </div>
            </div>
            <div class="col-6 col-s-6">
                <div class="about-text">
                    <h6 class="heading">who we are</h6>
                    <h2>We offer a wide variety of celebration cakes for birthdays, graduation parties, and other
                        types of events.</h2>
                </div>
            </div>
        </div>
    </div>
    </section>
    `;
  return sectionAbout;
}

function sectionTeam() {
  let sectionTeam = `
    <section class="team">
    <div class="container">
        <div class="row">
            <div class="col-4">
                <div class="team-text">
                    <div class="heading">
                        <h6 class="heading">who we are</h6>
                        <h3>Our great team</h3>
                    </div>
                    <p>Viverra risus turpis consequat velit ultrices maecenas congue mi. Egestas orci eu eget tellus
                        morbi. Odio cras tellus ut duis tristique.</p>
                </div>
            </div>
            <div class="col-8">
                <div class="row">
                    <div class="col-6">
                        <div class="team-member">
                            <img class="w-100" src="../images/about-img03.jpg" alt="image">
                            <div class="team-member-info">
                                <h6 class="heading">Jenny Wilson</h6>
                                <p class="team-member-title">Head Chef</p>
                                <i class="fab fa-facebook-f"></i>
                                <i class="fab fa-instagram"></i>
                                <i class="fab fa-twitter"></i>
                            </div>
                        </div>
                    </div>
                    <div class="col-6">
                        <div class="team-member">
                            <img class="w-100" src="../images/about-img02.jpg" alt="image">
                            <div class="team-member-info">
                                <h6 class="heading">Jenny Wilson</h6>
                                <p class="team-member-title">Head Chef</p>
                                <i class="fab fa-facebook-f"></i>
                                <i class="fab fa-instagram"></i>
                                <i class="fab fa-twitter"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </section>
    `;
  return sectionTeam;
}

function sectionMenu() {
  let sectionMenu = `
    <section class="menu">
    <div class="row">
        <div class="col-6">
            <div class="menu-img">
                <img src="../images/about-img05.jpg" class="w-100" alt="">
            </div>
        </div>
        <div class="col-6">
            <div class="menu-list text-center">
                <h6 class="heading">FROM OUR MENU</h6>
                <h3>Today’s specials</h3>
                <div class="menu-item" id="menuItem">
                    
                </div>
            </div>
        </div>
    </div>
    </section>
    `;
  return sectionMenu;
}

function aboutListMenu() {
  let menuItem = document.getElementById("menuItem");
  data.cakes.forEach((e) => {
    menuItem.innerHTML += `
      <div class="wrapper">
      <div class="menu-item-list">
          <div class="title">${e.name}</div>
          <div class="divider"></div>
          <div class="price">${e.price}</div>
      </div>
      <div class="menu-item-detail">${e.meta}</div>
     </div>
      `;
  });
}

function sectionTestimo() {
  let sectionTestimo = `
    <section class="testimonials">
    <div class="container">
        <div class="heading">
            <h6 class="heading">WHAT PEOPLE SAY</h6>
            <h3>Testimonials</h3>
        </div>
        <div class="row" id="testimoItem">
            
        </div>
    </div>
    </section>
    `;
  return sectionTestimo;
}

function aboutTestimo() {
    let testimoItem = document.getElementById("testimoItem");
    data.testimo.forEach(e=> {
      testimoItem.innerHTML += `
      <div class="col-4 col-s-6">
      <div class="testimonials-item">
          <div class="user">
              <i class="far fa-user"></i>
          </div>
          <div class="text">
              ${e.feedback}
          </div>
          <div class="name">
              ${e.name}
          </div>
          <div class="star">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
          </div>
      </div>
     </div>
      `
    })
}

function sectionMission() {
  let sectionMission = `
    <section class="mission">
    <div class="row">
        <div class="col-4 col-s-4">
            <img src="../images/about-img06.jpg" alt="" class="w-100">
        </div>
        <div class="col-4 col-s-4">
            <div class="mission-text">
                <h3>Our mission is to bake with passion</h3>
                <div class="text">
                    Est netus turpis at habitant vitae id enim eget. Urna pellentesque nunc est arcu et. Aliquam erat augue integer tortor. Erat eget condimentum.
                </div>
                <div class="menu">
                    <a href="#">Menu</a> <i class="fas fa-chevron-right"></i>
                </div>
            </div>
        </div>
        <div class="col-4 col-s-4">
            <img src="../images/about-img07.jpg" alt="" class="w-100">
        </div>
    </div>
    </section>
    `;
  return sectionMission;
}

function sectionClient() {
  let sectionClient = `
    <section class="client">
    <div class="container">
        <div class="row">
            <div class="col-4 col-s-4">
                <div class="heading">
                    <h6 class="heading">CLIENTS</h6>
                    <h3>Trustworthy partners</h3>
                </div>
                <div class="text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit sum sollicitudin massa in finibus gravida.
                </div>
            </div>
            <div class="col-8 col-s-8">
                <div class="client-branch">
                    <div class="row" id="logoClient">
                       
                    </div>
                </div>
            </div>
        </div>
    </div>
    </section>
    `;
  return sectionClient;
}

function aboutClientLogo() {
  let logoClient = document.getElementById("logoClient");
  data.client.forEach(e=> {
    logoClient.innerHTML += `
    <div class="col-3 col-s-4 col-m-6">
      <img src="${e.src}" alt="${e.alt}" class="w-100">
    </div>
    `
  })
}
aboutRender();
