let promise = new Promise(function(resolve, reject) {
    setTimeout(() => resolve('Promise is da best'), 5000);
});
//cach1:
promise.then(
    result => alert(result),
    error => alert(error)
);
//cach2:
promise.then(alert);
//
async function alertMessage(Promise) {
    const result = await promise;
    alert(result);
};
alertMessage(promise);