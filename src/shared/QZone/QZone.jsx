import React from 'react';
import qzone1 from '../../assets/qZone1.png';
import qzone2 from '../../assets/qZone2.png';
import qzone3 from '../../assets/qZone3.png';
import bg from '../../assets/bg.png';

const QZone = () => {
  return (
    <div className='bg-light py-3 text-center'>
      <h4>Q-Zone</h4>
      <div>
        <img src={qzone1} alt="" />
        <img src={qzone2} alt="" />
        <img src={qzone3} alt="" />
      </div>
      <div>
        <img src={bg} alt="" />
      </div>
    </div>
  );
};

export default QZone;