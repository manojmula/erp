import type { Meta, StoryObj } from '@storybook/angular';
import { fn } from '@storybook/test';
import { WarningSignButtonComponent } from '../../../app/components/primary/buttons-with-sign/warning-sign-button/warning-sign-button.component';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<WarningSignButtonComponent> = {
  title: 'Primary/Sign Buttons/Warning Sign Button',
  component: WarningSignButtonComponent,
  tags: ['autodocs'],
  argTypes: {
    
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
};

export default meta;
type Story = StoryObj<WarningSignButtonComponent>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Small: Story = {
  args: {
    label: 'Large',
  },
};

export const Medium: Story = {
  args: {
    label: 'Medium',
  },
};

export const Large: Story = {
  args: {
    label: 'Large'
  }
}

// export const Large: Story = {
//   args: {
//     label: 'Button',
//   },
// };

// export const Small: Story = {
//   args: {
//     label: 'Button',
//   },
// };
