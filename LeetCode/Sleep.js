/**
 * @param {number} millis
 * @return {Promise}
 */

//** declares an asynchronous function named "sleep" that takes a single parameter, "millis" */
async function sleep(millis) {

    //** the await statement is used to hold off on executing the function until the Promise is resolved. The setTImeout function with a delay of "milis" (miliseconds), so when the timeout is complete, the Promise will be resolved. */
    await new Promise(resolve => setTimeout(resolve, millis));
}
/** 
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */