import React, { Component } from 'react';
import Styled from 'styled-components';

interface ContainerProps {
  readonly backgroundColor: string;
  readonly hoverColor: string;
}

const Container = Styled.div<ContainerProps>`
  text-align: center;
  background-color: ${(props) => props.backgroundColor};
  padding: 10px 20px;
  border-radius: 8px;
  cursor: pointer;
  &:hover {
    background-color: ${(props) => props.hoverColor};
  }
  &:active {
    box-shadow: inset 5px 5px 10px rgba(0, 0, 0, 0.2);
  }
`;

const Label = Styled.div`
  color: #FFFFFF;
  font-size: 16px;
`;

interface Props {
  readonly label: string;
  readonly backgroundColor?: string;
  readonly hoverColor?: string;
  readonly onClick?: () => void;
}

// export const Button = ({
//   label,
//   backgroundColor = '#304FFE',
//   hoverColor = '#1E40FF',
//   onClick,
// }: Props) => {
//   return (
//     <Container backgroundColor={backgroundColor} hoverColor={hoverColor} onClick={onClick}>
//       <Label>{label}</Label>
//     </Container>
//   );
// };

export class Button extends Component<Props>{ //타입스크립트를 사용하는 경우 부모 컴포넌트로부터 전달받을props와 컴포넌트안에서 사용할  state 타입을 미리 지정할필요가있다.<Props, State>
    //<Props>인터페이스만 정의
    render(){ //클래스 컴포넌트는 화면에 컴포넌트를 표시하가위해 render()함수 사용
        const {
            label,
            backgroundColor = '#304FFE',
            hoverColor = '#1E40FF',
            onClick,
        } = this.props;
        return( //화면에 표시되는 부분을 반환
            <Container backgroundColor={backgroundColor} hoverColor={hoverColor} onClick={onClick}>
                <Label>{label}</Label>
            </Container>
        )    
    }
}
