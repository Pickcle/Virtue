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
    case 'fakeGetFrontCategory': {
      console.count('xhjLog: reducer fakeGetFrontCategory')
      const mockData = {"id":10001,"children":[{"id":10008,"name":"食品滋补","children":[{"id":10070,"name":"传统滋补","children":[{"id":10153,"name":"阿胶糕/阿胶块","img":"T1f0YsBmJt1RCvBVdK.jpg","children":[],"url":"","actType":2},{"id":10173,"name":"三七/三七粉","img":"T1v2CsBKY41RCvBVdK.jpg","children":[],"url":"","actType":2},{"id":10161,"name":"人参/西洋参","img":"T1_2DsB5KO1RCvBVdK.jpg","children":[],"url":"","actType":2},{"id":10178,"name":"铁皮枫斗","img":"T1LOKsBCd_1RCvBVdK.jpg","children":[],"url":"/yao-search/all/1/石斛枫斗","actType":1},{"id":10181,"name":"灵芝孢子粉","img":"T1AODsB4ZA1RCvBVdK.jpg","children":[],"url":"/yao-search/all/1/灵芝孢子","actType":1},{"id":10157,"name":"虫草","img":"T14OYsB4D71RCvBVdK.jpg","children":[],"url":"","actType":2},{"id":10155,"name":"燕窝","img":"T1OOdsBjh31RCvBVdK.jpg","children":[],"url":"","actType":2},{"id":10166,"name":"海参","img":"T1p2DsB5Jh1RCvBVdK.jpg","children":[],"url":"/yao-search/all/1/海参","actType":1}],"actType":0},{"id":10072,"name":"药食同源/煲汤汤料","children":[{"id":10308,"name":"枸杞","img":"T1Q0dsBsZE1RCvBVdK.jpg","children":[],"url":"/yao-search/all/1/枸杞","actType":2},{"id":10283,"name":"五谷养生粉","img":"T1w2CsB5ZL1RCvBVdK.jpg","children":[],"url":"","actType":2},{"id":10284,"name":"石斛","img":"T1yOCsB_Jm1RCvBVdK.jpg","children":[],"url":"/yao-search/all/1/石斛","actType":1},{"id":10289,"name":"山药","img":"T1o2CsBsAK1RCvBVdK.jpg","children":[],"url":"/yao-search/all/1/山药","actType":1},{"id":10316,"name":"黄芪","img":"T1t7dsBmKN1RCvBVdK.jpg","children":[],"url":"/yao-search/all/1/黄芪","actType":1},{"id":10301,"name":"汤料","img":"T1aODsB4D31RCvBVdK.jpg","children":[],"url":"/yao-search/all/1/煲汤","actType":1},{"id":10302,"name":"红花","img":"T1F2KsBbYy1RCvBVdK.jpg","children":[],"url":"/yao-search/all/1/红花","actType":1},{"id":10320,"name":"细分药食同源","img":"T1l7YsB5hq1RCvBVdK.jpg","children":[],"url":"","actType":2},{"id":10323,"name":"鹿类产品","img":"T1vOdsB_V81RCvBVdK.jpg","children":[],"url":"/yao-search/all/1/鹿茸","actType":1}],"actType":0},{"id":10073,"name":"蜂蜜/蜂产品","children":[{"id":10227,"name":"蜂蜜","img":"T1s0YsByKi1RCvBVdK.jpg","children":[],"url":"/yao-search/all/1/蜂蜜","actType":2},{"id":10230,"name":"蜂王浆","img":"T1B0DsBChN1RCvBVdK.jpg","children":[],"url":"/yao-search/all/1/蜂王浆","actType":1},{"id":10236,"name":"蜂胶","img":"T1K7YsBKdW1RCvBVdK.jpg","children":[],"url":"/yao-search/all/1/蜂胶","actType":1},{"id":10240,"name":"其它蜂产品","img":"T1D7KsBsVg1RCvBVdK.jpg","children":[],"url":"/yao-search/all/1/蜂产品","actType":1}],"actType":0},{"id":10071,"name":"养生茶饮","children":[{"id":10257,"name":"玫瑰花茶","img":"T1w0CsB4Le1RCvBVdK.jpg","children":[],"url":"/yao-search/all/1/玫瑰花","actType":1},{"id":10260,"name":"菊花茶","img":"T1FODsBbEx1RCvBVdK.jpg","children":[],"url":"/yao-search/all/1/菊花","actType":1},{"id":10263,"name":"苦荞茶","img":"T1F2KsBsxy1RCvBVdK.jpg","children":[],"url":"/yao-search/all/1/苦荞茶","actType":1},{"id":10267,"name":"牛蒡茶","img":"T1e2dsBydJ1RCvBVdK.jpg","children":[],"url":"/yao-search/all/1/牛蒡茶","actType":1},{"id":10270,"name":"姜茶","img":"T1k2YsBXKz1RCvBVdK.jpg","children":[],"url":"/yao-search/all/1/姜茶","actType":1},{"id":10273,"name":"普洱","img":"T1H0YsBbCz1RCvBVdK.jpg","children":[],"url":"/yao-search/all/1/普洱","actType":1},{"id":10276,"name":"其它茶饮","img":"T1R0YsBCZA1RCvBVdK.jpg","children":[],"url":"/yao-search/all/1/养生茶","actType":1}],"actType":0},{"id":10074,"name":"休闲食品","children":[{"id":10332,"name":"坚果","img":"T1y0YsB_DW1RCvBVdK.jpg","children":[],"url":"","actType":2},{"id":10345,"name":"代餐食品","img":"T1lOKsBX__1RCvBVdK.jpg","children":[],"url":"","actType":2},{"id":10352,"name":"红枣","img":"T1_0dsB_xU1RCvBVdK.jpg","children":[],"url":"/yao-search/all/1/枣","actType":1},{"id":10340,"name":"饼干","img":"T140CsB5Y41RCvBVdK.jpg","children":[],"url":"","actType":2},{"id":10357,"name":"食品礼盒","img":"T130ZsB7YG1RCvBVdK.jpg","children":[],"url":"","actType":2},{"id":10336,"name":"糖果","img":"T1h0KsB7AQ1RCvBVdK.jpg","children":[],"url":"","actType":2},{"id":10337,"name":"蜜饯","img":"T137CsB5_e1RCvBVdK.jpg","children":[],"url":"","actType":2},{"id":10349,"name":"方便食品","img":"T187KsBQ_b1RCvBVdK.jpg","children":[],"url":"","actType":2}],"actType":0},{"id":10075,"name":"粮油干货","children":[{"id":10401,"name":"米糊/芝麻糊","img":"T1r2DsBmWN1RCvBVdK.jpg","children":[],"url":"","actType":2},{"id":10408,"name":"燕麦","img":"T1RODsBmdE1RCvBVdK.jpg","children":[],"url":"","actType":2},{"id":10372,"name":"食用油","img":"T1KOKsB7hT1RCvBVdK.jpg","children":[],"url":"","actType":2},{"id":10392,"name":"大米","img":"T112dsBbAN1RCvBVdK.jpg","children":[],"url":"","actType":2},{"id":10417,"name":"豆类杂粮","img":"T1tOCsB4V71RCvBVdK.jpg","children":[],"url":"","actType":2},{"id":10423,"name":"菌类干货","img":"T152YsB5ZW1RCvBVdK.jpg","children":[],"url":"","actType":2},{"id":10428,"name":"调味品","img":"T1G7CsBTLm1RCvBVdK.jpg","children":[],"url":"","actType":2}],"actType":0},{"id":10076,"name":"乳制品","children":[{"id":10109,"name":"成人奶粉","img":"T1l0DsB__I1RCvBVdK.jpg","children":[],"url":"/yao-search/all/1/成人奶粉","actType":1},{"id":10110,"name":"牛奶","img":"T1YOYsB4Ct1RCvBVdK.jpg","children":[],"url":"/yao-search/all/1/牛奶","actType":1},{"id":10111,"name":"酸奶","img":"T16OdsBmDE1RCvBVdK.jpg","children":[],"url":"/yao-search/all/1/莫斯利安","actType":1}],"actType":0},{"id":10077,"name":"酒水饮料","children":[{"id":10494,"name":"碳酸饮料","img":"T1i7YsBKEq1RCvBVdK.jpg","children":[],"url":"/yao-search/all/1/碳酸饮料","actType":2},{"id":10500,"name":"矿泉水","img":"T1w2CsB_xL1RCvBVdK.jpg","children":[],"url":"","actType":2},{"id":10506,"name":"功能饮料","img":"T1IOKsBTZj1RCvBVdK.jpg","children":[],"url":"","actType":2},{"id":10513,"name":"咖啡","img":"T1A7YsB7ZL1RCvBVdK.jpg","children":[],"url":"","actType":2},{"id":10517,"name":"凉茶饮料","img":"T1HODsBm_11RCvBVdK.jpg","children":[],"url":"","actType":2},{"id":10521,"name":"白酒","img":"T1QODsB7EO1RCvBVdK.jpg","children":[],"url":"","actType":2},{"id":10526,"name":"红酒","img":"T1D7KsBKVj1RCvBVdK.jpg","children":[],"url":"","actType":2},{"id":10531,"name":"葡萄酒","img":"T1G7CsBQVm1RCvBVdK.jpg","children":[],"url":"","actType":2},{"id":10539,"name":"洋酒","img":"T14OYsBsD71RCvBVdK.jpg","children":[],"url":"","actType":2},{"id":10545,"name":"威士忌","img":"T1S2YsB_EV1RCvBVdK.jpg","children":[],"url":"","actType":2}],"actType":0},{"id":10078,"name":"进口食品","children":[{"id":10550,"name":"进口饼干","img":"T1x2ZsBQDo1RCvBVdK.jpg","children":[],"url":"/yao-search/all/1/进口饼干","actType":1},{"id":10553,"name":"进口洋酒","img":"T1G7YsB5Az1RCvBVdK.jpg","children":[],"url":"/yao-search/all/1/进口洋酒","actType":1},{"id":10555,"name":"进口红酒","img":"T1H2YsBKVt1RCvBVdK.jpg","children":[],"url":"/yao-search/all/1/进口红酒","actType":1},{"id":10557,"name":"进口生鲜","img":"T1P0CsBXxK1RCvBVdK.jpg","children":[],"url":"/yao-store/b2c/24916230902","actType":1},{"id":10560,"name":"进口冲饮","img":"T1j0CsBjCC1RCvBVdK.jpg","children":[],"url":"/yao-search/all/1/进口冲饮","actType":1},{"id":10562,"name":"进口成人奶粉","img":"T1O2CsB4K71RCvBVdK.jpg","children":[],"url":"/yao-search/all/1/进口成人奶粉","actType":1},{"id":10565,"name":"进口橄榄油","img":"T1A0CsBsE41RCvBVdK.jpg","children":[],"url":"/yao-search/all/1/进口橄榄油","actType":1}],"actType":0},{"id":10069,"name":"中华传统老字号","children":[{"id":10112,"name":"同仁堂","img":"T1b7DsBgYA1RCvBVdK.jpg","children":[],"url":"/yao-search/all/1/同仁堂","actType":1},{"id":10142,"name":"东阿阿胶","img":"T1kOKsB5b_1RCvBVdK.jpg","children":[],"url":"/yao-search/all/1/桃花姬","actType":1},{"id":10139,"name":"雷允上","img":"T192dsBjDA1RCvBVdK.jpg","children":[],"url":"/yao-search/all/1/雷允上","actType":1},{"id":10149,"name":"承善堂","img":"T1k7dsB5DJ1RCvBVdK.jpg","children":[],"url":"/yao-search/all/1/承善堂","actType":1},{"id":10146,"name":"福牌","img":"T1b0YsB7VL1RCvBVdK.jpg","children":[],"url":"/yao-search/all/1/福牌阿胶","actType":1},{"id":10147,"name":"真仁堂","img":"T1NOCsBTYm1RCvBVdK.jpg","children":[],"url":"/yao-search/all/1/真仁堂","actType":1},{"id":10113,"name":"燕太太","img":"T1v2dsBgD31RCvBVdK.jpg","children":[],"url":"","actType":2}],"actType":0}]},{"id":10009,"name":"慢病用药","actType":0},{"id":10007,"name":"家庭常备","actType":0},{"id":10010,"name":"对症找药","actType":0},{"id":10011,"name":"器械成人","actType":0},{"id":10012,"name":"营养保健","actType":0},{"id":10002,"name":"专科用药","actType":0},{"id":10003,"name":"美护居家","actType":0},{"id":10004,"name":"运动健身","actType":0},{"id":10005,"name":"母婴育儿","actType":0},{"id":10006,"name":"服务卡券","actType":0}],"actType":0}
      const rootData = mockData;
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
    case 'fakeGetFirstLevelFrontCategory': {
      console.count('xhjLog: reducer fakeGetFirstLevelFrontCategory')
      const mockData = {"id":10012,"name":"营养保健","children":[{"id":10014,"name":"大牌推荐","children":[{"id":10114,"name":"汤臣倍健","img":"T1H0CsBXD71RCvBVdK.jpg","children":[],"url":"/yao-search/all/1/汤臣倍健\n","actType":1},{"id":10115,"name":"Swisse","img":"T1C7DsBCxS1RCvBVdK.jpg","children":[],"url":"/yao-search/all/1/Swisse","actType":1},{"id":10119,"name":"养生堂","img":"T1FOYsBQ_k1RCvBVdK.jpg","children":[],"url":"/yao-search/all/1/养生堂","actType":1},{"id":10120,"name":"碧生源","img":"T1qODsBmCA1RCvBVdK.jpg","children":[],"url":"/yao-search/all/1/碧生源\n","actType":1},{"id":10122,"name":"禾博士","img":"T1l0YsB_be1RCvBVdK.jpg","children":[],"url":"/yao-search/all/1/禾博士\n","actType":1},{"id":10124,"name":"康恩贝","img":"T1l0YsB_Ae1RCvBVdK.jpg","children":[],"url":"/yao-search/all/1/康恩贝","actType":1}],"actType":0},{"id":10060,"name":"强健骨骼","children":[{"id":10126,"name":"补钙","img":"T1EOdsBs_31RCvBVdK.jpg","children":[],"url":"/yao-search/all/1/补钙\n","actType":2},{"id":10137,"name":"氨糖","img":"T1K2dsBT_U1RCvBVdK.jpg","children":[],"url":"/yao-search/all/1/氨糖\n","actType":2},{"id":10141,"name":"钙铁锌","img":"T1q7dsBCEo1RCvBVdK.jpg","children":[],"url":"/yao-search/all/1/钙铁锌\n","actType":1},{"id":10145,"name":"牛乳钙","img":"T1u0CsBXxL1RCvBVdK.jpg","children":[],"url":"/yao-search/all/1/牛乳钙\n","actType":1},{"id":10152,"name":"小儿补钙","img":"T1L2dsBKJU1RCvBVdK.jpg","children":[],"url":"/yao-search/all/1/小儿补钙\n","actType":1},{"id":10164,"name":"维生素D","img":"T1NOKsBCDg1RCvBVdK.jpg","children":[],"url":"","actType":2}],"actType":0},{"id":10062,"name":"美白抗衰","children":[{"id":10210,"name":"维生素E","img":"T1G0ZsBXKJ1RCvBVdK.jpg","children":[],"url":"","actType":2},{"id":10213,"name":"蔓越莓","img":"T1j7ZsB5A11RCvBVdK.jpg","children":[],"url":"/yao-search/all/1/蔓越莓\n","actType":1},{"id":10199,"name":"保健饮品","img":"T1YOKsBjxj1RCvBVdK.jpg","children":[],"url":"","actType":2},{"id":10216,"name":"月见草","img":"T1A7ZsByKa1RCvBVdK.jpg","children":[],"url":"/yao-search/all/1/月见草\n","actType":1},{"id":10219,"name":"大豆异黄酮","img":"T100DsBj_h1RCvBVdK.jpg","children":[],"url":"/yao-search/all/1/大豆异黄酮\n","actType":1},{"id":10225,"name":"胶原蛋白","img":"T1WOCsB_xC1RCvBVdK.jpg","children":[],"url":"/yao-search/all/1/胶原蛋白","actType":1},{"id":10229,"name":"维生素C","img":"T1n7dsB7dJ1RCvBVdK.jpg","children":[],"url":"","actType":2},{"id":10235,"name":"葡萄籽","img":"T1a0DsBXAN1RCvBVdK.jpg","children":[],"url":"/yao-search/all/1/葡萄籽\n","actType":1},{"id":10293,"name":"木瓜提取物","img":"T1y2DsB_Jk1RCvBVdK.jpg","children":[],"url":"营养保健-植物精华/提取物-木瓜提取物\n","actType":2}],"actType":0},{"id":10061,"name":"增强免疫","children":[{"id":10184,"name":"蛋白粉","img":"T1z2DsBCKS1RCvBVdK.jpg","children":[],"url":"/yao-search/all/1/蛋白粉\n","actType":1},{"id":10188,"name":"维生素B","img":"T1z7DsBTDc1RCvBVdK.jpg","children":[],"url":"","actType":2},{"id":10192,"name":"维生素C","img":"T1DOZsB4bo1RCvBVdK.jpg","children":[],"url":"","actType":2},{"id":10194,"name":"脑白金","img":"T152YsBQ_i1RCvBVdK.jpg","children":[],"url":"/yao-search/all/1/脑白金\n","actType":1},{"id":10196,"name":"复合维生素","img":"T1.2dsBjb31RCvBVdK.jpg","children":[],"url":"","actType":2}],"actType":0},{"id":10063,"name":"男性健康","children":[{"id":10309,"name":"玛咖","img":"T112YsB4dW1RCvBVdK.jpg","children":[],"url":"/yao-search/all/1/玛咖\n","actType":1},{"id":10324,"name":"奶蓟","img":"T1K2KsBKKT1RCvBVdK.jpg","children":[],"url":"","actType":2},{"id":10329,"name":"番茄红素","img":"T1e7YsBQJn1RCvBVdK.jpg","children":[],"url":"/yao-search/all/1/番茄红素\n","actType":1},{"id":10335,"name":"袋鼠精","img":"T150ZsBKWN1RCvBVdK.jpg","children":[],"url":"","actType":2}],"actType":0},{"id":10064,"name":"减肥运动","children":[{"id":10339,"name":"芦荟","img":"T130dsBjK01RCvBVdK.jpg","children":[],"url":"营养保健-植物精华/提取物-芦荟\n","actType":2},{"id":10342,"name":"减肥茶","img":"T1M2DsBmDN1RCvBVdK.jpg","children":[],"url":"/yao-search/all/1/减肥茶\n","actType":1},{"id":10347,"name":"左旋肉碱","img":"T1NOCsBbLm1RCvBVdK.jpg","children":[],"url":"/yao-search/all/1/左旋肉碱\n","actType":1},{"id":10351,"name":"酵素","img":"T1D7CsBvb71RCvBVdK.jpg","children":[],"url":"/yao-search/all/1/酵素\n","actType":1},{"id":10354,"name":"大麦若叶","img":"T1NOKsBTdg1RCvBVdK.jpg","children":[],"url":"/yao-search/all/1/大麦若叶\n","actType":1},{"id":10358,"name":"成人益生菌","img":"T1IODsB4bx1RCvBVdK.jpg","children":[],"url":"/yao-search/all/1/成人益生菌","actType":1},{"id":10360,"name":"增肌粉","img":"T1V0CsByxe1RCvBVdK.jpg","children":[],"url":"/yao-search/all/1/增肌粉\n","actType":2},{"id":10365,"name":"乳清蛋白","img":"T1VOKsB_Cg1RCvBVdK.jpg","children":[],"url":"","actType":2},{"id":10368,"name":"肥胖","img":"T1t0ZsBbb01RCvBVdK.jpg","children":[],"url":"/yao-search/all/1/减肥\n","actType":1}],"actType":0},{"id":10065,"name":"孕婴健康","children":[{"id":10378,"name":"叶酸","img":"T190DsBsxf1RCvBVdK.jpg","children":[],"url":"","actType":2},{"id":10380,"name":"DHA","img":"T1x7DsBgV11RCvBVdK.jpg","children":[],"url":"","actType":2},{"id":10382,"name":"牛初乳","img":"T1c7KsBbd_1RCvBVdK.jpg","children":[],"url":"/yao-search/all/1/牛初乳\n","actType":1},{"id":10383,"name":"儿童益生菌","img":"T1Y7KsB_Js1RCvBVdK.jpg","children":[],"url":"/yao-search/all/1/儿童益生菌\n","actType":2},{"id":10387,"name":"孕妇维生素","img":"T1N0CsBbKP1RCvBVdK.jpg","children":[],"url":"/yao-search/all/1/孕妇维生素\n","actType":1},{"id":10390,"name":"儿童鱼油","img":"T182YsBmWH1RCvBVdK.jpg","children":[],"url":"/yao-search/all/1/儿童鱼油\n","actType":1}],"actType":0},{"id":10066,"name":"调节三高","children":[{"id":10394,"name":"鱼油","img":"T1eOCsBvdT1RCvBVdK.jpg","children":[],"url":"","actType":2},{"id":10399,"name":"卵磷脂","img":"T172YsBsEl1RCvBVdK.jpg","children":[],"url":"","actType":2},{"id":10403,"name":"螺旋藻","img":"T1N2YsBvKV1RCvBVdK.jpg","children":[],"url":"/yao-search/all/1/螺旋藻\n","actType":1},{"id":10407,"name":"大蒜油","img":"T1e0KsBTd_1RCvBVdK.jpg","children":[],"url":"/yao-search/all/1/大蒜油\n","actType":1},{"id":10411,"name":"辅酶Q10","img":"T1U0CsBjxP1RCvBVdK.jpg","children":[],"url":"/yao-search/all/1/辅酶Q10\n","actType":1},{"id":10421,"name":"纳豆","img":"T1l7CsBjJ41RCvBVdK.jpg","children":[],"url":"","actType":2}],"actType":0},{"id":10067,"name":"明目助眠","children":[{"id":10425,"name":"褪黑素","img":"T180DsB4hS1RCvBVdK.jpg","children":[],"url":"/yao-search/all/1/褪黑素\n","actType":2},{"id":10430,"name":"叶黄素","img":"T1gOdsBXDU1RCvBVdK.jpg","children":[],"url":"/yao-search/all/1/叶黄素\n","actType":1},{"id":10431,"name":"胡萝卜素","img":"T1T2dsBshf1RCvBVdK.jpg","children":[],"url":"/yao-search/all/1/胡萝卜素\n","actType":1},{"id":10433,"name":"藻油软胶囊","img":"T1aOdsBvCf1RCvBVdK.jpg","children":[],"url":"/yao-search/all/1/藻油\n","actType":1},{"id":10441,"name":"越橘蓝莓","img":"T1w2CsBTCL1RCvBVdK.jpg","children":[],"url":"","actType":2}],"actType":0},{"id":10068,"name":"进口保健品","children":[{"id":10449,"name":"Swisse","img":"T1Y2CsBbLL1RCvBVdK.jpg","children":[],"url":"/yao-search/all/1/Swisse","actType":1},{"id":10455,"name":"Blackmores","img":"T152CsByhm1RCvBVdK.jpg","children":[],"url":"/yao-search/all/1/blackmores","actType":1},{"id":10481,"name":"GNC","img":"T1I0KsBgZj1RCvBVdK.jpg","children":[],"url":"/yao-search/all/1/GNC\n","actType":1},{"id":10488,"name":"Healthycare","img":"T167KsB5Ay1RCvBVdK.jpg","children":[],"url":"/yao-search/all/1/healthycare\n","actType":1},{"id":10474,"name":"普丽普莱","img":"T1t0ZsBCKw1RCvBVdK.jpg","children":[],"url":"/yao-search/all/1/普丽普莱 \n","actType":1},{"id":10451,"name":"汤普森","img":"T14OKsB5Cv1RCvBVdK.jpg","children":[],"url":"/yao-search/all/1/汤普森","actType":1},{"id":10462,"name":"自然之宝","img":"T172dsB4Yo1RCvBVdK.jpg","children":[],"url":"/yao-search/all/1/自然之宝","actType":1},{"id":10476,"name":"双心","img":"T1vOZsB4Ww1RCvBVdK.jpg","children":[],"url":"/yao-search/all/1/双心\n","actType":1},{"id":10489,"name":"Bio Island","img":"T1E2KsBTZT1RCvBVdK.jpg","children":[],"url":"/yao-search/all/1/Bio Island \n","actType":1}],"actType":0}],"actType":0}
      const dataLv1 = mockData;
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
      categoryDatasLevel2[action.id] = datasLv2;
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
