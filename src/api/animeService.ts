import { AxiosResponse } from "axios"
import $serverApi from "./instance"

//type anime??
type Anime = {
  title: string
}

export const fetchAnime = async (): Promise<AxiosResponse<Anime[]>> => {
  const response = await $serverApi.get<Anime[]>("/")
  return response
}