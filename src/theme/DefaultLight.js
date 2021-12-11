import {colors, fontsSize, borders} from '../constants/index';

const DEFAULT_LIGHT_COLOR_THEME = {
  primaryColor: colors.blue,
  disableButton: colors.lightBlue,
  backgroundColor: colors.offWhite,
  textSecondary: colors.white,
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

export const DEFAULT_LIGHT_THEME_ID = 'default-light';

export const DEFAULT_LIGHT_THEME = {
  id: DEFAULT_LIGHT_THEME_ID,
  color: DEFAULT_LIGHT_COLOR_THEME,
  size: FONT_SET.size,
  borders: BORDER_RADIUS,
};
