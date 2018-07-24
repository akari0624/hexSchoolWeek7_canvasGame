import React, {Component} from 'react'
import Enemy from './battleShipModel/Enemy'
import {YELLOW_GUN_RUNNER} from './battleShipModel/EnemyType'
import BulletFactory from './battleShipModel/Bullet'
import {NORMAL_BULLET} from './battleShipModel/BulletType'
import {centerCanonCoreRadius, BULLET_SPEED, HOW_MANY_FRAMES_COUNT_OUT_OF_BORDER_BULLETS, BULLET_RADIUS, BOOM_IMG_KEY} from './battleShipModel/GameGlobalParameter'

import {isTheyCollideAndReturnSecondFilteredArr} from './battleShipModel/gameLogic'
import ImageLoader from './battleShipModel/imageLoaderUtil'

import BoomImgSrc from '../asset/png/boom.png'
import {AssetImageMap} from './battleShipModel/GameGlobalParameter'

let GLOBAL_ANGLE = 0

let shouldRecycleBulletCounter = 0

const drawCannon = (cX, cY, ctx, radius, canonLineColor, canonLineWidth) => {

  const canonGunToCanonCircleDistance = 15
  const outterDotLineNumber = 15

  const drawCannonGun = (ctx) => {

    ctx.translate(0, 0 - radius - canonGunToCanonCircleDistance)

    ctx.lineWidth = canonLineWidth / 2
    ctx.beginPath()
    ctx.moveTo(0, 0)
    ctx.lineTo(10, 0)
    ctx.lineTo(10, -10)

    ctx.lineTo(5, -22)
    ctx.lineTo(-5, -22)

    ctx.lineTo(-10, -10)
    ctx.lineTo(-10, 0)
    ctx.lineTo(0, 0)
    ctx.closePath()
    ctx.fillStyle = canonLineColor
    ctx.fill()

    ctx.stroke()

  }

  const drawCannonOutterDotLine = (ctx, coreRadius, moreDistance, dotLineNumber, fillColorHexStr) => {

    const baseOutLineRadiusX = coreRadius + moreDistance
    const baseOutLineRadiusY = coreRadius + moreDistance

    ctx.fillStyle = fillColorHexStr
    const onePieceAngle = Math.PI * 2 / dotLineNumber
    for (let a = 0; a < dotLineNumber; a += 1) {
      ctx.beginPath()
      const currX = 0 + Math.cos(onePieceAngle * a) * baseOutLineRadiusX
      const currY = 0 + Math.sin(onePieceAngle * a) * baseOutLineRadiusY
      ctx.arc(currX, currY, 2, 0, Math.PI * 2, false)
      ctx.fill()
    }

  }

  ctx.lineWidth = canonLineWidth
  ctx.strokeStyle = canonLineColor

  ctx.translate(cX, cY)

  drawCannonOutterDotLine(ctx, radius, 20, 30, '#D3D3D3')

  // 轉canvas的角度  然後再畫
  ctx.rotate((GLOBAL_ANGLE - 270) * Math.PI / 180)

  ctx.beginPath()
  ctx.arc(0, 0, radius, 0, 2 * Math.PI, false)
  ctx.stroke()

  // 外圍後方護盾
  ctx.beginPath()
  ctx.arc(0, 0, radius + 40, Math.PI / 6, Math.PI / 1.2, false)
  ctx.stroke()

  drawCannonGun(ctx)

  // 為了不讓賓士線跟著轉動，所以先復原
  ctx.setTransform(1, 0, 0, 1, 0, 0);

  //  剛剛復原過了，所以要重新設定基準點
  ctx.translate(cX, cY)
  // 賓士之上直線
  ctx.beginPath()
  ctx.moveTo(0, 0)
  ctx.lineTo(0, -radius)
  ctx.stroke()

  // 賓士之右斜線
  const theRightY = Math.cos(Math.PI / 4) * radius
  ctx.beginPath()
  ctx.moveTo(0, 0)
  ctx.lineTo(radius, theRightY - canonLineWidth * 2)
  ctx.stroke()

  // 賓士之左斜線
  const theLeftY = Math.cos(Math.PI / 4) * radius
  ctx.beginPath()
  ctx.moveTo(0, 0)
  ctx.lineTo(-radius, theLeftY - canonLineWidth * 2)
  ctx.stroke()

  // 再復原
  ctx.setTransform(1, 0, 0, 1, 0, 0);

}

const clearAll = (ctx, wholeX, wholeY) => {

  ctx.clearRect(0, 0, wholeX, wholeY)
}

const drawBackground = (ctx, wholeX, wholeY, bgColorHex) => {

  ctx.fillStyle = bgColorHex
  ctx.fillRect(0, 0, wholeX, wholeY)

}

const drawBullet = (bulletsArr, ctx, centerX, centerY) => {

  bulletsArr.forEach(b => {

    b.draw(ctx, centerX, centerY, BULLET_RADIUS)

  })

}

const updateBullet = (bulletsArr, bulletSpeed) => {

  bulletsArr.forEach(b => {

    b.update(bulletSpeed)

  })

}

const canvasOnMouseMoveCurry = (centerX, centerY) => (e) => {

  const _mousePointer = e
  const currX = _mousePointer.clientX
  const currY = _mousePointer.clientY

  const xLength = currX - centerX
  const yLength = currY - centerY

  // const tmpNum = Math.atan2(Math.abs(yLength), Math.abs(xLength))
  const tmpNum = Math.atan2(yLength, xLength)
  const currAngle = tmpNum * 180 / Math.PI

  GLOBAL_ANGLE = Math.round(currAngle)

}

