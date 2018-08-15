// @flow
import enso from 'cultureamp-style-guide/icons/ca-monogram.svg';
import home from 'cultureamp-style-guide/icons/home.svg';

export type Page = {
  title: String,
  href: String,
  icon: any, // TODO
  children: Array<>,
};

const sitemap = {
  title: 'Kaizen',
  href: '/',
  icon: enso,
  children: [
    {
      title: 'Product',
      href: '/',
      icon: home,
      children: [
        {
          title: 'Styles',
          href: '/styles',
          children: [
            { title: 'Colors', href: '/styles/colors' },
            { title: 'Icons', href: '/styles/icons' },
            { title: 'Typography', href: '/styles/typography' },
          ],
        },
        {
          title: 'Components',
          href: '/components',
          children: [
            { title: 'Button', href: '/components/Button' },
            { title: 'Dropdown', href: '/components/dropdown' },
            { title: 'Icon', href: '/components/Icon' },
            { title: 'Layout', href: '/components/layout' },
            { title: 'Menu List', href: '/components/menulist' },
            { title: 'Navigation Bar', href: '/components/navigationbar' },
            { title: 'Notification', href: '/components/notification' },
            { title: 'Text', href: '/components/text' },
          ],
        },
        {
          title: 'Language',
          href: '/language',
          children: [
            { title: 'Product Language Style Guide', href: '/language' },
            { title: 'Product Writing Checklist', href: '/language/checklist' },
          ],
        },
      ],
    },
  ],
};

export default sitemap;
