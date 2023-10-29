import { DummyModel, Dummy } from '../models/dummy.model'

export const getGreeting = async (name: string): Promise<string> => {
    const dummy = await DummyModel.findOne({ where: { name } })
    if (dummy) {
        console.log(dummy)
        return `Hello ${dummy.name} ${dummy.lastName}!`
    } else {
        console.log('Dummy not found')
        return `Hello ${name}!`
    }
}

export const getAll = async (): Promise<Dummy[]> => {
    const dummies = await DummyModel.findAll()
    return dummies
}
