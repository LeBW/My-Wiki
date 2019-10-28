module.exports = {
  title: 'LBW\'s Wiki Pages',
  description: 'Organize all of my knowledge.',
  base: '/wiki/',
  head: [
    ['link', { rel: 'icon', href: `/lbw-wiki.png` }],
  ],
  themeConfig: {
    nav: require('./nav.js'),
    sidebar: {
      '/backend/tomcat/': getTomcatSidebar(),
      '/backend/database/': getDatabaseSidebar(),
      '/language/c/': getCSidebar(),
      '/frontend/': getFrontendSidebar(),
      '/linux/': getLinuxSidebar(),
      '/operating-system/': getOperatingSystemSidebar(),
      '/language/java/': getJavaSidebar(),
      '/kubernetes/': getKubernetesSidebar(),
      '/devops/': getDevOpsSidebar(),
    },
  },
}

function getTomcatSidebar() {
  return [
    'tomcat',
    'servlet',
    'jsp',
  ]
}

function getDatabaseSidebar() {
  return [
    'theory',
    'jdbc',
    'mysql',
    'mongo',
  ]
}

function getCSidebar() {
  return [
    'string-operation',
    'file-operation',
  ]
}

function getFrontendSidebar() {
  return [
    'http',
    'css',
    'javascript',
    'ajax',
  ]
}

function getLinuxSidebar() {
  return [
    'sed',
    'file-system',
  ]
}

function getOperatingSystemSidebar() {
  return [
    'process',
    'context-switch',
    'process-thread',
  ]
}

function getJavaSidebar() {
  return [
    'jvm',
    'memory-management',
    'garbage-collection',
  ]
}


function getKubernetesSidebar() {
  return [
    'create-cluster',
    'create-nfs',
    'storageclass-nfs',
  ]
}

function getDevOpsSidebar() {
  return [
    'DevOps之团队结构',
    'DevOps之代码管理',
    'jenkins-installation',
  ]
}