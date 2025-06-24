import { ChangeEvent, useCallback, useRef } from 'react'

/**
 * textarea의 높이를 자동으로 조절하기 위한 hooks
 * @param autoResize {boolean?} enable, disable 조절을 위한 값
 * @param maxHeight {number?} 최대 높이값이며 기본값은 무제한
 * @param changeHandler {React.ChangeEventHandler<HTMLTextAreaElement>} 글자 입력 시 실행하는 callback 함수
 * @usage
 * ```
 * export default function Usage() {
 *   const [inputValue, setInputValue] = useState('')
 *   const { onChange, textareaRef } = useAutoResize(true, 132, (e) => {
 *     setInputValue(e.target.value)
 *   })
 *
 *   useEffect(() => {
 *     if (!textareaRef || !textareaRef.current) return
 *     textareaRef.current.focus()
 *   }, [])
 *
 *   return (
 *     <Textarea
 *       ref={textareaRef}
 *       rows={1}
 *       onChange={onChange}
 *     />
 *   )
 * }
 * ```
 */
const useAutoResize = (
  autoResize?: boolean,
  maxHeight?: number,
  changeHandler?: (e: ChangeEvent<HTMLTextAreaElement>) => void,
) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  const onChange = useCallback(
    (e: ChangeEvent<HTMLTextAreaElement>) => {
      const textarea = textareaRef.current

      if (autoResize && textarea) {
        textarea.style.height = 'auto'

        const newHeight = maxHeight
          ? Math.min(textarea.scrollHeight, maxHeight)
          : textarea.scrollHeight

        textarea.style.height = `${newHeight}px`

        if (maxHeight === undefined) {
          textarea.style.overflowY = 'hidden'
        } else {
          textarea.style.overflowY =
            e.target.value.length > 0 && textarea.scrollHeight > maxHeight
              ? 'auto'
              : 'hidden'
        }
      }

      changeHandler?.(e)
    },
    [autoResize, maxHeight, changeHandler],
  )

  return {
    textareaRef,
    onChange,
  }
}

export default useAutoResize
