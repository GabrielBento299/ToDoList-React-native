import {
  Container,
  ContainerForm,
  InputStyled,
  Button,
} from "./styles";
import { Image, FlatList, Alert } from "react-native";
import Header from "../../components/Header";
import AddBImg from "../.././assets/plus.png";
import { useTheme } from "styled-components/native";
import Task from "../../components/Task";
import TaskEmpty from "../../components/TaskEmpty";
import UseTasks from "../../hooks/useTasks";
import { useState } from "react";
import Loading from "../../components/loading";
import ItemsText from "../../components/ItemsText";

export default function Home() {

  const { tasks, isLoading, hanldeCreateNewTask, handleRemoveTask, handleToggleTaskCompleted } = UseTasks();

  const { colors } = useTheme();
  const [inputValue, setInputValue] = useState("");

  const taksLength = tasks.length;
  const tasksCompleted = tasks.filter((task) => task.isCompleted).length;

  function addNewTask() {
    if(!inputValue.trim( )) {
      return Alert.alert("Tasks", "Por favor digite sua tarefa");
    }

    hanldeCreateNewTask(inputValue);
    setInputValue("");
  }
  
  return (
    <Container>
      <Header />
        <ContainerForm>
          <InputStyled
            placeholder="Adicione uma nova tarefa"
            placeholderTextColor={colors.base.gray300}
            value={inputValue}
            onChangeText={setInputValue}
            onSubmitEditing={addNewTask}
            returnKeyType="done"
          />
          <Button onPress={addNewTask}>
            <Image source={AddBImg} />
          </Button>
        </ContainerForm>

        <ItemsText
          taksLength={taksLength}
          tasksCompleted={tasksCompleted}
         />

        {isLoading ? (<Loading />) : 
        (<FlatList 
          style={{paddingHorizontal: 24}}
          data={tasks}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <Task 
              task={item}
              handleRemoveTask={() => handleRemoveTask(item.id)}
              handleToggleTaskCompleted={() => handleToggleTaskCompleted(item.id)}
            />
          )}
          ListEmptyComponent={() => (
            <TaskEmpty />  
          )}
          showsVerticalScrollIndicator={false}
        />
        )}
    </Container>
  );
}
