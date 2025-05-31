import { Option } from "./types"

 export const summarizationOptions: Option[] = [
    { value: 'abstractive', label: 'Abstractive' },
    { value: 'chapter-wise', label: 'Chapter Wise' },
    { value: 'extractive', label: 'Extractive' },
    { value: 'bullet-points', label: 'Bullet Points' },
  ]

 export const languageOptions: Option[] = [
    { value: 'english', label: 'English' },
    { value: 'hindi', label: 'Hindi' },
    { value: 'marathi', label: 'Marathi' },
  ]