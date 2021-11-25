import { LayerTask, LayerScheduleDayWrapper } from './style';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { selectedNodeIdState } from 'recoil/node';
import { IMindNode } from 'types/mindmap';
import { UserIcon } from 'components/atoms';
import { userListState } from 'recoil/project';

interface IProps {
  dayDate?: { year: number; month: number; date: number };
  tasks?: IMindNode[];
  setHoveredNode?: React.Dispatch<React.SetStateAction<IMindNode | null>>;
}

const LayerScheduleDay: React.FC<IProps> = ({ dayDate, tasks = [], setHoveredNode = () => {} }) => {
  const setSelectedNodeId = useSetRecoilState(selectedNodeIdState);
  const userList = useRecoilValue(userListState);

  if (!dayDate) {
    return <LayerScheduleDayWrapper></LayerScheduleDayWrapper>;
  }

  const handleClickTask = (e: React.MouseEvent, id: number) => {
    e.stopPropagation();
    setSelectedNodeId(id);
  };

  const handleHoverTask = (task: IMindNode) => setHoveredNode(task);
  const handleLeaveTask = () => setHoveredNode(null);

  const today = new Date();

  return (
    <LayerScheduleDayWrapper>
      {tasks.map((task) => {
        const dueAt = task.dueDate ? new Date(task.dueDate) : null;
        const endedAt = task.endDate ? new Date(task.endDate) : null;

        return (
          <LayerTask
            key={task.nodeId}
            onClick={(e) => handleClickTask(e, task.nodeId)}
            onMouseEnter={() => handleHoverTask(task)}
            onMouseLeave={() => handleLeaveTask()}
            delayed={dueAt && !endedAt && today > dueAt}
            ended={dueAt && endedAt && true}
          >
            {task.assigneeId ? <UserIcon user={userList[task.assigneeId]} adaptive={true} /> : ''}
            <span>{`#${task.nodeId} ${task.content}`}</span>
          </LayerTask>
        );
      })}
    </LayerScheduleDayWrapper>
  );
};

export default LayerScheduleDay;
