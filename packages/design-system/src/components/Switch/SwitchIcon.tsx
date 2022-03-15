/**
 * https://www.radix-ui.com/docs/primitives/components/switch
 */
import * as SwitchPrimitive from '@radix-ui/react-switch'
import * as React from 'react'

import { darkTheme, styled } from '../../stitches.config'
// import { styled } from '../../stitches.config'

import type { SwitchProps } from './Switch.types'

const StyledThumb = styled(SwitchPrimitive.Thumb, {
  backgroundColor: '$loContrast',
  borderRadius: '$pill',
  display: 'block',
  height: '$space$5',
  transform: 'translateX(-2px) ',
  transition: 'transform 100ms',
  width: '$space$5',
  willChange: 'transform',

  boxShadow: `0 2px 10px $colors$shadowDark`,
  [`.${darkTheme} &`]: {
    boxShadow: `0 2px 10px $colors$shadowLight`,
  },

  '&[data-state="checked"]': {
    transform: 'translateX(11px)',
  },
  '@media (prefers-reduced-motion: no-preference)': {
    transition: 'transform 100ms cubic-bezier(0.22, 1, 0.36, 1)',
  },
})

const StyledSwitchIcon = styled('span', {
  height: '100%',
  width: '100%',

  alignContent: 'center',
  alignItems: 'center',
  borderRadius: '$pill',
  display: 'flex',
  justifyContent: 'center',
  transition: 'transform 100ms',

  '& svg': {
    background: 'transparent',
    color: '$hiContrast',
  },
  '@motion': {
    transition: 'none',
  },
})

const StyledSwitch = styled(SwitchPrimitive.Root, {
  all: 'unset',
  boxSizing: 'border-box',
  userSelect: 'none',
  '&::before': {
    boxSizing: 'border-box',
  },
  '&::after': {
    boxSizing: 'border-box',
  },
  margin: '0',
  outline: 'none',
  WebkitTapHighlightColor: 'rgba(0,0,0,0)',

  borderRadius: '$pill',
  cursor: 'pointer',
  position: 'relative',

  boxShadow: `0 2px 10px $hiContrast`,
  // [`.${darkTheme} &`]: {
  //   boxShadow: `0 2px 10px $loContrast`,
  // },

  backgroundColor: '$hiContrast',
  '&[data-state="checked"]': {
    '&:focus': {
      boxShadow: '0 2px 10px $colors$violet8',
    },
  },
  '&:focus': {
    boxShadow: '0 2px 10px $colors$violet8',
  },

  variants: {
    size: {
      '1': {
        width: '$5',
        height: '$3',
      },
      '2': {
        width: '$7',
        height: '$5',
        [`& ${StyledThumb}`]: {
          width: 21,
          height: 21,
          transform: 'translateX(2px)',
          '&[data-state="checked"]': {
            transform: 'translateX(22px)',
          },
        },
      },
      oversized: {
        height: 18,
        width: 30,
        transform: 'translateX(2px)',
        [`& ${StyledThumb}`]: {
          height: 26,
          width: 26,
          transform: 'translateX(-6px) translateY(-4px)',
          '&[data-state="checked"]': {
            transform: 'translateX(8px) translateY(-4px)',
          },
        },
      },
      oversized2: {
        height: 24,
        width: 36,
        transform: 'translateX(2px)',
        [`& ${StyledThumb}`]: {
          height: 32,
          width: 32,
          transform: 'translateX(-12px) translateY(-4px)',
          '&[data-state="checked"]': {
            transform: 'translateX(15px) translateY(-4px)',
          },
        },
      },
    },
  },
  defaultVariants: {
    size: '2',
  },
})

interface SwitchIconProps extends SwitchProps {
  icon?: React.ReactNode
  iconOff?: React.ReactNode
  iconOn?: React.ReactNode
}

const SwitchIcon = React.forwardRef<
  React.ElementRef<typeof StyledSwitch>,
  SwitchIconProps
>(({ checked, icon, iconOff, iconOn, ...props }, forwardedRef) => {
  const iconSwitch = React.useMemo(() => {
    const hasIcon = icon || iconOn || iconOff
    const hasIconOn = Boolean(iconOn)
    const hasIconOff = Boolean(iconOff)

    if (!hasIcon) return null
    if (hasIconOn && checked) return iconOn
    if (hasIconOff && !checked) return iconOff
    return hasIcon
  }, [checked, icon, iconOff, iconOn])

  return (
    <StyledSwitch checked={checked} {...props} ref={forwardedRef}>
      <StyledThumb>
        <StyledSwitchIcon>{iconSwitch}</StyledSwitchIcon>
      </StyledThumb>
    </StyledSwitch>
  )
})

SwitchIcon.displayName = 'SwitchIcon'

export { SwitchIcon }
