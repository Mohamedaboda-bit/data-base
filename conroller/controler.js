const User = require('../module/user')

insert = function (req, res, next) {
    const user = new User({
        userName: req.body.userName,
        userEmail: req.body.userEmail,
    });

    user.save((error, resualt) => {
        if (error) {
            console.log(error);
            res.redirect('/')
            return;
        }
        console.log(resualt)
       res.redirect('/')
    })

}

getdata = function (req, res, next) {
    User.find({}, (error, resualt) => {
        if (error) {
            console.log(error)
            res.redirect('/');
        }
        console.log(resualt)
        res.render('index', { list: resualt })

    })
}

update = function (req, res, next) {
    const ID = req.body.id;
    const theNewData = {
        userName: req.body.userName,
        userEmail: req.body.userEmail
    }
    User.updateOne({ _id: ID }, { $set: theNewData }, (error, doc) => {
        if (error) {
            console.log(error);
            res.redirect("/");
            return;
        }
        console.log(doc);
        res.redirect('/getusers')

    })
}
deleteuser = function (req, res, next) {
        const ID = req.body.id;
        User.deleteOne({ _id: ID }, (error, doc) => {
            if (error) {
                console.log(error);
                res.redirect('/');
                return;
            }
            console.log(doc);
            res.redirect('/getusers')

        });
    }


module.exports = {
    insert: insert,
    getdata: getdata,
    update: update,
    deleteuser : deleteuser
}