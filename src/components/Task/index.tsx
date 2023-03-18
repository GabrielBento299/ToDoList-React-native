import {
  TasksContainer,
  ButtonActions,
  ButtonToggle,
  Image,
  TextTask,
} from "./styles";
import LayerImg from "../../assets/Layer.png";
import CheckImg from "../../assets/check.png";
import TrashImg from "../../assets/Vector.png";
import { ITasks } from "../../hooks/useTasks";

interface ITakProps {
  task: ITasks;
  handleRemoveTask: () => void;
  handleToggleTaskCompleted: () => void;
}

export default function Task({ task, handleRemoveTask, handleToggleTaskCompleted }: ITakProps) {
  return (
    <TasksContainer>
      <ButtonActions>
        <ButtonToggle onPress={handleToggleTaskCompleted}>
          <Image source={task.isCompleted ? CheckImg : LayerImg} />
        </ButtonToggle>

        <TextTask>{task.title}</TextTask>
      </ButtonActions>

      <ButtonToggle onPress={handleRemoveTask}>
        <Image source={TrashImg} />
      </ButtonToggle>
    </TasksContainer>
  );
}
