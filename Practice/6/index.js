function fetchContents(urls) {
    const promises = urls.map(url => fetch(url).then(response => response.text()));
    return Promise.all(promises);
  }
  
  async function logContents() {
    const urls = [
      'https://example.com/url1',
      'https://example.com/url2',
      'https://example.com/url3'
    ];
  
    try {
      const contents = await fetchContents(urls);
      console.log('محتوای هر URL:', contents);
    } catch (error) {
      console.error('خطا در دریافت محتوا:', error);
    }
  }
  
  logContents();