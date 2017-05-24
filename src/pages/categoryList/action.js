/**
 * 先调用getFrontCategory，然后跳转到一级类目
 */
export const jumpToLevel1 = (idLevel1, rootId) => {
  return (dispatch, getState) => {
    return dispatch(getFrontCategory(rootId))
      .then((state) => {
        return dispatch(getFirstLevelFrontCategory(rootId, idLevel1));
        // if (jumpToIndex != 0) {
        // } else {
        //   return Promise.resolve(dispatch(categoryChangeSelectIndex(jumpToIndex)));
        // }
      })
      .then((state) => {
        const datasLevel1 = state.yao_categoryList.categoryDatasLevel1[rootId];
        let jumpToIndex = 0;

        datasLevel1 && datasLevel1.forEach((value, index) => {
          if (value.id == idLevel1) {
            jumpToIndex = index;
          }
        });

        dispatch(categoryChangeSelectIndex(jumpToIndex));
      })
  }
}

/**
 * 获取所有一级类目及第一个一级类目下的子类目
 */
export const getFrontCategory = (id) => {
  return {
    [Global.CALL_API]: {
      types: ['getFrontCategory', CommonActions.REQUEST, CommonActions.FINISH, CommonActions.FAILURE],
      payload: {
        data: {
          _mt: 'unicorn.getFrontCategory',
          id
        },
        level: 'None'
      }
    }
  }
}

/**
 * 根据id获取某个一级类目下的子类目
 */
export const getFirstLevelFrontCategory = (rootId, id) => {
  return {
    [Global.CALL_API]: {
      types: ['getFirstLevelFrontCategory', CommonActions.REQUEST, CommonActions.FINISH, CommonActions.FAILURE],
      payload: {
        data: {
          _mt: 'unicorn.getFirstLevelFrontCategory',
          rootId,
          id
        },
        level: 'None'
      }
    }
  }
}

/**
 * 一级类目选中变更
 */
export const categoryChangeSelectIndex = (index) => {
  return {
    type: 'categoryChangeSelectIndex',
    index
  }
}

/**
 * 清除state
 */
export const clearState = () => {
  return {
    type: 'clearState'
  }
}
