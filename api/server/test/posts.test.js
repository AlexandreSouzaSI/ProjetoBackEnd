const axios = require('axios');
const { response } = require('express');

test('Should get posts', async function () {
    await axios({
        url: 'http://localhost:3000',
        method: 'get'
    });
    const posts = response.data;
    expect(posts).toHaveLength(3);
});