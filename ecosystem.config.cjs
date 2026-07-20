// PM2 production process manager config for WPA Web (public site, Next.js).
// package.json's `start` script hardcodes -p 4011 (its own dev-convenience
// default) — overridden here to production port 3100 via explicit args,
// same pattern as wpa-admin/ecosystem.config.cjs. Env vars come from
// .env.production.local symlink (-> /srv/config/wpa-web/.env.production).
//
// Usage:
//   pm2 start ecosystem.config.cjs
//   pm2 logs wpa-web
//   pm2 reload wpa-web

module.exports = {
  apps: [
    {
      name: 'wpa-web',
      script: 'node_modules/next/dist/bin/next',
      args: 'start -p 3100',
      cwd: __dirname,
      instances: 1,
      exec_mode: 'fork',
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        NEXT_TELEMETRY_DISABLED: '1',
      },
      out_file: './logs/wpa-web.out.log',
      error_file: './logs/wpa-web.error.log',
      merge_logs: true,
      time: true,
    },
  ],
};
