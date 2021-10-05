
module.exports ={
  configureWebpack:{
    resolve:{
      extensions:['.css','.js','.vue'],
      alias:{
        
        // "@": resolve()
        'assets':"@/assets",
        'components':"@/components",
        'views':"@/views",
        'network':"@/network",
        'common':"@/common",

      }
    }
  }
}