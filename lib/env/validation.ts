type EnvironmentValues = Record<string, string | undefined>;

type RequiredEnvironmentValues<T extends EnvironmentValues> = Readonly<{
  [Key in keyof T]: string;
}>;

export class EnvironmentConfigurationError extends Error {
  constructor(scope: string, variableNames: readonly string[], reason: string) {
    super(
      `Configuration ${scope} invalide (${reason}) : ${variableNames.join(", ")}.`,
    );
    this.name = "EnvironmentConfigurationError";
  }
}

export function requireEnvironmentVariables<T extends EnvironmentValues>(
  scope: string,
  values: T,
): RequiredEnvironmentValues<T> {
  const missingVariableNames = Object.entries(values)
    .filter(([, value]) => value === undefined || value.trim() === "")
    .map(([name]) => name);

  if (missingVariableNames.length > 0) {
    throw new EnvironmentConfigurationError(
      scope,
      missingVariableNames,
      "variable absente ou vide",
    );
  }

  return values as RequiredEnvironmentValues<T>;
}

export function parseEnvironmentUrl(name: string, value: string): URL {
  try {
    return new URL(value);
  } catch {
    throw new EnvironmentConfigurationError(
      "de l’application",
      [name],
      "URL invalide",
    );
  }
}
