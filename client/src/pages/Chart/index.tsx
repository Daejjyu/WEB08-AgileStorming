import styled from '@emotion/styled';
import { PriorityChart, DoneTaskChart } from 'components/organisms';
import CommonLayout from 'components/templates/CommonLayout';

const CenterContainer = styled.div`
  ${({ theme }) => theme.absoluteCenter};
  ${({ theme }) => theme.flex.columnCenter};
  width: 80vw;
  height: 80vh;
  margin-top: 5vh;
  gap: 5%;
`;

const Header = styled.div`
  background-color: ${({ theme }) => theme.color.white};
  border-radius: 0.5rem;
  ${({ theme }) => theme.flex.rowCenter};
  ${({ theme }) => theme.shadow};
  width: 100%;
  height: 10%;
`;

const ChartWrapper = styled.div`
  background-color: ${({ theme }) => theme.color.white};
  border-radius: 0.5rem;
  ${({ theme }) => theme.shadow};
  width: 100%;
  height: 85%;
`;

const Chart = () => {
  return (
    <CommonLayout>
      <CenterContainer>
        <Header>헤더</Header>
        <ChartWrapper>
          <DoneTaskChart />
          <PriorityChart />
        </ChartWrapper>
      </CenterContainer>
    </CommonLayout>
  );
};

export default Chart;
