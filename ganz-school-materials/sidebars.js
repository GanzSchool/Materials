const sidebars = {
  // Kézi oldalsáv definiálása
  tutorialSidebar: [
    'intro', // Hivatkozás a docs/intro.md fájlra
    {
      type: 'category',
      label: 'Útmutatók', // A kategória neve az oldalsávban
      items: [
        'tutorial-basics/create-a-document', // Hivatkozás a megfelelő dokumentációra
        'tutorial-basics/deploy-your-site', // Másik dokumentációs fájl
      ],
    },
    {
      type: 'category',
      label: 'Haladó témák',
      items: [
        'advanced/cli-commands', // Egy másik kategória eleme
      ],
    },
  ],
};

export default sidebars;
