import { request } from "./request"

export function getCategory() {
  return request({
    url: '/category'
  })
}
//获得子类的数据
export function getsubcategory(maitKey) {
  return request({
    url: '/subcategory',
    params: {
      maitKey
    }
  })
}
//获得子类细节数据
export function getContentDetail(miniWallkey, type) {
  return request({
    url: '/subcategory/detail',
    params: {
      miniWallkey,
      type
    }
  })
}