import styled from 'styled-components/native';

export const TasksContainer = styled.View`
    width: 100%;
    height: 64px;
    border-radius: 8px;
    background-color: ${({theme}) => theme.colors.base.gray400};
    padding: 12px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 8px;
`;

export const ButtonActions = styled.View`
    flex-direction: row;
    gap: 11px;
    align-items: center;
`;

export const ButtonToggle = styled.TouchableOpacity`


`;

export const Image = styled.Image`
`;

export const TextTask = styled.Text`
    color: ${({theme}) => theme.colors.base.gray100};
    font-size: ${({theme}) => theme.font_size.md}px;
    max-width: 270px;
`;