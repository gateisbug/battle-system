import styled from 'styled-components'

import type { LegacyRef, ChangeEventHandler } from 'react'

interface Props {
  $ref?: LegacyRef<HTMLInputElement>
  $id?: string
  $value?: string | number | readonly string[]
  $name?: string
  $disabled?: boolean
  $checked?: boolean
  $readonly?: boolean
  $onChange?: ChangeEventHandler<HTMLInputElement>
  $defaultChecked?: boolean
}
// noinspection CssUnresolvedCustomProperty,CssUnknownProperty
/**
 * @cssvar --radio-size – width, height / default: 24px;
 * @cssvar --radio-fc – color / default: inherit;
 * @param $ref {LegacyRef<HTMLInputElement>?} attr.ref
 * @param $id {string?} attr.id
 * @param $value {string | number | readonly string[]?} attr.value
 * @param $name {string?} attr.name
 * @param $disabled {boolean?} attr.disabled
 * @param $checked {boolean?} attr.checked
 * @param $readonly {boolean?} attr.readonly
 * @param $onChange {React.ChangeEventHandler<HTMLInputElement>?} attr.onChange
 * @param $defaultChecked {boolean?} attr.defaultChecked
 * @usage
 * ```
 * import Radio from '@xlib/ui/radio.tsx'
 * import styled from 'styled-components'
 *
 * const CheckBox = styled.label`
 *   display: inline-flex;
 *   flex-direction: row;
 *   align-items: center;
 *   gap: 4px;
 *
 *   color: var(--fc);
 *   --radio-fc: var(--lc-s);
 *
 *   &:has(input:checked) {
 *     color: var(--primary);
 *     --radio-fc: var(--primary);
 *   }
 *   &:has(input:disabled) {
 *     color: var(--fc-w);
 *     --radio-fc: var(--fc-w);
 *   }
 * `
 *
 * interface Props {
 *   id?: string
 *   name?: string
 *   value: string
 *   label: string
 * }
 *
 * export default function MultiSelect({ id, name, value, label }:Props) {
 *   return (
 *     <CheckBox htmlFor={id}>
 *       <Check
 *         $id={id}
 *         $name={name}
 *         $value={value}
 *       />
 *       {label}
 *     </CheckBox>
 *   )
 * }
 * ```
 */
const Check = styled.span.attrs<Props>((props) => ({
  children: (
    <>
      <input
        ref={props.$ref}
        type='radio'
        id={props.$id}
        value={props.$value}
        name={props.$name}
        disabled={props.$disabled}
        checked={props.$checked}
        defaultChecked={props.$defaultChecked}
        onChange={props.$onChange}
        style={{ position: 'absolute', opacity: 0, pointerEvents: 'none' }}
      />
      <svg focusable='false' aria-hidden='true' viewBox='0 0 24 24'>
        <path
          d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z'
          fill='currentColor'
        />
      </svg>
    </>
  ),
}))`
  display: inline-block;
  user-select: none;
  width: var(--check-size, 24px);
  height: var(--check-size, 24px);
  transition: color 150ms cubic-bezier(0.4, 0, 0.2, 1);

  color: var(--check-fc, inherit);

  input + svg > path {
    d: path(
      'M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z'
    );
  }
  input:checked + svg > path {
    d: path(
      'M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z'
    );
  }
  input[multiple]:checked + svg > path {
    d: path(
      'M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z'
    );
  }
`

export default Check
