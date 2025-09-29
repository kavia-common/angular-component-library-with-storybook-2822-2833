import type { Preview } from '@storybook/angular';
import '../src/lib/styles/_theme.css';

const preview: Preview = {
  parameters: {
    backgrounds: {
      default: 'Ocean BG',
      values: [
        { name: 'Ocean BG', value: '#f9fafb' },
        { name: 'Surface', value: '#ffffff' },
        { name: 'Dark Check', value: '#111827' }
      ]
    },
    layout: 'centered',
    controls: { expanded: true }
  },
  decorators: [
    (story) => {
      const doc = globalThis.document;
      const wrapper = doc.createElement('div');
      wrapper.style.padding = '16px';
      wrapper.style.minWidth = '360px';
      wrapper.style.maxWidth = '900px';
      wrapper.style.width = '100%';
      wrapper.style.color = 'var(--ocn-text)';
      wrapper.style.background = 'transparent';
      wrapper.style.fontFamily = "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif";
      const node = story() as unknown as HTMLElement;
      wrapper.appendChild(node);
      return wrapper;
    }
  ]
};

export default preview;
