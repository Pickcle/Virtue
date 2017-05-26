// import update from 'react/lib/update';

const obj = {
  id: '1',
  objA: {
    id: '1-A',
    objAA: {
      id: '1-A-AA',
      array: [0, 1, 2]
    },
    objBB: {
      id: '1-A-BB',
      array: [2, 3, 4]
    }
  }
}

const shadowClone = (obj) => {
  const ret = {};
  for (property in obj) {
    ret[property] = obj[property]
  }
  return ret;
}

// 使用Object.assign，必须每层都做克隆，保证不被shouldComponentUpdate拦截
const f1 = (obj) => {
  const newObj = shadowClone(obj);
  const array = newObj.objA.objAA.array;
  const newArray = array.concat();
  newArray.push(3, 4, 5);
  newObj.objA.objAA.array = newArray;
  return newObj;

  // 手动实现update
  // const newArray = obj.objA.objAA.array;
  // newArray.push(3, 4, 5);
  // const newObjAA = Object.assign({}, obj.objA.objAA, {array: newArray})
  // const newObjA = Object.assign({}, obj.objA, {objAA: newObjAA})
  // const newObj = Object.assign({}, obj, {objA: newObjA})
  // return newObj;
}

const obj_f1 = f1(obj);
console.log('f1------newObj:', JSON.stringify(obj_f1));
console.log('f1------obj:', obj === obj_f1);
console.log('f1------objA:', obj.objA === obj_f1.objA);
console.log('f1------objAA:', obj.objA.objAA === obj_f1.objA.objAA);
console.log('f1------array:', obj.objA.objAA.array === obj_f1.objA.objAA.array);
console.log('f1------objBB:', obj.objA.objBB === obj_f1.objA.objBB);

const update = require('react/lib/update')
const f2 = (obj) => {
  const array = obj.objA.objAA.array.concat();
  array.push(6, 7, 8);
  return update(obj, {
    objA: {
      objAA: {
        array: {
          $set: array
        }
      }
    }
  })
}
const obj_f2 = f2(obj);
console.log('f2------newObj:', JSON.stringify(obj_f2));
console.log('f2------obj:', obj === obj_f2);
console.log('f2------objA:', obj.objA === obj_f2.objA);
console.log('f2------objAA:', obj.objA.objAA === obj_f2.objA.objAA);
console.log('f2------array:', obj.objA.objAA.array === obj_f2.objA.objAA.array);
console.log('f2------objBB:', obj.objA.objBB === obj_f2.objA.objBB);


//扁平化
// objAA = obj.objA.objAA
// objBB = obj.objA.objBB
