import type { Meta, StoryObj } from '@storybook/react-vite';
import { Field } from './Field';

// Simple inline icons for demo
const SearchIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <circle cx="11" cy="11" r="8" />
    <path d="m21 21-4.35-4.35" />
  </svg>
);

const MailIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

const EyeIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const CloseIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M18 6 6 18" />
    <path d="m6 6 12 12" />
  </svg>
);

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

export const WithLeftIcon: Story = {
  render: () => (
    <Field>
      <Field.Label>검색</Field.Label>
      <Field.Text leftIcon={<SearchIcon />} placeholder="검색어를 입력하세요" />
    </Field>
  ),
};

export const WithRightIcon: Story = {
  render: () => (
    <Field>
      <Field.Label>비밀번호</Field.Label>
      <Field.Text
        type="password"
        rightIcon={<EyeIcon />}
        placeholder="비밀번호 입력"
      />
    </Field>
  ),
};

export const WithBothIcons: Story = {
  render: () => (
    <Field>
      <Field.Label>이메일</Field.Label>
      <Field.Text
        leftIcon={<MailIcon />}
        rightIcon={<CloseIcon />}
        placeholder="이메일을 입력하세요"
        defaultValue="test@example.com"
      />
      <Field.Description>
        왼쪽: 메일 아이콘, 오른쪽: 닫기 버튼
      </Field.Description>
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

      <Field>
        <Field.Label>왼쪽 아이콘</Field.Label>
        <Field.Text leftIcon={<SearchIcon />} placeholder="검색" />
      </Field>

      <Field>
        <Field.Label>오른쪽 아이콘</Field.Label>
        <Field.Text
          rightIcon={<EyeIcon />}
          type="password"
          placeholder="비밀번호"
        />
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
