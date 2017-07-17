
var cloudinary = require('cloudinary');

cloudinary.config({
    cloud_name: 'beast',
    api_key: '389584927951777',
    api_secret: 'eXKrBXQi80GejEDQ6J2Rgh_wpaw'
});

module.exports.cloudinary = cloudinary;