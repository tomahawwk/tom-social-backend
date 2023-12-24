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
    "strapi-plugin-populate-deep": {
		config: {
			defaultDepth: 5,
		},
	},
	"netlify-deployments": {
		enabled: true,
		config: {
			accessToken: process.env.NETLIFY_DEPLOYMENTS_PLUGIN_ACCESS_TOKEN,
			sites: [
				{
				  name: 'tom-social',
				  id: "c423c160-5ff4-4874-a125-71dfbe0b751d",
				  branch: 'main'
				}
			  ]
		},
		
	},
    io: {
		enabled: true,
		config: {
			IOServerOptions: {
				cors: { origin: "http://localhost:3001", methods: ["GET", "POST"] },
			},
			contentTypes: {
				message: "*",
				chat: ["create"],
			},
			events: [
				{
					name: "connection",
					handler: ({ strapi }, socket) => {
						strapi.log.info(`[io] new connection with id ${socket.id}`);

						socket.on("client-message", async (messageData) => {
							strapi.$io.raw("server-message", messageData);
						});
					},
				},
			],
		},
	},
},
});