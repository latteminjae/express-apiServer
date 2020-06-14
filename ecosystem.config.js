module.exports = {
	apps: [
		{
			name: 'apiNode',
			script: './build/index.js',
			instances: 0,
			exec_mode: 'cluster',
			wait_ready: true,
			listen_timeout: 500000,
		},
	],
};
