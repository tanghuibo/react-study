import FatherComponent from './components/FatherComponent';
import ChildrenComponent from './components/ChildrenComponent';
import React from 'react';

const CloneElementTestView = () => {
  return (
    <div>
      <FatherComponent>
        <ChildrenComponent />
      </FatherComponent>
    </div>
  );
};

export default CloneElementTestView;
