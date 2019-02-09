const chalk = require('chalk');
const ip = require('ip');
const createDebugger = require('debug');

const divider = chalk.gray('\n-----------------------------------');
const ok = chalk.bgGreen;
const log = createDebugger('> SINTRIGA:servidor');

log.enabled = true;

const logger = {
  error: err => {
    console.error(chalk.red(err));
  },

  msj: msj => {
    log(msj);
  },

  appStarted: (port, host, isBeta) => {
    log(`El servidor esta trabajando! ${chalk.green('✓✓✓')}`);

    if (isBeta) {
      log(ok('----------------------------------------'));
      log(ok('---            BETA                  ---'));
      log(ok('----------------------------------------'));
      log(ok('---         _,met$$$$$gg.            ---'));
      log(ok('---      ,g$$$$$$$$$$$$$$$P.         ---'));
      log(ok('---     ,g$$P"     """Y$$.".         ---'));
      log(ok('---   ,$$P`              `$$$.       ---'));
      log(ok('---  `,$$P       ,ggs.     `$$b:     ---'));
      log(ok('---  `d$$`      ,$P`   .    $$$      ---'));
      log(ok('---   $$P      d$`     ,    $$P      ---'));
      log(ok('---   $$:      $$.   -     ,d$$      ---'));
      log(ok('---   $$;       Y$b._   _,d$P`       ---'));
      log(ok('---   Y$$.      `.`"Y$$$$P"`         ---'));
      log(ok('---   `$$b       "-.__               ---'));
      log(ok('---    `Y$$                          ---'));
      log(ok('---     `Y$$.           Desarrollo   ---'));
      log(ok('---       `$$b.           Web        ---'));
      log(ok('---         `Y$$b.`        NodeJS    ---'));
      log(ok('---            `"Y$b._      Quito    ---'));
      log(ok('---                `"""      Ecuador ---'));
      log(ok('----------------------------------------\n'));
    }
    log(`
      Sistema Operativo ${process.platform}${divider}
      ${chalk.bold('Accesos WEB')}
      :::Localhost: ${chalk.magenta(`${host}`)}
            :::LAN: ${chalk.magenta(`http://${ip.address()}:${port}`)}${divider}
      ${chalk.blue(`Presione ${chalk.italic('CTRL-C')} para detener.`)}
    `);
  }
};

module.exports = logger;
