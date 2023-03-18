import styled from 'styled-components/native';


export const ContainerTexts = styled.View`
    align-items: center;
    flex-direction: row;
    margin-bottom: 21px;
    padding: 0 24px;
    justify-content: space-between;
`;

export const Content = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const CreatedText = styled.Text`
    color: ${({theme}) => theme.colors.brand.blue};
    font-size: ${({theme}) => theme.font_size.lg}px;
    font-family: ${({theme}) => theme.font_family.bold};
    margin-right: 16px;
`;

export const DoneText = styled.Text`
    color: ${({theme}) => theme.colors.brand.purpleDark};
    font-size: ${({theme}) => theme.font_size.lg}px;
    font-family: ${({theme}) => theme.font_family.bold};
    margin-right: 16px;
`;

export const RadiusItem = styled.View`
    width: 25px;
    height: 19px;
    border-radius: 999px;
    background-color: ${({theme}) => theme.colors.base.gray400};
    padding: 2px 8px 2px 8px;

`;

export const TextRadius = styled.Text`
    color: ${({theme}) => theme.colors.base.gray100};
    font-family: ${({theme}) => theme.font_family.bold};
    font-size: ${({theme}) => theme.font_size.sm}px;
    text-align: center;
`;