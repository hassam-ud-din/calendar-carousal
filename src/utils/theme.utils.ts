import { theme } from "antd"
import { CalendarTheme, CustomStyles } from "../shared/types"
import { AliasToken } from "antd/es/theme/internal"
import { CALENDAR_THEME } from "../shared/constants"

/**
 * Generates a token object for customizing date-related components.
 * @param {Partial<AliasToken>} token - The base token object.
 * @param {Partial<CustomStyles> | undefined} styles - Custom styles to override token values.
 * @returns {Partial<AliasToken>} The generated token object.
 */
const getDateToken = (
  token: Partial<AliasToken>,
  styles?: Partial<CustomStyles>
): Partial<AliasToken> => {
  return {
    colorPrimary: styles?.colorCardHeader || token.colorPrimary,
    paddingXS: styles?.cardGap || token.paddingXS,
    colorBgContainerDisabled:
      styles?.colorCardHeaderDisabled || token.colorBgContainerDisabled,
    colorText: styles?.colorCardHeaderText || token.colorText,
    colorTextSecondary: styles?.colorCardBodyText || token.colorTextSecondary,
  }
}

/**
 * Generates a token object for customizing time-related components.
 * @param {Partial<AliasToken>} token - The base token object.
 * @param {Partial<CustomStyles> | undefined} styles - Custom styles to override token values.
 * @returns {Partial<AliasToken>} The generated token object.
 */
const getTimeToken = (
  token: Partial<AliasToken>,
  styles?: Partial<CustomStyles>
): Partial<AliasToken> => {
  return {
    colorPrimary: styles?.colorTimePicker || token.colorPrimary,
    colorLink: styles?.colorTimePicker || token.colorPrimary,
  }
}

/**
 * Generates a token object for customizing duration-related components.
 * @param {Partial<AliasToken>} token - The base token object.
 * @param {Partial<CustomStyles> | undefined} styles - Custom styles to override token values.
 * @returns {Partial<AliasToken>} The generated token object.
 */
const getDurationToken = (
  token: Partial<AliasToken>,
  styles?: Partial<CustomStyles>
): Partial<AliasToken> => {
  return {
    colorPrimary: styles?.colorButton || token.colorPrimary,
    borderRadiusSM: styles?.buttonBorderRadius || token.borderRadiusSM,
  }
}

/**
 * Retrieves the appropriate theme algorithm based on the calendar theme (dark or light).
 * If no calendar theme is provided, the default algorithm is used.
 * @param {CalendarTheme | undefined} calendarTheme - The calendar theme object.
 * @returns {import("antd").CalendarThemeAlgorithm} The selected theme algorithm.
 */
const getThemeAlgorithm = (calendarTheme?: CalendarTheme) => {
  if (!calendarTheme)
    return CALENDAR_THEME.isDark ? theme.darkAlgorithm : theme.defaultAlgorithm
  return calendarTheme?.isDark ? theme.darkAlgorithm : theme.defaultAlgorithm
}

export { getDateToken, getTimeToken, getDurationToken, getThemeAlgorithm }
