async function chuckNorrisJoke() {
    try {
      const proxyUrl = 'https://cors.io/?';
      const apiUrl = 'https://api.chucknorris.io/jokes/random';
      const response = await fetch(proxyUrl + apiUrl);
  
      if (!response.ok) {
        throw new Error(`Network was not ok: ${response.status}`);
      }
  
      const contentType = response.headers.get('Content-Type');
      if (!contentType || !contentType.includes('application/json')) {
        throw new Error('Response is not in JSON format');
      }
  
      const data = await response.json();
      console.log(data.value);
    } catch (error) {
      console.error('Error:', error);
    }
  }
  
  chuckNorrisJoke();
  