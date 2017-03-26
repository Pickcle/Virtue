/**
 * 加载更多组件
 * Author: xiaohj
 * Date: 2017.1.10
 */
import React, { Component, PropTypes } from 'react';
import './style.scss';

export default class ChopLoadMore extends Component {
	constructor(props) {
    super(props);
    this.state = {
			isLoading: false
		};
    this.handleScroll = this.handleScroll.bind(this);
	}

	componentDidMount() {
		window.addEventListener('scroll', this.handleScroll, false);
	}

	componentWillUnmount() {
		window.removeEventListener('scroll', this.handleScroll, false);
	}

	handleScroll() {
    if (this.isReachBottom() && !this.props.isMaxLoad()) {
      if (!this.state.isLoading) {
        this.props.loadMore(() => {
          this.setState({
            isLoading: false
          });

					if (this.props.isMaxLoad()) {
						window.removeEventListener('scroll', this.handleScroll, false);
					}
        });

        this.setState({
          isLoading: true
        });
      }
    }
	}

  //是否已到底部
  isReachBottom() {
    // 防止刚载入页面就loadMore
		return document.body.scrollTop !== 0 && document.body.scrollTop + window.innerHeight >= document.body.scrollHeight;
  }

	render() {
    let moreText = '加载更多';
    if (this.props.isMaxLoad()) {
      moreText = '没有更多了';
    }
    if (this.state.isLoading) {
      moreText = '正在加载...';
    }
    return (
      <div className='chop-load-more'>
				<div className='line'></div>
				<div className='text-container'>
	      	<p className='more-text'>{moreText}</p>
				</div>
      </div>
    )
	}
}

ChopLoadMore.PropTypes = {
  loadMore: PropTypes.func.isRequired,
  isMaxLoad: PropTypes.func.isRequired
}
