const link = prompt('Enter a link:');

fetch(link)
    .then(response => {
        if (response.redirected) {
            console.log(`The final redirected page link is: ${response.url}`);
        } else {
            console.log('Not redirecting');
        }
    });