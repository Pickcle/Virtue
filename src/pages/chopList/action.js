/**
 * 获取更多剁手价商品数据
 */
export function getChopMoreInfo(id, page = 0, pageSize = 30, city = '', nearByStoreIds) {
  id = Number(id);
  const data = {
    _mt: 'unicorn.getModulePagingById',
    id,
    page,
    pageSize,
    city,
    nearByStoreIds: JSON.stringify(nearByStoreIds)
  }
  return {
    [Global.CALL_API]: {
      types: ['yao_getChopMoreInfo', CommonActions.REQUEST, CommonActions.FINISH, CommonActions.FAILURE],
      payload: {
        data: data,
        level: 'None'
      }
    }
  };
}

export function clearState() {
  return {
    type: 'clearState'
  }
}
