import { Button, theme } from "antd"
import { PlusOutlined, MinusOutlined } from "@ant-design/icons"

type ValueModifierButtonProps = {
  modificationType: "add" | "subtract"
  onClick: () => void
}

const { useToken } = theme

function ValueModifierButton({ modificationType, onClick }: ValueModifierButtonProps) {
  const { token } = useToken()

  const icon =
    modificationType === "add" ? (
      <PlusOutlined style={{ color: token.colorPrimary }} />
    ) : (
      <MinusOutlined style={{ color: token.colorPrimary }} />
    )

  return (
    <Button
      onClick={onClick}
      size="large"
      style={{ borderRadius: token.borderRadiusSM, borderColor: token.colorPrimary }}
      icon={icon}
    />
  )
}

export default ValueModifierButton
