import { ColorMode, extendTheme, ThemeConfig } from '@chakra-ui/react';

let colorMode = "";

if (typeof window !== 'undefined') {
  colorMode = window.localStorage.getItem("chakra-ui-color-mode") || "";
}

const config: ThemeConfig = {
  initialColorMode: colorMode as ColorMode,
  useSystemColorMode: false,
}

const theme = extendTheme({
  config,
  colors: {
    light: {
      background: '#F5F5F5',
      textPrimary: '#333333',
      textSecondary: '#666666',
      accent: '#9F7AEA',
      cardBackground: '#FFFFFF',
      border: '#E2E8F0',
      graphLine: '#4299E1',
      button: "#4299e1",
      hButton: '#2b6cb0',
      footer: "#00B5D8",
    },
    dark: {
      background: '#1A202C',
      textPrimary: '#E2E8F0',
      textSecondary: '#A0AEC0',
      accent: '#63B3ED',
      cardBackground: '#2D3748',
      border: '#4A5568',
      graphLine: '#2B6CB0',
      button: "#805AD5",
      hButton: '#553C9A',
      footer: "#553C9A",
    },
  },
  styles: {
    global: (props: any) => ({
      body: {
        bg: props.colorMode === 'dark' ? 'dark.background' : 'light.background',
        color: props.colorMode === 'dark' ? 'dark.textPrimary' : 'light.textPrimary',
      },
      borderColor: props.colorMode === 'dark' ? 'dark.border' : 'light.border',
    }),
  },
});

export default theme;