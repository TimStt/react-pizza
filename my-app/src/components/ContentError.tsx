import React from 'react';

const ContentError: React.FC = () => {
  return (
    <section className="content__error">
      <h2>Произошла ошибка</h2>
      <p>
        Пиццы временно покинули чат 😓
        <br />
        Обязательно повторите попытку позже!
      </p>
    </section>
  );
};

export default ContentError;
