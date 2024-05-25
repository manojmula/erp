import type { Meta, StoryObj } from '@storybook/angular';
import { fn } from '@storybook/test';
import { SuccessButtonComponent } from '../../../app/components/primary/buttons/success-button/success-button.component';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<SuccessButtonComponent> = {
  title: 'Primary/Buttons/Success Button',
  component: SuccessButtonComponent,
  tags: ['autodocs'],
  argTypes: {
    
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
};

export default meta;
type Story = StoryObj<SuccessButtonComponent>;

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
