import {RotatingLines} from 'react-loader-spinner';

const style = {
    display: 'flex',
    justifyContent: 'center',
    padding: '100px',
};

export const Preloader = () => (
    <div style={style}>
        <RotatingLines width={90} strokeColor="#8a8a8a" />
    </div>
)