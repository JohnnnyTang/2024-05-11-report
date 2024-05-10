/* ./setup/shiki.ts */
import { defineShikiSetup } from '@slidev/types'

export default defineShikiSetup(() => {
  return {
    themes: {
      light: 'catppuccin-latte',
      dark: 'one-dark-pro',
    },
    transformers: [
    ],
  }
})