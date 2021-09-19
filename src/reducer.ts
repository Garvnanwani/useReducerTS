interface State {
    count: number,
    name: string
}

type Action = "increase" | "decrease"

export const reducer = (state: State, action: Action): State => {
    if (action === "increase") {
        return {
            count: state.count + 1,
            name: "garv"
        }
    }
    if (action === "decrease") {
        return {
            count: state.count - 1,
            name: "naaz"
        }
    }
    return state
}
