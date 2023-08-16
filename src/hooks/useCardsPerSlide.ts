import useCalendar from "./useCalendar"
import useBreakpoint from "antd/es/grid/hooks/useBreakpoint"

function useCardsPerSlide() {
  const { cards } = useCalendar()
  const breakpoint = useBreakpoint()

  let cardCount = 3

  if (breakpoint.xxl) cardCount = cards.xxl
  else if (breakpoint.xl) cardCount = cards.xl
  else if (breakpoint.lg) cardCount = cards.lg
  else if (breakpoint.md) cardCount = cards.md
  else if (breakpoint.sm) cardCount = cards.sm
  else if (breakpoint.xs) cardCount = cards.xs

  return cardCount
}

export default useCardsPerSlide
