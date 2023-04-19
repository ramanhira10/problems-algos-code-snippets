/**
 * Macro Task: setTimeout
 * 
 * Micro Task: .then()
 * 
 * task: console.log
 * 
 * first it execute the tasks then micro tasks and then look and execute the macro tasks
 */


setTimeout(() => console.log('Timeout'));

Promise.resolve().then(() => console.log('Promise resolved'));

console.log('code execution finished')

