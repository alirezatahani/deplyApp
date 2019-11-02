const sh = require('shelljs');


async function commander(command) {
    try {
        execAsync(command);
    } catch (err) {
        console.error(err);
    }
}

function execAsync(cmd, opts={}) {
    return new Promise(function(resolve, reject) {
        // Execute the command, reject if we exit non-zero (i.e. error)
        sh.exec(cmd, opts, function(code, stdout, stderr) {
            if (code !== 0) return reject(new Error(stderr));
            console.log('Exit code:', code);
            console.log('Program output:', stdout);
            console.log('Program stderr:', stderr);
            return resolve(stdout);
        });
    });
}


module.exports = commander;