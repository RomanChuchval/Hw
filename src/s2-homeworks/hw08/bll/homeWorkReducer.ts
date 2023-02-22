import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name
            if (action.payload === 'up') {
                let copy = [...state]
                return copy.sort((a, b) => a.name.localeCompare(b.name))
                // [...state.sort((a, b) => a.name.localeCompare(b.name))]
            } else {
                let copy = [...state]
                return copy.sort((a, b) => b.name.localeCompare(a.name))
                // [...state.sort((a, b) => b.name.localeCompare(a.name))]
            }
        }
        case 'check': {
            return state.filter(el => el.age >= action.payload)
        }
        default:
            return state
    }
}
