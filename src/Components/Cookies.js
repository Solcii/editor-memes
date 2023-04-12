import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
const MySwal = withReactContent(Swal);

const Cookies = () => {
    MySwal.fire('Bienvendio, acepta las cookies por favor');
}

export default Cookies;
