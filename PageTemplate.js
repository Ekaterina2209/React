import React from 'react';
import Navigation from './Navigation';
import Container from './Container';
import Button from './Button';

function PageTemplate() {
  return (
    <div>
      <Navigation />
      <Container>
        <h1>Привет, мир!</h1>
        <Button onClick={() => alert('Кнопка была нажата')} text="Нажми меня" />
      </Container>
    </div>
  );
}

export default PageTemplate;
