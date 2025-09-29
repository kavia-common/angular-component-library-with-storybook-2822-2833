import type { StorybookConfig } from '@storybook/angular';

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(ts|mdx)'],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
    '@storybook/addon-interactions'
  ],
  framework: {
    name: '@storybook/angular',
    options: {}
  },
  docs: {
    defaultName: 'Documentation'
  },
  core: {},
  typescript: {
    reactDocgen: 'none'
  }
};

export default config;
