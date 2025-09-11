export const withPersist = <T extends object>(slice: T) => ({ ...slice, _persist: { version: -1, rehydrated: true } });
