import ValueModifierButton from "./common/ValueModifierButton"
import { Space, theme } from "antd"

const { useToken } = theme

type DurationSetterProps = {
  value: string
  onClickDecrease: () => void
  onClickIncrease: () => void
}

function DurationSetter({ value, onClickDecrease, onClickIncrease }: DurationSetterProps) {
  const { token } = useToken()

  return (
    <Space>
      <ValueModifierButton modificationType="subtract" onClick={onClickDecrease} />
      <span style={{ marginRight: token.margin, marginLeft: token.margin }}>{value}</span>
      <ValueModifierButton modificationType="add" onClick={onClickIncrease} />
    </Space>
  )
}

export default DurationSetter
