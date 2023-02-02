export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.vueApp.config.errorHandler = (error, context) => {
    // If you are using an error reporting framework, you can provide a global handler through vueApp.config.errorHandler. It will receive all Vue errors, even if they are handled.
    console.log('🚀 -> defineNuxtPlugin -> context', context);
    console.log('🚀 -> defineNuxtPlugin -> error', error);
  };
});
