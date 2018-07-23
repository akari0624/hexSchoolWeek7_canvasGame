
const baseX = 60

const baseY = 60

const BulletFactory = (type, angle) => {
  
  //從砲口射出去,所以不會是0,如果是0 就是從中心射出去
  const angle2 = angle * (Math.PI / 180) 
  const iX = Math.cos(angle2) * baseX
  const iY = Math.sin(angle2) * baseY

  return new Bullet(type, angle2, iX, iY)   
  
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
    ctx.beginPath()
    ctx.arc(this.x, this.y, BULLET_RADIUS, 0, 2 * Math.PI, false)
    ctx.fill()
    ctx.stroke()


    ctx.setTransform(1, 0, 0, 1, 0, 0);

  }

  update(bulletSpeed){
    const angle = this.angle

    const iX = Math.cos(angle) * bulletSpeed
    const iY = Math.sin(angle) * bulletSpeed

    this.x +=  iX
    this.y +=  iY

  }


}


export default BulletFactory