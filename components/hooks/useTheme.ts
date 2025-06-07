import { useColorScheme } from 'nativewind';

export function useTheme() {
  const { colorScheme, setColorScheme } = useColorScheme();

  const toggleColorMode = () => {
    setColorScheme(colorScheme === 'dark' ? 'light' : 'dark');
  };

  return {
    colorMode: colorScheme || 'light',
    toggleColorMode,
  };
}
