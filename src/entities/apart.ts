export interface ApartType {
  id: number
  title: string
  apartType: string
  price: number
  deposit: number
  agentComission: number
  metro: string
  metroDistance: number
  walkingDistance: boolean
  rooms: number
  square: number
  address: string
  city: string
  furniture: boolean
  floor: number
  renovation: string
  petsAndKids: string[]
  goods: string[]
  houseHeight: number
  houseBuildYear: number
  houseEnvironment: string[]
  images: string[]
  longitude: number
  latitude: number
}
