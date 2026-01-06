import type { Meta, StoryObj } from '@storybook/react-vite';
import { Chip } from './Chip';

// Demo icons
const StarIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
    <path
      d="M12 17.27 18.18 21 16.54 13.97 22 9.24 14.81 8.63 12 2 9.19 8.63 2 9.24 7.46 13.97 5.82 21 12 17.27Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinejoin="round"
    />
  </svg>
);

const meta: Meta<typeof Chip> = {
  title: 'Components/Chip',
  component: Chip,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Chip>;

export const Default: Story = {
  render: () => <Chip>Default</Chip>,
};

export const RoleVariants: Story = {
  name: 'Variants (role)',
  render: () => (
    <div className="flex gap-2">
      <Chip>Text</Chip>
      <Chip variant="dropdown">Dropdown</Chip>
      <Chip variant="closable">Closable</Chip>
    </div>
  ),
};

export const Appearances: Story = {
  render: () => (
    <div className="flex gap-2">
      <Chip appearance="solid">Solid</Chip>
      <Chip appearance="outline">Outline</Chip>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <Chip size="sm">Small</Chip>
      <Chip size="md">Medium</Chip>
    </div>
  ),
};

export const Colors: Story = {
  render: () => (
    <div className="flex gap-2">
      <Chip color="white">text</Chip>
      <Chip color="lightgray">text</Chip>
      <Chip color="darkgray">text</Chip>
    </div>
  ),
};

export const Selected: Story = {
  render: () => (
    <div className="flex gap-2">
      <Chip selected>Selected</Chip>
      <Chip>Not selected</Chip>
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <div className="flex gap-2">
      <Chip disabled>Disabled</Chip>
      <Chip variant="closable" disabled>
        Disabled Closable
      </Chip>
      <Chip variant="dropdown" disabled>
        Disabled Dropdown
      </Chip>
    </div>
  ),
};

export const WithIcons: Story = {
  render: () => (
    <div className="flex gap-2">
      <Chip leftIcon={<StarIcon />}>Left icon</Chip>
      <Chip rightIcon={<StarIcon />}>Right icon</Chip>
      <Chip leftIcon={<StarIcon />} rightIcon={<StarIcon />}>
        Both
      </Chip>
    </div>
  ),
};

export const DropdownClickable: Story = {
  render: () => (
    <Chip asChild variant="dropdown">
      <button type="button" onClick={() => alert('toggle')}>
        Dropdown Button Chip
      </button>
    </Chip>
  ),
};

export const ClosableWithHandler: Story = {
  render: () => (
    <Chip variant="closable" onRemove={() => alert('remove')}>
      Removable
    </Chip>
  ),
};

export const AsButton: Story = {
  render: () => (
    <Chip asChild>
      <button type="button" onClick={() => alert('clicked')}>
        Button Chip
      </button>
    </Chip>
  ),
};

export const AsLink: Story = {
  render: () => (
    <Chip asChild>
      <a href="#" onClick={(e) => e.preventDefault()}>
        Link Chip
      </a>
    </Chip>
  ),
};
