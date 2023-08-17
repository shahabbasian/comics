export default defineNuxtRouteMiddleware(() => {
  if (! useStoreGuard().getPermission) {
    return navigateTo('/')
  }
})
