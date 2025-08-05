import React,{useState} from 'react'

const SteeperRevision = () => {
    const stepConfig = [
        {
            id: 1,
            key: "Contact Details",
            Component: () => <div>Add contact details for further communications.</div>,
            active: true
        },
        {
            id: 2,
            key: "Shipping Address",
            Component: () => <div>Add shipping address for successful delivery.</div>,
            active: false
        },
        {
            id: 3,
            key: "Payment",
            Component: () => <div>Complete Payment to complete the order.</div>,
            active: false
        },
        {
            id: 4,
            key: "Delivered",
            Component: () => <div>Ready to get delivered!</div>,
            active: false
        }
    ];
    const [active,setActive] = useState(1);

    return (
        <div style={{}}>
            <div>
                {stepConfig.map((item) => (<div></div>))}
            </div>
        </div>
    )
}

export default SteeperRevision