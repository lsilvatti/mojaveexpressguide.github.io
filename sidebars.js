/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

  // By default, Docusaurus generates a sidebar from the docs folder structure
  // TutorialSidebar: [{ type: 'autogenerated', dirName: '.' }],

  // But you can create a sidebar manually
  /*
          GuideSidebar: [
            'intro',
            'hello',
            {
              type: 'category',
              label: 'Guide',
              items: ['Guide-basics/create-a-document'],
            },
          ],
           */
          
/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  

 docs: [
      "Overview",
      "Introduction",
      "MEG - Utilities",
      "MEG - User Interface",
      "MEG - Gameplay",
      "MEG - Overhauls",
      "MEG - Content",
      "MEG - Locations",
      "MEG - Visuals",
      "MEG - Animations",
      "MEG - Audio",
      "MEG - Patches & Tweaks",
      "MEG - Loadorder",
      "MEG - Post Install",
    {
      type: "category",
      label: "Appendix",
      items: [
        "Appendix/Known Issues", 
        "Appendix/Information",
        "Appendix/Other Guides",
        "Appendix/Communities",
      ],
    },
  ],
  textureguide: [
      "Texture Guide Introduction",
      "Landscape & Environment Retextures",
      "Architecture & Exterior Object Retextures",
      "Interior Object Retextures",
      "Clutter Retextures",
      "Small Items Retextures",
      "Signs & Decals Retextures",
      "Clothing & Armour Retextures",
      "Gun Weapon Retextures",
      "Melee Weapon Retextures",
      "Creature Retextures",
      "FX & Extra Retextures",
      "Texture Guide Patches",
      "Texture Guide Loadorder",
  ],

};

module.exports = sidebars;
