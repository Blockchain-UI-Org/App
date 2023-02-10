import type { ChartData } from "chart.js";
import { Typography } from "components/typography";
import { useEffect, useMemo, useState } from "react";
import { Doughnut } from "react-chartjs-2";
import styled from "styled-components";
import { useTheme } from "theme";
import { createBasicDoughnutOptions } from "utils/createBasicDoughnutOptions";

const PrimaryColor = "#0A8270";

const Wrapper = styled.div<{ maxWidth?: number }>`
  position: relative;
  z-index: 1;
  max-width: ${(props) => props.maxWidth || 220}px;
`;
const InfoWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  background-color: #fff;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  z-index: -1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transform: translate(-50%, -50%);
`;

const SubtitleWrapper = styled.div`
  display: flex;
  font-size: 12px;
  align-items: center;
`;

export const DoughnutChart = ({
  data: chartData,
  info,
  maxWidth,
}: {
  data: { label: string; bgColor: string; value: number }[];
  maxWidth?: number;
  info?: { title?: string; subtitle?: React.ReactElement };
}) => {
  const theme = useTheme();

  const [ChartLib, setChartLib] = useState<typeof import("chart.js") | null>(null);

  useEffect(() => {
    import("chart.js").then((lib) => setChartLib(lib));
  }, []);

  useMemo(() => {
    // Import Required Utils
    if (ChartLib) {
      const { Chart, ArcElement, Tooltip } = ChartLib;
      Chart.register(ArcElement);
      Chart.register(Tooltip);
    }
  }, [ChartLib]);
  const options = useMemo(() => {
    return createBasicDoughnutOptions(theme.typography.common.fontFamily as string, PrimaryColor);
  }, [theme.typography.common.fontFamily]);

  const doughnutMarkup = useMemo(() => {
    if(!ChartLib){
      return null;
    }
    const data: ChartData<"doughnut", number[], unknown> = {
      datasets: [
        {
          data: chartData.map((item) => item.value),
          backgroundColor: chartData.map((item) => item.bgColor),
        },
      ],
      labels: chartData.map((item) => item.label),
    };
    return <Doughnut data={data} options={options} />;
  }, [chartData, ChartLib]);

  return (
    <Wrapper maxWidth={maxWidth}>
      {(info?.title || info?.subtitle) && (
        <InfoWrapper>
          {info.title && (
            <Typography style={{ marginBottom: 0 }} fontSize={24}>
              {info.title}
            </Typography>
          )}
          {info.subtitle && <SubtitleWrapper>{info.subtitle}</SubtitleWrapper>}
        </InfoWrapper>
      )}
      {doughnutMarkup}
    </Wrapper>
  );
};
