import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { FetchHeroes } from "../../redux/heroesSlice";
import { TableContainer, Th } from "./style";
import TableRow from "./tableRow";

const Table = () => {
    const dispatch = useDispatch();
    const heroesState = useSelector(state => state.heroes.heroes)

    useEffect(() => {
        const promise = dispatch(FetchHeroes())
        return () => promise
    }, [dispatch])

    const tableHeader = [
        "Nombre",
        "Casa Publicadora",
        "Género",
        "Altura",
        "Peso",
        "Editar / Eliminar"
    ]

    return (
        <TableContainer>
            <table>
                <thead>
                    <tr>
                        {tableHeader.map((header, key) =>
                            <Th key={key}>{header}</Th>
                        )}
                    </tr>
                </thead>
                <tbody>
                    {heroesState.map((hero, key) =>
                        <TableRow hero={hero} key={key} />
                    )}
                </tbody>
            </table>
        </TableContainer>
    )
}

export default Table;