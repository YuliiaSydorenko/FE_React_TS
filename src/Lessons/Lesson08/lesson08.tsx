import './styles.css';
import React from 'react';
import { BoxInfo, ContentContainer, Image, Text } from './styles';
import Image1 from '../../assets/avatar.jpg';
import Image2 from '../../assets/logo.jpg';

function Lesson08() {
  const textStyles = {
    color: "blue", 
    fontSize: "26px" 
  };

  return (
    <div className='lesson08-wrapper'>
      {/* 2  способ - Inline style(передача объекта стилей в атрибут style) */}
      <div style={{color: "blueviolet", fontSize: '24px'}}>Inline style example 2</div>
      <p style={textStyles}>Inline style example 2</p>
      <div style={textStyles}>Inline style example 3</div>
      {/* 3 способ - использование библиотеки emotion */}
      <BoxInfo primary>
        <ContentContainer>
          <Image src={Image1} alt="Example 1" />
          <Text>Emotion example 1</Text>
        </ContentContainer>
      </BoxInfo>
      <BoxInfo>
        <ContentContainer>
          <Image src={Image2} alt="Example 2" />
          <Text>Emotion example 1</Text>
        </ContentContainer>
      </BoxInfo>
      <BoxInfo>Emotion example 2</BoxInfo>
    </div>
  );
}

export default Lesson08;
