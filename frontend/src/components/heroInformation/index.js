import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import Field from "./field"
import Modal from "../modal/index.js"
import { HeroInfoContainer } from "./style"
import Select from "./select"
import { AddButton } from "../searchBar/style"
import { updateHValue } from "../../redux/slices/heroSlice"
import Api from "../../api"
import { FetchHeroes } from "../../redux/slices/heroesSlice"
import { toggleShow } from "../../redux/slices/showModal"
import { showResponse } from "../../redux/slices/showResponse"

const HeroInformation = () => {
    const dispatch = useDispatch()

    const hero = useSelector(state => state.hero.hero)
    const publishers = useSelector(state => state.getInfo.publishers)
    const genders = useSelector(state => state.getInfo.genders)
    const alignments = useSelector(state => state.getInfo.alignments)

    const [publisher, setPublisher] = useState()
    const [gender, setGender] = useState()
    const [alignment, setAlignment] = useState()
    const [isNew] = useState(hero.name === undefined)

    // update the status when hero gets updated
    useEffect(() => {
        if (hero) {
            if (hero.publisher && hero.publisher[0]) {
                setPublisher(hero.publisher[0])
            }
            if (hero.gender && hero.gender[0]) {
                setGender(hero.gender[0])
            } else {
                setGender()
            }

            if (hero.alignment && hero.alignment[0]) {
                setAlignment(hero.alignment[0])
            } else {
                setAlignment()
            }

        }
    }, [hero])

    // updates hero after publisher changes
    useEffect(() => {
        let auxHero = JSON.parse(JSON.stringify(hero));

        const updatePublisher = () => {
            auxHero.publisher_id = publisher.publisher_id
            auxHero.publisher = publisher
            dispatch(updateHValue(auxHero))
        }

        if (publisher) {
            if (isNew) {
                updatePublisher()
            } else if (publisher !== hero.publisher[0]) {
                updatePublisher()
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [publisher])

    // updates hero after gender changes
    useEffect(() => {
        let auxHero = JSON.parse(JSON.stringify(hero));

        const updateGender = () => {
            auxHero.gender_id = gender.gender_id
            auxHero.gender = [gender]
            dispatch(updateHValue(auxHero))
        }

        if (gender) {
            if (isNew) {
                updateGender()
            } else if (hero.gender && gender !== hero.gender[0]) {
                updateGender()
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [gender])

    // updates hero after aligment changes
    useEffect(() => {
        let auxHero = JSON.parse(JSON.stringify(hero));

        const updateAlignment = () => {
            auxHero.alignment_id = alignment.alignment_id
            auxHero.alignment = [alignment]
            dispatch(updateHValue(auxHero))
        }

        if (alignment) {
            if (isNew) {
                updateAlignment()
            } else if (hero.alignment && alignment !== hero.alignment[0]) {
                updateAlignment()
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [alignment])

    //save a new hero
    const handleSave = async () => {
        if (isNew) {
            let ans = await Api.newHero(hero)
            if (ans === 201) {
                dispatch(FetchHeroes())
                dispatch(toggleShow())
                dispatch(showResponse("Guardado"))
            }
        } else {
            let ans = await Api.updateHero(hero)
            if (ans === 200) {
                dispatch(FetchHeroes())
                dispatch(toggleShow())
                dispatch(showResponse("Actualizado"))
            }
        }
    }

    return (
        <Modal width="75" height="75" >
            <HeroInfoContainer>
                <h2>{hero.name}</h2>


                <Field
                    field={"ID"}
                    data={hero.hero_id}
                    id="hero_id"
                />
                <Field
                    field={"Nombre"}
                    data={hero.name}
                    id="name"
                />
                <Field
                    field={"Color de Ojos"}
                    data={hero.eye_color}
                    id="eye_color"
                />
                <Field
                    field={"Color de pelo"}
                    data={hero.hair_color}
                    id="hair_color"
                />
                <Field
                    field={"Color de Piel"}
                    data={hero.skin_color}
                    id="skin_color"
                />
                <Field
                    field={"Altura"}
                    data={hero.height}
                    id="height"
                />
                <Field
                    field={"Peso"}
                    data={hero.weight}
                    id="weight"
                />
                <Field
                    field={"Raza"}
                    data={hero.race}
                    id="race"
                />
                <Select
                    title={"Casa Publicadora " + (publisher ? "- " + publisher.publisher_name : "")}
                    radius
                    width="100%"
                    onChange
                >
                    {publishers.map((publisher, key) =>
                        <option
                            onClick={() => setPublisher(publisher)}
                            key={key}
                        >
                            {publisher.publisher_name}
                        </option>
                    )}

                </Select>

                <Select
                    title={"Género " + (gender ? "- " + gender.name : "")}
                    radius
                    width="100%"
                >
                    {genders.map((gender, key) =>
                        <option
                            onClick={() => setGender(gender)}
                            key={key}
                        >
                            {gender.name}
                        </option>
                    )}

                </Select>

                <Select
                    title={"Bando " + (alignment ? "- " + alignment.name : "")}
                    radius
                    width="100%"
                >
                    {alignments.map((alignment, key) =>
                        <option
                            onClick={() => setAlignment(alignment)}
                            key={key}
                        >
                            {alignment.name}
                        </option>
                    )}

                </Select>

                <AddButton onClick={handleSave}>Save</AddButton>

            </HeroInfoContainer>
        </Modal>
    )
}

export default HeroInformation