import React from 'react';

function BoilnigVerdict(props) {
    if ( props.celsius >= 100){
        return <p>water would boil</p>
    }
    return <p>water would not boil</p>
}

export default BoilnigVerdict;