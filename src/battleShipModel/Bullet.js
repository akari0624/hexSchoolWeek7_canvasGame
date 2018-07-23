
const baseX = 45

const baseY = 45

const BulletFactory = (type, angle) => {
  
  //從砲口射出去,所以不會是0,如果是0 就是從中心射出去
  // 根據轉動當下的角度不同 所在不同象限 起始座標就不同 

  if(angle >= 0 && angle <= 90){
    return new Bullet(type, angle, baseX, baseY)
  }
  else if(angle >= 91 && angle <= 180){
    return new Bullet(type, angle, -baseX, baseY)
  } 
  else if(angle <= -91 && angle >= -180){
    return new Bullet(type, angle, -baseX, -baseY)  
  }

  // angle <= -1 && angle <= -90
  else{ 
    return new Bullet(type, angle, baseX, -baseY)   
  }
}


class Bullet{

  constructor(type, angle, x, y ){

    this.type = type
    this.angle = angle
    this.x = x
    this.y = y
  }

  draw(ctx, centerX, centerY,BULLET_RADIUS){

    ctx.translate(centerX, centerY)
    // ctx.rotate((this.angle - 45) * Math.PI / 180)
    ctx.beginPath()
    ctx.arc(this.x, this.y, BULLET_RADIUS, 0, 2 * Math.PI, false)
    ctx.fill()
    ctx.stroke()


    ctx.setTransform(1, 0, 0, 1, 0, 0);

  }

  update(bulletSpeed){
    const angle = this.angle
    if(angle >= 0 && angle <= 90){
      this.x = this.x + bulletSpeed
      this.y = this.y + bulletSpeed
    }
    else if(angle >= 91 && angle <= 180){
      this.x = this.x - bulletSpeed
      this.y = this.y + bulletSpeed
    }
    else if(angle <= -91 && angle >= -180){
      this.x = this.x - bulletSpeed
      this.y = this.y - bulletSpeed
    }

    //  angle <= -1 && angle <= -90
    else{
      this.x = this.x + bulletSpeed
      this.y = this.y - bulletSpeed
    }

  }


}


export default BulletFactory