export interface Statistics {
  mean: number
  median: number
  mode: number
  stdDev: number
  variance: number
  range: number
  min: number
  max: number
  count: number
  sum: number
}

export function calculateStats(data: number[]): Statistics {
  if (data.length === 0) {
    return {
      mean: 0,
      median: 0,
      mode: 0,
      stdDev: 0,
      variance: 0,
      range: 0,
      min: 0,
      max: 0,
      count: 0,
      sum: 0,
    }
  }

  const sorted = [...data].sort((a, b) => a - b)
  const count = data.length
  const sum = data.reduce((acc, val) => acc + val, 0)
  const mean = sum / count

  // Median
  const median = count % 2 === 0 ? (sorted[count / 2 - 1] + sorted[count / 2]) / 2 : sorted[Math.floor(count / 2)]

  // Mode
  const frequency: Record<number, number> = {}
  let maxFreq = 0
  let mode = data[0]

  data.forEach((num) => {
    frequency[num] = (frequency[num] || 0) + 1
    if (frequency[num] > maxFreq) {
      maxFreq = frequency[num]
      mode = num
    }
  })

  // Variance and Standard Deviation
  const variance = data.reduce((acc, val) => acc + Math.pow(val - mean, 2), 0) / count
  const stdDev = Math.sqrt(variance)

  // Range, Min, Max
  const min = sorted[0]
  const max = sorted[count - 1]
  const range = max - min

  return {
    mean,
    median,
    mode,
    stdDev,
    variance,
    range,
    min,
    max,
    count,
    sum,
  }
}
