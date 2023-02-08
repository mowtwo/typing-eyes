import { inject } from "vue"

export const key = Symbol()

export interface IDialogProps {
  title: string
  duration?: number
}

export interface DialogContext {
  push: (dialog: IDialogProps) => void
}

export function useDialog() {
  const context = inject<DialogContext>(key)!
  return context
}
