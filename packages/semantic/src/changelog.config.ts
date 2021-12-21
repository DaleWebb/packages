import config from '@jeromefitz/git-cz/src/themes/gitmoji'

const commit = {
  ...config.commit,
  maxMessageLength: 75,
  questions: [
    'commitScopes',
    'commitTypes',
    'commitSubject',
    'commitBodyFlag',
    'commitBody',
  ],
  scopes: [],
}

const branch = {
  ...config.branch,
}

const changelog = { ...config, branch, commit }

export default changelog