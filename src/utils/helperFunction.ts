export const FetchDownloadPDF = (urlData: string,) => {
    fetch(urlData, {
      method: 'GET',
      headers: {

      },
    })
      .then((response) => {
        if (response.ok) {
          if (response.headers.get('Content-Length') === '0') {
            console.error('Пустой ответ от сервера');
            return;
          }
          return response.blob(); // Получаем содержимое файла в виде блоба
        } else {
          console.error('Ошибка при загрузке файла:', response.statusText);
        }
      })
      .then((blob) => {
        if (blob) {
          const url = window.URL.createObjectURL(blob);
          const a = document.createElement('a');
          a.href = url;
          a.download = 'file.pdf';
          document.body.appendChild(a);
          a.click();
          window.URL.revokeObjectURL(url);
        }
      })
      .catch((error) => {
        console.error('Ошибка при загрузке файла:', error);
      });
  };
  
  export const FetchDownloadPortfolio = (urlData: string) => {
    fetch(urlData, {
      method: 'GET',
      headers: {
      },
    })
      .then((response) => {
        if (response.ok) {
          if (response.headers.get('Content-Length') === '0') {
            console.error('Пустой ответ от сервера');
            return;
          }
          return response.blob();
        } else {
          console.error('Ошибка при загрузке файла:', response.statusText);
        }
      })
      .then((blob) => {
        if (blob) {
          const url = window.URL.createObjectURL(blob);
          const a = document.createElement('a');
          a.href = url;
          a.download = 'file.doc';
          document.body.appendChild(a);
          a.click();
          window.URL.revokeObjectURL(url);
        }
      })
      .catch((error) => {
        console.error('Ошибка при загрузке файла:', error);
      });
  };
  
  