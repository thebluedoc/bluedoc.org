const localeData = [
  ...require('react-intl/locale-data/en'),
  ...require('react-intl/locale-data/zh'),
  // ...require('react-intl/locale-data/ko'),
]

module.exports = {
  localeData,
  languages: [
    { value: 'en', text: 'English' },
    { value: 'zh', text: '简体中文' },
    // { value: 'de', text: 'Deutsch' },
  ],
}
