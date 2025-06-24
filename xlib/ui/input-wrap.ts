import styled, {css} from 'styled-components';

interface Props {
  $css?: ReturnType<typeof css>
}

/**
 * @usage InputWrap
 * ```
 * import InputWrap from '@xlib/ui/input-wrap.ts'
 * import Input from '@xlib/ui/input.ts'
 * import { css } from 'styled-components';
 *
 * const inputStyle = css`
 *   color: var(--fc);
 *   font-size: 14px;
 *
 *   &:disabled {
 *     color: var(--fc-w);
 *     background-color: var(--lc-w);
 *   }
 *   &:read-only {
 *     color: var(--fc);
 *     background-color: var(--lc-w);
 *   }
 *
 *   width: 100%;
 * `
 * const inputWrapStyle = css`
 *   background-color: var(--white);
 *   border-radius: 12px;
 *   border: 1px solid var(--lc);
 *
 *   &:focus-within {
 *     border-color: var(--primary);
 *   }
 *   &:has(input:invalid) {
 *     border-color: var(--error);
 *   }
 *
 *   padding: 7px 12px;
 * `
 *
 * function Page() {
 *   return (
 *     <InputWrap $css={inputWrapStyle}>
 *       <Input type='text' $css={inputStyle} />
 *     </InputWrap>
 *   )
 * }
 * ```
 */
export const InputWrap = styled.div<Props>`
  position: relative;
  border: 1px solid var(--lc-w);
  width: 100%;

  &:focus-within {
    border-color: #1d1e3c;
  }

  ${({ $css }) => $css};
`

export default InputWrap