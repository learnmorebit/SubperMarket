import{ request} from "./request"

 export function getHomeMulitate(){
   return request({
    url:"/home/multidata"
   })
}
//获取首页商品数据，参数为商品类型与商品页
export function getHomeGoods(type,page){
  return request({
    url:'/home/data',
    params:{
      type,
      page
    }
  })
}


