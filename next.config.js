const nextConfig = {
  // 选择合适的属性进行配置
  experimental: {
    appDocumentPreloading: true,
  },
  // 配置静态 HTML 导出
  output: "export",
};

module.exports = nextConfig;
