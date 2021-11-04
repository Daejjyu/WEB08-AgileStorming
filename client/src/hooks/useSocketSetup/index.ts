import { useRecoilState } from 'recoil';
import { mindmapState, getNextMapState } from 'recoil/mindmap';
import { io } from 'socket.io-client';

const useSocketSetup = () => {
  const socket = io(`${process.env.REACT_APP_SERVER}`);
  const [mindmap, setMindMap] = useRecoilState(mindmapState);
  socket.on('updateHistory', (history) => {
    const { type, sideEffect } = history;
    const nextState = getNextMapState(mindmap);
    switch (type) {
      case 'create':
        const [newMindNodeId, newMindNode] = [sideEffect[0].id, sideEffect[0]];
        nextState.mindNodes.set(newMindNodeId, newMindNode);
        setMindMap(nextState);
        break;
      case 'change':
        break;
      case 'delete':
        break;
      default:
        break;
    }
  });
};
export default useSocketSetup;

// 소켓 로직을 이곳에 분리하고 init하면 좋겠다.
// mindmap 변경은 서버에서 오는 소켓 이벤트에 의해서만 일어난다.
// 그 외 경우 mindmap은 readonly로 사용한다.
// 고민: mindmap, kanban, calendar에서 공통적으로 사용하면서
// 최초 1회만 실행되게하려면 어떻게 해야할까?