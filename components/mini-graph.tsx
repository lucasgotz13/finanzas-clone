interface MiniGraphProps {
  data: number[]
  trend: "up" | "down" | "stable"
}

export function MiniGraph({ data, trend }: MiniGraphProps) {
  const max = Math.max(...data)
  const min = Math.min(...data)
  const range = max - min
  
  const points = data
    .map((value, index) => {
      const x = (index / (data.length - 1)) * 100
      const y = 100 - ((value - min) / range) * 100
      return `${x},${y}`
    })
    .join(" ")

  return (
    <svg
      className="w-20 h-8"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
    >
      <polyline
        points={points}
        fill="none"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={
          trend === "up"
            ? "stroke-emerald-500"
            : trend === "down"
            ? "stroke-rose-500"
            : "stroke-gray-400"
        }
      />
    </svg>
  )
}

