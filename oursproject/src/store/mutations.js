let mutations = {
  setUserInfo(state, data) {
    state.loginstatus = true
    state.userInfo = data
  },
  setUserId(state, id) {
    console.log(id)
    state.user_id = id
  },
  setCityInfo(state, obj) {
    state.city.name = obj.record.name
    state.city.geohash = obj.record.geohash
    state.city.address = obj.record.address
    state.city.latitude = obj.record.latitude
    state.city.longitude = obj.record.longitude
  },
  setSort(state, num) {
    state.city.sort = num
  },
  setFoodindex(state, num) {
    // console.log(num)
    state.foodindex = num
  },
  costsSum(state, shopCarList) {
    console.log(shopCarList)
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
          if (!state.shopCarList[i].specifications.length) {
            state.shopCarList[i].price += state.shopCarList[j].price
            state.shopCarList[i].count = state.shopCarList[j].count
            console.log(state.shopCarList)
            console.log(j)
            state.shopCarList.splice(j, 1);
            len--
            j--
          } else if (state.shopCarList[i].specifications[0].spec_name == state.shopCarList[j].specifications[0].spec_name) {
            state.shopCarList[i].price += state.shopCarList[j].price
            state.shopCarList[i].count = state.shopCarList[j].count
            state.shopCarList.splice(j, 1);
            len--
            j--
          }
          console.log(state.shopCarList)
        }
      }
    }
  },
  costsSumReduce(state, reduceList) {
    if (state.costCount != 0 && state.costs != 0) {
      state.costCount -= 1;
      //配送总价+
      state.costs -= reduceList.price;
    }
    for (var i = 0; i < state.shopCarList.length; i++) {
      if (state.shopCarList[i].name == reduceList.name) {
        state.shopCarList[i].price -= reduceList.price
        state.shopCarList[i].count--
          if (state.shopCarList[i].price == 0) {
            state.shopCarList.splice(i, 1);
          }
      }
    }
  },
  shopCarDataAdd(state, list) {
    for (var i = 0; i < state.shopCarList.length; i++) {
      if (state.shopCarList[i].name == list.name) {
        if (!state.shopCarList[i].specifications.length) {
          state.shopCarList[i].price += state.shopCarList[i].price / state.shopCarList[i].count
          state.shopCarList[i].count++
            state.costCount++
            state.costs += state.shopCarList[i].price / state.shopCarList[i].count
        } else if (state.shopCarList[i].specifications[0].spec_name == list.specifications[0].spec_name) {
          state.shopCarList[i].price += state.shopCarList[i].price / state.shopCarList[i].count
          state.shopCarList[i].count++
            state.costCount++
            state.costs += state.shopCarList[i].price / state.shopCarList[i].count
        }
      }
    }
  },
  shopCarDataR(state, list) {
    for (var i = 0; i < state.shopCarList.length; i++) {
      if (state.shopCarList[i].name == list.name) {
        if (!state.shopCarList[i].specifications.length) {
          if (state.shopCarList[i].count == 0) {
            state.costs -= state.shopCarList[i].price
          } else {
            state.costs -= state.shopCarList[i].price / state.shopCarList[i].count
          }
          state.shopCarList[i].price -= state.shopCarList[i].price / state.shopCarList[i].count
          state.shopCarList[i].count--
            state.costCount--
            if (state.shopCarList[i].count == 0) {
              state.shopCarList.splice(i, 1)
            }
        } else if (state.shopCarList[i].specifications[0].spec_name == list.specifications[0].spec_name) {
          if (state.shopCarList[i].count == 0) {
            state.costs -= state.shopCarList[i].price
          } else {
            state.costs -= state.shopCarList[i].price / state.shopCarList[i].count
          }
          state.shopCarList[i].price -= state.shopCarList[i].price / state.shopCarList[i].count
          state.shopCarList[i].count--
            state.costCount--
            if (state.shopCarList[i].count == 0) {
              state.shopCarList.splice(i, 1)
            }
        }
      }
    }
  },
  addRemark(state, remarkText) {
    state.remarkTips = remarkText
    console.log(state.remarkTips);
  },
  AddaddressDetaial(state, AddaddressDetaial) {
    state.AddaddressDetaial.push(AddaddressDetaial);
    console.log(state.AddaddressDetaial)

  }

};
export default mutations;
