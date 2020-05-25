declare var window: any;

export class DynamicEnvironment {
    public get variables(): IEnvironmentVariables {
        return window.config;
    }
}

export interface IEnvironmentVariables {
    baseApiUrl: string;
}