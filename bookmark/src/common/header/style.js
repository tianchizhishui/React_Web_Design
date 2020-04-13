import styled from 'styled-components';
import logoPic from '../../statics/logo.png';
import magPic from '../../statics/magnifier.svg';
import aaPic from '../../statics/Aa.svg';
import penPic from '../../statics/pen.svg';

export const HeaderWrapper = styled.div`
  position: relative;
  height: 56px;
  border-bottom: 1px solid #f0f0f0;
`;

export const Logo = styled.a.attrs({
  href: '/'
})`
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 200px;
  height: 56px;
  background: url(${logoPic});
  background-size: contain;
`;

export const AaPic = styled.a.attrs({
  href: '/'
})`
  position: relative;
  top: 15px;
  left: 0;
  display: block;
  width: 30px;
  height: 28px;
  background: url(${aaPic});
  background-size: contain;
`;

export const MagPic = styled.a.attrs({
  href: '/'
})`
  float: right;
  top: 0;
  left: 0;
  margin-top: 5px;
  margin-right: 5px;
  display: block;
  width: 20px;
  height: 20px;
  background: url(${magPic});
  background-size: contain;
  text-align: center;
`;

export const PenPic = styled.a.attrs({
  href: '/'
})`
  position: relative;
  top: 3px;
  left: 0;
  display: inline-block;
  width: 15px;
  height: 15px;
  background: url(${penPic});
  background-size: contain;
`;

export const Nav = styled.div`
  width: 1060px;
  height: 100%;
  padding-right: 50px;
  box-sizing: border-box;
  margin: 0 auto;
`

export const NavItem = styled.div`
  line-height: 56px;
  padding: 0 15px;
  font-size: 22px;
  color: #333;

  &.left {
    float: left;
    color: #707070;
  }
  &.right {
    float: right;
    color: #707070;
  }
  &.active {
    color: #ea6f5a;
  }
`

export const SearchWrapper = styled.div`
  position: relative;
  float: left;
  .magPic {
    position: absolute;
    right: 5px;
    bottom: 5px;
    width: 30px;
    height: 30px;
    border-radius: 13px;
    &.focused {
      background: white;
    }
  }
`;

export const SearchInfo = styled.div`
  position: absolute;
  left = 0;
  top: 56px;
  padding: 0 20px;
  width: 360px;
  box-shadow: 0 0 8px rgba(0, 0, 0, .2);
`;

export const SearchInfoTitle = styled.div`
  margin-top: 20px;
  margin-bottom: 15px;
  line-height: 20px;
  font-size: 14px;
  color: #969696;
`;

export const SearchInfoSwitch = styled.span`
  float: right;
  font-size: 13px;
  cursor: pointer;
`;

export const SearchInfoItem = styled.a`
  display: block;
  float: left;
  line-height: 20px;
  padding: 0 5px;
  margin-right: 10px;
  margin-bottom: 15px;
  font-size: 12px;
  border: 1px solid #ddd;
  color: #787878;
  border-radius: 3px;
`;

export const SearchInfoList = styled.div`
  overflow: hidden;
`

export const NavSearch = styled.input.attrs ({
  placeholder: 'search'
})`
  width: 180px;
  height: 38px;
  padding: 0 35px 0 15px;
  box-sizing: border-box;
  margin-top: 9px;
  margin-left: 20px;
  border: none;
  outline: none;
  border-radius: 13px;
  background: #eee;
  font-size: 15px;
  color: #777;
  &::placeholder {
    color: #999;
  }
  &.focused {
    width: 350px;
  }
  &.slide-enter {
    width: 180px;
    transition: all .2s ease-out;
  }
  &.slide-enter-active {
    width: 350px;
  }
  &.slide-exit {
    width: 350px;
    transition: all .2s ease-out;
  }
  &.slide-exit-active {
    width: 180px;
  }
`;

export const Addition = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  height: 56px;
`

export const Button = styled.div`
  float: right;
  margin-top: 9px;
  margin-right: 20px;
  padding: 0 20px;
  line-height: 38px;
  border-radius: 16px;
  border: 1px solid #ec6149;
  font-size: 15px;
  &.reg {
    color: #ec6149;
  }
  &.writting {
    color: #fff;
    background: #ec6149;
  }
  
`