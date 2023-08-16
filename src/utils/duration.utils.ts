import { MAX_DURATION, MIN_DURATION } from "../shared/constants"

/**
 * Calculates the average duration between a minimum and maximum duration.
 * If either minimum or maximum is not provided, default values are used.
 * @param {number | undefined} min - The minimum duration in minutes.
 * @param {number | undefined} max - The maximum duration in minutes.
 * @returns {number} The average duration in minutes.
 */
const getDurationAverage = (min?: number, max?: number): number => {
  min = min ? min : MIN_DURATION
  max = max ? max : MAX_DURATION
  return Math.floor((min + max) / 2)
}

/**
 * Converts a duration in minutes to a formatted string in hours and minutes.
 * @param {number} minutes - The duration in minutes.
 * @returns {string} The formatted duration string.
 * @example "1:30" for 90 minutes
 */
const getDurationInHours = (minutes: number): string => {
  const hours = Math.floor(minutes / 60)
  const remainingMinutes = minutes % 60

  const formattedHours = hours.toString().padStart(1, "0")
  const formattedMinutes = remainingMinutes.toString().padStart(2, "0")

  return `${formattedHours}:${formattedMinutes}`
}

export { getDurationAverage, getDurationInHours }
