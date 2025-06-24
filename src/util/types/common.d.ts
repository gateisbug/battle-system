type SetState<T> = (state: T | ((prev: T) => T)) => void

type States<T> = [T, SetState<T>]

type LabelValue<V, L = string> = {
  label: L
  value: V
  disabled?: boolean
}

interface IconProps {
  size?: number | string
  color?: string
}
