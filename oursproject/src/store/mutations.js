let mutations = {
  setCityInfo(state, obj) {
    state.city.name = obj.record.name
    state.city.geohash = obj.record.geohash
    state.city.address = obj.record.address
    state.city.latitude = obj.record.latitude
    state.city.longitude = obj.record.longitude
  },
  setSort(state, num) {
    // console.log("+++++++")
    state.city.sort = num
  },
  setFoodindex(state, num) {
    // console.log(num)
    state.foodindex = num
  },
  costsSum(state, shopCarList) {
    // console.log(shopCarList);
    //购物车数量
    state.costCount += 1;
    //配送总价
    state.costs += shopCarList.price;
    //购物车列表
    state.shopCarList.push(shopCarList);
    var len = state.shopCarList.length
    for (var i = 0; i < len; i++) {
      for (var j = i + 1; j < len; j++) {
        if (state.shopCarList[i].name == state.shopCarList[j].name) {
          state.shopCarList[i].price += state.shopCarList[j].price
          state.shopCarList[i].count = state.shopCarList[j].count
          state.shopCarList.splice(j, 1);
          len--
          j--
        }
      }
    }
  },
  costsSumReduce(state, reduceList) {
    if (state.costCount != 0 && state.costs != 0) {
      state.costCount -= 1;
      //配送总价
      state.costs -= reduceList.price;
    }
    console.log(reduceList);
    for (var i = 0; i < state.shopCarList.length; i++) {
      if (state.shopCarList[i].name == reduceList.name) {
        state.shopCarList[i].price -= reduceList.price
        state.shopCarList[i].count--
        if (state.shopCarList[i].price==0) {
          state.shopCarList.splice(i,1);
        }
      }
    }
  },
  shopCarDataAdd(state,list){
    for (var i = 0; i < state.shopCarList.length; i++) {
      if (state.shopCarList[i].name == list.name) {
        state.shopCarList[i].price += state.shopCarList[i].price/state.shopCarList[i].count
        console.log(state.shopCarList[i].price)
        state.shopCarList[i].count++
      }
    }
  }
};
export default mutations;
