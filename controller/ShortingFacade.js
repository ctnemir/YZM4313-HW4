const mongoose = require('mongoose');
const Urls = require("../models/Url");

class ShortingFacade {
    constructor(){}
    createUrl (longUrl,hash){
        Urls.create({
            orginalUrl:longUrl,
            hash: hash,
        })
    }
    findHash (hash){
        return Urls.findOne({hash});
    }
}

exports.ShortingFacade = ShortingFacade;
