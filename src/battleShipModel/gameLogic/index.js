import {BULLET_RADIUS} from '../GameGlobalParameter'


export const isTheyCollideAndReturnSecondFilteredArr = (bullletsArr, enemysArr) => {


  let filteredArr = enemysArr

  bullletsArr.forEach(b => {

    filteredArr = filteredArr.filter(e => {

      if (!isTwoCircleCollide(b.x, b.y, BULLET_RADIUS, e.x, e.y, e.radius)) {
        return e
      }
    })
  })

  return filteredArr
}

const isTwoCircleCollide = (x1, y1, r1, x2, y2, r2) => {

  const x = Math.abs(x2 - x1)
  const y = Math.abs(y2 - y1)

  if (Math.sqrt(x * x + y * y) <= r1 + r2) {
    return true
  }
  return false
}