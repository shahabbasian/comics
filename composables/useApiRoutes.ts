export const getCharacters = () => '/v1/public/characters'
export const getComics = (id: string) => `/v1/public/characters/${id}/comics`
export const getSeries = (id: string) => `/v1/public/characters/${id}/series`
