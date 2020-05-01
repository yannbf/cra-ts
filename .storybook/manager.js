import { addons } from '@storybook/addons';
import { create } from '@storybook/theming/create';

const theme = create({
  base: 'light',
  brandTitle: 'Finqle Storybook',
  brandUrl: 'https://toolkit.finqle.dev',
  brandImage: 'https://toolkit.finqle.dev/img/logo-small.png'
});

addons.setConfig({
  theme,
});