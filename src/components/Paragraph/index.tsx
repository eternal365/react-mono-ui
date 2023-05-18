import { ComponentPropsWithoutRef, FC } from 'react';
import cx from 'classnames';

import styles from './styles.module.scss';

type ParagraphProps = ComponentPropsWithoutRef<'p'>;

const Paragraph: FC<ParagraphProps> = ({ className, ...props }) => (
  <p className={cx(styles.root, className)} {...props} />
);

export default Paragraph;
