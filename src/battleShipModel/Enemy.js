import { YELLOW_GUN_RUNNER }  from './EnemyType'
import { OUTTER_ROUND_RADIUS } from './GameGlobalParameter'


import { AssetImageMap, BOOM_IMG_KEY, BOOM_IMAGE_ENLARGE_RATE } from './GameGlobalParameter'


const drawYellowGunRunner = (enemy, ctx, centerX, centerY) => {

  ctx.save()
  ctx.translate( centerX, centerY)
  ctx.beginPath()
  ctx.fillStyle= '#F5AF5F'
  ctx.arc(enemy.x, enemy.y, enemy.radius, 0, Math.PI*2, false)
  ctx.fill()

  ctx.restore()

} 


const drawYellowGunRunnerBoom = (enemy, ctx, centerX, centerY) => {

  const boomImage = AssetImageMap.get(BOOM_IMG_KEY)
  ctx.save()
  ctx.translate( centerX, centerY)
  ctx.drawImage(boomImage, enemy.x, enemy.y, boomImage.width * (enemy.hittedAnimationFrames / BOOM_IMAGE_ENLARGE_RATE), boomImage.height * (enemy.hittedAnimationFrames / BOOM_IMAGE_ENLARGE_RATE))
  ctx.restore()

} 


const OneDegreeInMathPI = Math.PI * 2 / 360

class Enemy{

  constructor(x,y,v,type,deg, radius){
    this.x = x
    this.y = y
    this.v = v | 1
    this.deg = deg | 30
    this.type = type
    this.radius = radius | 30

    this.ishitted = false
    this.hittedAnimationFrames = 0
    
  }


  draw(ctx, centerX, centerY){

    if(this.type === YELLOW_GUN_RUNNER){
       
      if(!ctx){
        throw new Error(' canvas context not setted!! ')
      }
      if(this.isHitted){
      
        drawYellowGunRunnerBoom(this, ctx,  centerX, centerY)
        this.hittedAnimationFrames += 1
      }else{
      
        drawYellowGunRunner(this, ctx,  centerX, centerY)
      }
    }

  }

  update(){

    if(this.type === YELLOW_GUN_RUNNER){

      this.x = Math.cos(OneDegreeInMathPI * this.deg * this.v) * OUTTER_ROUND_RADIUS
      this.y = Math.sin(OneDegreeInMathPI * this.deg * this.v) * OUTTER_ROUND_RADIUS

      this.deg += 1

      if(this.deg >= 360){
        this.deg = 0
      }
    }

  }

}


export default Enemy