type MyExclude2<T, K> = T extends K ? never : T

type MyReadonly2<T, K extends keyof T = keyof T> = {
  readonly [k in keyof T]: T[k]
} & {
  [k in MyExclude2<keyof T, K>]: T[k]
}
