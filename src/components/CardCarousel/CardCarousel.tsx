import { Carousel, Col, Row, theme } from "antd"
import { useEffect, useRef } from "react"
import DateCard from "./DateCard"
import { Dayjs } from "dayjs"
import useCardsPerSlide from "../../hooks/useCardsPerSlide"
import { CarouselRef } from "antd/es/carousel"
import { IDate } from "../../shared/types"

const { useToken } = theme

type CardCarouselProps = {
  dates: Array<IDate>
  onClick: (newDate: Dayjs) => void
}

function CardCarousel({ dates, onClick }: CardCarouselProps) {
  const { token } = useToken()
  const cardCount = useCardsPerSlide()
  const carouselRef = useRef<CarouselRef>(null)

  useEffect(() => {
    const carouselContainer = carouselRef.current?.innerSlider.list
    let scrolling = false

    if (carouselContainer) {
      const handleScroll = (event: WheelEvent) => {
        if (scrolling) return

        scrolling = true

        if (event.deltaY > 0) {
          carouselRef.current?.next() // Scroll down
        } else {
          carouselRef.current?.prev() // Scroll up
        }

        setTimeout(() => {
          scrolling = false
        }, 500) // Throttle time in milliseconds
      }

      carouselContainer.addEventListener("wheel", handleScroll)

      return () => {
        carouselContainer.removeEventListener("wheel", handleScroll)
      }
    }
  }, [])

  return (
    <Carousel
      draggable
      slidesPerRow={cardCount}
      dots={false}
      infinite={false}
      ref={carouselRef}
    >
      {dates.map((date) => (
        <Row key={date.date.toString()}>
          <Col
            style={{
              paddingLeft: token.paddingXS,
              paddingRight: token.paddingXS,
            }}
          >
            <DateCard date={date.date} closed={date.closed} onClick={onClick} />
          </Col>
        </Row>
      ))}
    </Carousel>
  )
}

export default CardCarousel
