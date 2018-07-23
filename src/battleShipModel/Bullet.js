


class Bullet{

  constructor(type, angle, x, y ){

    this.type = type
    this.angle = angle
    this.x = x
    this.y = y
  }

  draw(ctx, centerX, centerY,BULLET_RADIUS){

    ctx.translate(centerX, centerY)
    ctx.rotate((this.angle - 45) * Math.PI / 180)
    ctx.beginPath()
    ctx.arc(this.x, this.y, BULLET_RADIUS, 0, 2 * Math.PI, false)
    ctx.fill()
    ctx.stroke()


    ctx.setTransform(1, 0, 0, 1, 0, 0);

  }

  update(bulletSpeed){

    this.x = this.x + bulletSpeed
    this.y = this.y + bulletSpeed

  }


}


export default Bullet