const recycleOutOfScopeBullets = (bulletsArr, wholeWidth, wholeHeight) => {

  const halfWholeWidth = wholeWidth / 2
  const halfWholeHeight = wholeHeight / 2
  const countIsBulletOutOfBorder = (b) => {

    if (Math.abs(b.x) > halfWholeWidth && Math.abs(b.y) > halfWholeHeight) {
      return false
    }

    return true

  }

  if (shouldRecycleBulletCounter > HOW_MANY_FRAMES_COUNT_OUT_OF_BORDER_BULLETS) {

    return bulletsArr.filter(b => countIsBulletOutOfBorder(b))

  } else {
    shouldRecycleBulletCounter += 1;

    return bulletsArr
  }
}

const drawEnemys = (ctx, enemysArr, centerX, centerY) => {

  enemysArr.forEach(enemy => {

    enemy.draw(ctx, centerX, centerY)

  })

}

const updateEnemys = (enemysArr) => {

  enemysArr.forEach(enemy => {

    enemy.update()

  })

}

const onPlayerKeydownCurry = (GameState) => (e) => {

  const currKey = e.keyCode

  // 87 -> w
  if (currKey === 87) {

    const bullet = BulletFactory(NORMAL_BULLET, GLOBAL_ANGLE)

    GameState.bulletsArr = [
      ...GameState.bulletsArr,
      bullet
    ]

  }
}

const initTheEnemies = (GameStateObj) => {

  GameStateObj
    .enemysArr
    .push(new Enemy(0, 0, 1, YELLOW_GUN_RUNNER, 30), new Enemy(0, 0, 1, YELLOW_GUN_RUNNER, 60), new Enemy(0, 0, 1, YELLOW_GUN_RUNNER, 120), new Enemy(0, 0, 1, YELLOW_GUN_RUNNER, 240), new Enemy(0, 0, 1, YELLOW_GUN_RUNNER, 340), new Enemy(0, 0, 1, YELLOW_GUN_RUNNER, 360),)
}

const bindEventToWindowAndCanvas = (centerX, centerY, GameStateObj, battleCanvasRef) => {

  canvasOnMouseMoveHandler = canvasOnMouseMoveCurry(centerX, centerY)
  onPlayerKeydownHandler = onPlayerKeydownCurry(GameStateObj)

  battleCanvasRef.addEventListener('mousemove', canvasOnMouseMoveHandler)

  window.addEventListener('keydown', onPlayerKeydownHandler)

}

const removeEventHandler = (battleCanvasRef) => {

  battleCanvasRef.removeEventListener('mousemove', canvasOnMouseMoveHandler)
  window.removeEventListener('keydown', onPlayerKeydownHandler)

}

let canvasOnMouseMoveHandler = null
let onPlayerKeydownHandler = null

export default class IndexRoute extends Component {

  constructor(props) {
    super(props)

    this.bgCanvasRef = null
    this.battleCanvasRef = null
  }

  render() {

    return (
      <React.Fragment>
        <canvas id="theBackgroundCanvas" ref={(tRef) => this.bgCanvasRef = tRef}></canvas>
        <canvas id="theBattleCanvas" ref={(tRef) => this.battleCanvasRef = tRef}></canvas>
      </React.Fragment>
    )

  }

  componentDidMount() {

    const bgColor = '#001D2E'
    const canonLineColor = '#FFFFFF'

    const bgContext = this
      .bgCanvasRef
      .getContext('2d')
    this.bgCanvasRef.width = window.innerWidth
    this.bgCanvasRef.height = window.innerHeight

    const context = this
      .battleCanvasRef
      .getContext('2d')
    this.battleCanvasRef.width = window.innerWidth
    this.battleCanvasRef.height = window.innerHeight

    const wholeWidth = window.innerWidth
    const wholeHeight = window.innerHeight

    const centerX = wholeWidth / 2
    const centerY = wholeHeight / 2

    const canonLineWidth = 5

    const GameState = {
      bulletsArr: [],
      bulletSpeed: BULLET_SPEED,
      enemysArr: [],
      outterRadius: 100
    }

    bindEventToWindowAndCanvas(centerX, centerY, GameState, this.battleCanvasRef)

    let gameLoopRun = null

    const theGameLoopCurry = GameState => () => {

      clearAll(context, wholeWidth, wholeHeight)

      drawCannon(centerX, centerY, context, centerCanonCoreRadius, canonLineColor, canonLineWidth)

      drawBullet(GameState.bulletsArr, context, centerX, centerY)
      updateBullet(GameState.bulletsArr, GameState.bulletSpeed)

      drawEnemys(context, GameState.enemysArr, centerX, centerY)
      updateEnemys(GameState.enemysArr)

      GameState.enemysArr = isTheyCollideAndReturnSecondFilteredArr(GameState.bulletsArr, GameState.enemysArr)
      GameState.bulletsArr = recycleOutOfScopeBullets(GameState.bulletsArr, wholeWidth, wholeHeight)

      requestAnimationFrame(gameLoopRun)

    }

    const imageToLoadSRCArr = [BoomImgSrc]
    

    console.log('call module')
    const imageObjArr = ImageLoader(imageToLoadSRCArr)
    
    try{
      imageObjArr.then((arr) => {
        console.log('on all resolve')
        AssetImageMap.set(BOOM_IMG_KEY, arr[0])
        initTheEnemies(GameState)
        gameLoopRun = theGameLoopCurry(GameState)
        drawBackground(bgContext, wholeWidth, wholeHeight, bgColor)
        gameLoopRun()
      })

    }catch(err){

      console.log(`讀取圖片時發生錯誤：${err}`)
    }
     
      


  }

  componentWillUnmount() {

    removeEventHandler(this.battleCanvasRef)

    this.battleCanvasRef = null
    this.bgCanvasRef = null
  }

}
