import React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'

import { colors } from 'src/theme/colors'

export const Arrow = (props: SvgProps) => {
  return (
    <Svg width={9} height={16} fill="none" {...props}>
      <Path
        d="M1.52 15.22a.745.745 0 00.54-.224l6.583-6.433a.775.775 0 00.24-.556.735.735 0 00-.24-.556L2.068 1.026a.753.753 0 00-.547-.233.744.744 0 00-.756.764c0 .2.083.399.216.54l6.043 5.91-6.043 5.91a.788.788 0 00-.216.54c0 .431.324.763.756.763z"
        fill={colors.gray[6]}
      />
    </Svg>
  )
}
