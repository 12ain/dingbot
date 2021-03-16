const axios = require('axios');
const dayjs = require('dayjs');

module.exports = async () => {
  const now = new Date();
  if (now.getHours() < 8) {
    return;
  }
  await axios.post(`https://oapi.dingtalk.com/robot/send?access_token=${process.env.BOT_TOKEN}`, {
    msgtype: 'markdown',
    markdown: {
      title: '当前时间',
      text: `# 现在时间${dayjs().format('MM月DD日HH点mm分ss秒')}`
    }
  });
};
