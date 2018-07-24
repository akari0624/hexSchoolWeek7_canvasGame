



const  loadThisURLToImageObj = (url) => {

  return new Promise((resolve,reject) => {

    try{
      const img = new Image();
      img.src = url;
    
      img.onload = () => { resolve(img) }

    }catch(err){
      reject(err)
    }

  })


}


const onImageLoaded = (img) => {return img}

const IMAGES_Loader_loadTheseImgSrc =  (imageToLoadURLArr) => {

  try{

    console.log('prepare to load')

    return  Promise.all(imageToLoadURLArr.map( url =>  loadThisURLToImageObj(url)))
    



  }catch(err){

    throw new Error('載入圖片時失敗！程式終止'+err)
  }


}


export default IMAGES_Loader_loadTheseImgSrc

