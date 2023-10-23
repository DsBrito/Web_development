//template middleware pattern (chain of responsibility)

//req = request 
//res = response 
//next = next middleware (function)

const middleware1 = (req, res, next) => {
    req.value1 = 'middleware1';
    next();
}

const middleware2 = (req, res, next) => {
    req.value2 = ' middleware2';
    next();
}

const middleware3 = req => {
    req.value3 = ' middleware3';
}


const exec = (req, res, ...middlewares) => {
    const execMiddleware = index => {
        middlewares && index < middlewares.length &&
            middlewares[index](req, res, () => execMiddleware(index + 1));
    }
    execMiddleware(0);
}

const req = {};
exec(req, null, middleware1, middleware2, middleware3);
console.log(" - template middleware pattern - ");
console.log(req);