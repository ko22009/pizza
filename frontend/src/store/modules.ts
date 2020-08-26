import {ModuleTree} from 'vuex'
import {RootState} from './'

const context = require.context('./modules', false, /\.ts$/)
const keys = context.keys()
export const modules: ModuleTree<RootState> = keys.reduce((c, v) => ({
    ...c,
    [v.toLocaleLowerCase().replace(/^\.\/([\w-_0-9]+)\.ts$/, '$1')]: {
        ...context(v).default,
        namespaced: true,
    },
}), {})
