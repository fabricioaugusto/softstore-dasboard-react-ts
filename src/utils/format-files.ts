import { uuid } from 'uuidv4'

export type AcceptedFile = {id: number, file: File, formattedSize: string, preview: string}

const formatBytes = (bytes: number, decimals = 2) => {
  if (bytes === 0) return '0 Bytes'
  const k = 1024
  const dm = decimals < 0 ? 0 : decimals
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']

  const i = Math.floor(Math.log(bytes) / Math.log(k))
  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i]
}

export const getAcceptedFiles = (files: File[]): AcceptedFile[] => {
  const arr: AcceptedFile[] = []
  let index = 0
  for (const file of files) {
    const id = Math.floor((Math.random() * 10000) + 1)
    arr.push({ id: Number(`${index}${id}`), file, preview: URL.createObjectURL(file), formattedSize: formatBytes(file.size) })
    index++
  }
  return arr
}

export const generateFileName = (file: File): string => {
  const ext = file.name.substr(file.name.length - 3)
  return uuid() + '.' + ext
}
