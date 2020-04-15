import styled from 'styled-components';

export const HomeWrapper = styled.div`
  overflow: hidden;
  width: 1260px;
  margin: 0 auto;
`;

export const HomeLeft = styled.div`
  float: left;
  margin-left: 15px;
  padding-top: 30px;
  width: 625px;
  margin: 0 auto;
  .banner-img {
    width: 625px;
    height: 340px;
  }
`;

export const HomeRight = styled.div`
  float: right;
  width: 540px;
`;

export const TopicWrapper = styled.div`
  overflow: hidden;
  padding: 20px 0 10px 0;
  margin-left: -18px;
  border-bottom: 1px solid #dcdcdc;
`

export const TopicItem = styled.div`
  float: left;
  height: 32px;
  padding-right: 10px;
  margin-left: 18px;
  margin-bottom: 18px;
  line-height: 32px;
  font-size: 14px;
  color: #000;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  background: #f7f7f7;
  .topic-pic {
    display: block;
    margin-right: 10px;
    float: left;
    width: 32px;
    height: 32px;
  }
`
export const ListItem = styled.div`
  overflow: hidden;
  padding: 20px 0;
  border-bottom: 1px solid #dcdcdc;
  .pic {
    margin-top: 20px;
    width: 125px;
    height: 100px;
    display: block;
    float: right;
    border-radius: 10px;
  }
`

export const ListInfo = styled.div`
  width: 500px;
  float: left;
  .title {
    font-size: 18px;
    line-height: 27px;
    font-weight: bold;
    color: #333;
  }
  .desc {
    line-height: 18px;
    font-size: 13px;
    color: #999;
  }
`
export const RacommendWrapper = styled.div`
  margin: 30px 0;
  width: 540px;
`

export const RecommendItem = styled.div`
  width: 540px;
  height: 50px;
  line-height: 50px;
  border-radius: 14px;
  background: orange;
  .title {
    font-size: 20px;
    margin-left: 220px;
    color: #676767;
  }
`

export const LoadMore = styled.div`
  width: 100%;
  height 40px;
  line-height: 40px;
  margin: 30px 0;
  background: #a5a5a5;
  border-radius: 20px;
  color: #fff;
  cursor: pointer;
  text-align: center;
`

export const BackTop = styled.div`
  position: fixed;
  right: 100px;
  bottom: 100px;
  width: 60px;
  height: 60px;
  line-height: 60px;
  text-align: center;
  border: 1px solid #ccc;
  cursor: pointer;
`