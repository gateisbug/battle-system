import styled, { css } from 'styled-components'

interface Props {
  $css?: ReturnType<typeof css>
}

/**
 * @usage Button
 * ```
 * import Button from '@xlib/ui/button.ts'
 * import { css } from 'styled-components';
 *
 * const buttonStyle = css`
 *   color: var(--on-primary);
 *   background-color: var(--primary);
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
 *   padding: 8px 16px;
 *   width: 100%;
 * `
 * 
 * function Page() {
 *   return (
 *     <Button $css={buttonStyle} className='b1 fwm'>로그인</Button>
 *   )
 * }
 * ```
 */
const Button = styled.button.attrs({
  type: 'button',
})<Props>`
  font-family: inherit;

  display: inline-flex;
  flex-flow: row nowrap;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;

  user-select: none;
  cursor: pointer;
  transition:
          color 0.2s cubic-bezier(0.4, 0, 0.2, 1),
          background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1),
          border-color 0.2s cubic-bezier(0.4, 0, 0.2, 1),
          outline-color 0.2s cubic-bezier(0.4, 0, 0.2, 1);

  //background-color: var(--button-bc, inherit);
  //color: var(--button-fc, inherit);
  //border-color: var(--button-lc, inherit);

  &:disabled {
    cursor: default;
  }
  
  ${({ $css }) => $css};
`

export default Button
