import ImageLoader from '../../../src/battleShipModel/imageLoaderUtil'


const errorMsgPrefix = '測試時發生錯誤：'

describe('this module can load image to ImageObject to memory asynchronously', () => {
  
  let imageURLArr = []
  
  before(() => {
    imageURLArr.push('../../../asset/png/boom.png')


  })
  
  it('can load image succefully', ()=>{
    
    const pArray = ImageLoader(imageURLArr)
  
    pArray.then(imgArr => {

      console.log(imgArr)
      expect(imgArr.length).equals(1)
    
    }).catch(err => {

      console.log(`${errorMsgPrefix}${err}`)
      should.fail()
    })

  })

})