export type Event = {
  target: { name: string; value: string }
}

export type PreventDefault = {
  preventDefault: () => void
}
