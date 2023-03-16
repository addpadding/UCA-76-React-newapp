import React, { useState } from 'react'

function TestHComp({ x, y }) {

    // const [product, setProduct] = useState("laptop");

    // const changeValue = () => {
    //     setProduct("Mouse")
    // }


    const [products, setProducts] = useState([
        { id: 1, name: "laptop1" },
        { id: 2, name: "laptop2" }
    ]);

    const [vl, setvl] = useState("");

    const addOneitem = () => {
        setProducts([...products, { id: 3, name: "laptop3" }])
    }

    return (
        <div>

            <input type="text" onChange={(e) => setvl(e.target.value)} />
            {vl}
            <button onClick={addOneitem}>add Item</button>
            {products.map(product => <span key={product.id} > {product.name} </span>)}

            {/* <button onClick={() => setProduct("Mouse")}>change</button> */}
            {/* {product} */}
        </div>
    )
}

export default TestHComp
