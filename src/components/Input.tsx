
type props = {
    name: string
    unit: string
    onRead(value: number): void
}

export const Input = ({ name, onRead, unit }: props) => {
    let value = 0

    return (
        <>
            <label>{name}:</label> &nbsp;
            <input type="number" min="0" onChange={e => {
                Number(e.target.value) >= 0
                ? value = Number(e.target.value)
                : value = 0;
                onRead(value);
                console.log(e.target.value)
            }} /> &nbsp;{unit} <br /> <br />

        </>
    )
}