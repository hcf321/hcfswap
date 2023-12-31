import { Dispatch, SetStateAction } from 'react'
import { ResponsiveContainer, XAxis, YAxis, Tooltip, AreaChart, Area } from 'recharts'
import useTheme from 'hooks/useTheme'
import { LineChartLoader } from 'views/Info/components/ChartLoaders'
import { PairDataTimeWindowEnum } from 'state/swap/types'
import { useTranslation } from '@pancakeswap/localization'

export type SwapLineChartProps = {
  data: any[]
  setHoverValue: Dispatch<SetStateAction<number | undefined>> // used for value on hover
  setHoverDate: Dispatch<SetStateAction<string | undefined>> // used for label of value
  isChangePositive: boolean
  timeWindow: PairDataTimeWindowEnum
} & React.HTMLAttributes<HTMLDivElement>

const getChartColors = ({ isChangePositive }) => {
  return isChangePositive
    ? { gradient1: '#a93eeb', gradient2: '#a93eeb', stroke: '#a93eeb' }
    : { gradient1: '#a93eeb', gradient2: '#a93eeb', stroke: '#a93eeb' }
}

const dateFormattingByTimewindow: Record<PairDataTimeWindowEnum, Intl.DateTimeFormatOptions> = {
  [PairDataTimeWindowEnum.DAY]: {
    hour: '2-digit',
    minute: '2-digit',
  },
  [PairDataTimeWindowEnum.WEEK]: {
    month: 'short',
    day: '2-digit',
  },
  [PairDataTimeWindowEnum.MONTH]: {
    month: 'short',
    day: '2-digit',
  },
  [PairDataTimeWindowEnum.YEAR]: {
    month: 'short',
    day: '2-digit',
  },
}

/**
 * Note: remember that it needs to be mounted inside the container with fixed height
 */
const LineChart = ({ data, setHoverValue, setHoverDate, isChangePositive, timeWindow }: SwapLineChartProps) => {
  const {
    currentLanguage: { locale },
  } = useTranslation()
  const { theme } = useTheme()
  const colors = getChartColors({ isChangePositive })
  const dateFormatting = dateFormattingByTimewindow[timeWindow]

  if (!data || data.length === 0) {
    return <LineChartLoader />
  }
  return (
    <ResponsiveContainer>
      <AreaChart
        data={data}
        margin={{
          top: 5,
          right: 0,
          left: 0,
          bottom: 5,
        }}
        onMouseLeave={() => {
          if (setHoverDate) setHoverDate(undefined)
          if (setHoverValue) setHoverValue(undefined)
        }}
      >
        <defs>
          <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={colors.gradient1}  />
            <stop offset="100%" stopColor={colors.gradient2}  />
          </linearGradient>
        </defs>
        <XAxis
          dataKey="time"
          axisLine={false}
          tickLine={false}
          tickFormatter={(time) => time.toLocaleString(locale, dateFormatting)}
          minTickGap={8}
          stroke='#fff'
          fontSize={10}
        />
        <YAxis dataKey="value" axisLine={false} tickLine={false} domain={['auto', 'auto']} hide />
        <Tooltip
          cursor={{ stroke: theme.colors.textDisabled }}
          contentStyle={{ display: 'none' }}
          formatter={(tooltipValue, name, props) => {
            setHoverValue(props.payload.value)
            setHoverDate(
              props.payload.time.toLocaleString(locale, {
                year: 'numeric',
                month: 'short',
                day: '2-digit',
                hour: '2-digit',
                minute: '2-digit',
              }),
            )
            return null
          }}
        />
        <Area dataKey="value" type="natural" stroke={colors.stroke} fill="url(#gradient)" fillOpacity="1" strokeWidth={0} />
      </AreaChart>
    </ResponsiveContainer>
  )
}

export default LineChart
