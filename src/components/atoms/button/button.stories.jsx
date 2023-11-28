import { Facebook } from '@/components/atoms/icons';

import Button from './button';

export default {
  component: Button,
  title: 'Button',
};

function Template(args) {
  return <Button {...args}>click</Button>;
}

export const Default = Template.bind({});
Default.args = {};
function TemplateWithIcon(args) {
  return (
    <Button {...args}>
      <Facebook size="xxs" />
      click
    </Button>
  );
}
export const ButtonWithIcon = TemplateWithIcon.bind({});
ButtonWithIcon.args = {
  icon: 'icon',
};

function TemplateIconOnly(args) {
  return (
    <Button {...args}>
      <Facebook size="xxs" />
    </Button>
  );
}
export const ButtonIconOnly = TemplateIconOnly.bind({});

ButtonIconOnly.args = {
  icon: 'iconOnly',
};
