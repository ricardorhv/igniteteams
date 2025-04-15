import { Loading } from '@/components/Loading';
import { theme } from '@/theme';
import { Roboto_400Regular, Roboto_700Bold, useFonts } from '@expo-google-fonts/roboto';
import { StatusBar } from 'react-native';
import { ThemeProvider } from "styled-components/native";
import { Groups } from "./Groups";

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  })

  return (
    <ThemeProvider theme={theme}>
      <StatusBar 
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      {
        fontsLoaded 
          ? <Groups /> 
          : <Loading />
      }
    </ThemeProvider>
  );
}
