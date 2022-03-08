var ghpages = require('gh-pages');

ghpages.publish(
    'public', // path to public directory
    {
        branch: 'gh-pages',
        repo: 'https://github.com/milindsahoo329/vissample.git', // Update to point to your repository  
        user: {
            name: 'Milind Sahoo', // update to use your name
            email: 'milindsahoo329@gmail.com' // Update to use your email
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)