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
  setFoodindex(state,num){
    // console.log(num)
    state.foodindex = num
  },
  costsSum(state, shopCarList) {
    console.log(shopCarList);
    //购物车数量
    state.costCount += 1;
    //配送总价
    state.costs += shopCarList.price;
    //购物车列表
    if (state.shopCarList.length == 0) {
      console.log("333");
      state.shopCarList.push(shopCarList);
    } else {
      for (var i = 0; i < state.shopCarList.length; i++) {
        console.log(state.shopCarList)
        if (state.shopCarList[i].name == shopCarList.name) {
          console.log("222")
          state.shopCarList[i].count =shopCarList.count
        }
        else{
          console.log("1111")
          state.shopCarList.push(shopCarList);
        }
      }
    }

  },
  costsSumReduce(state, costsParam) {
    if (state.costCount != 0 && state.costs != 0) {
      state.costCount -= 1;
      //配送总价
      state.costs -= costsParam;
    }
  }
};
export default mutations;
