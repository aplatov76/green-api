import { baseApiUrl } from '../api/api'

const fourFormat = '2-digit'
const minuteFormat = '2-digit'

export function capitalizeFirstLetterStrict<T extends string>(str: T): Capitalize<T> {
  return (str.charAt(0).toUpperCase() + str?.slice(1)) as Capitalize<T>
}

export const timeStampToTime = (unix: number) => {
  const date = new Date(unix * 1000)
  return `${date.toLocaleTimeString('ru-RU', { hour: fourFormat, minute: minuteFormat })}`
}

export const getCurrentTime = () => {
  const date = new Date()
  return `${date.toLocaleTimeString('ru-RU', { hour: fourFormat, minute: minuteFormat })}`
}

export const getChatId = (phoneNumber: string) => {
  return `${phoneNumber}@c.us`
}

export const getUrl = (idInstance: string) => {
  const apiIdInstance = idInstance.substring(0, 4)

  return `${apiIdInstance}${baseApiUrl}/`
}
