const containsOnlyDigits = (str) => {
    const regExp = /^\d+$/;
    return regExp.test(str);
}

console.log(containsOnlyDigits("12345"));
console.log(containsOnlyDigits("12a45")); 


const printEverySecond = () => {
    setInterval(() => {
        console.log("Прошла секунда");
    }, 1000);
}


printEverySecond();
const count = () => {
    let i = 1;
    const interval = setInterval(() => {
        console.log(i);
        if (i === 10) {
            clearInterval(interval);
        }
        i++;
    }, 1000);
}

count();



const xhr = new XMLHttpRequest();
xhr.open("GET", "https://jsonplaceholder.typicode.com/posts/1", true);
xhr.onreadystatechange = () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
        const response = JSON.parse(xhr.responseText);
        console.log(response);
    }
};
xhr.send();