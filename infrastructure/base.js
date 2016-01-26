var baseConfig = {
  region: 'us',
  maintenance: false,
  stack: 'cedar-14',
  config_vars:
   { 
      },
  addons:
   { mongolab: { plan: 'mongolab:sandbox' },
   papertrail: { plan: 'papertrail:choklad' }
    },
  collaborators:
   [ 'zakrzew75@gmail.com',
     'kacper.dabrowski@schibsted.pl',
     'tomasz.zakrzewski@schibsted.pl',
     'mateusz.fiolka@gmail.com'],
  features:
   { 'runtime-dyno-metadata': { enabled: false },
     'log-runtime-metrics': { enabled: false },
     'http-session-affinity': { enabled: false },
     preboot: { enabled: false },
     'http-shard-header': { enabled: false },
     'http-end-to-end-continue': { enabled: false } },
  formation: [ { process: 'web', quantity: 1, size: 'Free' } ]
 
	
};

module.exports = baseConfig;