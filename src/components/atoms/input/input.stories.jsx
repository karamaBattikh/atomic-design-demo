import { Mail } from '@/components/atoms/icons';

import Input from './input';

export default {
  component: Input,
  title: 'Input',
};

function Template(args) {
  return <Input {...args} />;
}

export const LightInput = Template.bind({});
LightInput.args = {
  id: 'text',
  placeholder: 'input with right icon',
  type: 'text',
  value: 'text',
};

export const InputWithLeftIcon = Template.bind({});
InputWithLeftIcon.args = {
  icons: [{ comp: <Mail size="xxs" />, position: 'left' }],
  id: 'mail',
  placeholder: 'mail',
  type: 'text',
};

export const InputWithRightIcon = Template.bind({});
InputWithRightIcon.args = {
  hasError: true,
  id: 'mail',
  placeholder: 'input with right Icon Error',
  type: 'text',
};

export const InputWithLeftRightIcon = Template.bind({});
InputWithLeftRightIcon.args = {
  hasError: true,
  icons: [{ comp: <Mail size="xxs" />, position: 'left' }],
  id: 'password',
  placeholder: 'input with left and right Icon',
  type: 'password',
};
