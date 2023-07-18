export default defineNuxtConfig({
  devtools: { enabled: true },
  vue: {
    compilerOptions: {
      isCustomElement: (tag) => ['face-liveness'].includes(tag)
    }
  }
})
