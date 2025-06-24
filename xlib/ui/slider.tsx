import { useRef, useState } from 'react'
import styled from 'styled-components'

// noinspection CssUnusedSymbol
const SliderBox = styled.span`
  color: var(--primary);
  height: 4px;
  width: 100%;
  padding: 12px 0;

  border-radius: 12px;
  box-sizing: content-box;
  display: inline-block;
  position: relative;
  cursor: pointer;
  touch-action: none;
  -webkit-tap-highlight-color: transparent;

  &[data-disabled='true'] {
    color: var(--lc);
  }
`

const SliderRail = styled.span`
  display: block;
  position: absolute;
  border-radius: inherit;
  background-color: currentColor;
  opacity: 0.38;
  width: 100%;
  height: inherit;
  top: 50%;
  transform: translateY(-50%);
`

const SliderTrack = styled.span`
  display: block;
  position: absolute;
  background-color: currentColor;
  height: inherit;
  top: 50%;
  transform: translateY(-50%);
  border-radius: inherit;
  border-width: 1px;
  border-style: solid;
  border-color: currentColor;
  border-image: initial;
`

const SliderThumb = styled.span`
  width: 20px;
  height: 20px;

  border: 3px solid currentColor;

  position: absolute;
  box-sizing: border-box;
  background-color: var(--white);
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  outline: 0;
`

const SliderRoot = styled.input.attrs({
  type: 'range',
})`
  border: none;
  clip: rect(0, 0, 0, 0);
  height: 100%;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 100%;
  direction: ltr;
`

type States<T> = [T, (state: T | ((prev: T) => T)) => void]

/**
 * @usage Slider
 * ```
 * function Page() {
 *   const [value, setValue] = useState(50)
 *   return (
 *     <div>
 *       <Slider
 *         min={0}
 *         max={100}
 *         states={[value, setValue]}
 *         step={1}
 *       />
 *     </div>
 *   )
 * }
 * ```
 */
export default function Slider(sliderProps: {
  max?: number
  min?: number
  defaultValue?: number
  step?: number
  states?: States<number>
  disabled?: boolean
  toFix?: number
}) {
  const {
    states,
    defaultValue,
    max = 100,
    min = 0,
    step = 1,
    disabled,
    toFix,
  } = sliderProps

  const [value, setValue] = states ?? useState(defaultValue ?? 0)
  const sliderRef = useRef<HTMLSpanElement>(null)
  const isDraggingRef = useRef(false)

  const updateValue = (clientX: number) => {
    const slider = sliderRef.current
    if (!slider) return

    const rect = slider.getBoundingClientRect()
    const percent = Math.min(Math.max(0, (clientX - rect.left) / rect.width), 1)
    let newValue = Math.round((percent * (max - min)) / step) * step + min

    if (toFix) {
      newValue = Number(newValue.toFixed(toFix))
    }
    setValue(newValue)
  }

  const handleMouseMove = (event: MouseEvent) => {
    if (!isDraggingRef.current || disabled) return
    updateValue(event.clientX)
  }

  const handleMouseUp = () => {
    isDraggingRef.current = false
    document.removeEventListener('mousemove', handleMouseMove)
    document.removeEventListener('mouseup', handleMouseUp)
  }

  const handleMouseDown = (event: React.MouseEvent) => {
    if (disabled) return
    isDraggingRef.current = true
    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseup', handleMouseUp)
    updateValue(event.clientX)
  }

  const getPercent = (val: number) => ((val - min) / (max - min)) * 100

  const percent = getPercent(value)

  return (
    <SliderBox
      data-disabled={disabled}
      ref={sliderRef}
      onMouseDown={handleMouseDown}
    >
      <SliderRail />
      <SliderTrack style={{ left: '0%', width: `${percent}%` }} />
      <SliderThumb style={{ left: `${percent}%` }}>
        <SliderRoot
          value={value}
          min={min}
          max={max}
          step={step}
          disabled={disabled}
          onChange={(e) => {
            const newValue = Number(e.target.value)
            setValue(newValue)
          }}
        />
      </SliderThumb>
    </SliderBox>
  )
}
