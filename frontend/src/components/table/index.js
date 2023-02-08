import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { FetchHeroes } from "../../redux/slices/heroesSlice";
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
                    { heroesState !== undefined && heroesState.map((hero, key) =>{
                        let auxhero = {
                            name: hero.name,
                            publisher: hero.publisher[0].publisher_name,
                            gender: hero.gender[0] ? hero.gender[0].name : "-",
                            height: hero.height,
                            weight: hero.weight
                        }
                        return ( <TableRow hero={auxhero} key={key} heroComp={hero} /> )
                    }
                    )}
                </tbody>
            </table>
        </TableContainer>
    )
}

export default Table;