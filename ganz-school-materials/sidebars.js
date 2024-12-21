/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // Nevezzük pl. "mySidebar"-nak
  mySidebar: [
    'bevezeto',
    {
      type: 'category',
      label: 'JavaScript',
      items: [
        'javascript/index',
        'javascript/halado',
      ],
    },
    {
      type: 'category',
      label: 'Python',
      items: [
        'python/index',
        'python/halado',
      ],
    },
    {
      type: 'category',
      label: 'C++',
      items: [
        'csharp/index',
        'csharp/halado',
      ],
    },
  ],
};

module.exports = sidebars;
