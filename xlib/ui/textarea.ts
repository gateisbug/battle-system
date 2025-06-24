import styled, { css } from 'styled-components'

interface Props {
  $css?: ReturnType<typeof css>
}

/**
 * @usage Textarea
 * ```
 * import Textarea from '@xlib/ui/textarea.ts'
 * import { css } from 'styled-components';
 *
 * const textareaStyle = css`
 *   color: var(--fc);
 *   background-color: var(--white);
 *   border: 1px solid var(--lc);
 *   font-size: 14px;
 *   border-radius: 12px;
 *   max-width: 100%
 *   min-height: 48px;
 *   overflow: auto;
 *
 *   &::-webkit-scrollbar {
 *     width: 0;
 *     height: 4px;
 *   }
 *
 *   &:disabled {
 *     color: var(--fc-w);
 *     background-color: var(--lc-w);
 *   }
 *   &:focus {
 *     border-color: var(--primary);
 *   }
 *
 *   padding: 7px 12px;
 *   width: 100%;
 * `
 *
 * function Page() {
 *   const [inputValue, setInputValue] = useState('')
 *   const { onChange, textareaRef } = useAutoResize(true, 132, (e) => {
 *     setInputValue(e.target.value)
 *   })
 *
 *   return (
 *     <Textarea
 *       ref={textareaRef}
 *       rows={1}
 *       value={inputValue}
 *       onChange={onChange}
 *       $css={textareaStyle}
 *     />
 *   )
 * }
 * ```
 */
const Textarea = styled.textarea<Props>`
  font-family: inherit;
  font-size: inherit;

  width: 100%;
  display: inline-block;
  box-sizing: border-box;
  resize: none;
  transition:
    color 0.2s cubic-bezier(0.4, 0, 0.2, 1),
    background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1),
    border-color 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  min-width: 0;

  &:focus {
    outline: none;
  }

  ${({ $css }) => $css};
`

export default Textarea
