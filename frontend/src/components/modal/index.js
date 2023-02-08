import { useDispatch} from "react-redux"
import { toggleShow } from "../../redux/slices/showModal"
import { BackModal, Modaldiv } from "./style"

const Modal = ({ children, width, height }) => {
    const dispatch = useDispatch()

    return (
        <BackModal onClick={ e => e.target === e.currentTarget && dispatch(toggleShow()) }>
            <Modaldiv  width={width} height={height}>
                {children}
            </Modaldiv>
        </BackModal>
    )
}

export default Modal