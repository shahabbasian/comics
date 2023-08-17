import { defineStore, acceptHMRUpdate } from 'pinia'

export const useStoreHistory = defineStore('history', {
  state: () => ({
    histories: []
  }),
  getters: {
    getHistories: (state) => state.histories,
    notEmpty: (state) => !! state.histories.length
  },
  actions: {
    addHistory (payload: string) {
      const lowerCaseHistories = this.histories.map(history => history.toLowerCase())
      const lowerCasePayload = payload.toLowerCase()

      if (!lowerCaseHistories.includes(lowerCasePayload)) {
        this.histories.push(payload)
      }
    },
    removeHistory (index: number) {
      if (index >= 0 && index < this.histories.length) {
        this.histories.splice(index, 1)
      }
    },
    removeAllHistories () {
      this.$patch({
        histories: []
      })
    }
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useStoreHistory, import.meta.hot))
}
