import { useDispatch } from "react-redux"
import Api from "../../../api"
import { FetchHeroes } from "../../../redux/slices/heroesSlice"
import { setHero } from "../../../redux/slices/heroSlice"
import { toggleShow } from "../../../redux/slices/showModal"
import { showResponse } from "../../../redux/slices/showResponse"
import { DeleteIcon, EditIcon, Tr } from "./style"

const TableRow = ({ hero, heroComp }) => {
    const dispatch = useDispatch()

    return (
        <Tr>
            <td>{hero.name}</td>
            <td>{hero.publisher}</td>
            <td>{hero.gender}</td>
            <td>{hero.height}</td>
            <td>{hero.weight}</td>
            <td>
                <EditIcon onClick={() => {
                    dispatch(setHero(heroComp))
                    dispatch(toggleShow())
                }} />
                <DeleteIcon onClick={async () => {
                    const res = await Api.deleteHero(heroComp._id)
                    if (res === 200) {
                        dispatch(FetchHeroes())
                        dispatch(showResponse("Eliminado"))
                    }

                }} />
            </td>
        </Tr>
    )
}

export default TableRow