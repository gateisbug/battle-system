import { useEffect, useRef } from 'react'

/**
 * 외부 클릭 시 callback 을 실행하는 hooks
 * @param onClickAway {function} ref의 외부 클릭 시 실행될 callback 함수
 * @usage
 * ```
 * export default function Select() {
 *   const [open, setOpen] = useState(false)
 *
 *   const { ref: containerRef } = useClickAway<HTMLDivElement>(() => {
 *     setOpen(false)
 *   })
 *
 *   return (
 *     <div
 *       className={className}
 *       data-open={open}
 *       ref={containerRef}
 *     >
 *       외부를 클릭하면 사라지는 UI
 *     </div>
 *   )
 * }
 * ```
 */
export default function useClickAway<T extends HTMLDivElement>(
  onClickAway: () => void,
) {
  const ref = useRef<T | null>(null)

  useEffect(() => {
    const handleClickAway = (event: MouseEvent) => {
      if (
        ref.current &&
        !(ref.current as unknown as HTMLElement).contains(event.target as Node)
      ) {
        onClickAway()
      }
    }
    document.addEventListener('mousedown', handleClickAway)
    return () => {
      document.removeEventListener('mousedown', handleClickAway)
    }
  }, [onClickAway])

  return { ref }
}
