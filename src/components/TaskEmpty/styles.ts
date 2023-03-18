import styled from 'styled-components/native';

export const EmptyContainer = styled.View`
    width: 100%;
    align-items: center;
    justify-content: center;
    border-top-width: 1px;
    border-top-color: ${({theme}) => theme.colors.base.gray400};
`;

export const ImageEmpty = styled.Image`
    margin-top: 48px;
`;

export const Title = styled.Text`
    font-size: ${({theme}) => theme.font_size.lg}px;
    color: ${({theme}) => theme.colors.base.gray300};
    font-family: ${({theme}) => theme.font_family.bold};
    margin-top: 16px;
  
`;
export const Subtitle = styled.Text`
    font-size: ${({theme}) => theme.font_size.md}px;
    color: ${({theme}) => theme.colors.base.gray300};
    font-family: ${({theme}) => theme.font_family.regular};
`;
