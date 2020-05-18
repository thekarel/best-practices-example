export type Config = {
  graphUrl: string
}

const mandatoryKeys = ['graphUrl']

export const getEnvConfigOrThrow = (): Config => {
  const config: Record<string, string> = {
    graphUrl: process.env.graphUrl as string,
  }

  const missingConfig = mandatoryKeys
    .map((key) => (typeof config[key] === 'undefined' ? key : null))
    .filter((v) => v !== null)

  if (missingConfig.length) {
    throw new Error(`Missing configuration in environment: ${missingConfig.join(', ')}`)
  }

  return config as Config
}
