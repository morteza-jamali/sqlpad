import React from 'react';
import styles from './Code.module.css';

export interface Props extends React.HTMLAttributes<HTMLElement> {
  type?: string;
}

const Code = ({ children, className, type, ...rest }: Props) => {
  const cs = [];

  if (className) {
    cs.push(className);
  }

  if (type === 'danger') {
    cs.push(styles.danger);
  }

  return (
    <pre>
      <code className={cs.join(' ')} {...rest}>
        {children}
      </code>
    </pre>
  );
};

export default Code;
