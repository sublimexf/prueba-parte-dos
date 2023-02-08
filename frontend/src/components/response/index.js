import Modal from "../modal"
import { ResponseContainer } from "./style"

const Response = ({ msm }) => {
    return (
        <Modal width={35} height={15}>
            <ResponseContainer>
            {msm}
            </ResponseContainer>
        </Modal>
    )
}

export default Response