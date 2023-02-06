import { DeleteIcon, EditIcon, Tr } from "./style"

const TableRow = ({ hero }) => {
    return (
        <Tr>
            <td>{hero.name}</td>
            <td>{hero.publisher}</td>
            <td>{hero.gender}</td>
            <td>{hero.height}</td>
            <td>{hero.weight}</td>
            <td>
                <EditIcon onClick={() => alert("a")} />
                <DeleteIcon />
            </td>
        </Tr>
    )
}

export default TableRow