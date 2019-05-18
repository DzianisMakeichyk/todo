import { Clipboard } from '../../util/icons';

import {
  NoTasksWrapper,
  NoTasksHeader,
  NoTasksDescription,
} from './styles';

const NoTasks = () => <NoTasksWrapper>
  <Clipboard />
  <NoTasksHeader>
    No tasks
  </NoTasksHeader>
  <NoTasksDescription>
    You have no task to do.
  </NoTasksDescription>

</NoTasksWrapper>;

export default NoTasks;
