import { createContext, useState, useContext, ReactNode } from "react"
import {
  ClosedDate,
  Formats,
  IDate,
  Selected,
  CalendarTheme,
  CustomStyles,
  IBreakpoint,
  ClosedHoursRange,
} from "../shared/types"
import {
  CARD_BREAKPOINT,
  CLOSED_DATES,
  CALENDAR_THEME,
  DURATION_STEP,
  FORMATS,
  MAX_DURATION,
  MIN_DURATION,
  CLOSED_HOURS,
} from "../shared/constants"
import { Dayjs } from "dayjs"
import { getDateList, getDurationAverage, getThemeAlgorithm } from "../utils"
import { ConfigProvider } from "antd"

type CalendarContext = {
  selected: Selected
  setDate: (date: Dayjs) => void
  setTime: (time: Dayjs) => void
  increaseDuration: (offset: number) => number
  decreaseDuration: (offset: number) => number
  dates: Array<IDate>
  durationStep: number
  formats: Formats
  minDuration: number
  maxDuration: number
  cards: IBreakpoint
  closedDates: Array<ClosedDate>
  closedHours: ClosedHoursRange
  styles?: Partial<CustomStyles>
}

const CalendarContext = createContext<CalendarContext | undefined>(undefined)

type CalendarProviderProps = {
  children: ReactNode
  dates?: Array<IDate>
  durationStep?: number
  formats?: Formats
  minDuration?: number
  maxDuration?: number
  cards?: IBreakpoint
  closedDates?: Array<ClosedDate>
  closedHours?: ClosedHoursRange
  theme?: CalendarTheme
}

function CalendarProvider({
  children,
  dates,
  durationStep,
  formats,
  minDuration,
  maxDuration,
  cards,
  closedDates,
  closedHours,
  theme,
}: CalendarProviderProps) {
  const [selected, setSelected] = useState<Selected>({
    date: null,
    time: null,
    duration: getDurationAverage(minDuration, maxDuration),
  })

  const setDate = (date: Dayjs) => {
    setSelected({ ...selected, date })
  }
  const setTime = (time: Dayjs) => {
    setSelected({ ...selected, time })
  }

  const increaseDuration = (offset: number) => {
    const duration = selected.duration + offset
    const limit = maxDuration || MAX_DURATION

    if (duration <= limit) {
      setSelected({ ...selected, duration })
      return duration
    }

    return selected.duration
  }

  const decreaseDuration = (offset: number) => {
    const duration = selected.duration - offset
    const limit = minDuration || MIN_DURATION

    if (duration >= limit) {
      setSelected({ ...selected, duration })
      return duration
    }

    return selected.duration
  }

  const contextValue: CalendarContext = {
    selected,
    setDate,
    setTime,
    increaseDuration,
    decreaseDuration,
    dates: dates || getDateList(32, closedDates || CLOSED_DATES),
    durationStep: durationStep || DURATION_STEP,
    formats: formats || FORMATS,
    minDuration: minDuration || MIN_DURATION,
    maxDuration: maxDuration || MAX_DURATION,
    cards: cards || CARD_BREAKPOINT,
    closedDates: closedDates || CLOSED_DATES,
    closedHours: closedHours || CLOSED_HOURS,
    styles: theme?.custom || CALENDAR_THEME.custom,
  }

  return (
    <ConfigProvider
      theme={{
        algorithm: getThemeAlgorithm(theme),
        token: theme?.general || CALENDAR_THEME.general,
      }}
    >
      <CalendarContext.Provider value={contextValue}>{children}</CalendarContext.Provider>
    </ConfigProvider>
  )
}

export const useCalendar = () => {
  const context = useContext(CalendarContext)
  if (!context) {
    throw new Error("useCalendar must be used within a CalendarProvider")
  }
  return context
}

export { CalendarProvider }
export default useCalendar
