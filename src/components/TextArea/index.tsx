import { ChangeEventHandler, ComponentPropsWithoutRef, FC } from 'react';
import cx from 'classnames';

import styles from './styles.module.scss';

type TextAreaProps = ComponentPropsWithoutRef<'textarea'>

const TextArea: FC<TextAreaProps> = ({
  className,
  onChange,
  ...props
}) => {
  const handleChange: ChangeEventHandler<HTMLTextAreaElement> = (event) => {
    const target = event.target;

    target.style.height = 'auto';
    target.style.height = `${target.scrollHeight}px`;

    onChange && onChange(event);
  };

  return (
    <textarea
      className={cx(styles.root, className)}
      onChange={handleChange}
      {...props}
    />
  );
};

export default TextArea;
