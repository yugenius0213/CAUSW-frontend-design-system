import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { TextArea } from './TextArea';

const meta: Meta<typeof TextArea> = {
  title: 'Components/TextArea',
  component: TextArea,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof TextArea>;

export const Default: Story = {
  render: () => (
    <TextArea>
      <TextArea.Input placeholder="내용을 입력하세요" />
    </TextArea>
  ),
};

export const WithCharCount: Story = {
  render: () => {
    const [count, setCount] = useState(0);
    const maxLength = 500;

    return (
      <TextArea>
        <TextArea.Input
          placeholder="내용을 입력하세요"
          rows={6}
          maxLength={maxLength}
          onChange={(e) => setCount(e.target.value.length)}
        />
        <TextArea.Footer>
          <span className="text-right text-xs text-gray-400">
            {count} / {maxLength}
          </span>
        </TextArea.Footer>
      </TextArea>
    );
  },
};

export const NoResize: Story = {
  render: () => (
    <TextArea>
      <TextArea.Input resize={false} placeholder="크기 고정" />
    </TextArea>
  ),
};
