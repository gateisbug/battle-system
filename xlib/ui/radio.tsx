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

// noinspection CssUnresolvedCustomProperty
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
 * const RadioBox = styled.label`
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
 * export default function SingleSelect({ id, name, value, label }:Props) {
 *   return (
 *     <RadioBox htmlFor={id}>
 *       <Radio
 *         $id={id}
 *         $name={name}
 *         $value={value}
 *       />
 *       {label}
 *     </RadioBox>
 *   )
 * }
 * ```
 */
const Radio = styled.span.attrs<Props>((props) => ({
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
      <svg focusable='false' aria-hidden='true' viewBox='0 0 24 24'>
        <path
          d='M8.465 8.465C9.37 7.56 10.62 7 12 7C14.76 7 17 9.24 17 12C17 13.38 16.44 14.63 15.535 15.535C14.63 16.44 13.38 17 12 17C9.24 17 7 14.76 7 12C7 10.62 7.56 9.37 8.465 8.465Z'
          fill='currentColor'
        />
      </svg>
    </>
  ),
}))`
  position: relative;
  display: inline-flex;
  user-select: none;
  width: var(--radio-size, 24px);
  height: var(--radio-size, 24px);
  transition: color 0.2s cubic-bezier(0.4, 0, 0.2, 1);

  color: var(--radio-fc, inherit);

  svg {
    flex-shrink: 0;
  }
  svg:first-of-type {
    transform: scale(1);
  }
  svg:last-of-type {
    position: absolute;
    left: 0;
    transform: scale(0);
    transition: transform 0.2s cubic-bezier(0.4, 0, 1, 1) 0ms;
  }
  input:checked ~ svg:last-of-type {
    transform: scale(1);
  }
`

export default Radio
