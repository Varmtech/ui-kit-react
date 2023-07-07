import { IAction } from '../../types';
export interface IThemeStore {
    theme?: string;
}
declare const _default: (state: IThemeStore | undefined, { type, payload }: IAction) => IThemeStore;
export default _default;
