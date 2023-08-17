export const useCardData = async (nameForChache: string, url: string) => {
  const page: number = (useRoute()?.query.page ? parseInt(useRoute()?.query.page) : 1)
  const limit = ref(20)
  const offset = ref(page ? ((page - 1) * limit.value) : 0)
  const { data, pending, refresh } = await useAsyncData(`${nameForChache}-${offset.value}`, () => useApiRequest(url, { offset: offset.value, limit: limit.value }), {
    transform: (data: object) => {
      return <object>{
        pagination: {
          offset:<number> data.data.offset,
          limit:<number> data.data.limit,
          total:<number> data.data.total,
          count:<number> data.data.count
        },
        results:<object> data.data.results.map((item: object) => {
          return {
            id: item.id,
            name: item.name,
            description: item.description,
            image: `${item.thumbnail.path}.${item.thumbnail.extension}`
          }
        })
      }
    }
  })

  const onClickHandler = (page: number) => {
    offset.value = (page - 1) * limit.value
    useRouter().push({ query: { page } })
    refresh()
  }

  return {
    data, pending, onClickHandler
  }
}
