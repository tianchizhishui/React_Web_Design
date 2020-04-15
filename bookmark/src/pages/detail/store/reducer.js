import { fromJS } from 'immutable';
import * as constants from './constants';

const defaultState = fromJS({
  title: 'This is a test Detail page',
  content: "<img src='https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2020-audi-tts-mmp-1-1575992001.jpg?crop=0.603xw:0.678xh;0.112xw,0.274xh&resize=640:*' alt='' /><p><b>Distinct personality and distintinctive details set the Audi TTS truly apart.</b> A sports coupe in the truest sense, several styling and exterior choices, such as the available Competition package shown, can help you make it your own style icon. </p><p>The classic lines of the TTS meet high-octane design details. The Platinum Gray Singleframe® grille makes a bold entrance wherever it goes, while the S model quad exhaust outlets leave the trace of its motorsport performance.</p><p>Get more out of your life adventures by equipping your Audi vehicle with Audi Genuine Accessories. Make it truly yours by adding versatility, craftsmanship and style to an already bold personal statement. </p>"
});

export default (state = defaultState, action) => {
  switch(action.type) {
    case constants.CHANGE_DETAIL:
      return state.merge({
        title: action.title,
        content: action.content
      })
    default:
      return state;
  }
}
