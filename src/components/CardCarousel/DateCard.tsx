import { Card, theme, Typography } from "antd"
import { Dayjs } from "dayjs"

const { useToken } = theme
const { Title, Text } = Typography

type DateCardProps = {
  date: Dayjs
  closed?: boolean
  onClick?: (newDate: Dayjs) => void
}

function DateCard(props: DateCardProps) {
  const { token } = useToken()

  const handleCardClick = () => {
    if (!props.closed && props.onClick) {
      props.onClick(props.date)
    }
  }

  const headStyle: React.CSSProperties = {
    backgroundColor: props.closed ? token.colorBgContainerDisabled : token.colorPrimary,
    color: token.colorText,
    fontSize: token.fontSizeLG,
    fontWeight: 400,
  }

  const bodyStyle: React.CSSProperties = {
    color: token.colorTextSecondary,
  }

  return (
    <Card
      hoverable={props.closed ? false : true}
      size="small"
      title={props.date.format("MMMM")}
      style={{ textAlign: "center", userSelect: "none" }}
      headStyle={headStyle}
      bodyStyle={bodyStyle}
      onClick={handleCardClick}
    >
      <Title
        style={{
          fontWeight: "400",
          color: token.colorTextSecondary,
          margin: token.marginXS,
          fontSize: token.fontSizeHeading1,
        }}
      >
        {props.date.date()}
      </Title>
      <Text
        style={{
          color: token.colorTextSecondary,
          fontSize: token.fontSizeLG,
        }}
      >
        {props.date.format("dddd")}
      </Text>
    </Card>
  )
}

export default DateCard
