import React from 'react'
import Svg, { Path } from 'react-native-svg'

import { colors } from 'src/theme/colors'

interface Props {
  focused: boolean
}

export const LocationIcon = ({ focused }: Props) => {
  return (
    <Svg width={27} height={19} fill="none">
      <Path
        d="M21.702 10.816c3.066 2.46 4.771 4.635 4.183 5.653-.93 1.607-7.228-.285-14.068-4.226C4.977 8.3.187 3.804 1.115 2.198c.581-1.004 3.26-.642 6.856.734"
        stroke={focused ? colors.indigo : colors.inactive}
        strokeWidth={2}
        strokeMiterlimit={10}
      />
      <Path
        d="M13.5 17.666A8.333 8.333 0 1013.5 1a8.333 8.333 0 000 16.666z"
        stroke={focused ? colors.indigo : colors.inactive}
        strokeWidth={2}
        strokeMiterlimit={10}
      />
    </Svg>
  )
}
