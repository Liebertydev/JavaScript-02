const Login = require('../models/LoginModel');

exports.index = (req, res, next) => {
    if(req.session.user) return res.render('login-logado');
    return res.render('login');
};

exports.register = async function (req, res, next) {
    try {
        const login = new Login(req.body);
        await login.register();
        if (login.errors.length > 0) {
            req.flash('errors', login.errors);
            req.session.save(function () {
                return res.redirect('index');
            });
            return;
        }

        req.flash('success', 'Seu usuário foi criado com sucesso.');
            req.session.save(function () {
                return res.redirect('index');
            });;
    } catch(e) {
        console.log(e);
        return res.render('404');
    }
    
};

exports.login = async function (req, res, next) {
    try {
        const login = new Login(req.body);
        await login.login();
        if (login.errors.length > 0) {
            req.flash('errors', login.errors);
            req.session.save(function () {
                return res.redirect('index');
            });
            return;
        }

        req.flash('success', 'Login realizado com sucesso.');
        req.session.user = login.user;
        req.session.save(function () {
            return res.redirect('index');
        });;
    } catch(e) {
        console.log(e);
        return res.render('404');
    }
    
};

exports.logout = function(req, res, next) {
    req.session.destroy(err => {
    if (err) {
        console.log(err);
        return res.redirect('/');
    }

    res.clearCookie('connect.sid');
    return res.redirect('/');
});
}


