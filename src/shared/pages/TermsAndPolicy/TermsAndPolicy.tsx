import { termsAndPolicy } from '../../constants';
import { useGetBasePath } from '../../libs/funcs/getBasePath';

const TermsAndPolicy = () => {
  const basePath = useGetBasePath();
  const policy = termsAndPolicy[basePath];

  return (
    <div className="m-0 pt-16 bg-[url('/jpg/forest.jpg')] bg-[length:110%] bg-center bg-no-repeat text-white w-full h-full animate-pan overflow-y-auto">
      {policy && (
        <>
          <div className="text-4xl font-bold text-center mt-8 mb-8">{policy.title}</div>
          <div className="whitespace-pre-line px-8 pb-8 leading-relaxed">{policy.content}</div>
        </>
      )}
    </div>
  );
};

export default TermsAndPolicy;

