import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { actionCreators } from './store';
import { 
  HeaderWrapper, 
  Logo, 
  NavItem, 
  NavSearch, 
  SearchInfo,
  Addition, 
  Button, 
  SearchWrapper,
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchInfoItem,
  SearchInfoList,
  AaPic,
  MagPic,
  PenPic,
  Nav
} from './style';

class Header extends Component {

  getListArea() {
    const { focused, list, page, mouseIn, totalPage, handleMouseEnter, handleMouseLeave, handleChangePage } = this.props;
    const newList = list.toJS();
    const pageList = [];

    if (newList.length) {
      for (let i = ((page - 1) * 10); i < page * 10; i++) {
        pageList.push(
          <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
        )
      }
    }

    if (focused || mouseIn) {
      return (
        <SearchInfo 
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <SearchInfoTitle>
            Hot Search
            <SearchInfoSwitch onClick={() => handleChangePage(page, totalPage)}>Refresh</SearchInfoSwitch>
          </SearchInfoTitle>
          <SearchInfoList>
            { pageList }
          </SearchInfoList>
        </SearchInfo>
      )
    } else {
      return null;
    }
  }

  render() {
    const { focused, handleInputFocus, handleInputBlur, list } = this.props;
    return (
      <HeaderWrapper>
        <Logo />
        <Nav>
          <NavItem className='left active'>Main Page</NavItem>
          <NavItem className='left'>Download App</NavItem>
          <NavItem className='right'>Login</NavItem>
          <NavItem className='right'><AaPic /></NavItem>
          <SearchWrapper>
            <CSSTransition
              in={focused}
              timeout={200}
              classNames="slide"
            >
              <NavSearch
                className={focused ? 'focused': ''} 
                onFocus={() => handleInputFocus(list)}
                onBlur={handleInputBlur}
              ></NavSearch>
            </CSSTransition>
            <i className={focused ? 'focused magPic': 'magPic'}>
              <MagPic />
            </i>
            {this.getListArea()}
          </SearchWrapper>
        </Nav>
        <Addition>
          <Button className='writting'>
            <i className='penPic'><PenPic /></i>
            Write Somthing
          </Button>
          <Button className='reg'>Register</Button>
        </Addition>
      </HeaderWrapper>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    focused: state.getIn(['header', 'focused']),
    list: state.getIn(['header', 'list']),
    page: state.getIn(['header', 'page']),
    totalPage: state.getIn(['header', 'totalPage']),
    mouseIn: state.getIn(['header', 'mouseIn'])
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus(list) {
      (list.size === 0) && dispatch(actionCreators.getList());
      dispatch(actionCreators.searchFocus());
    },

    handleInputBlur() {
      dispatch(actionCreators.searchBlur());
    }, 

    handleMouseEnter() {
      dispatch(actionCreators.mouseEnter())
    },

    handleMouseLeave() {
      dispatch(actionCreators.mouseLeave())
    },

    handleChangePage(page, totalPage) {
      if (page < totalPage) {
        dispatch(actionCreators.changePage(page + 1));
      } else {
        dispatch(actionCreators.changePage(1));
      }
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);