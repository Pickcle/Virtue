import update from 'react/lib/update';

export const yao_categoryList = (state = {
  //当前选中item的index
  curIndex: -1,
  //所有一级类目数据，key是rootId，value是一级类目数据组成的数组
  categoryDatasLevel1: {},
  //所有二级类目数据，key是一级类目id，value是二级类目数据组成的数组
  categoryDatasLevel2: {},
}, action) => {
  const { categoryDatasLevel1, categoryDatasLevel2 } = state;
  switch(action.type) {
    case 'getFrontCategory': {
      const rootData = action.content;
      const datasLevel1 = [];
      const childrenRoot = rootData.children || [];
      childrenRoot.map((valueLevel1, keyLevel1) => {
        //封装一级类目数据,取id,name,img
        const dataLevel1 = {
          id: valueLevel1.id,
          name: valueLevel1.name,
          img: valueLevel1.img
        };
        datasLevel1.push(dataLevel1);

        const datasLevel2 = [];
        const childrenLevel1 = valueLevel1.children || [];
        childrenLevel1.map((valueLevel2, keyLevel2) => {
          //封装二级类目数据,取id,name,children
          const dataLevel2 = {
            id: valueLevel2.id,
            name: valueLevel2.name
          };

          const datasLevel3 = [];
          const childrenLevel2 = valueLevel2.children || [];
          childrenLevel2.map((valueLevel3, keyLevel3) => {
            //封装三级类目数据,取id,name,actType,url
            const dataLevel3 = {
              id: valueLevel3.id,
              name: valueLevel3.name,
              actType: valueLevel3.actType,
              img: valueLevel3.img,
              url: valueLevel3.url
            }
            datasLevel3.push(dataLevel3);
          })
          dataLevel2.children = datasLevel3;

          //如果某二级类目下所有三级类目均下架或为空，此二级类目前端不可见
          //如果不为空，则显示二级类目
          if (dataLevel2.children.length > 0) {
            datasLevel2.push(dataLevel2);
          }
        })
        categoryDatasLevel2[valueLevel1.id] = datasLevel2;
      })
      categoryDatasLevel1[rootData.id] = datasLevel1;
      return {...state};
    }
    case 'getFirstLevelFrontCategory': {
      const dataLv1 = action.content;
      const childrenLv2 = dataLv1.children || [];
      const datasLv2 = [];
      childrenLv2.map((valueLv2, keyLv2) => {
        //封装二级类目数据,取id,name,children
        const dataLv2 = {
          id: valueLv2.id,
          name: valueLv2.name
        };

        const datasLv3 = [];
        const childrenLv2 = valueLv2.children || [];
        childrenLv2.map((valueLv3, keyLv3) => {
          //封装三级类目数据,取id,name,actType,url
          const dataLv3 = {
            id: valueLv3.id,
            name: valueLv3.name,
            actType: valueLv3.actType,
            img: valueLv3.img,
            url: valueLv3.url
          }
          datasLv3.push(dataLv3);
        })
        dataLv2.children = datasLv3;

        //如果某二级类目下所有三级类目均下架或为空，此二级类目前端不可见
        //如果不为空，则显示二级类目
        if (dataLv2.children.length > 0) {
          datasLv2.push(dataLv2);
        }
      })
      categoryDatasLevel2[dataLv1.id] = datasLv2;
      return {...state};
    }
    case 'categoryChangeSelectIndex': {
      return update(state, {curIndex: {
          $set: action.index
        }
      })
    }
    case 'clearState': {
      return {
        curIndex: -1,
        categoryDatasLevel1: {},
        categoryDatasLevel2: {},
      }
    }
    default:
      return state;
  }
}
