import React from 'react';
import { StyledChartHeader, StyledTitleWrapper, StyledTitleUnderline } from './style';
import { Title } from 'components/atoms';
import { useRecoilState } from 'recoil';
import { selectedChartState } from 'recoil/chart';

const ChartHeader: React.FC = () => {
  const [selectedChart, setSelectedChart] = useRecoilState(selectedChartState);
  const handleOnClickChartTitle = (event: React.MouseEvent<HTMLElement>) => {
    const type = event.currentTarget.dataset.type;
    if (type) setSelectedChart(type);
  };
  return (
    <StyledChartHeader>
      <StyledTitleWrapper onClick={handleOnClickChartTitle} data-type={'burndown'}>
        <Title color={'black'} cursor={'pointer'}>
          {'번다운 차트'}
        </Title>
        {selectedChart === 'burndown' ? <StyledTitleUnderline /> : null}
      </StyledTitleWrapper>
      <StyledTitleWrapper onClick={handleOnClickChartTitle} data-type={'velocity'}>
        <Title color={'black'} cursor={'pointer'}>
          {'속도'}
        </Title>
        {selectedChart === 'velocity' ? <StyledTitleUnderline /> : null}
      </StyledTitleWrapper>
      <StyledTitleWrapper onClick={handleOnClickChartTitle} data-type={'task-ratio'}>
        <Title color={'black'} cursor={'pointer'}>
          {'담당한 일 비율'}
        </Title>
        {selectedChart === 'task-ratio' ? <StyledTitleUnderline /> : null}
      </StyledTitleWrapper>
      <StyledTitleWrapper onClick={handleOnClickChartTitle} data-type={'priority'}>
        <Title color={'black'} cursor={'pointer'}>
          {'우선 순위 별 완료도'}
        </Title>
        {selectedChart === 'priority' ? <StyledTitleUnderline /> : null}
      </StyledTitleWrapper>
      <StyledTitleWrapper onClick={handleOnClickChartTitle} data-type={'finished-task'}>
        <Title color={'black'} cursor={'pointer'}>
          {'완료한 태스크 수'}
        </Title>
        {selectedChart === 'finished-task' ? <StyledTitleUnderline /> : null}
      </StyledTitleWrapper>
    </StyledChartHeader>
  );
};

export default ChartHeader;
