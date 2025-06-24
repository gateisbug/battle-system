import styled, { css } from 'styled-components'

interface Props {
  $css?: ReturnType<typeof css>
}

/**
 * @usage Input
 * ```
 * import Input from '@xlib/ui/input.ts'
 * import { css } from 'styled-components';
 *
 * const inputStyle = css`
 *   color: var(--fc);
 *   background-color: var(--white);
 *   border: 1px solid var(--lc);
 *   font-size: 14px;
 *   border-radius: 12px;
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
 *   padding: 7px 12px;
 *   width: 100%;
 * `
 *
 * function Page() {
 *   return (
 *     <Input type='text' $css={inputStyle} />
 *   )
 * }
 * ```
 */

 const Input = styled.input<Props>`
  font-family: inherit;
  font-size: inherit;
  outline: none;

  display: inline-block;
  box-sizing: border-box;
  min-width: 0;
  transition:
    color 0.2s cubic-bezier(0.4, 0, 0.2, 1),
    background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1),
    border-color 0.2s cubic-bezier(0.4, 0, 0.2, 1);

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  & {
    -moz-appearance: textfield; /* Firefox */
  }

  ${({ $css }) => $css};
`

export default Input