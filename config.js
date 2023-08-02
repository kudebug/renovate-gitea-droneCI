module.exports = {
  platform: 'gitea',
  endpoint: 'EDIT-HERE-YOUR-GITEA-URL/api/v1/',
  gitAuthor: 'Renovate Bot <renovate@mail.com>',
  username: 'renovateBOT',
  autodiscover: true,
  onboardingConfig: {
    $schema: 'https://docs.renovatebot.com/renovate-schema.json',
    extends: ['config:base']
  },
  optimizeForDisabled: true,
  persistRepoData: true,
  repositories: [
    "EDIT YOUR REPO HERE"
  ]
}