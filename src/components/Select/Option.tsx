import { ComponentPropsWithoutRef, FC } from 'react';

type OptionProps = ComponentPropsWithoutRef<'option'>;

const Option: FC<OptionProps> = (props) => (
  <option {...props} />
);

export default Option;
