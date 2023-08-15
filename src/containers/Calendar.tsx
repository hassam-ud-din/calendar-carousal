import { Collapse, TimePicker, Typography, ConfigProvider, theme, CollapseProps } from "antd"
import DurationSetter from "../components/DurationSetter"
import { useCalendar } from "../hooks/useCalendar"
import CardCarousel from "../components/CardCarousel/CardCarousel"
import { Dayjs } from "dayjs"
import { useState } from "react"
import useCustomStyles from "../hooks/useCustomStyles"
import {
  getDateToken,
  getDurationToken,
  getTimeToken,
  getFormattedTime,
  getFormattedDate,
  getDurationInHours,
} from "../utils"
import { DownOutlined } from "@ant-design/icons"

const { Text } = Typography
const { useToken } = theme

export type CalendarProps = {
  customDateComponent?: React.ReactNode
  customTimeComponent?: React.ReactNode
  customDurationComponent?: React.ReactNode
}

export default function Calendar({
  customDateComponent,
  customTimeComponent,
  customDurationComponent,
}: CalendarProps) {
  const { token } = useToken()
  const styles = useCustomStyles()

  const {
    selected,
    dates,
    formats,
    durationStep,
    setDate,
    setTime,
    increaseDuration,
    decreaseDuration,
  } = useCalendar()

  const [activeKey, setActiveKey] = useState<string | Array<string>>(["1"])

  const handleDateChange = (date: Dayjs) => {
    setDate(date)
    setActiveKey(["2"])
  }

  const handleTimeChange = (time: Dayjs | null) => {
    if (time) setTime(time)
    setActiveKey([])
  }

  const collapseItems: CollapseProps["items"] = [
    {
      key: "1",
      label: "Date",
      extra: (
        <Text style={{ fontSize: token.fontSizeLG }}>
          {getFormattedDate(selected?.date, formats.date)}
        </Text>
      ),
      children: customDateComponent || (
        <ConfigProvider
          theme={{
            token: getDateToken(token, styles),
          }}
        >
          <CardCarousel dates={dates} onClick={handleDateChange} />
        </ConfigProvider>
      ),
    },

    {
      key: "2",
      label: "Time",
      extra: (
        <Text style={{ fontSize: token.fontSizeLG }}>
          {getFormattedTime(selected?.time, formats.time)}
        </Text>
      ),
      children: customTimeComponent || (
        <ConfigProvider
          theme={{
            token: getTimeToken(token, styles),
          }}
        >
          <TimePicker
            onChange={handleTimeChange}
            size="large"
            use12Hours={formats.clock === "12h"}
            format={formats.time}
            style={{ minWidth: "100%" }}
          />
        </ConfigProvider>
      ),
    },

    {
      key: "3",
      label: "Duration",
      showArrow: false,
      collapsible: "icon",
      extra: customDurationComponent || (
        <ConfigProvider
          theme={{
            token: getDurationToken(token, styles),
          }}
        >
          <DurationSetter
            onClickIncrease={() => increaseDuration(durationStep)}
            onClickDecrease={() => decreaseDuration(durationStep)}
            value={getDurationInHours(selected.duration)}
          />
        </ConfigProvider>
      ),
    },
  ]

  return (
    <Collapse
      ghost
      expandIconPosition="end"
      expandIcon={() => <DownOutlined style={{ color: token.colorPrimary }} />}
      activeKey={activeKey}
      onChange={(key) => setActiveKey(key)}
      style={{
        backgroundColor: token.colorBgContainer,
        maxWidth: styles?.carouselWidth,
        fontSize: token.fontSizeLG,
      }}
      items={collapseItems}
    />
  )
}
