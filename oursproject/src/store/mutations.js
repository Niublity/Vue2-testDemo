let mutations = {
  setCityInfo(state,obj) {
    state.city.name = obj.record.name
    state.city.geohash = obj.record.geohash
    state.city.address = obj.record.address
    state.city.latitude = obj.record.latitude
    state.city.longitude = obj.record.longitude
  },
  costsSum(state,costsParam){
    state.costCount+=1
    //配送总价
    state.costs+=costsParam
  },
  costsSumReduce(state,costsParam){
    if (state.costCount!=0&&state.costs!=0){
      state.costCount-=1
      //配送总价
      state.costs-=costsParam
    }
  }
};
export default mutations;
