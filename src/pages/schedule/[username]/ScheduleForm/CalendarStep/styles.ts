import { Box, styled, Text } from '@ignite-ui/react'

export const Container = styled(Box, {
  display: 'grid',
  margin: '$6 auto 0',
  padding: 0,
  position: 'relative',

  variants: {
    isTimePickerOpen: {
      true: {
        gridTemplateColumns: '1fr 280px',

        '@media (max-width: 900px)': {
          gridTemplateColumns: '1fr',
        },
      },

      false: {
        gridTemplateColumns: '1fr',
        width: 540,
      },
    },
  },
})

export const TimePicker = styled('div', {
  width: 280,
  padding: '$6 $6 0',
  position: 'absolute',
  top: 0,
  right: 0,
  bottom: 0,
  overflowY: 'scroll',
  borderLeft: '1px solid $gray600',
})

export const TimePickerHeader = styled(Text, {
  fontWeight: '$medium',

  span: {
    color: '$gray200',
  },
})

export const TimePickerList = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'fr',
  gap: '$2',
  marginTop: '$3',

  '@media (max-width: 900px)': {
    gridTemplateColumns: '1fr 1fr',
  },
})

export const TimePickerItem = styled('button', {
  padding: '$2 0',
  lineHeight: '$base',
  fontSize: '$sm',
  color: '$gray100',
  background: '$gray600',
  border: 0,
  borderRadius: '$sm',
  cursor: 'pointer',

  '&:last-child': {
    marginBottom: '$6',
  },

  '&:disabled': {
    opacity: 0.4,
    background: 'none',
    cursor: 'default',
  },

  '&:not(:disabled):hover': {
    background: '$gray500',
  },

  '&:not(:disabled):focus': {
    boxShadow: '0 0 0 2px $colors$gray100',
  },
})
