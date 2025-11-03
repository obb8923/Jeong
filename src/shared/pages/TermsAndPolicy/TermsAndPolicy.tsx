import styles from './TermsAndPolicy.module.css';
import { termsAndPolicy } from '../../constants';
import { useGetBasePath } from '../../libs/funcs/getBasePath';

const TermsAndPolicy = () => {
  const basePath = useGetBasePath();
  const policy = termsAndPolicy[basePath];

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

