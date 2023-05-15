const nextConfig = {
    // 有效的属性列表中选择合适的属性进行配置
    experimental: {
      appDocumentPreloading: true,
    },
    // 配置静态 HTML 导出
    output: {
      exportPathMap: async function () {
        return {
          '/': { page: '/' },
        };
      },
    },
  };
  
  module.exports = nextConfig;
  