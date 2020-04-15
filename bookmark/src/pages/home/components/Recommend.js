import React, { PureComponent } from 'react';
import { RacommendWrapper, RecommendItem } from '../style';

class Recommend extends PureComponent {
  render() {
    return (
      <RacommendWrapper>
        <RecommendItem>
          <p className='title'>7 days Hot</p>
        </RecommendItem>
        <RecommendItem>
          <p className='title'>15 days Hot</p>
        </RecommendItem>
        <RecommendItem>
          <p className='title'>One month Hot</p>
        </RecommendItem>
        <RecommendItem>
          <p className='title'>Seasonal Hot</p>
        </RecommendItem>
      </RacommendWrapper>
    )
  }
}

export default Recommend;