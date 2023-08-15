import { Dayjs } from "dayjs"

/**
 * Converts a Dayjs time object to a formatted time string.
 * @param {Dayjs} time - The Dayjs time object to format.
 * @param {string} format - The format string to use for formatting.
 * @returns {string} The formatted time string.
 * @example time = `18:23:23 GMT+0500`, format = "hh:mm a" => returns "6:23 pm"
 */
const getFormattedTime = (time: Dayjs, format: string): string => {
  return time.format(format)
}

export { getFormattedTime }
