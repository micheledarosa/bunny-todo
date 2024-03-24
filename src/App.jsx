import { useState } from "react";
import {
  Item,
  Bunny,
  Container,
  TodoList,
  Input,
  Button,
  List,
  ActionsContainer,
  ActionButton,
  FragmentContent,
  StyledReorderGroup,
  ReorderItem,
} from "./styles/styles";
import todoImage from "./assets/bunny.png";
import deleteImage from "./assets/delete.png";
import editImage from "./assets/edit.png";
import { toast } from "react-toastify";
import { Reorder } from "framer-motion";
import React from "react";

function App() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState("");

  function inputChange(event) {
    setInputValue(event.target.value);
  }

  function buttonClick() {
    if (inputValue.trim() !== "") {
      const newTask = {
        id: tasks.length.toString(),
        text: inputValue,
        completed: false,
      };
      setTasks([...tasks, newTask]);
      setInputValue("");
    } else {
      toast.error("Por favor, insira uma tarefa 📝", {
        autoClose: 3000,
      });
    }
  }

  function handleKeyDown(event) {
    if (event.key === "Enter") {
      buttonClick();
    }
  }

  function toggleTaskCompletion(id) {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          return { ...task, completed: !task.completed };
        }
        return task;
      })
    );
  }

  function handleDelete(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  return (
    <Container>
      <TodoList>
        <Bunny src={todoImage} alt="Lista de Tarefas" />
        <Input
          value={inputValue}
          type="text"
          placeholder="Digite a sua tarefa"
          onChange={inputChange}
          onKeyDown={handleKeyDown}
        />
        <Button type="button" onClick={buttonClick}>
          Adicionar tarefa
        </Button>

        <List>
          <StyledReorderGroup>
            <Reorder.Group
              axis="y"
              values={tasks.map((task) => task.id)}
              onReorder={(newOrder) =>
                setTasks(
                  newOrder.map((id) => tasks.find((task) => task.id === id))
                )
              }
            >
              {tasks.map((item) => (
                <React.Fragment key={item.id}>
                  <ReorderItem key={item.id} value={item.id}>
                    <FragmentContent>
                        <Item $completed={item.completed}>{item.text}</Item>
                        <ActionsContainer>
                          <ActionButton onClick={() => handleDelete(item.id)}>
                            <img src={deleteImage} alt="Delete" />
                          </ActionButton>
                          <ActionButton
                            onClick={() => toggleTaskCompletion(item.id)}
                          >
                            <img src={editImage} alt="Complete" />
                          </ActionButton>
                        </ActionsContainer>    
                    </FragmentContent>
                  </ReorderItem>
                </React.Fragment>
              ))}
            </Reorder.Group>
          </StyledReorderGroup>
        </List>
      </TodoList>
    </Container>
  );
}

export default App;