const os=require('os')

const user=os.userInfo()
console.log(user);

console.log(`OS uptime is: ${os.uptime()}`);

const details={
    type:os.type(),
    version:os.version(),
    release:os.release(),
    hostName:os.hostname()
}
console.log(details);