import "./Nav.css";

function Nav() {
  let navOpen = false;

  function handleNav() {
    navOpen = !navOpen;
  }

  const hoofdstuk1 = [
    {
      id: 1.1,
      name: "1.1 Humanity-centered digital designers",
      route: "/beoogde-leerresultaten",
      hoofdstuk: 1,
      apiId: 5,
    },
    {
      id: 1.2,
      name: "1.2 Competenties",
      route: "/beoogde-leerresultaten/2",
      hoofdstuk: 1,
      apiId: 11,
    },
    {
      id: 1.3,
      name: "1.3 Werkveld en maatschappij",
      route: "/beoogde-leerresultaten/3",
      hoofdstuk: 1,
      apiId: 2,
    },
    {
      id: 1.4,
      name: "1.4 Ontwikkelingen",
      route: "/beoogde-leerresultaten/4",
      hoofdstuk: 1,
      apiId: 4,
    },
    {
      id: 1.5,
      name: "1.5 Ambities en dilemma’s",
      route: "/beoogde-leerresultaten/5",
      hoofdstuk: 1,
      apiId: 12,
    },
  ];
  const hoofdstuk2 = [
    {
      id: 2.1,
      name: "2.1 Onderwijsvisie en didactiek",
      route: "/onderwijsleeromgeving",
      hoofdstuk: 2,
      apiId: 15,
    },
    {
      id: 2.2,
      name: "2.2 Curriculumopbouw",
      route: "/Onderwijsleeromgeving/2",
      hoofdstuk: 2,
      apiId: 0,
    },
    {
      id: 2.3,
      name: "2.3 Borging onderwijskwaliteit",
      route: "/Onderwijsleeromgeving/3",
      hoofdstuk: 2,
      apiId: 18,
    },
    {
      id: 2.4,
      name: "2.4 Onderwijs en praktijk",
      route: "/Onderwijsleeromgeving/4",
      hoofdstuk: 2,
      apiId: 1,
    },
    {
      id: 2.5,
      name: "2.5 Onderwijs en onderzoek",
      route: "/Onderwijsleeromgeving/5",
      hoofdstuk: 2,
      apiId: 7,
    },
    {
      id: 2.6,
      name: "2.6 Internationalisering",
      route: "/Onderwijsleeromgeving/6",
      hoofdstuk: 2,
      apiId: 16,
    },
    {
      id: 2.7,
      name: "2.7 Studenten begeleiding",
      route: "/Onderwijsleeromgeving/7",
      hoofdstuk: 2,
      apiId: 14,
    },
    {
      id: 2.8,
      name: "2.8 Digitale en analoge voorzieningen",
      route: "/Onderwijsleeromgeving/8",
      hoofdstuk: 2,
      apiId: 22,
    },
    {
      id: 2.9,
      name: "2.9 Ambities en dilemma's",
      route: "/Onderwijsleeromgeving/9",
      hoofdstuk: 2,
      apiId: 10,
    },
  ];
  const hoofdstuk3 = [
    {
      id: 3.1,
      name: "3.1 Toetsbeleid en -plan",
      route: "/toetsing",
      hoofdstuk: 3,
      apiId: 17,
    },
    {
      id: 3.2,
      name: "3.2 Toetsprogramma en -praktijk",
      route: "/toetsing/2",
      hoofdstuk: 3,
      apiId: 9,
    },
    {
      id: 3.3,
      name: "3.3 Toetsing en feedback",
      route: "/toetsing/3",
      hoofdstuk: 3,
      apiId: 4,
    },
    {
      id: 3.4,
      name: "3.4 Borging en kwaliteit",
      route: "/toetsing/4",
      hoofdstuk: 3,
      apiId: 11,
    },
    {
      id: 3.5,
      name: "3.5 Ambities en dilemma's",
      route: "/toetsing/5",
      hoofdstuk: 3,
      apiId: 21,
    },
  ];
  const hoofdstuk4 = [
    {
      id: 4.1,
      name: "4.1 Afstudeerproces",
      route: "/gerealiseerde-leerresultaten",
      hoofdstuk: 4,
      apiId: 19,
    },
    {
      id: 4.2,
      name: "4.2 Borging afstudeerniveau vanuit examencommissie",
      route: "/gerealiseerde-leerresultaten/2",
      hoofdstuk: 4,
      apiId: 8,
    },
    {
      id: 4.3,
      name: "4.3 Ambities en dilemma's",
      route: "/gerealiseerde-leerresultaten/3",
      hoofdstuk: 4,
      apiId: 20,
    },
  ];

  let navHoofdstuk = hoofdstuk1;
  function navButtonEen() {
    navHoofdstuk = hoofdstuk1;
  }
  function navButtonTwee() {
    navHoofdstuk = hoofdstuk2;
  }
  function navButtonDrie() {
    navHoofdstuk = hoofdstuk3;
  }
  function navButtonVier() {
    navHoofdstuk = hoofdstuk4;
  }

  return (
    <nav 
        className="sidenav" 
        // class:open={navOpen}
    >
      <button className="closebtn" onClick={handleNav}>
        &times;
      </button>

      <section className="nav__icon--wrapper">
        <button className="nav__icon">
          <a href="/">
            <img className="nav__img home" src="images/Icon-home.png" alt="" />
          </a>
        </button>
        <div className="nav__diveder" />
        <button
          className="nav__icon"
          onClick={navButtonEen}
          //   class:button__active={navHoofdstuk == hoofdstuk1}
        >
          <img className="nav__img" src="images/nav_element1.png" alt="" />
        </button>
        <button
          className="nav__icon"
          onClick={navButtonTwee}
          //   class:button__active={navHoofdstuk == hoofdstuk2}
        >
          <img className="nav__img" src="images/nav_element2.png" alt="" />
        </button>
        <button
          className="nav__icon"
          onClick={navButtonDrie}
          //   class:button__active={navHoofdstuk == hoofdstuk3}
        >
          <img className="nav__img" src="images/nav_element3.png" alt="" />
        </button>
        <button
          className="nav__icon"
          onClick={navButtonVier}
          //   class:button__active={navHoofdstuk == hoofdstuk4}
        >
          <img className="nav__img" src="images/nav_element4.png" alt="" />
        </button>
      </section>

      <section className="nav__link--wrapper">
        <header className="nav__header">
          <h2>1.0 Beoogde leerresultaten</h2>
        </header>
        {/* <ul className="nav__list">
                {#each navHoofdstuk as paragraaf}
                <li
                    className="nav__item"
                    class:nav__item--active={$page.url.pathname === paragraaf.route}
                >
                    <a
                    className="nav__link"
                    href={paragraaf.route}
                    class:nav__link--active={$page.url.pathname === paragraaf.route}
                    >
                    {paragraaf.name}
                    </a>
                </li>
                {/each}
            </ul> */}
      </section>
    </nav>
  );
}

export default Nav;
