import useCalendar from "./useCalendar"

export default function useCustomStyles() {
  const { styles } = useCalendar()
  return styles
}
