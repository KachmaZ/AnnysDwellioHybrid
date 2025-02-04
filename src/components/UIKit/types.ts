import type { ButtonHTMLAttributes, InputHTMLAttributes } from 'vue'

type UIVariant = 'primary' | 'secondary' | 'tertiary'

interface UIButtonProps extends /* @vue-ignore */ ButtonHTMLAttributes {
  variant: UIVariant
  icon?: string
}

interface UIChoiceChipProps extends /* @vue-ignore */ InputHTMLAttributes {
  variant: UIVariant
  checked: boolean
  id: string
}

interface UIInputProps extends /* @vue-ignore */ InputHTMLAttributes {
  variant: 'search' | 'price' | 'text'
  type?: string
  placeholder?: string
}

interface UIButtonMarkProps extends /* @vue-ignore */ ButtonHTMLAttributes {
  markValue?: number
}

interface UIFilterChipProps {
  checked: boolean
}

// interface UIButtonSwitchProps extends /* @vue-ignore */ ButtonHTMLAttributes {}

export type {
  UIButtonProps,
  UIChoiceChipProps,
  UIInputProps,
  UIButtonMarkProps,
  // UIButtonSwitchProps,
  UIFilterChipProps,
}
