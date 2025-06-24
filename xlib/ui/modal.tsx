import { MouseEvent, ReactNode, useCallback, useRef } from 'react'
import { createPortal } from 'react-dom'
import styled, {css} from 'styled-components';


interface SCProps {
  $css?: ReturnType<typeof css>
}

export const Backdrop = styled.div<SCProps>`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 1100;

  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
`

export const ModalContainer = styled.section<SCProps>`
  box-sizing: border-box;

  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.1);
  background-color: var(--bg-box);

  border-radius: 12px;
  width: 520px;
  padding: 16px 16px 16px 48px;

  display: flex;
  flex-direction: column;
  gap: 64px;
`

interface ModalProps {
  onClose: () => void
  children: ReactNode
}

/**
 * @usage Modal
 * ```
 * function Page() {
 *   const [flag, setFlag] = useState(false)
 *
 *   return (
 *     <div>
 *       {flag && (
 *         <Modal
 *           onClose={() => {
 *             setFlag(false)
 *           }}
 *         >
 *           hello world
 *         </Modal>
 *       )}
 *     </div>
 *   )
 * }
 * ```
 */
export default function Modal({onClose, children}: ModalProps) {
  const backdropRef = useRef<HTMLDivElement | null>(null)

  const onClickAwayModal = useCallback((e: MouseEvent<HTMLDivElement>) => {
    if (e.target === backdropRef.current) {
      onClose()
    }
  }, [])

  return createPortal(
    <Backdrop ref={backdropRef} onClick={onClickAwayModal}>
      <ModalContainer>
        {children}
      </ModalContainer>
    </Backdrop>,
    document.body,
  )
}
