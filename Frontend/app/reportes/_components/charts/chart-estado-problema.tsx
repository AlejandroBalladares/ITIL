"use client";

import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { EstadoProblema } from "@/models/incidentes";

import { Pie, PieChart } from "recharts";

export const ChartEstadoProblema = ({
  estado,
}: {
  estado: Record<EstadoProblema, number | undefined>;
}) => {
  const chartConfig = {
    detectado: { color: "pink", label: "Detectado" },
    analizandose: { color: "blue", label: "Analizandose" },
    asignado: { color: "purple", label: "Asignado" },
    resuelto: { color: "red", label: "Resuelto" },
    cerrado: { color: "orange", label: "Cerrado" },
    value: {
      label: "Cantidad",
    },
  } satisfies ChartConfig;

  const data = Object.entries(estado).map(([key, value]) => ({
    name: key.split(" ").join("_"),
    value,
    fill: `var(--color-${key.split(" ").join("_")})`,
  }));

  return (
    <ChartContainer
      config={chartConfig}
      className="aspect-square max-h-[250px]"
    >
      <PieChart>
        <ChartTooltip content={<ChartTooltipContent />} />
        <ChartLegend
          content={<ChartLegendContent nameKey="name" />}
          className="-translate-y-2 flex-wrap gap-2"
        />
        <Pie dataKey="value" nameKey="name" data={data} />
      </PieChart>
    </ChartContainer>
  );
};
