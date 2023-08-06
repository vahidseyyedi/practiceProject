fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(posts => {
        const postTitles = posts.map(post => post.title);
        const publicPosts = posts.filter(post => !post.private);
        console.log('عناوین پست‌ها:', postTitles);
        console.log('پست‌های عمومی:', publicPosts);
    })
    .catch(error => {
        console.error('خطا در دریافت پست‌ها:', error);
    });
