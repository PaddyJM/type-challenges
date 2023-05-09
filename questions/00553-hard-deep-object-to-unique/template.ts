type DeepObjectToUniq<T extends object> = {
  [k in keyof T]: T[k]
}
