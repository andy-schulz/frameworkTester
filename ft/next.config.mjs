/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        workerThreads: false,
        cpus: 1,
    },
    output: 'export',
    trailingSlash: true
};

export default nextConfig;

