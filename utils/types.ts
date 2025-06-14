
export interface Option {
    value: string
    label: string
}

export interface OptionsProps {
    id: string
    padding: number
    label: string
    options: Option[]
    value?: string
    onChange: (value: string) => void
}

export type SummaryItem = { bookTitle: string; content: string, type: string }