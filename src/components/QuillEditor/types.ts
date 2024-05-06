export interface Editor {
  submitRef: any
  setValue: (val: string) => void
  getValue?: (val: string) => void
  position: 'top' | 'bottom'
  content?: string
  uploadFile?: (file: File) => Promise<string | void>
  maxLetter?: number
  maxPictureNum?: number
  placeholder?: string
  toolbar?: boolean
}
