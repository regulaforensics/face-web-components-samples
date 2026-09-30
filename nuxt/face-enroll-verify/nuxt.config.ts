// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  compatibilityDate: "latest",
  vue: {
    compilerOptions: {
      isCustomElement: (tag) => ["face-enroll", "face-verify"].includes(tag),
    },
  },
});
