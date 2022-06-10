import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  //config,
  styles: {
    global: () => ({
      body: {
        bg: '#000',
        color: '#fff',
        backgroundImage:"url('ION-news.jpeg')"
      }
    })
  },
})

export default theme;