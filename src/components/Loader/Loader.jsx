import { CirclesWithBar } from 'react-loader-spinner';

export const Loader = () => (
  <div>
    <CirclesWithBar
      height="100"
      width="70"
      color="#3f51b5"
      wrapperStyle={{ justifyContent: 'center' }}
      wrapperClass=""
      visible={true}
      outerCircleColor=""
      innerCircleColor=""
      barColor=""
      ariaLabel="circles-with-bar-loading"
    />
    ;
  </div>
);
