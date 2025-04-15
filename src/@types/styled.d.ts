import { theme } from '@/theme'
import 'styled-components/native'

type ThemeType = typeof theme

declare module 'styled-components/native' {
  export interface DefaultTheme extends ThemeType { }
}