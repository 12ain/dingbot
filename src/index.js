const { CronJob } = require('cron');
const auto = require('./auto');

const job = (cron, fn, complete = null) => new CronJob(cron, fn, complete, true, 'Asia/Shanghai', null, true);

// 每隔1小时执行一次, 汇报心跳
job('1 1 */1 * * *', auto);
