/**
 * 懒加载图片组件
 * 样式写在外部的css中，将className传入，默认图片写在background中
 * 可参考ChopItem中chop-item-lazy-load-image的写法
 *
 * props:
 * earlyToLoad: 图片离屏幕底部提早加载的距离,比如填100，可以让图片进入显示区域前100px就加载，如果是负数则延迟加载
 * src: 真正要加载的图片
 * className: 要展示的css类名，由外部定义
 * holderClass: 需要监听scroll事件的容器ClassName，比如CategoryDirectoryItem3中的用法，
 *              需要监听scroll的是CategoryDirectoryItem3的父容器。如果不传，默认容器是window
 *
 * Author: xiaohj
 * Date: 2016.2.8
 */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
// import ScrollManager from 'common/js/components/ScrollManager';
import './style.scss';

export default class LazyLoadImage extends PureComponent {
  constructor(props) {
    super(props);

    //图片离屏幕底部提早加载的距离
    this.earlyToLoad = this.props.earlyToLoad || 0;

    //是否正在加载图片
    this.isLoading = false;

    //是否已加载完
    this.isLoaded = false;

    //处理滑动函数
    this.scrollHandler = this.scrollHandler.bind(this);

    //图片开始加载
    this.imageEnterActiveClass = 'lazy-load-image-enter';

    //背景图片隐藏
    this.hideDivBackground = 'hide-div-background';

    //监听scroll事件的容器
    this.scrollHolder = window;
  }

  componentDidMount() {
    if (this.props.holderClass) {
      const holder = document.getElementsByClassName(this.props.holderClass)[0];
      if (holder) {
        this.scrollHolder = holder;
      }
    }
    this.attachHandler();
    // this.scrollManager.onScroll(this, this.scrollHandler);
    this.scrollHandler();
  }

  shouldComponentUpdate(nextProps, nextState) {
    // return this.props['src'] !== nextProps['src'];
  }

  componentWillUpdate(nextProps, nextState) {

  }

  componentDidUpdate(prevProps, prevState) {
    this.loadSrcImage();
  }

  componentWillUnmount() {
    this.detachHandler();
  }

  attachHandler() {
    this.scrollHolder.addEventListener('scroll', this.scrollHandler);
  }

  detachHandler() {
    this.scrollHolder.removeEventListener('scroll', this.scrollHandler);
  }

  scrollHandler(event) {
    // const $defaultImage = this.refs.defaultImageDom.getDOMNode();
    const $div = this.imageDiv;
    const $img = this.imageDom;
    const $parentNode = $img.parentNode;
    const rect = $parentNode.getBoundingClientRect();
    const offsetY = this.earlyToLoad;
    //当图片有任何部分在显示区域内，则加载
    if ((rect.bottom > 0) && (rect.top - offsetY < document.body.clientHeight)) {
      this.detachHandler();
      // this.scrollManager.offScroll(this);

      this.loadSrcImage();
    }
  }

  loadSrcImage() {
    const $div = this.imageDiv;
    const $img = this.imageDom;
    $img.onload = () => {
      //如果是第一次加载实际图片，要有css动画
      if (!this.isLoaded) {
        $img.classList.add(this.imageEnterActiveClass);

        $div.classList.add(this.hideDivBackground);
      }

      this.isLoading = false;
      this.isLoaded = true;

      $img.onload = null;
      $img.onerror = null;
    }

    $img.onerror = () => {
      this.isLoading = false;
      this.isLoaded = false;

      $img.onload = null;
      $img.onerror = null;
    }

    $img.src = this.props['src'];

    this.isLoading = true;
  }

  render() {
    return (
      <div className={this.props.className} ref={ref => this.imageDiv = ref}>
        <img ref={ref => this.imageDom = ref} className='lazy-load-image'/>
      </div>
    )
  }
}

LazyLoadImage.PropTypes = {
  src: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  earlyToLoad: PropTypes.number,
  scrollHolder: PropTypes.string
}
