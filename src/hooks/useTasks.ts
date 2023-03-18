import { useEffect, useState } from "react";
import { Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Toast from "react-native-toast-message";
export interface ITasks {
  id: string;
  title: string;
  isCompleted: boolean;
}

export default function UseTasks() {
  const [tasks, setTasks] = useState<ITasks[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const LOCAL_STORAGE_KEY = "@task";

  async function hanldeCreateNewTask(inputValue: string) {
    try {
      setIsLoading(true);
      const newTasks = {
        id: Math.random().toString(),
        title: inputValue,
        isCompleted: false,
      };

      const response = await AsyncStorage.getItem(LOCAL_STORAGE_KEY);
      const previusData = response ? JSON.parse(response) : [];

      const data = [...previusData, newTasks];

      await AsyncStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data));

      setTasks(data);

      Toast.show({
        type: "success",
        text1: "Tarefa cadastrado com sucesso! 😀",
      });
    } catch (err) {
    } finally {
      setIsLoading(false);
    }
  }

  async function handleToggleTaskCompleted(taskId: string) {
    const response = await AsyncStorage.getItem(LOCAL_STORAGE_KEY);
    const previusData = response ? JSON.parse(response) : [];

    const taskIsCompleted = previusData.map((taks: ITasks) => {
      if (taks.id === taskId) {
        return {
          ...taks,
          isCompleted: !taks.isCompleted,
        };
      }
      return taks;
    });

    await AsyncStorage.setItem(
      LOCAL_STORAGE_KEY,
      JSON.stringify(taskIsCompleted)
    );
    setTasks(taskIsCompleted);
  }

  async function handleRemoveTask(taskId: string) {
    try {
      const response = await AsyncStorage.getItem(LOCAL_STORAGE_KEY);
      const previusData = response ? JSON.parse(response) : [];

      const newTask = previusData.filter((task: ITasks) => task.id !== taskId);
      await AsyncStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newTask));

      Alert.alert("Remover", `Remover tarefa?`, [
        {
          text: "Sim",
          onPress: () => setTasks(newTask),
        },
        {
          text: "Não",
          style: "cancel",
        },
      ]);
    } catch (err) {
    } finally {
    }
  }

  async function getAllStorage() {
    const response = await AsyncStorage.getItem(LOCAL_STORAGE_KEY);
    const data = response ? JSON.parse(response) : [];
    setTasks(data);
  }

  useEffect(() => {
    getAllStorage();
  }, []);

  return {
    tasks,
    isLoading,
    setTasks,
    hanldeCreateNewTask,
    handleToggleTaskCompleted,
    handleRemoveTask,
  };
}
