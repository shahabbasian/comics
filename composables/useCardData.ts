export const useCardData = async (nameForChache: string, url: string) => {
  const route = useRoute()
  const router = useRouter()

  const page = ref(route?.query?.page ? parseInt(route.query.page) : 1)
  const nameForSearch = ref(route?.query?.search || null)
  const limit = ref(20)
  const offset = ref(page.value ? ((page.value - 1) * limit.value) : 0)

  const { data, pending, refresh } = await useAsyncData(`${nameForChache}-${offset.value}`, () => useApiRequest(url, (nameForSearch.value ? { offset: offset.value, limit: limit.value, name: nameForSearch.value } : { offset: offset.value, limit: limit.value })), {
    transform: (data: object) => {
      return <object>{
        pagination: {
          offset:<number> data?.data?.offset || 0,
          limit:<number> data?.data?.limit || 0,
          total:<number> data?.data?.total || 0,
          count:<number> data?.data?.count || 0
        },
        results: data?.data?.results?.map((item: any) => ({
          id: item.id,
          name: item.name,
          description: item.description,
          image: `${item.thumbnail.path}.${item.thumbnail.extension}`
        })) || []
      }
    }
  })

  const onPageHandler = (page: number) => {
    offset.value = (page - 1) * limit.value
    router.push({ query: { page } })
    refresh()
  }

  const onSearchHandler = (name: string) => {
    nameForSearch.value = name
    if (nameForSearch.value) {
      router.push({ query: { search: nameForSearch.value } })
    } else {
      router.push({ query: {} })
    }
    refresh()
  }

  return {
    data, pending, onPageHandler, onSearchHandler
  }
}
