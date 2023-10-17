

const jsonData = {
    key1: 'value1',
    key2: 'value2',
  };
  
  const promise = new Promise((resolve, reject) => {
    
    setTimeout(() => {
      if (Math.random() < 0.5) {
        resolve(JSON.stringify(jsonData)); 
      } else {
        reject(new Error('Произошла ошибка'));
      }
    }, 2000);
  });
  
  promise
    .then((jsonString) => {
      console.log('Данные успешно загружены:');
      const jsonObject = JSON.parse(jsonString);
      console.log(jsonObject);
    })
    .catch((error) => {
      console.error('Произошла ошибка:', error.message);
    })
    .finally(() => {
      console.log('Завершение загрузки');
    });
  