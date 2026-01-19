import { LegendProps } from "recharts";

const CustomLegend: React.FC<LegendProps> = ({ payload }) => {
  if (!payload) return null;

  return (
    <div className="flex flex-col gap-3">
      {payload.map((item) => {
        const legendItem = item as unknown as {
          value: string;
          color: string;
          payload: { percent: number };
        };

        return (
          <div
            key={legendItem.value}
            className="flex items-center justify-between gap-6 text-sm pr-8"
          >
            {/* Left: icon + label */}
            <div className="flex items-center gap-2">
              <span
                className="h-3 w-3 rounded-sm"
                style={{ backgroundColor: legendItem.color }}
              />
              <span className="text-zinc-300">{legendItem.value}</span>
            </div>

            {/* Right: percentage */}
            <span className="text-zinc-100 font-medium">
              {legendItem.payload.percent * 100}%
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default CustomLegend;
