module.exports = {
  apps: [
    {
      name: 'GamaApp',
      port: 2095,
      exec_mode: 'cluster',
      instances: 'max', // Or a number of instances
      script: './.output/server/index.mjs',
      max_memory_restart: '500M'
    }
  ]
}
