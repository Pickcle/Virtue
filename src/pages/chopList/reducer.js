const initialState = {
  //活动开始时间
  startTime: 0,
  //每一阶段时间
  peroid: 0,
  //标题
  name: '',
  //页面
  type: '',
  //是否数据加载完了
  isLoadOver: false,
  //商品数据
  products: []
}

export function yao_chopList(state = initialState, action) {
  switch (action.type) {
    case 'yao_getChopMoreInfo': {
      if (action.content) {
        // let { startTime, peroid, products, isLoadOver, page, title } = state;
        const { name, sections, type, content } = action.content;
        let { products, startTime, peroid, isLoadOver } = state;

        if (content && CommonUtils.isString(content)) {
          const contentObj = JSON.parse(content);
          startTime = contentObj.startTime;
          peroid = contentObj.cycle;
        }

        if (!startTime || isNaN(startTime) || 'NaN' === startTime) {
          startTime = 0;
        }

        if (CommonUtils.isString(startTime)) {
          startTime = Number(startTime);
        }

        if (CommonUtils.isString(peroid)) {
          peroid = Number(peroid);
        }

        if (sections && sections.length > 0) {
          //为了让界面重新render，必须改变数组的引用
          products = products.concat();

          sections.forEach((value, key) => {
            const valueProduct = JSON.parse(value.content) || {};
            const valueContent = JSON.parse(valueProduct.content) || {};
            valueProduct.content = valueContent;
            products.push(valueProduct);
          })
        } else {
          isLoadOver = true;
        }
        return Object.assign({}, state, {
          startTime,
          peroid,
          name,
          type,
          isLoadOver,
          products
        });
      }
      return state;
    }
    case 'clearState': {
      return {
        startTime: 0,
        peroid: 0,
        name: '',
        type: '',
        isLoadOver: false,
        products: []
      };
    }
    default:
      return state;
  }
}
