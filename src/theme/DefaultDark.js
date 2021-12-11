import {colors, fontsSize, borders} from '../constants/index';

const DEFAULT_DARK_COLOR_THEME = {
  primaryColor: colors.blue,
  disableButton: colors.lightBlue,
  backgroundColor: colors.white,
  borderColor: colors.gray,
  textPrimary: colors.black,
  shadowColor: colors.shadowGray,
  declineButton: colors.red,
  acceptButton: colors.green,
};

const FONT_SET = {
  size: {
    xxSmall: fontsSize.tabBarText,
    xSmall: fontsSize.extraSmall,
    small: fontsSize.small,
    medium: fontsSize.medium,
    large: fontsSize.large,
    xLarge: fontsSize.extraLarge,
  },
};

const BORDER_RADIUS = {
  radius1: borders.buttonBorder,
  radius2: borders.featureRadius,
};

export const DEFAULT_DARK_THEME_ID = 'default-dark';

export const DEFAULT_DARK_THEME = {
  id: DEFAULT_DARK_THEME_ID,
  color: DEFAULT_DARK_COLOR_THEME,
  size: FONT_SET.size,
  borders: BORDER_RADIUS,
};
