import defaultSettings from '@/settings'

const title = defaultSettings.title || '通用web管理'

export default function getPageTitle(pageTitle) {
  if (pageTitle) {
    return `${pageTitle} - ${title}`
  }
  return `${title}`
}
