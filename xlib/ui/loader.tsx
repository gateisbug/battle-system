import styled from 'styled-components'

interface LoaderProps {
  $size?: number
}

// noinspection CssUnresolvedCustomProperty
/**
 * @cssvar --loader-color – color / default: gold;
 * @param $size {number?} width, height / default: 40px;
 * @usage
 * ```
 * import { Loader, LoaderBox } from '@xlib/ui/loader.tsx'
 * import styled from 'styled-components'
 *
 * interface Props {
 *   condition: boolean
 *   size?: number
 *   fit?: boolean
 * }
 * export default function Loading({ condition, size = 40, fit = false }: Props) {
 *   return condition ? (
 *     <LoaderBox>
 *       <Loader $size={size} />
 *     </LoaderBox>
 *   ) : null
 * }
 * ```
 */
export const Loader = styled.div.attrs<LoaderProps>({
  // children: <LoaderRoot />,
  children: (
    <svg viewBox='22 22 44 44'>
      <circle cx='44' cy='44' r='20.2' fill='none' strokeWidth='3.6' />
    </svg>
  ),
})`
  display: flex;
  width: ${({ $size }) => $size ?? 40}px;
  height: ${({ $size }) => $size ?? 40}px;

  color: var(--loader-color, gold);
  animation: 1.4s linear 0s infinite normal none running rotate;

  & > svg {
    display: block;

    & > circle {
      stroke: currentColor;
      stroke-dasharray: 80px 200px;
      stroke-dashoffset: 0;
      animation: 1.4s ease-in-out 0s infinite normal none running spinning;
    }
  }

  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes spinning {
    0% {
      stroke-dasharray: 1px 200px;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 100px 200px;
      stroke-dashoffset: -15px;
    }
    100% {
      stroke-dasharray: 100px 200px;
      stroke-dashoffset: -125px;
    }
  }
`

export const LoaderBox = styled.div<LoaderProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  --loader-color: var(--primary);
`
