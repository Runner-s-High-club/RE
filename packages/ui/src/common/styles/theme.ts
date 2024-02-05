import {DefaultTheme} from 'styled-components';
import colors from './color';
import fonts from './fonts';

export type ColorsTypes = typeof colors
export type FontTypes = typeof fonts


export const Colors: DefaultTheme = {
    colors
}
export const Fonts: DefaultTheme = {
    fonts
}