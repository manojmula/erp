import type { Meta, StoryObj } from '@storybook/angular';
import { fn } from '@storybook/test';
import { CollapsableListComponent } from '../../../app/components/primary/card/collapsable-list/collapsable-list.component';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<CollapsableListComponent> = {
  title: 'Primary/Card/Collapsable List',
  component: CollapsableListComponent,
  tags: ['autodocs'],
  argTypes: {
    
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  // args: { onClick: fn() },
};

export default meta;
type Story = StoryObj<CollapsableListComponent>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Small: Story = {
  args: {
    options: {
      fluid: true,
      // aspectRatio: '1:1',
      controls: true,
      autoplay: true,
      sources: [{
        src: "/video.mp4",
        type: "video/mp4"
      }]
    }
  },
};

// export const Medium: Story = {
//   args: {
//     label: 'Medium',
//   },
// };

// export const Large: Story = {
//   args: {
//     label: 'Large'
//   }
// }

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