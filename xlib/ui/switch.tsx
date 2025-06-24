import { useState } from 'react'
import styled from 'styled-components'

const SwitchRoot = styled.span`
  display: inline-flex;
  //width: 58px;
  //height: 38px;
  width: 36px;
  height: 20px;
  overflow: hidden;
  box-sizing: border-box;
  position: relative;
  flex-shrink: 0;
  z-index: 0;
  vertical-align: middle;
  padding: 0;
`

// noinspection CssUnusedSymbol
const SwitchBase = styled.span`
  display: inline-flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;
  background-color: transparent;
  cursor: pointer;
  user-select: none;
  vertical-align: middle;
  appearance: none;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  outline: 0;
  border-width: 0;
  border-style: initial;
  border-color: initial;
  border-image: initial;
  margin: 0;
  text-decoration: none;
  //padding: 9px;
  padding: 1px;
  border-radius: 50%;
  transition:
    left 150ms cubic-bezier(0.4, 0, 0.2, 1),
    transform 150ms cubic-bezier(0.4, 0, 0.2, 1);

  color: white;
  &.checked {
    //color: rgb(144, 202, 249);
    transform: translateX(16px);
  }
`

const SwitchInput = styled.input.attrs({
  type: 'checkbox',
})`
  cursor: inherit;
  position: absolute;
  opacity: 0;
  height: 100%;
  top: 0;
  margin: 0;
  padding: 0;
  z-index: 1;
  //left: -100%;
  width: 300%;
`

const SwitchThumb = styled.span`
  box-shadow: none;
  //width: 16px;
  //height: 16px;
  width: 14px;
  height: 14px;
  margin: 2px;
  background-color: currentcolor;
  border-radius: 50%;
`

const SwitchTrack = styled.span`
  height: 100%;
  width: 100%;
  z-index: -1;
  background-color: var(--fg-s);
  opacity: 0.5;
  border-radius: 11px;
  transition:
    opacity 150ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 150ms cubic-bezier(0.4, 0, 0.2, 1);

  ${SwitchBase}.checked + & {
    opacity: 1;
    background-color: var(--primary);
  }
`

interface Props {
  defaultValue?: boolean
  onChange?: (value: boolean) => void
}

/**
 * MUI 기반 Switch 컴포넌트
 * @usage
 * ```
 * <Switch
 *   onChange={(v) => {
 *     // do somethings...
 *   }}
 * />
 * ```
 */
export default function Switch({ defaultValue, onChange }: Props) {
  const [value, setValue] = useState(defaultValue ?? false)

  return (
    <SwitchRoot>
      <SwitchBase className={value ? 'checked' : undefined}>
        <SwitchInput
          checked={value}
          onChange={() => {
            setValue(!value)
            onChange?.(!value)
          }}
        />
        <SwitchThumb />
      </SwitchBase>
      <SwitchTrack className={value ? 'checked' : undefined} />
    </SwitchRoot>
  )
}
