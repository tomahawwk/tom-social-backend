module.exports = ({ env }) => ({

    upload: {
        config:{
        provider: 'cloudinary',
        providerOptions: {
            cloud_name: env('CLOUDINARY_NAME', 'djjzu1xep'),
            api_key: env('CLOUDINARY_KEY', '366811672756136'),
            api_secret: env('CLOUDINARY_SECRET', 'rhVvZyHd0y01LbaQjsYFe16mO0A'),
          
        },
    },
},
});