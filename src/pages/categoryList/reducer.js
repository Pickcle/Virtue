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
      const mockData = {"id":10001,"children":[{"id":10008,"name":"专科用药","children":[{"id":10025,"name":"男科/泌尿疾病","children":[{"id":10452,"name":"性功能障碍","img":"T1M2CsBjLK1RCvBVdK.jpg","children":[],"url":"/yao-search/all/1/性功能障碍","actType":1},{"id":10459,"name":"男性不育症","img":"T182dsBjW31RCvBVdK.jpg","children":[],"url":"/yao-search/all/1/男性不育症","actType":1},{"id":10463,"name":"前列腺炎","img":"T190CsBXhP1RCvBVdK.jpg","children":[],"url":"/yao-search/all/1/前列腺炎","actType":1},{"id":10466,"name":"泌尿系统疾病","img":"T1P7CsBQhb1RCvBVdK.jpg","children":[],"url":"/yao-search/all/1/泌尿系统疾病","actType":1},{"id":10469,"name":"补肾壮阳","img":"T142dsBgho1RCvBVdK.jpg","children":[],"url":"/yao-search/all/1/补肾壮阳","actType":1},{"id":10472,"name":"尖锐湿疣","img":"T1S2YsBTZV1RCvBVdK.jpg","children":[],"url":"/yao-search/all/1/尖锐湿疣","actType":1},{"id":10478,"name":"痔疮","img":"T1f0YsBbLt1RCvBVdK.jpg","children":[],"url":"/yao-search/all/1/痔疮","actType":1},{"id":10487,"name":"戒烟","img":"T1m2dsBsda1RCvBVdK.jpg","children":[],"url":"/yao-search/all/1/戒烟","actType":1},{"id":10482,"name":"脱发","img":"T1E0DsB7VO1RCvBVdK.jpg","children":[],"url":"/yao-search/all/1/脱发","actType":1}],"actType":0},{"id":10034,"name":"妇科疾病","children":[{"id":10635,"name":"月经不调","img":"T11OdsBmxw1RCvBVdK.jpg","children":[],"url":"/yao-search/all/1/月经不调\n","actType":1},{"id":10637,"name":"子宫疾病","img":"T1B2YsB4AV1RCvBVdK.jpg","children":[],"url":"/yao-search/all/1/子宫疾病\n","actType":1},{"id":10639,"name":"盆腔炎","img":"T1M2YsB_AV1RCvBVdK.jpg","children":[],"url":"/yao-search/all/1/盆腔炎\n","actType":1},{"id":10641,"name":"宫颈炎","img":"T170YsB5Ji1RCvBVdK.jpg","children":[],"url":"/yao-search/all/1/宫颈炎\n","actType":1},{"id":10644,"name":"乳腺疾病","img":"T14OdsBTY81RCvBVdK.jpg","children":[],"url":"/yao-search/all/1/乳腺疾病\n","actType":1},{"id":10647,"name":"保胎促孕","img":"T1L7YsB7Ki1RCvBVdK.jpg","children":[],"url":"/yao-search/all/1/保胎\n","actType":1}],"actType":0},{"id":10028,"name":"肝病科","children":[{"id":10575,"name":"乙肝","img":"T1lOKsBvL_1RCvBVdK.jpg","children":[],"url":"/yao-search/all/1/乙肝","actType":1},{"id":10579,"name":"脂肪肝","img":"T1bOYsB_Wi1RCvBVdK.jpg","children":[],"url":"/yao-search/all/1/脂肪肝","actType":1},{"id":10584,"name":"肝纤维化肝硬化","img":"T1D0YsB4xz1RCvBVdK.jpg","children":[],"url":"/yao-search/all/1/肝硬化","actType":1},{"id":10587,"name":"肝性脑病","img":"T1x2KsBghj1RCvBVdK.jpg","children":[],"url":"/yao-search/all/1/肝性脑病","actType":1},{"id":10590,"name":"胆结石","img":"T1WOYsBQDW1RCvBVdK.jpg","children":[],"url":"/yao-search/all/1/胆结石","actType":1},{"id":10592,"name":"酒精肝","img":"T110YsB5EV1RCvBVdK.jpg","children":[],"url":"/yao-search/all/1/酒精肝","actType":1}],"actType":0},{"id":10027,"name":"心脑血管","children":[{"id":10530,"name":"高血压","img":"T1t0dsB7da1RCvBVdK.jpg","children":[],"url":"/yao-search/all/1/高血压","actType":1},{"id":10534,"name":"脑血管病","img":"T1n2dsBvxE1RCvBVdK.jpg","children":[],"url":"/yao-search/all/1/脑血管病","actType":1},{"id":10540,"name":"冠心病","img":"T1z2DsBsVS1RCvBVdK.jpg","children":[],"url":"/yao-search/all/1/冠心病","actType":1},{"id":10548,"name":"高血脂","img":"T1aODsBgE31RCvBVdK.jpg","children":[],"url":"/yao-search/all/1/高血脂","actType":1},{"id":10561,"name":"心绞痛","img":"T1GOYsBKEi1RCvBVdK.jpg","children":[],"url":"/yao-search/all/1/心绞痛","actType":1},{"id":10567,"name":"静脉曲张","img":"T1u0CsBsKL1RCvBVdK.jpg","children":[],"url":"/yao-search/all/1/静脉曲张","actType":1}],"actType":0},{"id":10029,"name":"风湿骨科","children":[{"id":10598,"name":"风湿类风湿","img":"T1w0DsBgZa1RCvBVdK.jpg","children":[],"url":"/yao-search/all/1/风湿类风湿","actType":1},{"id":10601,"name":"关节炎","img":"T1g2YsB4bn1RCvBVdK.jpg","children":[],"url":"/yao-search/all/1/关节炎","actType":1},{"id":10604,"name":"痛风","img":"T1BOKsB4K_1RCvBVdK.jpg","children":[],"url":"/yao-search/all/1/痛风","actType":1},{"id":10607,"name":"股骨头坏死","img":"T1I0DsBgbx1RCvBVdK.jpg","children":[],"url":"/yao-search/all/1/股骨头坏死","actType":1},{"id":10609,"name":"器官移植","img":"T1n0dsBTCE1RCvBVdK.jpg","children":[],"url":"/yao-search/all/1/移植","actType":1},{"id":10612,"name":"骨质增生","img":"T1jOdsB_b81RCvBVdK.jpg","children":[],"url":"/yao-search/all/1/骨质增生","actType":1}],"actType":0},{"id":10026,"name":"神经/精神科","children":[{"id":10493,"name":"抑郁症","img":"T1R0CsBXVl1RCvBVdK.jpg","children":[],"url":"/yao-search/all/1/抑郁症","actType":1},{"id":10496,"name":"癫痫","img":"T1l2CsBjxX1RCvBVdK.jpg","children":[],"url":"/yao-search/all/1/癫痫","actType":1},{"id":10499,"name":"精神分裂症","img":"T1L7YsB4xi1RCvBVdK.jpg","children":[],"url":"/yao-search/all/1/精神分裂症","actType":1},{"id":10502,"name":"帕金森","img":"T1o0dsB4LG1RCvBVdK.jpg","children":[],"url":"/yao-search/all/1/帕金森","actType":1},{"id":10510,"name":"中风","img":"T1M7YsBjYk1RCvBVdK.jpg","children":[],"url":"/yao-search/all/1/中风","actType":1},{"id":10514,"name":"老年性痴呆","img":"T1dOYsBCKH1RCvBVdK.jpg","children":[],"url":"/yao-search/all/1/老年性痴呆","actType":1},{"id":10519,"name":"神经性疼痛","img":"T1sODsBvDO1RCvBVdK.jpg","children":[],"url":"/yao-search/all/1/神经性疼痛","actType":1},{"id":10525,"name":"运动神经元病","img":"T1j0dsBbbN1RCvBVdK.jpg","children":[],"url":"/yao-search/all/1/运动神经元病","actType":1}],"actType":0},{"id":10030,"name":"儿科","children":[{"id":10617,"name":"感冒发烧","img":"T1_2CsBg_m1RCvBVdK.jpg","children":[],"url":"/yao-search/all/1/感冒发烧","actType":1},{"id":10621,"name":"小儿咳嗽","img":"T1g0YsBsCP1RCvBVdK.jpg","children":[],"url":"/yao-search/all/1/小儿咳嗽","actType":1},{"id":10624,"name":"便秘腹泻","img":"T1oODsBmAP1RCvBVdK.jpg","children":[],"url":"/yao-search/all/1/便秘腹泻","actType":1},{"id":10625,"name":"消化不良","img":"T1COKsBCJ_1RCvBVdK.jpg","children":[],"url":"/yao-search/all/1/消化不良","actType":1},{"id":10628,"name":"小儿哮喘","img":"T1M0KsBQVX1RCvBVdK.jpg","children":[],"url":"/yao-search/all/1/小儿哮喘","actType":1},{"id":10629,"name":"小儿鼻炎","img":"T1IODsB_Zx1RCvBVdK.jpg","children":[],"url":"/yao-search/all/1/小儿鼻炎","actType":1},{"id":10634,"name":"小儿湿疹","img":"T1E2CsBvY41RCvBVdK.jpg","children":[],"url":"/yao-search/all/1/小儿湿疹","actType":1},{"id":10636,"name":"小儿癫痫","img":"T1n2CsBsDK1RCvBVdK.jpg","children":[],"url":"/yao-search/all/1/小儿癫痫","actType":1},{"id":10638,"name":"钙剂","img":"T1FOKsBKAC1RCvBVdK.jpg","children":[],"url":"/yao-search/all/1/钙剂","actType":1},{"id":10640,"name":"维生素","img":"T1GOCsB7Jn1RCvBVdK.jpg","children":[],"url":"/yao-search/all/1/维生素","actType":1},{"id":10645,"name":"矿物质","img":"T1Z0KsB5ZT1RCvBVdK.jpg","children":[],"url":"/yao-search/all/1/矿物质","actType":1}],"actType":0},{"id":10031,"name":"皮肤/性病科","children":[{"id":10649,"name":"脱发","img":"T1.2DsB5CE1RCvBVdK.jpg","children":[],"url":"/yao-search/all/1/脱发","actType":1},{"id":10650,"name":"银屑病","img":"T1bOYsBsYi1RCvBVdK.jpg","children":[],"url":"/yao-search/all/1/银屑病","actType":1},{"id":10652,"name":"白癜风","img":"T1Q7YsBvDn1RCvBVdK.jpg","children":[],"url":"/yao-search/all/1/白癜风","actType":1},{"id":10654,"name":"疤痕","img":"T1Z0CsBmxi1RCvBVdK.jpg","children":[],"url":"/yao-search/all/1/疤痕","actType":1},{"id":10656,"name":"灰指甲","img":"T1P7YsByWz1RCvBVdK.jpg","children":[],"url":"/yao-search/all/1/灰指甲","actType":1}],"actType":0},{"id":10032,"name":"呼吸疾病","children":[{"id":10660,"name":"哮喘","img":"T110dsBjdU1RCvBVdK.jpg","children":[],"url":"/yao-search/all/1/哮喘","actType":1},{"id":10662,"name":"咳嗽","img":"T160YsByde1RCvBVdK.jpg","children":[],"url":"/yao-search/all/1/咳嗽","actType":1},{"id":10665,"name":"支气管炎","img":"T1mODsBbCS1RCvBVdK.jpg","children":[],"url":"/yao-search/all/1/支气管炎","actType":1},{"id":10667,"name":"肺炎","img":"T16OYsBvhk1RCvBVdK.jpg","children":[],"url":"/yao-search/all/1/肺炎","actType":1}],"actType":0},{"id":10035,"name":"内分泌","children":[{"id":10631,"name":"糖尿病","img":"T1rODsBjD11RCvBVdK.jpg","children":[],"url":"/yao-search/all/1/糖尿病\n","actType":1},{"id":10632,"name":"甲状腺疾病","img":"T190DsB7hx1RCvBVdK.jpg","children":[],"url":"/yao-search/all/1/甲状腺疾病\n","actType":1}],"actType":0},{"id":10036,"name":"眼科","children":[{"id":10611,"name":"眼干眼涩","img":"T1a0YsBmKc1RCvBVdK.jpg","children":[],"url":"/yao-search/all/1/眼干眼涩\n","actType":1},{"id":10615,"name":"眼部炎症","img":"T1y2KsB4Wv1RCvBVdK.jpg","children":[],"url":"/yao-search/all/1/眼部炎症\n","actType":1},{"id":10618,"name":"白内障","img":"T1_7KsB5dT1RCvBVdK.jpg","children":[],"url":"/yao-search/all/1/白内障\n","actType":1},{"id":10620,"name":"视网膜病变","img":"T1I0DsB_Jx1RCvBVdK.jpg","children":[],"url":"/yao-search/all/1/视网膜病变\n","actType":1},{"id":10622,"name":"青光眼","img":"T1QOdsB5b81RCvBVdK.jpg","children":[],"url":"/yao-search/all/1/青光眼\n","actType":1}],"actType":0}],"actType":0},{"id":10009,"name":"慢病用药","actType":0},{"id":10007,"name":"家庭常备","actType":0},{"id":10010,"name":"对症找药","actType":0},{"id":10011,"name":"器械成人","actType":0},{"id":10012,"name":"营养保健","actType":0},{"id":10002,"name":"食品滋补","actType":0},{"id":10003,"name":"美护居家","actType":0},{"id":10004,"name":"运动健身","actType":0},{"id":10005,"name":"母婴育儿","actType":0},{"id":10006,"name":"服务卡券","actType":0}],"actType":0}
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
