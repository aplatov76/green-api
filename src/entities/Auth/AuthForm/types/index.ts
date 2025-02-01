export type AuthSliceState = {
  idInstance: string
  apiTokenInstance: string
}

export type AuthFormData = Record<keyof AuthSliceState, string>
