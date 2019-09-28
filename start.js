const { exec } = require('child_process')

exec('hexo server -p 80 & ',(err,stdout,stderr) => {
    if(err){
        console.error(err)
        return
    }
    if(stderr){
        console.error(stderr)
        return
    }
    console.log(`stdout: ${stdout}`);
})