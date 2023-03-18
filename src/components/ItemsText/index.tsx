import { ReactNode } from "react";
import {
    CreatedText,
    Content,
    RadiusItem,
    TextRadius,
    DoneText,
    ContainerTexts,
  } from "./styles";

interface ItemsTextProps {  
    taksLength: ReactNode;
    tasksCompleted: ReactNode;
}


export default function ItemsText({ taksLength, tasksCompleted }: ItemsTextProps) {
    return (
        <ContainerTexts>
            <Content>
          <CreatedText>
            Criadas
          </CreatedText>
            <RadiusItem>
              <TextRadius>{taksLength}</TextRadius>
            </RadiusItem>
            </Content>
            <Content>
          <DoneText>
            Concluidas
          </DoneText>
            <RadiusItem>
              <TextRadius>{tasksCompleted}</TextRadius>
            </RadiusItem>
            </Content>
        </ContainerTexts>
    )
}