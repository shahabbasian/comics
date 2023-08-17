import { defineStore, acceptHMRUpdate } from 'pinia'

export const useStoreGuard = defineStore('guard', {
  state: () => ({
    permission: false
  }),
  getters: {
    getPermission: (state) => !! state.permission
  },
  actions: {
    togglePermission () {
      this.$patch({
        permission: !this.permission
      })
    }
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useStoreGuard, import.meta.hot))
}
