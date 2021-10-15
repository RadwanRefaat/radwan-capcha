import {
    PythonShell
} from "python-shell";
import axios from "axios";


const register = async () => {
    const headers = {
        'Content-Type': 'application/json'
    };
    let options = {
        args: ["us.proxiware.com:2002"],
    }
    PythonShell.run('bypass.py', options, async (err, [, captchaKey]) => {
        console.log(captchaKey)
        let {data: {token}} = await axios.post('https://discord.com/api/v9/auth/register', {
            username:'Radwan.',
            invite:'null',
            consent: true,
            captcha_key: captchaKey,
        }, {headers})
        console.log(token)
    })
}

register()