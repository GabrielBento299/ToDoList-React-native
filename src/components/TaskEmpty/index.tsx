import { EmptyContainer, ImageEmpty, Subtitle, Title } from "./styles";
import ClipboardImg from '../../assets/clipboard.png';

export default function TaskEmpty() {
    return (
        <EmptyContainer>
            <ImageEmpty source={ClipboardImg}  />
            <Title>Você ainda não tem tarefas cadastradas</Title>
            <Subtitle>Crie tarefas e organize seus itens a fazer</Subtitle>
        </EmptyContainer>
    )
}