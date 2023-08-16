import { AliasToken } from "antd/es/theme/internal"

/**
 * @description Represents a set of color values for various components.
 * @property {string} colorCardHeader - The color of the card header.
 * @property {string} colorCardHeaderDisabled - The color of the disabled card header.
 * @property {string} colorCardHeaderText - The color of the card header text.
 * @property {string} colorCardBodyText - The color of the card body text.
 * @property {string} colorButton - The color of buttons.
 * @property {string} colorTimePicker - The color of the time picker.
 */
export type Colors = {
  colorCardHeader: string
  colorCardHeaderDisabled: string
  colorCardHeaderText: string
  colorCardBodyText: string
  colorButton: string
  colorTimePicker: string
}

/**
 * @description Represents spacing values for layout and components.
 * @property {number} cardGap - The gap between cards.
 * @property {number} buttonBorderRadius - The border radius for buttons.
 * @property {number} carouselWidth - The width of the carousel.
 */
export type Spacing = {
  cardGap: number
  buttonBorderRadius: number
  carouselWidth: number
}
/**
 * @description Represents custom styles that combine color and spacing properties.
 */
export type CustomStyles = Colors & Spacing

/**
 * @description Represents the theme configuration for the calendar component.
 * @property {boolean} isDark - Indicates whether the theme is dark.
 * @property {Partial<AliasToken>} general - General theme settings that apply to all components.
 * @property {Partial<CustomStyles>} custom - Custom theme settings that can be applied to specific components.
 */
export type CalendarTheme = {
  /**@default false */
  isDark: boolean
  general?: Partial<AliasToken>
  custom?: Partial<CustomStyles>
}
