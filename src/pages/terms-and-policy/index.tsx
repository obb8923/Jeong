import styles from './index.module.css';
import { termsAndPolicy } from '../../constants';
import { useGetBasePath } from '../../libs/funcs/getBasePath';
const TermsAndPolicy = () => {
  const basePath = useGetBasePath();
  const policy = termsAndPolicy[basePath as keyof typeof termsAndPolicy];

  return (
  <div className={styles.container}>
    {policy && (
      <>
        <div className={styles.title}>{policy.title}</div>
        <div className={styles.content}>{policy.content}</div>
      </>
    )}
  </div>
  );
};

export default TermsAndPolicy;
