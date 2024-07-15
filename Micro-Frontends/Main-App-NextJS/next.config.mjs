import { NextFederationPlugin } from '@module-federation/nextjs-mf';

const remotes = isServer => {
    const location = isServer ? 'ssr' : 'chunks'; // Server side rendering , 
    return {
counterApp: `counterApp@http://localhost:3001/_next/static/${location}/remoteEntry.js`,
loginApp:`loginApp@http://localhost:3003/_next/static/${location}/remoteEntry.js`,
    };
};

console.log('remotes: ',remotes)
const nextConfig = {
    webpack(config, { isServer }) {


        config.plugins.push(
            new NextFederationPlugin({
name: 'main-app',
                filename: 'static/chunks/remoteEntry.js',
                remotes: remotes(isServer),
                force:true, 
                shared: {
                  
// Add shared modules here if needed
                },
                extraOptions: {
                    exposePages: true,
                },
            })
        );
        return config;
    },
};

export default nextConfig;
