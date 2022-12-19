export const stopWatchFormatter = (time: number): string => {
  const minutes = Math.floor((time % (60 * 60 * 100)) / (60 * 100))
    .toString()
    .padStart(2, '0')
  const seconds = Math.floor((time % (60 * 100)) / 100)
    .toString()
    .padStart(2, '0')
  const smallerSec = Math.floor(time % 100)
    .toString()
    .padStart(2, '0')

  return `${minutes}:${seconds}:${smallerSec}`
}

export const timerFormatter = (time: number): string => {
  const hours = Math.floor((time % (24 * 60 * 60 * 100)) / (60 * 60 * 100))
    .toString()
    .padStart(2, '0')
  const minutes = Math.floor((time % (60 * 60 * 100)) / (60 * 100))
    .toString()
    .padStart(2, '0')
  const seconds = Math.floor((time % (60 * 100)) / 100)
    .toString()
    .padStart(2, '0')

  return `${hours}:${minutes}:${seconds}`
}

export const sumTime = (hour: number, min: number, sec: number): number => {
  return hour * 60 * 60 * 100 + min * 60 * 100 + sec * 100
}
