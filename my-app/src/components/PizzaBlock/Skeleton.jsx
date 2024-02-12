import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton = (props) => (
  <ContentLoader
    speed={2}
    width={280}
    height={500}
    viewBox="0 0 280 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}>
    <circle cx="140" cy="140" r="140" />
    <rect x="0" y="300" rx="9" ry="9" width="280" height="28" />
    <rect x="0" y="351" rx="0" ry="0" width="280" height="87" />
    <rect x="0" y="461" rx="7" ry="7" width="92" height="27" />
    <rect x="125" y="454" rx="16" ry="20" width="152" height="44" />
  </ContentLoader>
);

export default Skeleton;
