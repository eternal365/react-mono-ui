import { ComponentPropsWithoutRef, FC } from 'react';

type GroupProps = ComponentPropsWithoutRef<'optgroup'>;

const Group: FC<GroupProps> = (props) => (
  <optgroup {...props} />
);

export default Group;
