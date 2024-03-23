// Sintaxe JSX
import { useState } from 'react';
import { Item, Bunny, Container, TodoList, Input, Button, List } from './styles';
import todoImage from './assets/bunny.png';
import { toast } from 'react-toastify';

function App() { 
    const [tasks, setTasks] = useState([])
    const [inputValue, setInputValue] = useState('')

    function inputChange(event) {
        setInputValue(event.target.value)     
    }

    function buttonClick() {
        if (inputValue.trim() !== '') {
            setTasks([...tasks, inputValue]);
        } else {
            toast.error('Por favor, insira uma tarefa 📝', {
                autoClose: 3000,
            });
        }
    }

    function handleKeyDown(event) {
        if (event.key === "Enter") {
            buttonClick();
        }
    }

    return (
        <Container>
            <TodoList>
                <Bunny src={todoImage} alt="Lista de Tarefas" />
                <Input type="text" placeholder="Digite a sua tarefa" onChange={inputChange} onKeyDown={handleKeyDown} />
                <Button type="button" onClick={buttonClick}>Adicionar tarefa</Button>

                <List>
                    {
                        tasks.map((item, index) => (
                            <Item key={index}>{item}</Item>
                        ))
                    }
                </List>
            </TodoList>
        </Container> 
    )
}

export default App