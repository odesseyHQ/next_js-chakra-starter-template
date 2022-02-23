import { LottieGeneratorProps } from '@/@types/components/globals';
import Lottie from 'react-lottie';

const defaultProps = {
  customConfigurations: {},
  customWidth: null,
  customHeight: null,
};

const LottieGenerator: React.FC<LottieGeneratorProps> = (props) => {
  const { animationData, customWidth, customHeight, customConfigurations } = {
    ...defaultProps,
    ...props,
  };

  const defaultOptions = {
    loop: true,
    autoplay: true,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
    ...customConfigurations,
  };
  return (
    <Lottie
      options={{ ...defaultOptions, animationData }}
      width={customWidth || '90%'}
      height={customHeight || '90%'}
    />
  );
};
export default LottieGenerator;
