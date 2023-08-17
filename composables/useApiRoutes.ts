export const getCharacters = (id: number|null = null) => `/v1/public/characters${id ? '/' + id : ''}`
export const getComics = (id: number) => `/v1/public/characters/${id}/comics`
export const getSeries = (id: number) => `/v1/public/characters/${id}/series`
