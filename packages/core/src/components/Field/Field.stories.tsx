import type { Meta, StoryObj } from '@storybook/react-vite';
import { Field } from './Field';

const meta: Meta<typeof Field> = {
  title: 'Components/Field',
  component: Field,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'white', value: '#ffffff' },
        { name: 'gray', value: '#f3f4f6' },
        { name: 'dark', value: '#1f2937' },
      ],
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Field>;

export const Default: Story = {
  render: () => (
    <Field>
      <Field.Label>이메일</Field.Label>
      <Field.Text type="email" placeholder="example@cau.ac.kr" />
      <Field.Description>학교 이메일을 입력해주세요.</Field.Description>
    </Field>
  ),
};

export const WithError: Story = {
  render: () => (
    <Field error>
      <Field.Label>사용자 이름</Field.Label>
      <Field.Text defaultValue="invalid!" />
      <Field.Description>특수문자는 사용할 수 없습니다.</Field.Description>
    </Field>
  ),
};

export const Disabled: Story = {
  render: () => (
    <Field disabled>
      <Field.Label>학번</Field.Label>
      <Field.Text defaultValue="20201234" />
      <Field.Description>학번은 수정할 수 없습니다.</Field.Description>
    </Field>
  ),
};

export const AllStates: Story = {
  render: () => (
    <div className="flex w-80 flex-col gap-6">
      <Field>
        <Field.Label>기본 상태</Field.Label>
        <Field.Text placeholder="입력해주세요" />
        <Field.Description>도움말 텍스트</Field.Description>
      </Field>

      <Field error>
        <Field.Label>에러 상태</Field.Label>
        <Field.Text defaultValue="잘못된 값" />
        <Field.Description>올바른 값을 입력해주세요.</Field.Description>
      </Field>

      <Field disabled>
        <Field.Label>비활성화</Field.Label>
        <Field.Text defaultValue="수정 불가" />
      </Field>
    </div>
  ),
};
