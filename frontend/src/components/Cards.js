import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Container = styled.div`
  display: flex;
  margin-bottom: 20px;
  flex-wrap: wrap; 
`;

const CardContainer = styled.div`
  background-color: #000000;
  color: #fff;
  width: 286px; 
  margin: 10px; 
`;

const Image = styled.img`
  width: 286px;
  height: 286px;
  cursor: pointer;
`;

const Content = styled.div`
  padding: 20px;
`;

const Title = styled.h2`
  margin-top: 0;
`;

const Text = styled.p`
  margin-bottom: 5px;
`;

const Cards = ({ device }) => {
  return (
    <Container>
      <CardContainer>
        <Link to={`/medidas/${device._id}`}>
          <Image src={device.image} alt="Imagem"/>
        </Link>
        <Content>
          <Title>{device.name}</Title>
          {device.measures && device.measures.map((measure, index) => (
            <div key={index}>
              <Text>Temperatura: {measure.temperature}</Text>
              <Text>Umidade: {measure.humidity}</Text>
              <Text>Índice de Calor: {measure.heatIndex}</Text>
            </div>
          ))}
          {!device.measures && (
            <div>
              <Text>Temperatura: </Text>
              <Text>Umidade: </Text>
              <Text>Índice de Calor: </Text>
            </div>
          )}
        </Content>
      </CardContainer>
    </Container>
  )
}

export default Cards
